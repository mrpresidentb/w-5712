
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import BreadcrumbNav from './BreadcrumbNav';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
  showBreadcrumbs?: boolean;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
};

const PageLayout = ({ 
  children, 
  showContact = true, 
  showBreadcrumbs = true,
  breadcrumbItems 
}: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      {showBreadcrumbs && <BreadcrumbNav items={breadcrumbItems} />}
      {children}
      {showContact && <ContactInfo />}
      <Footer />
    </div>
  );
};

export default PageLayout;
