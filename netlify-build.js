#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Netlify deployment...');

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
  
  // Copy assets
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
    
    // Read HTML and inline CSS
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove CSS links and inline CSS
    htmlContent = htmlContent.replace(/<link[^>]*href="[^"]*\.css"[^>]*>/g, '');
    
    const headCloseIndex = htmlContent.indexOf('</head>');
    const inlineCSS = `<style>${cssContent}</style>`;
    htmlContent = htmlContent.slice(0, headCloseIndex) + inlineCSS + htmlContent.slice(headCloseIndex);
    
    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`✅ Created self-contained HTML (${Math.round(fs.statSync(htmlPath).size / 1024)}KB)`);
  }
  
  // Create Netlify _redirects file for SPA routing
  const redirectsContent = `# Netlify redirects for React SPA
/*    /index.html   200`;
  
  fs.writeFileSync(path.join(buildDir, '_redirects'), redirectsContent);
  console.log('✅ Created _redirects file for SPA routing');
  
  // Create netlify.toml for additional configuration
  const netlifyConfig = `[build]
  publish = "dist/public"
  command = "node netlify-build.js"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"`;
  
  fs.writeFileSync(path.join(process.cwd(), 'netlify.toml'), netlifyConfig);
  console.log('✅ Created netlify.toml configuration');
  
  console.log('🎉 Netlify build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}