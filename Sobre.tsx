import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Heart, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aerialFarm from "@/assets/aerial-farm.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre o Despertar Regenerativo
            </h1>
            <p className="text-xl text-muted-foreground">
              Uma iniciativa que une forças para transformar a pecuária brasileira através de práticas regenerativas e sustentáveis
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={aerialFarm}
                alt="Vista aérea de fazenda sustentável"
                className="rounded-xl shadow-soft"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Nossa Visão</h2>
              <p className="text-lg text-muted-foreground mb-6">
                O Despertar Regenerativo nasceu da união entre ESGpec e MilkPoint com o objetivo de criar um movimento transformador na pecuária brasileira. Acreditamos que a regeneração dos ecossistemas e a produção de alimentos saudáveis podem e devem andar juntas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa visão é de um Brasil onde cada fazenda seja um exemplo de sustentabilidade, onde produtores sejam valorizados por suas práticas regenerativas, e onde a pecuária seja reconhecida como parte da solução para os desafios climáticos e ambientais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Capacitar produtores rurais com conhecimento, ferramentas e uma comunidade engajada para implementar práticas regenerativas que restauram ecossistemas, aumentam a produtividade e combatem as mudanças climáticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Nossos Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sustentabilidade acima de tudo</li>
                  <li>• Colaboração e compartilhamento de conhecimento</li>
                  <li>• Respeito pela natureza e biodiversidade</li>
                  <li>• Transparência e impacto mensurável</li>
                  <li>• Inovação com propósito</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
            <p className="text-lg text-muted-foreground">
              Uma parceria entre duas organizações pioneiras em sustentabilidade e comunicação agropecuária
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-semibold mb-4">ESGpec</h3>
                <p className="text-muted-foreground mb-4">
                  A ESGpec é referência em consultoria e tecnologia para sustentabilidade na pecuária. Com anos de experiência, desenvolvemos ferramentas inovadoras que ajudam produtores a mensurar e melhorar seu impacto ambiental, social e econômico.
                </p>
                <p className="text-muted-foreground">
                  Nossa expertise em ESG (Environmental, Social and Governance) aplicado ao setor pecuário nos permite oferecer soluções práticas e eficazes para a transição regenerativa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-semibold mb-4">MilkPoint</h3>
                <p className="text-muted-foreground mb-4">
                  O MilkPoint é o maior portal de comunicação para o setor de produção de leite e gado de corte no Brasil. Com alcance nacional e milhares de leitores diários, somos a principal fonte de informação técnica e mercadológica para produtores.
                </p>
                <p className="text-muted-foreground">
                  Nossa plataforma conecta produtores, especialistas e toda a cadeia produtiva, facilitando o compartilhamento de conhecimento e inovações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Princípios da Pecuária Regenerativa</h2>
            <p className="text-lg text-muted-foreground">
              Nossa abordagem se baseia em princípios científicos comprovados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Sprout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Saúde do Solo</h3>
                <p className="text-muted-foreground">
                  Solo vivo é a base de tudo. Práticas que aumentam matéria orgânica e biodiversidade do solo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Manejo Holístico</h3>
                <p className="text-muted-foreground">
                  Integração de animais, plantas e ecossistemas para máxima sinergia e resiliência.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Captura de Carbono</h3>
                <p className="text-muted-foreground">
                  Práticas que sequestram carbono da atmosfera e o armazenam no solo e plantas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Sprout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Biodiversidade</h3>
                <p className="text-muted-foreground">
                  Promoção de ecossistemas diversos que sustentam vida abundante e resiliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bem-estar Animal</h3>
                <p className="text-muted-foreground">
                  Animais saudáveis e felizes em sistemas que respeitam seu comportamento natural.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Viabilidade Econômica</h3>
                <p className="text-muted-foreground">
                  Práticas regenerativas que aumentam produtividade e rentabilidade da fazenda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Faça Parte Desta Transformação</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de produtores que já estão regenerando suas terras e construindo um futuro mais sustentável.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/como-participar">
              Participar Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
