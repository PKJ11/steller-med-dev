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
              Engineering Medical Innovation with Purpose
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a specialized medical device design and development partner dedicated to
              accelerating innovation in healthcare. We deliver end-to-end engineering services—spanning
              hardware development, embedded software, cloud solutions, and regulatory-aligned
              design—that help companies take medical devices from concept to clinical-ready reality.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With teams operating across the United States and Eastern Europe, our dual-location model
              blends strong program leadership with highly capable engineering talent. This ensures
              predictable execution, rapid development cycles, and cost-efficient delivery—without
              compromising the quality and safety essential to medical technology.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We support founders, startups, and established med-tech organizations across the entire
              product lifecycle, helping them bring transformative medical technologies to global markets.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              Learn more
            </Button>
          </div>

          <div className="relative">
            <img
              src={aboutImage}
              alt="Healthcare professionals collaborating on medical device development"
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