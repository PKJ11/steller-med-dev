import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SM</span>
            </div>
            <span className="text-xl font-bold text-primary">STELLAR MED SOFTWARE</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>
          
          <Button 
            variant="outline" 
            className="md:hidden"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;