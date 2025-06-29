
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ isDark, onThemeToggle }: NavigationProps) => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full ${isDark ? 'bg-black/20' : 'bg-orange-50/20'} backdrop-blur-lg z-50 border-b ${isDark ? 'border-white/10' : 'border-orange-200/20'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-full">
          <Link to="/" className={`text-2xl font-bold ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-orange-500 to-orange-700'} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
            Rahul Meena
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`${
                  isActive(item.href) 
                    ? isDark ? 'text-blue-400' : 'text-orange-600'
                    : isDark ? 'text-white hover:text-blue-400' : 'text-orange-800 hover:text-orange-600'
                } transition-colors font-medium relative`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDark ? 'bg-blue-400' : 'bg-orange-600'} rounded-full`} />
                )}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-3 p-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-orange-100/50'} backdrop-blur-sm transition-all duration-300`}>
              <Sun className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-orange-500'} transition-colors`} />
              <Switch 
                checked={isDark} 
                onCheckedChange={onThemeToggle} 
                className={`${isDark ? 'data-[state=checked]:bg-blue-600' : 'data-[state=checked]:bg-orange-600'} transition-colors`} 
              />
              <Moon className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-gray-400'} transition-colors`} />
            </div>
            <Link to="/contact">
              <Button className={`${isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'} shadow-lg transform hover:scale-105 transition-all duration-200`}>
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
