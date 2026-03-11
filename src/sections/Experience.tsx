import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'AB4IR',
    position: 'Facilitator - IT Systems Development',
    duration: 'July 2025 - December 2025',
    location: 'South Africa',
    description: 'Facilitated a comprehensive six-month IT Systems Development (NQF Level 4) program, guiding students through core principles of software and application development.',
    highlights: [
      'Managed end-to-end instruction for software development',
      'Guided learners in coding and system design',
      'Developed curriculum materials and assessments',
    ],
  },
  {
    company: 'Morula View Primary School',
    position: 'Maintenance Facilities',
    duration: 'January 2021 - July 2021',
    location: 'South Africa',
    description: 'Participated in the Youth Presidential Employment Initiative (PYEI) working in the maintenance field as a handyman.',
    highlights: [
      'Performed general maintenance tasks',
      'Supported facility operations',
      'Collaborated with maintenance team',
    ],
  },
  {
    company: 'Mohuba Projects',
    position: 'Electrician',
    duration: 'May 2019 - December 2019',
    location: 'South Africa',
    description: 'Performed maintenance of motor control centers and installations of CCTV systems for various clients.',
    highlights: [
      'Maintained motor control centers',
      'Installed CCTV systems',
      'Troubleshot electrical issues',
    ],
  },
  {
    company: 'Department of Infrastructure Development',
    position: 'Tradesman Assistant',
    duration: 'January 2014 - August 2017',
    location: 'Gauteng, South Africa',
    description: 'Participated in the National Youth Service Program (NYS) as a tradesman aid, primarily working in the electrical field doing both installation and maintenance in local government clinics and hospitals.',
    highlights: [
      'Electrical installations in healthcare facilities',
      'Maintenance of electrical systems',
      'Compliance with safety regulations',
    ],
  },
];

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-8 md:mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-[#0a0a14] md:-translate-x-1/2 z-10" />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
                }`}
              >
                <div
                  className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-3">{exp.description}</p>

                  {/* Expandable highlights */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-2 pt-3 border-t border-gray-700">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <Briefcase className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
