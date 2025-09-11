#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Ultimate Vercel build with guaranteed asset loading...');

try {
  // Build the frontend
  console.log('📦 Building frontend...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  const buildDir = path.join(process.cwd(), 'dist/public');
  const assetsDir = path.join(buildDir, 'assets');
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  
  // Copy all assets to root and assets folder
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets to multiple locations...');
    const files = fs.readdirSync(srcAssets);
    
    files.forEach(file => {
      if (!file.startsWith('.') && fs.lstatSync(path.join(srcAssets, file)).isFile()) {
        // Copy to root
        fs.copyFileSync(path.join(srcAssets, file), path.join(buildDir, file));
        // Copy to assets folder
        fs.copyFileSync(path.join(srcAssets, file), path.join(assetsDir, file));
        console.log(`✅ ${file} → root & assets/`);
      }
    });
  }
  
  // Get CSS and HTML files
  const htmlPath = path.join(buildDir, 'index.html');
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  
  if (cssFiles.length === 0) {
    throw new Error('No CSS files found!');
  }
  
  // Read and modify CSS
  const cssFile = cssFiles[0];
  let cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
  
  // Replace all asset paths to point to root
  cssContent = cssContent.replace(/url\(\/assets\/([^)]+)\)/g, 'url(/$1)');
  cssContent = cssContent.replace(/url\("\/assets\/([^")]+)"\)/g, 'url("/$1")');
  cssContent = cssContent.replace(/url\('\/assets\/([^')]+)'\)/g, 'url(\'/$1\')');
  
  // Also handle relative paths
  cssContent = cssContent.replace(/url\(\.\/([^)]+)\)/g, 'url(/$1)');
  
  console.log('🔧 Modified CSS asset paths to absolute root paths');
  
  // Read HTML and replace CSS link with inline styles
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove CSS link and add inline styles
  htmlContent = htmlContent.replace(
    /<link[^>]*href="[^"]*\.css"[^>]*>/g, 
    `<style>${cssContent}</style>`
  );
  
  // Write modified HTML
  fs.writeFileSync(htmlPath, htmlContent);
  
  // Create a comprehensive .htaccess style config for static files
  const staticConfig = `# Static file serving
<Files ~ "\\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$">
  Header set Cache-Control "public, max-age=31536000"
</Files>

# Fallback to index.html for SPA
FallbackResource /index.html`;
  
  fs.writeFileSync(path.join(buildDir, '.htaccess'), staticConfig);
  
  console.log('✅ Created inline CSS with fixed asset paths');
  console.log(`📄 HTML size: ${Math.round(fs.statSync(htmlPath).size / 1024)}KB`);
  
  // Verify key files exist
  const keyFiles = ['fundo_site_1756381259667.png', 'logo_1756381267147.png'];
  keyFiles.forEach(file => {
    if (fs.existsSync(path.join(buildDir, file))) {
      console.log(`✅ ${file} available at root`);
    } else {
      console.warn(`⚠️ ${file} missing from root`);
    }
  });
  
  console.log('🎉 Ultimate Vercel build completed!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}