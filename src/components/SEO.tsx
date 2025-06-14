
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'IT Carolina | Expert IT Support, Home & Small Business, Web Design, Charlotte NC',
  description = 'IT Carolina offers expert IT support, computer repair, home office tech help, small business networking, web design, and Microsoft 365/Google Workspace setup in Charlotte NC.',
  type = 'website',
  name = 'IT Carolina',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  canonical
}) => {
  const location = useLocation();
  // Fix canonical URL generation - always use the current page unless explicitly overridden
  const currentUrl = canonical || `https://itcarolina.us${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://itcarolina.us${imageUrl}`;

  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://itcarolina.us',
    name: 'IT Carolina',
    url: 'https://itcarolina.us',
    logo: 'https://itcarolina.us/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
    description: 'Expert IT support, computer repair, and web design services for home and small business in Charlotte, NC',
    telephone: '+1-888-661-0020',
    email: 'support@itcarolina.us',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3540 Toringdon Way, Suite 200',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      postalCode: '28277',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.2271',
      longitude: '-80.8431'
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    serviceArea: {
      '@type': 'City',
      name: 'Charlotte',
      '@id': 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer Repair & Tune-up',
            description: 'PC and laptop repair, virus removal, performance optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Network & Wi-Fi Setup',
            description: 'Home and small business network installation and troubleshooting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Hosting',
            description: 'Website design, hosting, domain registration, and email setup'
          }
        }
      ]
    },
    sameAs: []
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="IT support Charlotte, computer repair, virus removal, network setup, web design, small business IT, home office support, Microsoft 365, Google Workspace, printer support, data recovery" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="IT Carolina" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Local Business */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Charlotte" />
      <meta name="geo.position" content="35.2271;-80.8431" />
      <meta name="ICBM" content="35.2271, -80.8431" />
      
      {/* Additional meta tags */}
      <meta name="author" content={name} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
