import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-cta rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            See Innovation in Action.
          </h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            Book a Free Demo.
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our no-obligation demo takes minutes and unlocks results with innovative solutions & efficient delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              className="bg-success border-success text-white hover:bg-success/90"
            >
              Book A Demo
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;