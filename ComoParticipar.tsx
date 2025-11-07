import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, UserPlus, BookOpen, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ComoParticipar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    propriedade: "",
    cidade: "",
    estado: "",
    tamanho: "",
    interesse: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Em breve entraremos em contato com mais informações sobre o programa.",
    });
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      propriedade: "",
      cidade: "",
      estado: "",
      tamanho: "",
      interesse: "",
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
              Como Participar
            </h1>
            <p className="text-xl text-muted-foreground">
              Junte-se gratuitamente ao Despertar Regenerativo e comece sua jornada rumo a uma pecuária mais sustentável
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">3 Passos Simples</h2>
            <p className="text-lg text-muted-foreground">
              Comece agora mesmo, sem custos e sem compromisso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-soft text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Cadastre-se</h3>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo com seus dados e informações da sua propriedade
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Acesse as Ferramentas</h3>
                <p className="text-muted-foreground">
                  Receba acesso imediato às ferramentas ESGpec e faça seu diagnóstico inicial
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Comece a Transformação</h3>
                <p className="text-muted-foreground">
                  Implemente práticas regenerativas com apoio da comunidade e especialistas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Formulário de Cadastro</CardTitle>
                <p className="text-center text-muted-foreground">
                  Todos os campos são importantes para personalizarmos sua experiência
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propriedade">Nome da Propriedade *</Label>
                    <Input
                      id="propriedade"
                      name="propriedade"
                      value={formData.propriedade}
                      onChange={handleChange}
                      required
                      placeholder="Fazenda..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                        placeholder="Sua cidade"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Input
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                        placeholder="UF"
                        maxLength={2}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tamanho">Tamanho da Propriedade (hectares) *</Label>
                    <Input
                      id="tamanho"
                      name="tamanho"
                      type="number"
                      value={formData.tamanho}
                      onChange={handleChange}
                      required
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interesse">Por que você quer participar?</Label>
                    <Textarea
                      id="interesse"
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre seus objetivos e interesses..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:shadow-hover transition-all">
                    Cadastrar Gratuitamente
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">O Que Você Ganha</h2>
            <p className="text-lg text-muted-foreground">
              Benefícios exclusivos para participantes do Despertar Regenerativo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <UserPlus className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Acesso Gratuito</h3>
                <p className="text-sm text-muted-foreground">
                  Todas as ferramentas ESGpec sem custo
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Conteúdo Exclusivo</h3>
                <p className="text-sm text-muted-foreground">
                  Artigos, webinars e materiais educativos
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Comunidade</h3>
                <p className="text-sm text-muted-foreground">
                  Conexão com outros produtores e especialistas
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Certificações</h3>
                <p className="text-sm text-muted-foreground">
                  Reconhecimento por práticas regenerativas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComoParticipar;
