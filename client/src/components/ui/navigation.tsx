import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetUrl } from "@/lib/config";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
      
      if (header) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.classList.remove('header-visible');
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
          header.classList.add('header-visible');
        }
      }
      
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };


  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={getAssetUrl("logo_1756386223432.png")} 
            alt="MRX DO BRASIL" 
            className="h-12 w-auto"
            data-testid="header-logo"
          />
          <div>
            <p className="text-sm text-muted-foreground">Reciclagem Sustentável desde 2022</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-inicio"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('servicos')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-servicos"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-sobre"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('galeria')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-galeria"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-contato"
          >
            Contato
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://wa.me/5511940326215" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg ripple hover:bg-accent transition-colors"
            data-testid="nav-whatsapp"
          >
            <svg className="inline w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
            </svg>
            WhatsApp
          </a>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-servicos"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('galeria')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-galeria"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-contato"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
