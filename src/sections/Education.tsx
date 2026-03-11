import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  CheckCircle,
} from "lucide-react";

interface EducationItem {
  institution: string;
  qualification: string;
  year: string;
  details?: string[];
  highlight?: boolean;
}

const education: EducationItem[] = [
  {
    institution: "Tshwane South TVET College",
    qualification:
      "Higher Certificate in Information Technology: System Development",
    year: "February 2025",
    details: [
      "Principles of creating computer software",
      "Internet and world-wide-web principles",
      "Documentation and testing standards",
      "Database management systems",
      "SQL programming",
    ],
    highlight: true,
  },
  {
    institution: "Qualitas Training",
    qualification: "Trade Certificate - Electrical",
    year: "August 2020",
    details: [
      "Electrical Certificate under Section 26(D)(4)",
      "Skill Development Act compliance",
    ],
  },
  {
    institution: "PCD College",
    qualification: "NQF Level 3 & 4 - Electrical Engineering",
    year: "October 2019",
    details: [
      "6 months theory + 6 months practical",
      "Programmable Logic Controllers",
      "AC machines and control gear",
      "Three-phase industrial installations",
    ],
  },
  {
    institution: "Industries Education & Training Institution (IETI)",
    qualification: "NQF Level 2 - Electrical Engineering",
    year: "August 2018",
    details: ["National Higher Certificate", "One-year comprehensive course"],
  },
  {
    institution: "Jethro Pelle High School",
    qualification: "Senior Certificate (Grade 12)",
    year: "2009",
  },
];

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024",
    subtitle: "Generative AI Certified Professional",
    date: "August 2024",
    icon: Award,
  },
];

export function Education() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`relative p-6 rounded-xl transition-all duration-700 ${
                    edu.highlight
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50"
                      : "bg-gray-800/50 border border-gray-700 hover:border-purple-500/50"
                  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {edu.highlight && (
                    <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold">
                      Latest
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${edu.highlight ? "bg-cyan-500/20" : "bg-purple-500/20"}`}
                    >
                      <GraduationCap
                        className={`w-6 h-6 ${edu.highlight ? "text-cyan-400" : "text-purple-400"}`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {edu.qualification}
                      </h3>
                      <p
                        className={`font-medium mb-2 ${edu.highlight ? "text-cyan-400" : "text-purple-400"}`}
                      >
                        {edu.institution}
                      </p>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>

                      {edu.details && (
                        <ul className="space-y-1">
                          {edu.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Professional Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-5 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-yellow-500/20">
                        <cert.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                        {cert.date}
                      </span>
                    </div>
                    <h4 className="text-white font-bold mb-1">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 p-5 rounded-xl bg-gray-800/50 border border-gray-700">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  Education Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Fields</span>
                    <span className="text-white font-bold">
                      IT & Electrical
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Certifications
                    </span>
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Years of Study
                    </span>
                    <span className="text-white font-bold">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
