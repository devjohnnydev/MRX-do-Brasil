#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting Render deployment build...');

try {
  // Run the standard build
  console.log('📦 Building application...');
  execSync('vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

  // Copy attached_assets to dist/public/assets for production
  const srcAssets = path.join(__dirname, 'attached_assets');
  const destAssets = path.join(__dirname, 'dist/public/assets');

  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets for Render deployment...');
    
    // Ensure assets directory exists
    fs.mkdirSync(destAssets, { recursive: true });
    
    // Copy only safe image and media files from attached_assets
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico'];
    const files = fs.readdirSync(srcAssets);
    
    files.forEach(file => {
      if (!file.startsWith('.')) { // Skip hidden files
        const ext = path.extname(file).toLowerCase();
        
        if (allowedExtensions.includes(ext)) {
          const srcFile = path.join(srcAssets, file);
          const destFile = path.join(destAssets, file);
          
          if (fs.lstatSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
            console.log(`✅ Copied ${file} to assets/`);
          }
        } else {
          console.log(`⚠️  Skipped ${file} - file type not allowed for security`);
        }
      }
    });
    
    console.log('✨ Assets copied successfully for Render!');
  } else {
    console.log('⚠️  No attached_assets directory found');
  }

  console.log('🎉 Render build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}