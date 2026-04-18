import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Code2, ClipboardCheck, RefreshCcw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Hardware Engineering & Development",
      description:
        "Sensor/electronics design, PCB design, mechanical / enclosure design, prototyping, production support.",
      link: "Learn more",
    },
    {
      icon: Code2,
      title: "Software Design & Engineering",
      description:
        "Embedded software, device firmware, medical-device applications, cloud platforms, data systems, integration with EHR/EMR or other healthcare IT systems.",
      link: "Learn more",
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory-Compliance Support",
      description:
        "Our deep expertise in regulatory compliance, combined with our comprehensive development capabilities, enables us to streamline the compliance process.",
      link: "Learn more",
    },
    {
      icon: RefreshCcw,
      title: "Full Lifecycle Support",
      description:
        "From initial concept to market-ready device, including rapid prototyping, design reviews, and production support.",
      link: "Learn more",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Heading + Services list */}
          <div>
            <div className="mb-8">
              <div className="w-16 h-0.5 bg-primary mb-4" />
              <p className="text-xs font-semibold text-gray-500 tracking-wider">
                WHAT WE DO
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Our Services <br className="hidden sm:block" />
                Offerings
              </h3>
              <p className="mt-4 text-gray-600 max-w-xl">
                End-to-end engineering solutions that take medical devices from concept to clinical-ready reality.
              </p>
            </div>

            {/* Services panel */}
            <Card className="border border-gray-100 shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-5">
                  {services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                          {service.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {service.description}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm font-semibold text-primary mt-1"
                        >
                          {service.link}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://ik.imagekit.io/pratik2002/steller-med-img2.png?updatedAt=1755839758092"
                alt="Medical device engineering team collaborating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;