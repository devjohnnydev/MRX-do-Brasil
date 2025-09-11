import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronDown, Leaf, Recycle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveParticles from "@/components/ui/interactive-particles";

export default function Hero() {
  const typingText = useTypingAnimation([
    'Reciclagem de Resíduos Eletrônicos',
    'Logística Reversa Especializada', 
    'Sustentabilidade Empresarial',
    'Preservação do Meio Ambiente'
  ]);

  useScrollAnimation();

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToHistory = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center hex-pattern overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      
      {/* Interactive Particles */}
      <InteractiveParticles />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span style={{color: '#196332'}}>MRX DO BRASIL</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className="typing-text font-medium">{typingText}</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Desde 2022, lideramos a <strong className="text-primary">logística reversa</strong> de equipamentos eletrônicos no Brasil. 
            Fundada por Emanuel com a missão de <strong className="text-primary">preservar o planeta</strong> através da reciclagem responsável.
          </p>
          
          <div className="inline-flex items-center bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-8">
            <Leaf className="text-primary mr-3 h-5 w-5" />
            <span className="text-lg font-medium text-foreground">Sustentabilidade, Responsabilidade e Inovação em cada processo</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToServices}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg ripple hover:bg-accent transition-colors h-auto"
              data-testid="hero-services-button"
            >
              <Recycle className="mr-3 h-5 w-5" />
              Nossos Serviços
            </Button>
            <button 
              onClick={scrollToHistory}
              className="bg-secondary border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg ripple hover:bg-card transition-colors inline-flex items-center justify-center"
              data-testid="hero-history-button"
            >
              <BookOpen className="mr-3 h-5 w-5 text-primary" />
              Nossa História
            </button>
            <a 
              href="https://wa.me/5511940326215" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card/50 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg ripple hover:bg-card transition-colors inline-flex items-center justify-center"
              data-testid="hero-whatsapp-button"
            >
              <svg className="mr-3 h-5 w-5" fill="#196332" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
              Solicitar Coleta
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center fade-in" data-testid="stat-experience">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Anos no Mercado</div>
            </div>
            <div className="text-center fade-in" data-testid="stat-companies">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Empresas Atendidas</div>
            </div>
            <div className="text-center fade-in" data-testid="stat-recycling">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Reciclagem Responsável</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
