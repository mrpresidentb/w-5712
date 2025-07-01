
-- Update "Common Computer Problems and Solutions" article with complete content
UPDATE blog_posts 
SET content = '[
  {
    "type": "paragraph",
    "content": "Computer problems can be frustrating, especially when they interrupt your work or personal tasks. As Charlotte''s leading IT support company, we see the same issues repeatedly. The good news? Many common computer problems have simple solutions you can try before calling for professional help."
  },
  {
    "type": "heading",
    "content": "Slow Computer Performance"
  },
  {
    "type": "paragraph",
    "content": "A sluggish computer is one of the most common complaints we hear from Charlotte residents. Before you assume you need a new computer, try these proven solutions."
  },
  {
    "type": "subheading",
    "content": "Signs Your Computer is Running Slowly"
  },
  {
    "type": "list",
    "items": [
      "Programs take forever to load",
      "Web browsers are sluggish",
      "File transfers crawl along",
      "Overall system responsiveness is poor",
      "Frequent freezing or hanging"
    ]
  },
  {
    "type": "subheading",
    "content": "Quick Performance Fixes"
  },
  {
    "type": "paragraph",
    "content": "Start by restarting your computer - this simple step resolves many performance issues. Next, check your available storage space. If your hard drive is more than 85% full, it''s time to clean up files or consider an upgrade."
  },
  {
    "type": "list",
    "items": [
      "Restart your computer to clear temporary files",
      "Free up disk space by removing unnecessary files",
      "Disable startup programs you don''t need",
      "Run Windows Disk Cleanup utility",
      "Check for malware with a full system scan"
    ]
  },
  {
    "type": "heading",
    "content": "Internet Connectivity Issues"
  },
  {
    "type": "paragraph",
    "content": "Internet problems can stem from various sources - your computer, router, or internet service provider. Here''s how to diagnose and fix common connectivity issues."
  },
  {
    "type": "subheading",
    "content": "No Internet Connection"
  },
  {
    "type": "list",
    "items": [
      "Check all cable connections to your router and modem",
      "Restart your router by unplugging for 30 seconds",
      "Run Windows Network Troubleshooter",
      "Update network adapter drivers",
      "Contact your ISP if other devices also can''t connect"
    ]
  },
  {
    "type": "subheading",
    "content": "Slow Internet Speeds"
  },
  {
    "type": "list",
    "items": [
      "Test your speed with multiple speed test websites",
      "Close bandwidth-heavy applications",
      "Move closer to your Wi-Fi router",
      "Check for background updates downloading",
      "Consider upgrading your internet plan"
    ]
  },
  {
    "type": "heading",
    "content": "Computer Won''t Start"
  },
  {
    "type": "paragraph",
    "content": "A computer that won''t boot can be alarming, but many startup issues have straightforward solutions before requiring professional repair services."
  },
  {
    "type": "list",
    "items": [
      "Verify power cord is securely connected",
      "Check if power button LED lights up",
      "Try a different power outlet",
      "Remove and reseat RAM modules",
      "Disconnect all USB devices and try starting"
    ]
  },
  {
    "type": "heading",
    "content": "Blue Screen of Death (BSOD)"
  },
  {
    "type": "paragraph",
    "content": "The dreaded blue screen indicates a serious system error. While concerning, many BSOD errors can be resolved with systematic troubleshooting."
  },
  {
    "type": "list",
    "items": [
      "Note the error code displayed on the blue screen",
      "Boot into Safe Mode to diagnose issues",
      "Update or rollback recent driver changes",
      "Run Windows Memory Diagnostic tool",
      "Check for overheating components"
    ]
  },
  {
    "type": "heading",
    "content": "Software Crashes and Freezing"
  },
  {
    "type": "paragraph",
    "content": "Applications that frequently crash or freeze can disrupt your workflow. These issues often point to software conflicts or insufficient system resources."
  },
  {
    "type": "list",
    "items": [
      "Update the problematic software to latest version",
      "Check if adequate RAM is available",
      "Disable conflicting startup programs",
      "Run System File Checker (sfc /scannow)",
      "Consider reinstalling the problematic application"
    ]
  },
  {
    "type": "quote",
    "content": "Regular maintenance prevents most computer problems. When issues persist despite troubleshooting, professional diagnosis can identify hardware failures or complex software conflicts that require expert attention."
  },
  {
    "type": "paragraph",
    "content": "If these solutions don''t resolve your computer problems, <Link to=\"/contact\">contact IT Carolina</Link> for professional diagnosis and repair services. We serve the greater Charlotte area with honest, affordable computer repair solutions."
  }
]'::jsonb
WHERE slug = 'common-computer-problems-solutions';

-- Update "Printer Troubleshooting Guide" article with complete content
UPDATE blog_posts 
SET content = '[
  {
    "type": "paragraph",
    "content": "Printer problems can bring your productivity to a halt, but many common issues have simple solutions you can try before calling for help. Here''s your comprehensive guide to diagnosing and fixing printer problems that we encounter daily in Charlotte homes and businesses."
  },
  {
    "type": "heading",
    "content": "Most Common Printer Problems"
  },
  {
    "type": "paragraph",
    "content": "Understanding the root cause of printer issues helps you apply the right solution quickly. Here are the problems we see most often in Charlotte homes and offices."
  },
  {
    "type": "subheading",
    "content": "Printer Won''t Print"
  },
  {
    "type": "paragraph",
    "content": "When your printer receives a job but nothing comes out, start with these basic checks before assuming hardware failure."
  },
  {
    "type": "list",
    "items": [
      "Check power connection and ensure printer is turned on",
      "Verify printer is set as default in computer settings",
      "Clear print queue of stuck jobs",
      "Restart both printer and computer",
      "Check USB or network connection status"
    ]
  },
  {
    "type": "subheading",
    "content": "Poor Print Quality"
  },
  {
    "type": "paragraph",
    "content": "Blurry, streaky, or faded prints usually indicate maintenance issues rather than printer failure."
  },
  {
    "type": "list",
    "items": [
      "Clean print heads using printer utility software",
      "Check ink or toner levels and replace if low",
      "Use correct paper type for your printer",
      "Align print heads if text appears misaligned",
      "Replace old or dried ink cartridges"
    ]
  },
  {
    "type": "heading",
    "content": "Network Printer Issues"
  },
  {
    "type": "paragraph",
    "content": "Network printers add complexity but offer convenience for multiple users. Common connectivity issues often have straightforward solutions."
  },
  {
    "type": "subheading",
    "content": "Printer Not Found on Network"
  },
  {
    "type": "list",
    "items": [
      "Verify printer and computer are on same network",
      "Check printer IP address hasn''t changed",
      "Restart router and printer",
      "Update printer drivers on all computers",
      "Check firewall settings aren''t blocking printer"
    ]
  },
  {
    "type": "subheading",
    "content": "Intermittent Connection Problems"
  },
  {
    "type": "list",
    "items": [
      "Move printer closer to Wi-Fi router if possible",
      "Check for Wi-Fi interference from other devices",
      "Update printer firmware to latest version",
      "Use ethernet connection for critical printing tasks",
      "Configure static IP address for the printer"
    ]
  },
  {
    "type": "heading",
    "content": "Paper Jams and Feed Issues"
  },
  {
    "type": "paragraph",
    "content": "Paper jams are among the most frustrating printer problems, but proper technique prevents damage during removal."
  },
  {
    "type": "subheading",
    "content": "Safe Jam Removal"
  },
  {
    "type": "list",
    "items": [
      "Turn off printer before removing jammed paper",
      "Pull paper out slowly in direction of paper path",
      "Check for torn pieces left inside the printer",
      "Ensure paper guides are properly adjusted",
      "Use only recommended paper types and sizes"
    ]
  },
  {
    "type": "subheading",
    "content": "Preventing Future Jams"
  },
  {
    "type": "list",
    "items": [
      "Don''t overfill paper trays",
      "Keep paper in a dry environment",
      "Fan paper stack before loading",
      "Clean paper path regularly",
      "Replace worn pickup rollers"
    ]
  },
  {
    "type": "heading",
    "content": "Ink and Toner Problems"
  },
  {
    "type": "paragraph",
    "content": "Cartridge issues can cause various printing problems beyond just running out of ink or toner."
  },
  {
    "type": "list",
    "items": [
      "Remove and reinstall cartridges properly",
      "Clean cartridge contacts with lint-free cloth",
      "Check expiration dates on ink cartridges",
      "Store spare cartridges in cool, dry place",
      "Consider compatible cartridges for cost savings"
    ]
  },
  {
    "type": "heading",
    "content": "Driver and Software Issues"
  },
  {
    "type": "paragraph",
    "content": "Outdated or corrupted printer drivers cause many mysterious printing problems that seem hardware-related."
  },
  {
    "type": "list",
    "items": [
      "Download latest drivers from manufacturer website",
      "Uninstall and reinstall printer software completely",
      "Use Windows built-in drivers as fallback",
      "Check for Windows updates affecting printing",
      "Clear print spooler service and restart"
    ]
  },
  {
    "type": "quote",
    "content": "Most printer problems can be resolved with basic troubleshooting. When issues persist, professional diagnosis can save time and prevent damage from improper repairs."
  },
  {
    "type": "paragraph",
    "content": "When these solutions don''t work, <Link to=\"/services/printer\">IT Carolina''s printer support services</Link> can diagnose complex issues and provide professional repairs for all major printer brands in the Charlotte area."
  }
]'::jsonb
WHERE slug = 'printer-troubleshooting-guide';

-- Verify the updates
SELECT slug, title, jsonb_array_length(content) as section_count 
FROM blog_posts 
WHERE slug IN ('common-computer-problems-solutions', 'printer-troubleshooting-guide');
