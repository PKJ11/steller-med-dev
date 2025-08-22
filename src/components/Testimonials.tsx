import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Kathleen Smith",
      title: "Web Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Outstanding service and innovative solutions that transformed our practice. The team's expertise in AI and cloud technology is unmatched.",
      name: "Dr. Michael Johnson",
      title: "Chief Medical Officer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Stellar Med Software delivered exactly what we needed. Their approach to healthcare technology is refreshing and effective.",
      name: "Sarah Thompson",
      title: "Practice Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c133?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            CLIENT FEEDBACK
          </div>
          
          <blockquote className="text-lg sm:text-2xl md:text-3xl text-gray-600 leading-relaxed mb-12 px-2 sm:px-0">
            "{current.quote.split('adipiscing elit')[0]}
            <span className="font-semibold text-gray-900">adipiscing elit</span>
            {current.quote.split('adipiscing elit')[1]}"
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-gray-300 hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900">{current.name}</h4>
              <p className="text-gray-600 text-sm">{current.title}</p>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-gray-300 hover:border-primary hover:text-primary bg-primary text-white hover:bg-primary/90"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;