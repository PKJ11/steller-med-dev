import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://ik.imagekit.io/pratik2002/steller-med-hero.png?updatedAt=1755837607042"
          alt="AI and Cloud Technology for Healthcare"
          className="w-full h-full object-cover opacity-100"
        />
        
      </div>
      
      <div className="relative container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Unlock the Power of AI & Cloud for Healthcare Practice.
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-lg">
            Transform your medical practice with cutting-edge technology solutions designed for modern healthcare providers.
          </p>
          
          <Button 
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-6 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            What to do 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;