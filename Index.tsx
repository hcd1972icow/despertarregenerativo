import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroFarm from "@/assets/hero-farm.jpg";
import farmerPortrait from "@/assets/farmer-portrait.jpg";
import natureDetail from "@/assets/nature-detail.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFarm}
            alt="Fazenda regenerativa com gado pastando em campos verdejantes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-primary-foreground">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Regenere o futuro da pecuária
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Junte-se ao movimento que transforma fazendas, fortalece comunidades e restaura ecossistemas através de práticas regenerativas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover">
                <Link to="/como-participar">
                  Participar Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/sobre">Conheça o Projeto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground">
              Despertar Regenerativo é uma iniciativa conjunta da ESGpec e MilkPoint que visa transformar a pecuária brasileira através de práticas sustentáveis e regenerativas, conectando produtores com conhecimento, ferramentas e uma comunidade engajada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Sprout className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Regeneração</h3>
                <p className="text-muted-foreground">
                  Práticas que restauram a saúde do solo, aumentam a biodiversidade e capturam carbono.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
                <p className="text-muted-foreground">
                  Conexão entre produtores, especialistas e parceiros para troca de conhecimento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impacto Mensurável</h3>
                <p className="text-muted-foreground">
                  Ferramentas gratuitas para medir e maximizar o impacto positivo da sua fazenda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={farmerPortrait}
                alt="Produtor sorrindo em pastagem verdejante"
                className="rounded-xl shadow-soft"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Ferramentas Gratuitas para Produtores</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Acesse gratuitamente as ferramentas ESGpec desenvolvidas para ajudar produtores a mensurar, planejar e implementar práticas regenerativas em suas propriedades.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Diagnóstico de Sustentabilidade</h4>
                    <p className="text-muted-foreground">Avalie o nível de sustentabilidade da sua propriedade</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Calculadora de Carbono</h4>
                    <p className="text-muted-foreground">Mensure e acompanhe sua pegada de carbono</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Plano de Ação Personalizado</h4>
                    <p className="text-muted-foreground">Receba recomendações específicas para sua fazenda</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-hero hover:shadow-hover transition-all">
                <Link to="/ferramentas">
                  Explorar Ferramentas <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Coluna Exclusiva no MilkPoint</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Acompanhe artigos semanais sobre regeneração, histórias de sucesso de produtores e as últimas tendências em pecuária sustentável na coluna Despertar Regenerativo no portal MilkPoint.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link to="/coluna">
                  Ler Artigos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={natureDetail}
                alt="Detalhe de grama verde saudável com orvalho"
                className="rounded-xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Impacto Real</h2>
            <p className="text-lg text-primary-foreground/90">
              Juntos estamos transformando a pecuária brasileira
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Produtores Engajados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                <Sprout className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">15.000</div>
              <div className="text-primary-foreground/80">Hectares Regenerados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-primary-foreground/80">Redução de Carbono</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Transformar sua Fazenda?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cadastre-se gratuitamente e comece sua jornada rumo a uma pecuária mais regenerativa e sustentável.
          </p>
          <Button asChild size="lg" className="bg-gradient-hero hover:shadow-hover transition-all">
            <Link to="/como-participar">
              Comece Agora Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
