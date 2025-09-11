#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Vercel with image path fixes...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build the frontend with Vite
  console.log('📦 Building frontend...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy attached_assets to multiple locations
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const buildDir = path.join(process.cwd(), 'dist/public');
  const assetsDir = path.join(buildDir, 'assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      if (!file.startsWith('.')) {
        const srcFile = path.join(srcAssets, file);
        const assetsDestFile = path.join(assetsDir, file);
        const rootDestFile = path.join(buildDir, file);
        
        if (fs.lstatSync(srcFile).isFile()) {
          // Copy to assets folder
          fs.copyFileSync(srcFile, assetsDestFile);
          // Copy to root for direct access
          fs.copyFileSync(srcFile, rootDestFile);
          console.log(`✅ Copied ${file}`);
        }
      }
    });
  }
  
  // Fix CSS and inline it
  const htmlPath = path.join(buildDir, 'index.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Find CSS file
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    const cssFile = cssFiles[0];
    let cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
    
    // Fix image paths in CSS - make them absolute paths that work in Vercel
    cssContent = cssContent.replace(/url\(\/assets\//g, 'url(/');
    cssContent = cssContent.replace(/url\("\/assets\//g, 'url("/');
    cssContent = cssContent.replace(/url\('\/assets\//g, 'url(\'/');
    
    // Also try relative paths as fallback
    cssContent = cssContent.replace(/url\(\/([^)]+\.(png|jpg|jpeg|gif|svg))\)/g, 'url(./$1)');
    
    console.log('🔧 Fixed image paths in CSS');
    
    // Replace CSS link with inline style
    const cssLinkRegex = /<link[^>]*href="[^"]*\.css"[^>]*>/g;
    htmlContent = htmlContent.replace(cssLinkRegex, `<style>${cssContent}</style>`);
    
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('✅ Inlined CSS with fixed paths');
  }
  
  // Create a test HTML file to verify paths work
  const testHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Asset Test</title>
  <style>
    body { background: url('./fundo_site_1756381259667.png') no-repeat center; }
    .test { width: 100px; height: 100px; background: url('/fundo_site_1756381259667.png'); }
  </style>
</head>
<body>
  <h1>Asset Test Page</h1>
  <div class="test"></div>
  <img src="./logo_1756381267147.png" alt="Logo test" />
  <img src="/logo_1756381267147.png" alt="Logo test absolute" />
</body>
</html>`;
  
  fs.writeFileSync(path.join(buildDir, 'test.html'), testHtml);
  console.log('📄 Created test page for asset verification');
  
  console.log('✅ Vercel build with fixes completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}