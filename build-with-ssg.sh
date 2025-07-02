#!/bin/bash

echo "🚀 Building with SSG support..."

# Step 1: Regular Vite build
echo "📦 Running standard Vite build..."
npm run build

# Step 2: Generate static blog pages
echo "🔄 Generating static blog pages..."
npx tsx scripts/generateSSG.ts

echo "✅ Build with SSG complete!"
echo "🌐 Static blog pages generated in dist/blog/[slug]/index.html"
echo "📋 Deploy the dist/ folder to your web server"