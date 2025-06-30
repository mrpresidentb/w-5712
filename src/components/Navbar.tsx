import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-blue-900")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn("text-xl font-bold", isScrolled ? "text-blue-900" : "text-white")}>IT Carolina</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/services/home-office" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Home & Home-Office Support</div>
                          <p className="text-sm text-gray-500">PC tune-ups, Wi-Fi help, virus removal & more</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/business" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Small Business IT Support</div>
                          <p className="text-sm text-gray-500">Networks, security & managed IT services</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/printer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Printer & Peripherals</div>
                          <p className="text-sm text-gray-500">Setup, troubleshooting & repair</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/web-hosting" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Web & Hosting Solutions</div>
                          <p className="text-sm text-gray-500">Website design, domain & email services</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/pricing">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/faq">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-blue-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-blue-800")}>
                      FAQ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("flex items-center px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-700 text-white hover:bg-blue-600")}>
                    <Headphones className="mr-2 h-4 w-4" />
                    Get Support
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-blue-900" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-blue-900")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}>
            About Us
          </Link>
          
          <div className="block">
            <button onClick={e => {
            e.preventDefault();
            const submenu = e.currentTarget.nextElementSibling;
            if (submenu) {
              submenu.classList.toggle('hidden');
            }
          }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")}>
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/services/home-office" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
              setIsMenuOpen(false);
            }}>
              Home & Home-Office Support
            </Link>
              <Link to="/services/business" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
              setIsMenuOpen(false);
            }}>
              Small Business IT Support
            </Link>
              <Link to="/services/printer" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
              setIsMenuOpen(false);
            }}>
              Printer & Peripherals
            </Link>
              <Link to="/services/web-hosting" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
              setIsMenuOpen(false);
            }}>
              Web & Hosting Solutions
            </Link>
          </div>
        </div>
        
        <Link to="/blog" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}>
          Blog
        </Link>
        
        <Link to="/pricing" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}>
          Pricing
        </Link>
        
        <Link to="/faq" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-blue-800")} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}>
          FAQ
        </Link>
        
        <button onClick={() => scrollToSection('contact')} className={cn("flex items-center w-full text-left px-3 py-2 rounded-md", isScrolled ? "bg-blue-600 text-white" : "bg-blue-700 text-white")}>
          <Headphones className="mr-2 h-4 w-4" />
          Get Support
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
