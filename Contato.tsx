import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderemos em breve.",
    });
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar. Entre em contato conosco para dúvidas, sugestões ou parcerias.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">E-mail</h3>
                      <p className="text-sm text-muted-foreground">contato@despertarregenerativo.com</p>
                      <p className="text-sm text-muted-foreground">suporte@despertarregenerativo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Telefone</h3>
                      <p className="text-sm text-muted-foreground">+55 (11) 0000-0000</p>
                      <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Endereço</h3>
                      <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                      <p className="text-sm text-muted-foreground">Brasil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft bg-gradient-hero text-primary-foreground">
                <CardContent className="pt-8">
                  <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                  <div className="space-y-1 text-sm">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-soft">
                <CardHeader>
                  <CardTitle className="text-3xl">Envie sua Mensagem</CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e responderemos o mais breve possível
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto *</Label>
                        <Input
                          id="assunto"
                          name="assunto"
                          value={formData.assunto}
                          onChange={handleChange}
                          required
                          placeholder="Assunto da mensagem"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        placeholder="Digite sua mensagem aqui..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:shadow-hover transition-all">
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">O programa é realmente gratuito?</h3>
                  <p className="text-muted-foreground">
                    Sim! O acesso ao Despertar Regenerativo e todas as ferramentas ESGpec é 100% gratuito para produtores. Nossa missão é democratizar o acesso ao conhecimento e tecnologia para regeneração.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Preciso ter experiência prévia com práticas regenerativas?</h3>
                  <p className="text-muted-foreground">
                    Não! O programa foi desenvolvido para atender desde iniciantes até produtores experientes. Oferecemos todo o suporte necessário para começar sua jornada regenerativa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quanto tempo leva para ver resultados?</h3>
                  <p className="text-muted-foreground">
                    Os primeiros resultados podem ser observados em 3-6 meses, mas a transformação completa é um processo contínuo. Cada propriedade tem seu próprio ritmo, dependendo das práticas implementadas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Como funciona o suporte técnico?</h3>
                  <p className="text-muted-foreground">
                    Oferecemos suporte através de webinars mensais, comunidade online, e conteúdo exclusivo. Para consultorias personalizadas, temos parcerias com especialistas que podem ser contratados separadamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
