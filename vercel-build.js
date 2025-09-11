#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Vercel deployment...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build only the frontend for static deployment
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --config vite.config.production.ts --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy attached_assets to multiple locations for Vercel compatibility
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const destAssets = path.join(process.cwd(), 'dist/public/assets');
  const destAssetsRoot = path.join(process.cwd(), 'dist/public');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    // Ensure assets directory exists
    fs.mkdirSync(destAssets, { recursive: true });
    
    // Copy all files from attached_assets to both assets folder and root
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      if (!file.startsWith('.')) { // Skip hidden files
        const srcFile = path.join(srcAssets, file);
        const destFile = path.join(destAssets, file);
        const rootDestFile = path.join(destAssetsRoot, file);
        
        if (fs.lstatSync(srcFile).isFile()) {
          // Copy to assets folder
          fs.copyFileSync(srcFile, destFile);
          // Also copy to root for direct access
          fs.copyFileSync(srcFile, rootDestFile);
          console.log(`✅ Copied ${file} to both locations`);
        }
      }
    });
  }
  
  // Create _redirects file for SPA routing
  const redirectsContent = '/*    /index.html   200';
  fs.writeFileSync(path.join(process.cwd(), 'dist/public/_redirects'), redirectsContent);
  
  console.log('✅ Vercel build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}