import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhyUsCompliance from "@/components/WhyUsCompliance";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CallToAction />
      <About />
      <Projects />
      <WhyUsCompliance />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
