import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import wasteImage1 from "@assets/coleta-aparelhos-eletronicos-03_1756314694405.jpg";
import wasteImage2 from "@assets/coleta-aparelhos-eletronicos-04_1756314694405.jpg";
import wasteImage3 from "@assets/coleta-destinacao-residuos-01_1756314694404.jpg";
import wasteImage4 from "@assets/coleta-lixo-eletronico-bh-02_1756314694404.jpg";
import certificacaoImage from "@assets/certificação_1757432623057.jpg";
import qualidadeImage from "@assets/qualidade_1757432768660.jpg";
import capaceteImage from "@assets/capacete_1757433380279.png";
import whatsappImage from "@assets/WhatsApp Image 2025-09-04 at 15.48.32_1757069924826.jpeg";
import captureImage from "@assets/Captura de tela 2025-08-27 133351_1756315169145.png";

export default function Gallery() {
  const galleryItems = [
    {
      image: wasteImage1,
      title: "Componentes Eletrônicos",
      description: "Placas de circuito, processadores e componentes diversos coletados para reciclagem responsável"
    },
    {
      image: capaceteImage,
      title: "Instalações Modernas",
      description: "Equipamentos especializados para desmontagem e classificação de resíduos"
    },
    {
      image: wasteImage2,
      title: "Processamento Seguro",
      description: "Equipe especializada com equipamentos de proteção para manuseio seguro dos materiais"
    },
    {
      image: wasteImage3,
      title: "Separação de Materiais",
      description: "Processo minucioso de separação e classificação de diferentes tipos de materiais"
    },
    {
      image: qualidadeImage,
      title: "Controle de Qualidade",
      description: "Rigoroso controle de qualidade em todas as etapas do processo de reciclagem"
    },
    {
      image: whatsappImage,
      title: "Operações Diárias",
      description: "Nossas operações contínuas garantindo processamento eficiente dos resíduos"
    },
    {
      image: certificacaoImage,
      title: "Certificação Total",
      description: "Documentação completa e certificações para garantir conformidade ambiental"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Nossa Galeria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossos processos e instalações especializadas em reciclagem de resíduos eletrônicos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="fade-in">
              <Card className="bg-card border-border overflow-hidden gallery-item" data-testid={`gallery-item-${index}`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-all duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
