import { CheckCircle } from "lucide-react";

const whyUsPoints = [
  {
    title: "End-to-End Medical Device Engineering",
    description:
      "One partner for hardware, embedded systems, cloud platforms, UX, testing, and production support.",
  },
  {
    title: "Regulatory-Aligned Development",
    description:
      "Built on medical device standards and best practices (FDA, ISO, CE considerations).",
  },
  {
    title: "Dual-Location Efficiency",
    description:
      "US + Eastern European engineering = faster, cost-optimized delivery.",
  },
  {
    title: "Engagement Model",
    description:
      "Flexible, iterative, and designed to support companies under tight timelines.",
  },
  {
    title: "Rapid Prototyping to Production",
    description:
      "Quick iterations, early testing, and seamless transition from engineering to manufacturing.",
  },
];

const compliancePoints = [
  "FDA Class II requirements",
  "CE Marking fundamentals",
  "ISO 13485-aligned engineering processes",
  "IEC 62304 for medical software",
  "Risk management approach (ISO 14971 alignment)",
  "Documentation support (requirements, traceability, test plans)",
];

const WhyUsCompliance = () => {
  return (
    <section className="bg-white">
      {/* ── WHY US ── */}
      <div className="relative overflow-hidden">
        {/* Dark navy top half */}
        <div className="bg-[#0a1628] pt-20 pb-40 relative">
          {/* Subtle circuit glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 70% 40%, #00aeef44 0%, transparent 60%)`,
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left: Why Us text */}
              <div>
                <div className="w-16 h-0.5 bg-[#00aeef] mb-5" />
                <h2 className="text-4xl font-extrabold text-white mb-10">Why Us?</h2>
                <ol className="space-y-7 border-l-2 border-[#00aeef]/30 pl-6">
                  {whyUsPoints.map((point, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-[#00aeef] border-2 border-[#0a1628] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                      <h4 className="text-[#00aeef] font-semibold text-base mb-1">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right: Stacked images */}
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-52">
                  <img
                    src="https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80"
                    alt="Engineer working on medical PCB hardware"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00aeef]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-[#0a1628]/80 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-medium">
                    Hardware Engineering
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-44">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                    alt="Medical software development on monitor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-[#00aeef]/80 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-medium">
                    Software & Firmware
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative -mt-1">
          <svg
            viewBox="0 0 1440 120"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: 100 }}
          >
            <path
              d="M0,0 C360,120 1080,0 1440,80 L1440,0 Z"
              fill="#0a1628"
            />
            <path
              d="M0,40 C400,120 1000,20 1440,100 L1440,120 L0,120 Z"
              fill="#00aeef"
              opacity="0.15"
            />
          </svg>
        </div>
      </div>

      {/* ── COMPLIANCES ── */}
      <div className="bg-white pt-4 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-56">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
                  alt="Regulatory compliance documentation for medical devices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-3 py-1.5 text-[#0a1628] text-xs font-semibold">
                  ISO 13485 Aligned
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-44">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                  alt="Medical device quality system audit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#00aeef]/30 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-[#00aeef]/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-semibold">
                  FDA & CE Ready
                </div>
              </div>
            </div>

            {/* Right: Compliance content */}
            <div>
              <div className="w-16 h-0.5 bg-[#00aeef] mb-5" />
              <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
                Compliances
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                We design with compliance in mind from Day 1. Our development approach aligns with key
                global standards and medical quality systems.
              </p>

              {/* Regulatory Considerations */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="text-xs font-bold text-[#00aeef] uppercase tracking-widest mb-5">
                  Regulatory Considerations
                </h4>
                <ul className="space-y-3">
                  {compliancePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#00aeef] mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsCompliance;