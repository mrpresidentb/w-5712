#!/bin/bash

echo "Building with React-Snap for static HTML generation..."

# Generate routes file
echo "Generating routes..."
node scripts/generate-routes.js

# Build the React app
echo "Building React app..."
npm run build:dev

# Run react-snap to generate static HTML
echo "Running react-snap..."
npx react-snap

echo "Static HTML generation complete!"