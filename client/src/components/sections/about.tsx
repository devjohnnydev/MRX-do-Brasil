import { History, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import fachadadaImage from "@assets/Gemini_Generated_Image_83rhpv83rhpv83rh_1757429635032.png";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 mb-6">
              <History className="text-primary mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Desde 2019</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">História</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Um sonho nasceu em <strong className="text-primary">novembro de 2019</strong>: construir uma empresa que unisse 
              inovação, responsabilidade e compromisso com a sustentabilidade. Desde o início, a visão foi clara — transformar 
              resíduos em valor, cuidando do meio ambiente e contribuindo para uma economia mais circular e consciente.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com dedicação e aprendizado, esse sonho tomou forma e, em <strong className="text-primary">23 de setembro de 2022</strong>, 
              nasceu oficialmente a <strong className="text-primary">MRX do Brasil</strong>, estruturada sobre princípios sólidos de 
              responsabilidade ambiental, valorização de parceiros e fornecedores, e compromisso com a transparência e a eficiência.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ao decorrer do tempo, ouvindo a necessidade do mercado e o aumento da demanda, um parceiro com o mesmo sonho e propósito 
              passou a fazer parte dessa história. Essa união fortaleceu a empresa, ampliando sua capacidade de atuação e consolidando 
              ainda mais seu compromisso em <strong className="text-primary">transformar desafios em oportunidades</strong> e construir 
              um futuro melhor para todos.
            </p>
          </div>
          
          <div className="fade-in">
            <img 
              src={fachadadaImage} 
              alt="Fachada da MRX do Brasil - Nossa sede em operação" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-facility-image"
            />
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-years">2+</div>
                  <div className="text-sm text-muted-foreground">Anos no Mercado</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-tons">5000+</div>
                  <div className="text-sm text-muted-foreground">Toneladas Recicladas</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-compliance">100%</div>
                  <div className="text-sm text-muted-foreground">Conformidade Ambiental</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-support">24h</div>
                  <div className="text-sm text-muted-foreground">Suporte Técnico</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission, Vision, Values - Full Width Section */}
      <div className="w-full px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Target className="mr-3 h-6 w-6" />
                Missão
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Promover a sustentabilidade, oferecendo um atendimento humano e justo, 
                e manter-se como parceira confiável em todas as relações de negócio, 
                transformando desafios em oportunidades e construindo um futuro melhor para todos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Eye className="mr-3 h-6 w-6" />
                Visão
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                "Transformar o setor de reciclagem em um exemplo de sustentabilidade e 
                responsabilidade, construindo um futuro mais consciente para as próximas gerações."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Heart className="mr-3 h-6 w-6" />
                Valores
              </h3>
              <div className="text-base text-muted-foreground leading-relaxed">
                <p className="mb-2"><strong>Transparência:</strong> atuar com clareza em todas as relações</p>
                <p className="mb-2"><strong>Credibilidade:</strong> construir confiança com clientes, fornecedores e parceiros</p>
                <p className="mb-2"><strong>Respeito:</strong> valorizar pessoas, relações e o meio ambiente</p>
                <p className="mb-2"><strong>Sustentabilidade:</strong> promover práticas que gerem impacto positivo</p>
                <p><strong>Empatia:</strong> compreender e agir com humanidade em todas as situações</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}