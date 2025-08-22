import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="w-16 h-0.5 bg-primary mb-4"></div>
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              KNOW ABOUT US
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              From Enterprise Systems to Cloud Transformation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Stellar Med Software, we are passionate about empowering healthcare 
              providers with the technology they need to deliver exceptional care. We 
              understand the unique challenges faced by today's healthcare organizations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are more than just a software company. We are a trusted partner 
              dedicated to your success.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Learn more
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage}
              alt="Healthcare professionals collaborating on digital transformation"
              className="w-full h-auto rounded-lg shadow-medium"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;