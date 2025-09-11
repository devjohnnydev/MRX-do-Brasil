import { ArrowLeft, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Parceiros() {
  const partners = [
    {
      name: "ApexTech Metais",
      url: "https://apextechmetais.com.br/",
      description: "Empresa especializada em metais com tecnologia avançada para processamento e reciclagem de materiais eletrônicos.",
      foundedYear: "2010",
      specialty: "Processamento de Metais Preciosos",
      type: "Parceiro Tecnológico"
    },
    {
      name: "Metalúrgica São Paulo",
      description: "Uma das maiores metalúrgicas do Brasil, com mais de 120 anos de tradição no mercado de metais e reciclagem.",
      foundedYear: "1900",
      specialty: "Metalurgia e Fundição",
      type: "Parceiro Centenário"
    },
    {
      name: "Fundição Nacional",
      description: "Empresa centenária especializada em fundição e processamento de metais recicláveis, atuando há mais de 110 anos.",
      foundedYear: "1912",
      specialty: "Fundição Especializada",
      type: "Parceiro Centenário"
    },
    {
      name: "Reciclagem Industrial Ltda",
      description: "Pioneira no setor de reciclagem industrial no Brasil, com 105 anos de experiência em processamento sustentável.",
      foundedYear: "1918",
      specialty: "Reciclagem Industrial",
      type: "Parceiro Centenário"
    }
  ];

  const calculateYears = (foundedYear: string) => {
    return new Date().getFullYear() - parseInt(foundedYear);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
      </div>
      
      {/* Header */}
      <section className="pt-20 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Nossos Parceiros</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos com empresas de tradição e excelência no mercado, 
              incluindo empresas centenárias e parceiros tecnológicos especializados.
            </p>
          </div>
        </div>
      </section>
      
      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="fade-in">
                  <Card className="bg-card border-border h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl font-bold mb-2 text-primary">
                            {partner.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{calculateYears(partner.foundedYear)} anos no mercado</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Building2 className="h-4 w-4 mr-2" />
                            <span>{partner.type}</span>
                          </div>
                        </div>
                        {partner.url && (
                          <a 
                            href={partner.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          >
                            <ExternalLink className="h-5 w-5 text-primary" />
                          </a>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <h4 className="font-semibold text-primary mb-2">Especialidade</h4>
                          <p className="text-sm text-muted-foreground">{partner.specialty}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                        {partner.url && (
                          <div className="pt-4">
                            <a 
                              href={partner.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Visitar Site
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Seja Nosso Parceiro
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A MRX do Brasil está sempre em busca de novas parcerias estratégicas. 
                Se sua empresa possui tradição no mercado e compartilha nossos valores 
                de sustentabilidade e responsabilidade ambiental, venha conversar conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511940326215?text=Olá! Gostaria de saber mais sobre oportunidades de parceria com a MRX do Brasil." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors inline-flex items-center justify-center"
                >
                  <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                  Falar sobre Parceria
                </a>
                <a 
                  href="mailto:comercial@mrxdobrasil.com?subject=Proposta de Parceria" 
                  className="bg-secondary border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-card transition-colors inline-flex items-center justify-center"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 MRX DO BRASIL - Mr do Brasil Sucatas Eletrônicas Ltda
          </p>
          <p className="text-sm text-muted-foreground">
            CNPJ: 48.058.447/0001-48 | Estr. Pedro da Cunha Albuquerque Lopes, 3156 - Perobal, América - SP
          </p>
        </div>
      </footer>
    </div>
  );
}