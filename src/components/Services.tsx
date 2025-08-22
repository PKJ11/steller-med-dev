import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Brain, Cloud, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CheckSquare,
      title: "Application Development",
      description: "We provide state-of-the-art software engineering services and deploy services across a variety of technologies and platforms.",
      link: "Learn more"
    },
    {
      icon: Brain,
      title: "Automation & Artificial Intelligence", 
      description: "Digital transformation of customer management applications has revolutionized the delivery of sophisticated client-based data-",
      link: "Learn more"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Whether it is migrating your existing systems to cloud or architecting a whole new solution, we can help you at every -",
      link: "Learn more"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Our cybersecurity experts provide comprehensive security solutions to protect your practice from threats and ensure -",
      link: "Learn more"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="w-16 h-0.5 bg-primary mb-4"></div>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            WHAT WE DO
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Unlocking Growth for Global Businesses
          </h3>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                      {service.link}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;