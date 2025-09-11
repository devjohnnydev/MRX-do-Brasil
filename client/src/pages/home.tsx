import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      
      {/* Seção com fundo de placas eletrônicas */}
      <section className="relative py-20 overflow-hidden">
        {/* Background da imagem de placas */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/attached_assets/Captura_de_tela_2025-09-05_074704-removebg-preview_1757071313223.png)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Tecnologia de Ponta</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Utilizamos equipamentos e processos tecnológicos avançados para garantir 
              a reciclagem mais eficiente e segura de componentes eletrônicos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 card-hover">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Separação Automatizada</h3>
                <p className="text-muted-foreground">
                  Sistemas automatizados para separação precisa de componentes e materiais valiosos.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 card-hover">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Análise de Componentes</h3>
                <p className="text-muted-foreground">
                  Identificação e análise detalhada de cada componente para maximizar a recuperação.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 card-hover">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Certificação Total</h3>
                <p className="text-muted-foreground">
                  Processo certificado que garante rastreabilidade e conformidade ambiental.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Do Descarte à Nova Vida</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada placa eletrônica que processamos passa por um rigoroso processo de desmontagem, 
                separação de materiais preciosos e transformação em matéria-prima para novos produtos. 
                Desta forma, contribuímos para um ciclo sustentável de produção e consumo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <Gallery />
      
      {/* Seção Comercial - Compra de Resíduos */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Venha Negociar Conosco
            </h2>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A MRX do Brasil é uma empresa conceituada no mercado de <strong className="text-primary">sucatas eletrônicas</strong>. 
                Nossa área comercial está sempre em busca de novos fornecedores e parcerias para 
                ampliar nossa capacidade de processamento.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Se você possui resíduos eletrônicos em <span className="text-primary font-bold">qualquer quantidade</span>, entre em contato com nossa 
                área comercial para negociação. Oferecemos preços competitivos e coleta especializada.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">Preços Competitivos</h3>
                  <p className="text-sm text-muted-foreground">
                    Avaliação justa e preços de mercado para seus resíduos eletrônicos
                  </p>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.42.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">Coleta Especializada</h3>
                  <p className="text-sm text-muted-foreground">
                    Fazemos a coleta em sua empresa com nossa frota especializada
                  </p>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">Documentação Completa</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos os certificados e documentações necessárias para auditoria
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511940326215?text=Olá! Tenho resíduos eletrônicos para venda e gostaria de negociar com a área comercial da MRX do Brasil." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold ripple hover:bg-accent transition-colors inline-flex items-center justify-center"
                  data-testid="commercial-whatsapp-button"
                >
                  <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                  Falar com Área Comercial
                </a>
                <a 
                  href="mailto:comercial@mrxdobrasil.com?subject=Proposta Comercial - Venda de Resíduos Eletrônicos" 
                  className="bg-secondary border border-border text-foreground px-8 py-4 rounded-lg font-semibold ripple hover:bg-card transition-colors inline-flex items-center justify-center"
                  data-testid="commercial-email-button"
                >
                  Enviar Proposta por Email
                </a>
              </div>
            </div>
            
            <div className="bg-accent/50 border border-accent rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Tipos de Materiais que Compramos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold">Placas Eletrônicas</div>
                  <div className="text-muted-foreground">CPUs, GPUs, Memórias</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Computadores</div>
                  <div className="text-muted-foreground">Desktops, Notebooks</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Servidores</div>
                  <div className="text-muted-foreground">Equipamentos Enterprise</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Diversos</div>
                  <div className="text-muted-foreground">Cabos, Conectores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511940326215" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-floating floating"
        data-testid="whatsapp-float-button"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
        </svg>
      </a>
    </div>
  );
}
