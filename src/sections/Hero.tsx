import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code2, Cpu, Zap } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a14]/80 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-white">Hope </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tshepo
              </span>
              <br />
              <span className="text-white">Motloung</span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              IT Systems Developer & Qualified Electrician
            </p>

            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm">Software Dev</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30">
                <Cpu className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 text-sm">AI Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 text-sm">Electrical Eng</span>
              </div>
            </div>

            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-full border border-gray-500 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse" />
              <div
                className="absolute -inset-4 rounded-full border-2 border-cyan-500/30 animate-spin"
                style={{ animationDuration: "10s" }}
              />
              <div
                className="absolute -inset-8 rounded-full border border-purple-500/20 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/images/profile-cyberpunk.jpg"
                  alt="Hope Tshepo Motloung"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-lg animate-bounce">
                Oracle AI Certified
              </div>
              <div
                className="absolute -bottom-2 -left-4 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                Full Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
