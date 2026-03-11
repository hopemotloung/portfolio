import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  FileCode, 
  Palette, 
  Cpu, 
  Zap,
  GitBranch,
  Terminal,
  Layers,
  Workflow
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 90, icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Java', level: 85, icon: Code2, color: 'from-red-400 to-red-600' },
  { name: 'JavaScript', level: 88, icon: FileCode, color: 'from-yellow-300 to-orange-400' },
  { name: 'PHP', level: 80, icon: Database, color: 'from-purple-400 to-purple-600' },
  { name: 'SQL', level: 85, icon: Database, color: 'from-blue-400 to-blue-600' },
  { name: 'HTML5 & CSS', level: 92, icon: Palette, color: 'from-orange-400 to-pink-500' },
  { name: 'PLC Programming', level: 88, icon: Cpu, color: 'from-green-400 to-green-600' },
  { name: 'Electrical Systems', level: 90, icon: Zap, color: 'from-cyan-400 to-cyan-600' },
];

const softSkills = [
  { name: 'Problem Solving', icon: Workflow },
  { name: 'Leadership', icon: Layers },
  { name: 'Time Management', icon: GitBranch },
  { name: 'Communication', icon: Terminal },
  { name: 'Team Collaboration', icon: Code2 },
  { name: 'Analytical Thinking', icon: Cpu },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevels(skills.map(s => s.level));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-400" />
              Programming & Technical
            </h3>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${animatedLevels[index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Other */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-pink-400" />
              Professional Skills
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 hover:bg-gray-800 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <skill.icon className="w-8 h-8 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Key Certifications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <div>
                    <p className="text-white font-medium">Oracle Cloud Infrastructure 2024</p>
                    <p className="text-gray-400 text-sm">Generative AI Certified Professional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                  <div>
                    <p className="text-white font-medium">Higher Certificate in IT</p>
                    <p className="text-gray-400 text-sm">Systems Development - Tshwane South TVET</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                  <div>
                    <p className="text-white font-medium">Electrical Trade Certificate</p>
                    <p className="text-gray-400 text-sm">Section 26(D) - Qualitas Training</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
