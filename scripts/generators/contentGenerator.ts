import { escapeHtml } from '../utils.js';

export function generatePostContent(content: any[]): string {
  return content.map(section => {
    switch (section.type) {
      case 'paragraph':
        return `<p class="text-gray-700 mb-4 leading-relaxed text-lg">${escapeHtml(section.content || '')}</p>`;
      case 'heading':
        return `<div class="flex items-center gap-3 mt-12 mb-6">
          <div class="w-1.5 h-7 bg-purple-500 rounded-full"></div>
          <h2 class="text-2xl font-bold text-gray-900">${escapeHtml(section.content || '')}</h2>
        </div>`;
      case 'subheading':
        return `<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
          ${escapeHtml(section.content || '')}
        </h3>`;
      case 'list':
        return `<ul class="list-disc pl-5 my-4 space-y-2">
          ${section.items?.map(item => `<li class="text-gray-700 text-lg">${escapeHtml(item)}</li>`).join('') || ''}
        </ul>`;
      case 'quote':
        return `<blockquote class="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
          <p class="text-lg m-0">${escapeHtml(section.content || '')}</p>
        </blockquote>`;
      default:
        return '';
    }
  }).join('');
}

export function generateNavigation(currentPage: 'blog' | 'post' = 'post'): string {
  return `
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a href="/" class="text-xl font-bold text-blue-600">IT Carolina</a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" class="text-gray-700 hover:text-blue-600">About</a>
            <a href="/pricing" class="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="/blog" class="${currentPage === 'blog' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

export function generateFooter(): string {
  return `
    <footer class="bg-blue-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="mb-4">© ${new Date().getFullYear()} IT Carolina. All rights reserved.</p>
        <p class="text-blue-200">Professional IT Support in Charlotte, NC</p>
        <p class="text-blue-200">Call (704) 520-0809 for immediate assistance</p>
      </div>
    </footer>
  `;
}