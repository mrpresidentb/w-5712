#!/bin/bash

echo "🚀 Building with Vike SSR for static HTML generation..."

# Build the React app with Vike pre-rendering
echo "📦 Building and pre-rendering all pages..."
npm run build

echo "✅ Static HTML generation complete!"
echo "🌐 Blog posts pre-rendered with full meta tags"
echo "📁 Deploy the dist/ folder to your web server"