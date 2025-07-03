#!/bin/bash

echo "Building with Vite SSG for static HTML generation..."

# Build the React app with SSG
echo "Building React app with static site generation..."
npx vite-ssg build

echo "Static HTML generation complete! Files are in dist/ directory."