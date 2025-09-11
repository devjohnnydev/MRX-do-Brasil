#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Vercel deployment...');

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
  
  // Copy attached_assets directly to build output
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
          // Copy to root for direct access paths like /fundo_site.png
          fs.copyFileSync(srcFile, rootDestFile);
          console.log(`✅ Copied ${file}`);
        }
      }
    });
  }
  
  // Inline CSS directly into HTML for guaranteed loading
  const htmlPath = path.join(buildDir, 'index.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Find CSS file
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    const cssFile = cssFiles[0];
    const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
    
    // Replace CSS link with inline style
    const cssLinkRegex = /<link[^>]*href="[^"]*\.css"[^>]*>/g;
    htmlContent = htmlContent.replace(cssLinkRegex, `<style>${cssContent}</style>`);
    
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('✅ Inlined CSS for guaranteed loading');
  }
  
  console.log('✅ Vercel build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}