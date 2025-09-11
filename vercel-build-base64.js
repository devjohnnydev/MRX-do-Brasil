#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building with base64 images for guaranteed loading...');

try {
  // Build frontend
  console.log('📦 Building frontend...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  const buildDir = path.join(process.cwd(), 'dist/public');
  const assetsDir = path.join(buildDir, 'assets');
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  
  // Copy assets normally first
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    const files = fs.readdirSync(srcAssets);
    
    files.forEach(file => {
      if (!file.startsWith('.') && fs.lstatSync(path.join(srcAssets, file)).isFile()) {
        fs.copyFileSync(path.join(srcAssets, file), path.join(buildDir, file));
        fs.copyFileSync(path.join(srcAssets, file), path.join(assetsDir, file));
      }
    });
  }
  
  // Convert key images to base64
  const keyImages = ['fundo_site_1756381259667.png', 'logo_1756381267147.png'];
  const base64Images = {};
  
  keyImages.forEach(img => {
    const imgPath = path.join(srcAssets, img);
    if (fs.existsSync(imgPath)) {
      const buffer = fs.readFileSync(imgPath);
      const ext = path.extname(img).substring(1);
      const mimeType = ext === 'png' ? 'image/png' : `image/${ext}`;
      base64Images[img] = `data:${mimeType};base64,${buffer.toString('base64')}`;
      console.log(`📷 Converted ${img} to base64 (${Math.round(buffer.length/1024)}KB)`);
    }
  });
  
  // Process CSS and HTML
  const htmlPath = path.join(buildDir, 'index.html');
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  
  if (cssFiles.length > 0) {
    const cssFile = cssFiles[0];
    let cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
    
    // Replace image paths with base64 data
    Object.entries(base64Images).forEach(([filename, base64]) => {
      const patterns = [
        new RegExp(`url\\(/assets/${filename}\\)`, 'g'),
        new RegExp(`url\\("\/assets\/${filename}"\\)`, 'g'), 
        new RegExp(`url\\('\/assets\/${filename}'\\)`, 'g'),
        new RegExp(`url\\(/${filename}\\)`, 'g'),
        new RegExp(`url\\("\/${filename}"\\)`, 'g'),
        new RegExp(`url\\('\/${filename}'\\)`, 'g')
      ];
      
      patterns.forEach(pattern => {
        cssContent = cssContent.replace(pattern, `url(${base64})`);
      });
    });
    
    console.log('🎨 Replaced image URLs with base64 data');
    
    // Read HTML and inline CSS
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove all CSS links and script tags, add inline CSS and JS
    htmlContent = htmlContent.replace(/<link[^>]*href="[^"]*\.css"[^>]*>/g, '');
    
    // Find JS file and inline it too
    const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
    let jsContent = '';
    if (jsFiles.length > 0) {
      jsContent = fs.readFileSync(path.join(assetsDir, jsFiles[0]), 'utf8');
      htmlContent = htmlContent.replace(/<script[^>]*src="[^"]*\.js"[^>]*><\/script>/g, '');
    }
    
    // Insert everything inline in the head
    const headCloseIndex = htmlContent.indexOf('</head>');
    const inlineContent = `
    <style>
    ${cssContent}
    </style>
    ${jsContent ? `<script type="module">${jsContent}</script>` : ''}
    `;
    
    htmlContent = htmlContent.slice(0, headCloseIndex) + inlineContent + htmlContent.slice(headCloseIndex);
    
    // Write final HTML
    fs.writeFileSync(htmlPath, htmlContent);
    
    console.log(`✅ Created fully self-contained HTML (${Math.round(fs.statSync(htmlPath).size / 1024)}KB)`);
  }
  
  console.log('🎉 Base64 build completed - everything embedded!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}