import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            border: '1px solid #333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;
