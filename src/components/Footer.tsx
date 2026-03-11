import { Code2, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold">
                Hope<span className="text-cyan-400">.</span>dev
              </span>
            </a>
            <p className="text-gray-400 text-sm">
              © {currentYear} Hope Tshepo Motloung. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in South Africa</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
