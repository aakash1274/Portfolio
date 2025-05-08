const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Import the main App component and blogPosts data
const App = require('./src/App').default;
const blogPosts = require('./src/data/blogPosts').blogPosts;

// Import React Router components for static routing
const StaticRouter = require('react-router-dom/server').StaticRouter;

// Define routes to export
const routes = [
  '/',
  '/projects/firecat',
  '/projects/sport-retail',
  '/projects/workwear',
  '/projects/hockey',
  '/projects/pet-tracker',
  '/tech-details',
  '/development-process',
  '/about',
  '/careers',
  '/privacy-policy',
  '/blog',
];

// Add blog post slugs for dynamic routes
const blogSlugs = blogPosts.map(post => `/blog/${post.slug}`);

// Output directory
const OUTPUT_DIR = path.resolve(__dirname, 'static-site');

// Utility to ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Render a route to static HTML
function renderRoute(url) {
  const context = {};
  const element = React.createElement(
    StaticRouter,
    { location: url, context },
    React.createElement(App)
  );
  const html = ReactDOMServer.renderToStaticMarkup(element);
  return '<!DOCTYPE html>' + html;
}

// Write HTML file for a route
function writeHtmlFile(url, html) {
  let filePath = path.join(OUTPUT_DIR, url);
  if (url.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else {
    filePath += '.html';
  }
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated ${filePath}`);
}

// Copy public assets to output directory
function copyPublicAssets() {
  const publicDir = path.resolve(__dirname, 'public');
  const destDir = path.join(OUTPUT_DIR, 'public');
  if (!fs.existsSync(publicDir)) {
    console.warn('Public directory not found, skipping asset copy.');
    return;
  }
  ensureDir(destDir);
  // Simple recursive copy
  function copyRecursive(src, dest) {
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      ensureDir(dest);
      fs.readdirSync(src).forEach(child => {
        copyRecursive(path.join(src, child), path.join(dest, child));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  copyRecursive(publicDir, destDir);
  console.log('Copied public assets.');
}

// Main export function
function exportStaticSite() {
  // Clean output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  ensureDir(OUTPUT_DIR);

  // Render static routes
  routes.forEach(route => {
    const html = renderRoute(route);
    writeHtmlFile(route, html);
  });

  // Render blog post pages
  blogSlugs.forEach(slug => {
    const html = renderRoute(slug);
    writeHtmlFile(slug, html);
  });

  // Copy assets
  copyPublicAssets();

  console.log('Static site generation complete.');
}

// Run export
exportStaticSite();
