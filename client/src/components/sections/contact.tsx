import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/ui/google-map";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  company: z.string().optional(),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  cep: z.string().optional(),
  materialType: z.string().min(1, "Selecione o tipo de material"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      cep: "",
      materialType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Create WhatsApp message with form data
    const message = `Olá! Gostaria de solicitar uma coleta de resíduos eletrônicos.

📋 *Dados do Solicitante:*
• Nome: ${values.name}
${values.company ? `• Empresa: ${values.company}` : ''}
• Email: ${values.email}
• Telefone: ${values.phone}
${values.cep ? `• CEP: ${values.cep}` : ''}
• Tipo de Material: ${values.materialType}
${values.message ? `• Observações: ${values.message}` : ''}

Aguardo contato para agendamento da coleta. Obrigado!`;

    const whatsappUrl = `https://wa.me/5511940326215?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });
    
    form.reset();
  }

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite sua coleta ou tire suas dúvidas com nossos especialistas. Estamos aqui para ajudar!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Solicite sua Coleta</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome Completo *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Seu nome completo" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Nome da empresa" 
                                  {...field} 
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="seu@email.com" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(11) 99999-9999" 
                                  {...field} 
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="cep"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CEP</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="00000-000" 
                                {...field} 
                                data-testid="input-cep"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="materialType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Material *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-material-type">
                                  <SelectValue placeholder="Selecione o tipo de material" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="computers">Computadores e Notebooks</SelectItem>
                                <SelectItem value="printers">Impressoras e Periféricos</SelectItem>
                                <SelectItem value="phones">Telefones e Celulares</SelectItem>
                                <SelectItem value="network">Equipamentos de Rede</SelectItem>
                                <SelectItem value="others">Outros Eletrônicos</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4}
                                placeholder="Descreva os equipamentos que precisa descartar..." 
                                {...field} 
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold ripple hover:bg-accent transition-colors"
                        data-testid="button-submit"
                      >
                        <Send className="mr-3 h-5 w-5" />
                        Enviar Solicitação
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="fade-in">
              <div className="space-y-8">
                {/* WhatsApp Contact */}
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#196332]/20 rounded-xl flex items-center justify-center mr-4">
                        <svg className="h-8 w-8" fill="#196332" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">WhatsApp</h3>
                        <p className="text-muted-foreground">Atendimento imediato</p>
                      </div>
                    </div>
                    <p className="text-lg mb-4">(11) 94032-6215</p>
                    <a 
                      href="https://wa.me/5511940326215" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold ripple hover:bg-accent transition-colors inline-flex items-center"
                      data-testid="contact-whatsapp-button"
                    >
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                      </svg>
                      Enviar Mensagem
                    </a>
                  </CardContent>
                </Card>
                
                {/* Email Contact */}
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-muted-foreground">Suporte por email</p>
                      </div>
                    </div>
                    <p className="text-lg mb-4">comercial@mrxdobrasil.com</p>
                    <a 
                      href="mailto:comercial@mrxdobrasil.com" 
                      className="bg-secondary border border-border text-foreground px-6 py-3 rounded-lg font-semibold ripple hover:bg-card transition-colors inline-flex items-center"
                      data-testid="contact-email-button"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                    </a>
                  </CardContent>
                </Card>
                
                {/* Working Hours */}
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">Segunda a Sexta</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta:</span>
                        <span className="text-primary font-medium">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="text-primary font-medium">08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seção do Mapa em Largura Total */}
      <div className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold gradient-text mb-6">Nossa Localização</h3>
            <p className="text-xl text-muted-foreground mb-4">Encontre-nos facilmente</p>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">Estr. Pedro da Cunha Albuquerque Lopes, 3156 - Perobal</p>
              <p className="text-lg mb-4">América - São Paulo - SP</p>
              <div className="text-sm text-muted-foreground">
                <p><strong>Razão Social:</strong> Mr do Brasil Sucatas Eletrônicas Ltda</p>
                <p><strong>Nome Fantasia:</strong> Mrx do Brasil</p>
                <p><strong>CNPJ:</strong> 48.058.447/0001-48</p>
              </div>
            </div>
          </div>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.962059318281!2d-46.3567889274912!3d-23.425737678893192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7d4f1614932f%3A0x56df137511cf47bb!2sEstr.%20Pedro%20da%20Cunha%20Albuquerque%20Lopes%2C%203153%2C%20Aruj%C3%A1%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1757071897380!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
