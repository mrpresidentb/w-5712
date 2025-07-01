
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToData {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  canonical?: string;
  keywords?: string;
  faqData?: FAQItem[];
  howToData?: HowToData;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Computer Repair Near Me | IT Support Charlotte NC | IT Carolina',
  description = 'Looking for computer repair technician near me? IT Carolina provides professional computer repair, IT support, virus removal, and web design services in Charlotte NC. Local computer service experts.',
  type = 'website',
  name = 'IT Carolina',
  imageUrl = '/og.jpg',
  canonical,
  keywords = "computer repair near me, computer repair technician near me, computer repair charlotte nc, IT support near me, computer service near me, computer help near me, pc help near me, apple computer support, dell computer support, computer repair shops near me, personal computer repair service, computer support services near me",
  faqData,
  howToData,
  publishedTime,
  modifiedTime
}) => {
  const location = useLocation();
  const currentUrl = canonical || `https://itcarolina.us${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://itcarolina.us${imageUrl}`;

  // Enhanced structured data with more specific service offerings
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://itcarolina.us',
    name: 'IT Carolina',
    alternateName: 'IT Carolina Computer Repair & Support',
    url: 'https://itcarolina.us',
    logo: 'https://itcarolina.us/og.jpg',
    description: 'Professional computer repair, IT support, and web design services for home and small business in Charlotte, NC',
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
    openingHours: ['Mo-Fr 09:00-17:00'],
    serviceArea: [
      {
        '@type': 'City',
        name: 'Charlotte',
        '@id': 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina'
      },
      {
        '@type': 'Place',
        name: 'Charlotte Metro Area'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Computer Repair & IT Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer Repair Services',
            description: 'Professional computer repair, virus removal, performance optimization for PC and Mac',
            serviceType: 'Computer Repair'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Support Services',
            description: 'Comprehensive IT support for home offices and small businesses',
            serviceType: 'IT Support'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Network Setup & Wi-Fi Support',
            description: 'Network installation, Wi-Fi setup, and connectivity troubleshooting',
            serviceType: 'Network Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Hosting',
            description: 'Professional website design, hosting, and domain services for small businesses',
            serviceType: 'Web Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Printer Support',
            description: 'Printer installation, troubleshooting, and peripheral device support',
            serviceType: 'Printer Support'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    },
    sameAs: []
  };

  // FAQ Schema
  const faqSchema = faqData ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // HowTo Schema
  const howToSchema = howToData ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToData.name,
    description: howToData.description,
    totalTime: howToData.totalTime,
    estimatedCost: howToData.estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: howToData.estimatedCost
    } : undefined,
    step: howToData.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook - Enhanced for better social sharing */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="IT Carolina" />
      
      {/* Twitter - Enhanced for better sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Facebook specific tags for better cache control */}
      <meta property="fb:app_id" content="1234567890" />
      <meta property="article:publisher" content="IT Carolina" />
      
      {/* Article specific meta tags for blog posts */}
      {type === 'article' && (
        <>
          <meta property="article:author" content="IT Carolina" />
          <meta property="article:section" content="Technology" />
          <meta property="og:article:published_time" content={publishedTime || new Date().toISOString()} />
          <meta property="og:article:modified_time" content={modifiedTime || new Date().toISOString()} />
        </>
      )}
      
      {/* Local Business */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Charlotte" />
      <meta name="geo.position" content="35.2271;-80.8431" />
      <meta name="ICBM" content="35.2271, -80.8431" />
      
      {/* Additional meta tags */}
      <meta name="author" content={name} />
      
      {/* Core Web Vitals optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* HowTo Schema */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
