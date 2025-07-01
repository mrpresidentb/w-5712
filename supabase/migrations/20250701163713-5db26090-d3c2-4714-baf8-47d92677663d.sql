
-- Update "When to Repair vs Replace Your Computer" article with complete content
UPDATE blog_posts 
SET content = '[
  {
    "type": "paragraph",
    "content": "When your computer starts acting up, one of the biggest questions you face is whether to invest in repairs or start shopping for a replacement. This decision can significantly impact your budget and productivity, so it''s important to make an informed choice."
  },
  {
    "type": "heading",
    "content": "Age and Performance Considerations"
  },
  {
    "type": "paragraph",
    "content": "The age of your computer is often the first factor to consider. Generally, computers older than 5-7 years may not be worth major repairs, especially if the cost exceeds 50% of a new computer''s price."
  },
  {
    "type": "list",
    "items": [
      "Computers 1-3 years old: Usually worth repairing",
      "Computers 3-5 years old: Evaluate repair cost vs. performance needs",
      "Computers 5+ years old: Often better to replace unless it''s a simple fix"
    ]
  },
  {
    "type": "heading",
    "content": "Cost Analysis Framework"
  },
  {
    "type": "paragraph",
    "content": "Before making a decision, calculate the total cost of ownership. Consider not just the immediate repair cost, but also potential future repairs and the computer''s remaining useful life."
  },
  {
    "type": "subheading",
    "content": "When to Repair"
  },
  {
    "type": "list",
    "items": [
      "Simple hardware failures (RAM, hard drive, power supply)",
      "Software issues and virus removal",
      "Peripheral problems (keyboard, mouse, speakers)",
      "Repair cost is less than 25% of replacement cost"
    ]
  },
  {
    "type": "subheading",
    "content": "When to Replace"
  },
  {
    "type": "list",
    "items": [
      "Motherboard failure in older computers",
      "Multiple component failures",
      "Computer no longer meets your performance needs",
      "Repair cost exceeds 50% of new computer price"
    ]
  },
  {
    "type": "heading",
    "content": "Performance vs. Cost Evaluation"
  },
  {
    "type": "paragraph",
    "content": "Consider whether your current computer meets your daily needs. If you''re constantly waiting for programs to load or struggling with multitasking, it might be time to upgrade regardless of repair costs."
  },
  {
    "type": "list",
    "items": [
      "Evaluate your current workflow demands",
      "Consider future software requirements",
      "Factor in productivity loss from slow performance",
      "Compare repair costs to performance improvements"
    ]
  },
  {
    "type": "heading",
    "content": "Professional Assessment"
  },
  {
    "type": "paragraph",
    "content": "Sometimes it''s difficult to diagnose the exact problem yourself. A professional diagnostic can help you understand what''s wrong and provide an accurate repair estimate."
  },
  {
    "type": "quote",
    "content": "Getting a professional diagnosis before making your repair-or-replace decision can save you hundreds of dollars and help you make the most informed choice for your specific situation."
  },
  {
    "type": "paragraph",
    "content": "At IT Carolina, we provide honest assessments and will always recommend the most cost-effective solution for your needs. <Link to=\"/contact\">Contact us</Link> for a professional evaluation of your computer."
  }
]'::jsonb
WHERE slug = 'when-repair-vs-replace-computer';

-- Update "Home Office Setup Tips" article with complete content
UPDATE blog_posts 
SET content = '[
  {
    "type": "paragraph",
    "content": "Creating an effective home office requires more than just a desk and chair. Your technology setup can make or break your productivity and professional success. Here''s how to build a reliable, efficient home office IT environment."
  },
  {
    "type": "heading",
    "content": "Essential Hardware Setup"
  },
  {
    "type": "paragraph",
    "content": "Your computer is the heart of your home office. Choose hardware that matches your work requirements and provides room for growth."
  },
  {
    "type": "subheading",
    "content": "Computer Specifications"
  },
  {
    "type": "list",
    "items": [
      "Minimum 8GB RAM (16GB recommended for demanding work)",
      "SSD storage for faster boot times and file access",
      "Reliable processor (Intel i5/AMD Ryzen 5 or better)",
      "Quality webcam and microphone for video calls",
      "Dual monitor capability for increased productivity"
    ]
  },
  {
    "type": "heading",
    "content": "Network and Connectivity"
  },
  {
    "type": "paragraph",
    "content": "A stable internet connection is crucial for remote work. Don''t let connectivity issues derail your productivity or professional reputation."
  },
  {
    "type": "list",
    "items": [
      "High-speed internet plan (minimum 25 Mbps upload/download)",
      "Quality router positioned centrally in your home",
      "Ethernet connection for critical work activities",
      "Wi-Fi extender if your office is far from the router",
      "Backup internet solution (mobile hotspot) for emergencies"
    ]
  },
  {
    "type": "heading",
    "content": "Security and Data Protection"
  },
  {
    "type": "paragraph",
    "content": "Working from home requires robust security measures to protect both personal and professional data."
  },
  {
    "type": "subheading",
    "content": "Essential Security Measures"
  },
  {
    "type": "list",
    "items": [
      "Regular automated backups to cloud and local storage",
      "Strong, unique passwords for all accounts",
      "Two-factor authentication where available",
      "Updated antivirus software",
      "Secure Wi-Fi network with WPA3 encryption"
    ]
  },
  {
    "type": "heading",
    "content": "Ergonomic Considerations"
  },
  {
    "type": "paragraph",
    "content": "Your physical setup affects both your health and productivity. Invest in ergonomic equipment to prevent strain and maintain focus throughout long work days."
  },
  {
    "type": "list",
    "items": [
      "Adjustable desk and chair at proper height",
      "Monitor at eye level to prevent neck strain",
      "External keyboard and mouse for laptop users",
      "Good lighting to reduce eye strain",
      "Proper ventilation and temperature control"
    ]
  },
  {
    "type": "heading",
    "content": "Software and Productivity Tools"
  },
  {
    "type": "paragraph",
    "content": "The right software stack can significantly boost your productivity and collaboration capabilities."
  },
  {
    "type": "list",
    "items": [
      "Reliable video conferencing software (Zoom, Teams, etc.)",
      "Cloud storage solution for file sharing and backup",
      "Project management tools for task organization",
      "Communication platforms for team collaboration",
      "Time tracking software for productivity monitoring"
    ]
  },
  {
    "type": "quote",
    "content": "A well-planned home office setup is an investment in your productivity, health, and professional success. Take time to create an environment that supports your work goals."
  },
  {
    "type": "paragraph",
    "content": "Need help setting up your home office technology? <Link to=\"/services/home-office\">IT Carolina specializes in home office setups</Link> and can help you create the perfect productive workspace."
  }
]'::jsonb
WHERE slug = 'home-office-setup-tips';

-- Let's also verify these updates worked
SELECT slug, title, jsonb_array_length(content) as section_count 
FROM blog_posts 
WHERE slug IN ('when-repair-vs-replace-computer', 'home-office-setup-tips');
