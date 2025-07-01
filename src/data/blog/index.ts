
import { BlogPost } from './blogTypes';
import { troubleshootingPosts } from './posts/troubleshootingPosts';
import { computerRepairPosts } from './posts/computerRepairPosts';
import { homeOfficePosts } from './posts/homeOfficePosts';
import { printerSupportPosts } from './posts/printerSupportPosts';
import { cybersecurityPosts } from './posts/cybersecurityPosts';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'common-computer-problems-solutions',
    title: 'Common Computer Problems and Solutions Every User Should Know',
    excerpt: 'Learn how to identify and fix the most frequent computer issues that slow down your PC, from startup problems to performance issues. Get expert tips from Charlotte\'s trusted IT support team.',
    date: 'June 28, 2025',
    author: 'IT Carolina Team',
    category: 'Troubleshooting',
    imageUrl: '/lovable-uploads/photo-1486312338219-ce68d2c6f44d.jpg',
    content: troubleshootingPosts[0].content
  },
  {
    id: '2',
    slug: 'when-repair-vs-replace-computer',
    title: 'When to Repair vs Replace Your Computer: A Cost-Benefit Guide',
    excerpt: 'Struggling to decide whether to fix your old computer or buy a new one? Our IT experts break down the key factors to consider, helping you make the most cost-effective decision for your situation.',
    date: 'June 25, 2025',
    author: 'IT Carolina Team',
    category: 'Computer Repair',
    imageUrl: '/lovable-uploads/photo-1531297484001-80022131f5a1.jpg',
    content: computerRepairPosts[0].content
  },
  {
    id: '3',
    slug: 'home-office-setup-tips',
    title: 'Home Office Setup Tips: Create a Productive IT Environment',
    excerpt: 'Working from home? Learn how to set up a reliable, efficient home office with proper networking, ergonomics, and technology choices. Expert advice from Charlotte\'s IT support professionals.',
    date: 'June 22, 2025',
    author: 'IT Carolina Team',
    category: 'Home Office',
    imageUrl: '/lovable-uploads/photo-1498050108023-c5249f4df085.jpg',
    content: homeOfficePosts[0].content
  },
  {
    id: '4',
    slug: 'printer-troubleshooting-guide',
    title: 'Printer Troubleshooting Guide: Fix Common Issues Fast',
    excerpt: 'Printer not working? From paper jams to connectivity issues, learn how to diagnose and fix the most common printer problems. Professional tips from Charlotte\'s printer repair experts.',
    date: 'June 20, 2025',
    author: 'IT Carolina Team',
    category: 'Printer Support',
    imageUrl: '/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg',
    content: printerSupportPosts[0].content
  },
  {
    id: '5',
    slug: 'cybersecurity-tips-small-businesses',
    title: 'Cybersecurity Tips for Small Businesses: Protect Your Data',
    excerpt: 'Small businesses are prime targets for cyber attacks. Learn essential cybersecurity practices to protect your company data, customer information, and business operations from digital threats.',
    date: 'June 18, 2025',
    author: 'IT Carolina Team',
    category: 'Cybersecurity',
    imageUrl: '/lovable-uploads/photo-1518770660439-4636190af475.jpg',
    content: cybersecurityPosts[0].content
  },
  {
    id: '6',
    slug: 'signs-computer-needs-professional-help',
    title: 'Signs Your Computer Needs Professional Help: Don\'t Wait Too Long',
    excerpt: 'Recognize the warning signs that indicate your computer needs professional attention. Learn when DIY fixes aren\'t enough and how to prevent minor issues from becoming major problems.',
    date: 'June 15, 2025',
    author: 'IT Carolina Team',
    category: 'Computer Repair',
    imageUrl: '/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg',
    content: computerRepairPosts[1].content
  }
];

// Export other data for future use
export * from './blogTypes';
export * from './blogCategories';
export * from './blogAuthors';
