import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">SM</span>
                </div>
                <span className="font-bold">STELLAR MED SOFTWARE</span>
              </div>
            </div>

            {/* Our Team Links */}
            <div>
              <h4 className="font-semibold mb-4">Our Team</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    What we do
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Subscribe to get latest updates
            </h3>
            <div className="flex mt-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none focus:border-white/40"
              />
              <Button className="bg-white text-primary hover:bg-white/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Links */}
       
      </div>
    </footer>
  );
};

export default Footer;
