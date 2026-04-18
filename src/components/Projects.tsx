import { Clock, Layers, Zap, ShieldCheck } from "lucide-react";

const VisionMission = () => {
  const problems = [
    {
      icon: Clock,
      title: "Accelerating Time to Market",
      description:
        "We understand the importance of accelerating time to market. We specialize in streamlining the entire development process, ensuring that your product moves from concept to commercialization as quickly as possible without compromising quality or compliance.",
    },
    {
      icon: Layers,
      title: "Handling Complex Development",
      description:
        "TechFlex specializes in handling complex development projects, developing a deep bench of technical expertise, robust project management practices, and state-of-the-art technologies.",
    },
    {
      icon: Zap,
      title: "Accelerate your MedTech",
      description:
        "Our comprehensive suite of services—ranging from cutting-edge software and hardware development to in-depth regulatory expertise—ensures that your MedTech innovations are developed efficiently and effectively.",
    },
    {
      icon: ShieldCheck,
      title: "Ensuring Regulatory Compliance",
      description:
        "Our deep expertise in regulatory compliance, combined with our comprehensive development capabilities, enables us to streamline the compliance process, reducing the risk of delays and ensuring that your product is market-ready.",
    },
  ];

  const missionPoints = [
    "To provide integrated hardware and software engineering under one roof.",
    "To accelerate med-tech development through efficient execution and rapid prototyping.",
    "To deliver regulatory-ready solutions that meet global quality and safety standards.",
    "To empower innovators to bring life-saving technologies to patients faster.",
  ];

  return (
    <section className="bg-white">
      {/* Vision + Mission */}
      <div className="relative overflow-hidden bg-[#0a1628] text-white">
        {/* Circuit-board decorative bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #00aeef33 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #00aeef22 0%, transparent 40%)`
          }}
        />

        <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Vision & Mission text */}
          <div className="space-y-12">
            {/* Our Vision */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#00aeef] mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To make world-class medical device innovation accessible, fast, and reliable for healthcare
                innovators worldwide.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#00aeef] mb-6">Our Mission</h2>
              <ul className="space-y-3">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#00aeef] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Two stacked images with overlaid labels */}
          <div className="relative flex flex-col gap-5">
            {/* Image 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80"
                alt="Medical device engineering – precision optics"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#00aeef]/90 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-semibold shadow-lg">
                Designed for accuracy,<br />safety, and manufacturability.
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80"
                alt="Medical device software – clinical environment"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-[#0a1628]/90 backdrop-blur-sm border border-[#00aeef]/40 rounded-xl px-4 py-2 text-white text-sm font-semibold shadow-lg text-right">
                Secure, scalable,<br />and built for clinical environments.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Problems We Solve */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="w-16 h-0.5 bg-[#00aeef] mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What Problems We <br className="hidden sm:block" />
              Solve for You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00aeef]/10 flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-[#00aeef]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;