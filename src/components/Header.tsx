import { Button } from "@/components/ui/button";

import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://ik.imagekit.io/pratik2002/MAIN%20LOGO%20COLOR%20VERSION%20LINKEDIN%20PROFILE%20PIC.png"
              alt="Stellar Med Software Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
            <a
              href="#resources"
              className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Resources
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Contact Us
            </a>
          </nav>

          <Button
            variant="outline"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </Button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-4 animate-fade-in">
            <a
              href="#resources"
              className="text-gray-700 hover:text-primary transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
