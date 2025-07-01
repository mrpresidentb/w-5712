import { BlogPost } from '../blogTypes';

export const troubleshootingPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'common-computer-problems-solutions',
    title: 'Common Computer Problems and Solutions Every User Should Know',
    excerpt: 'Learn how to identify and fix the most frequent computer issues that slow down your PC, from startup problems to performance issues. Get expert tips from Charlotte\'s trusted IT support team.',
    date: 'June 28, 2025',
    author: 'IT Carolina Team',
    category: 'Troubleshooting',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    content: [
      {
        type: 'paragraph',
        content: 'Computer problems can be frustrating, especially when they interrupt your work or personal tasks. As Charlotte\'s leading IT support company, we see the same issues repeatedly. The good news? Many common computer problems have simple solutions you can try before calling for professional help.'
      },
      {
        type: 'heading',
        content: 'Slow Computer Performance'
      },
      {
        type: 'subheading',
        content: 'Signs Your Computer is Running Slowly'
      },
      {
        type: 'list',
        items: [
          'Programs take forever to load',
          'Web browsers are sluggish',
          'File transfers crawl along',
          'Overall system responsiveness is poor'
        ]
      },
      {
        type: 'subheading',
        content: 'Quick Solutions to Try'
      },
      {
        type: 'paragraph',
        content: 'Start by restarting your computer - this simple step resolves many performance issues. Next, check your available storage space. If your hard drive is more than 85% full, it\'s time to clean up files or consider an upgrade.'
      },
      {
        type: 'paragraph',
        content: 'Run Disk Cleanup (Windows) or optimize storage (Mac) to remove temporary files. Check your startup programs and disable unnecessary ones that launch when your computer boots up.'
      },
      {
        type: 'heading',
        content: 'Internet Connection Problems'
      },
      {
        type: 'paragraph',
        content: 'When your internet isn\'t working, try these steps in order: First, check if other devices can connect to the same network. If they can\'t, the problem is with your internet service or router.'
      },
      {
        type: 'list',
        items: [
          'Restart your modem and router by unplugging for 30 seconds',
          'Check all cable connections',
          'Run network troubleshooter on Windows',
          'Reset network settings if other steps fail'
        ]
      },
      {
        type: 'heading',
        content: 'Computer Won\'t Start'
      },
      {
        type: 'paragraph',
        content: 'If your computer won\'t turn on, first check that it\'s properly plugged in and the power outlet is working. For laptops, ensure the battery isn\'t completely dead by leaving it plugged in for at least 30 minutes before trying to start it.'
      },
      {
        type: 'paragraph',
        content: 'If you hear fans running but see no display, try connecting an external monitor. This can help determine if the issue is with your screen or the computer itself.'
      },
      {
        type: 'heading',
        content: 'Blue Screen of Death (BSOD)'
      },
      {
        type: 'paragraph',
        content: 'The dreaded blue screen usually indicates a serious system error. Write down the error code displayed, then restart your computer. If it happens repeatedly, it could indicate hardware failure or corrupted system files.'
      },
      {
        type: 'quote',
        content: 'When basic troubleshooting doesn\'t solve the problem, it\'s time to call the professionals. Don\'t risk making the problem worse with complex fixes.'
      },
      {
        type: 'heading',
        content: 'When to Call Professional Help'
      },
      {
        type: 'paragraph',
        content: 'While many computer problems have simple solutions, some require professional expertise. Contact IT Carolina if you experience:'
      },
      {
        type: 'list',
        items: [
          'Repeated blue screens or system crashes',
          'Suspected virus or malware infections',
          'Hardware component failures',
          'Data recovery needs',
          'Network setup and configuration issues'
        ]
      },
      {
        type: 'paragraph',
        content: 'Our Charlotte-based team provides fast, reliable computer repair services for both home and business users. We offer free diagnostics and transparent pricing, so you know exactly what you\'re paying for.'
      }
    ]
  }
];
