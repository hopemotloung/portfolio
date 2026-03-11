import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone, Calendar, Globe, Heart } from "lucide-react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Mabopane, South Africa" },
    { icon: Mail, label: "Email", value: "hopemotloung@gmail.com" },
    { icon: Phone, label: "Phone", value: "084 0976 207" },
    { icon: Calendar, label: "Date of Birth", value: "30 August 1991" },
    { icon: Globe, label: "Languages", value: "English, Setswana, IsiZulu" },
    {
      icon: Heart,
      label: "Interests",
      value: "Reading, Travelling, Music, Sports",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who Am I?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-700">
                <img
                  src="/images/profile-professional.jpg"
                  alt="Hope Tshepo Motloung - Professional"
                  className="w-full max-w-md object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              A Passionate{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tech Enthusiast
              </span>{" "}
              & Educator
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a dedicated IT Systems Developer and Electrical Engineer with
              a unique blend of technical expertise in both software development
              and electrical systems. My journey began in electrical
              engineering, where I honed my problem-solving skills, before
              transitioning into the world of software development and AI.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              My recent experience is serving as a Facilitator, were I guided
              students through IT Systems Development programs, sharing my
              knowledge and passion for technology. I hold an Oracle Cloud
              Infrastructure 2024 Generative AI Certification, keeping me at the
              forefront of emerging technologies.
            </p>

            {/* Personal Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
