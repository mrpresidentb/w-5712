
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPostDetail from "./pages/BlogPostDetail";
import BlogListing from "./pages/BlogListing";
import HomeOfficeSupport from "./pages/HomeOfficeSupport";
import BusinessSupport from "./pages/BusinessSupport";
import PrinterSupport from "./pages/PrinterSupport";
import WebHosting from "./pages/WebHosting";
import Pricing from "./pages/Pricing";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import BlogAdmin from "./pages/admin/BlogAdmin";

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={0}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/services/home-office" element={<HomeOfficeSupport />} />
            <Route path="/services/business" element={<BusinessSupport />} />
            <Route path="/services/printer" element={<PrinterSupport />} />
            <Route path="/services/web-hosting" element={<WebHosting />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
