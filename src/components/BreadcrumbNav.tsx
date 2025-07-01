
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items = [] }: BreadcrumbNavProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Home size={16} className="mr-1" />
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-2" />
              {item.href ? (
                <Link 
                  to={item.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;
