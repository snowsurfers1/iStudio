import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h1 
            className="text-3xl"
            style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.4))',
              fontWeight: '400',
              letterSpacing: '0.02em'
            }}
          >
            iStudio
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-400 transition-colors">
            Наши услуги
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-cyan-400 transition-colors">
            Портфолио
          </button>
          <button onClick={() => scrollToSection('contacts')} className="text-gray-300 hover:text-cyan-400 transition-colors">
            Контакты
          </button>
        </nav>

        <button 
          className="md:hidden text-cyan-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-cyan-500/10">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Наши услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Контакты
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
