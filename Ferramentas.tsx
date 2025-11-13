import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ClipboardCheck, FileText, TrendingUp, Sprout, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ferramentas = () => {
  const tools = [
    {
      icon: ClipboardCheck,
      title: "Diagnóstico de Sustentabilidade",
      description: "Avalie o nível atual de sustentabilidade da sua propriedade em dimensões ambientais, sociais e econômicas. Receba um relatório detalhado com pontos fortes e oportunidades de melhoria.",
      features: [
        "Questionário guiado e intuitivo",
        "Análise em 6 dimensões ESG",
        "Relatório visual completo",
        "Comparação com benchmarks do setor",
      ],
    },
    {
      icon: Calculator,
      title: "Calculadora de Carbono",
      description: "Mensure a pegada de carbono da sua operação e identifique oportunidades para reduzir emissões e aumentar o sequestro de carbono através de práticas regenerativas.",
      features: [
        "Cálculo de emissões de GEE",
        "Potencial de sequestro de carbono",
        "Simulação de cenários",
        "Certificação de neutralidade",
      ],
    },
    {
      icon: FileText,
      title: "Plano de Ação Personalizado",
      description: "Com base no diagnóstico, receba um plano de ação customizado com recomendações específicas, cronograma e métricas para acompanhar o progresso da transição regenerativa.",
      features: [
        "Recomendações personalizadas",
        "Cronograma de implementação",
        "Indicadores de progresso",
        "Estimativa de investimentos",
      ],
    },
    {
      icon: TrendingUp,
      title: "Monitoramento Contínuo",
      description: "Acompanhe a evolução da sua propriedade ao longo do tempo com dashboards interativos que mostram melhorias em indicadores ambientais, sociais e econômicos.",
      features: [
        "Dashboard interativo",
        "Gráficos de evolução temporal",
        "Alertas e notificações",
        "Relatórios mensais automáticos",
      ],
    },
    {
      icon: Sprout,
      title: "Biblioteca de Práticas",
      description: "Acesse um catálogo completo de práticas regenerativas com descrições detalhadas, benefícios esperados, custos estimados e casos de sucesso de outros produtores.",
      features: [
        "100+ práticas documentadas",
        "Vídeos demonstrativos",
        "Casos de sucesso reais",
        "Filtros por contexto e objetivo",
      ],
    },
    {
      icon: BarChart3,
      title: "Análise Econômica",
      description: "Entenda o retorno sobre investimento das práticas regenerativas com análises de viabilidade econômica, payback e comparações de cenários produtivos.",
      features: [
        "Análise de ROI",
        "Cálculo de payback",
        "Comparação de cenários",
        "Projeções de longo prazo",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ferramentas Gratuitas ESGpec
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Um conjunto completo de ferramentas para mensurar, planejar e implementar práticas regenerativas na sua fazenda
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/como-participar">
                Acessar Ferramentas <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <tool.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{tool.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Principais recursos:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Como Funciona</h2>
            <p className="text-lg text-muted-foreground">
              Nossa plataforma foi desenvolvida para ser simples e acessível
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cadastre-se Gratuitamente</h3>
                  <p className="text-muted-foreground">
                    Crie sua conta e forneça informações básicas sobre sua propriedade. O processo leva menos de 5 minutos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Faça o Diagnóstico Inicial</h3>
                  <p className="text-muted-foreground">
                    Complete o questionário de diagnóstico para entendermos o estado atual da sua propriedade. São cerca de 30 minutos de avaliação.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receba Seu Plano Personalizado</h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma gera automaticamente um plano de ação com recomendações específicas para sua realidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implemente e Monitore</h3>
                  <p className="text-muted-foreground">
                    Comece a implementar práticas regenerativas e acompanhe seu progresso através do dashboard de monitoramento.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Evolua Continuamente</h3>
                  <p className="text-muted-foreground">
                    Refaça avaliações periodicamente, ajuste seu plano e veja os resultados positivos acumularem ao longo do tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e tenha acesso imediato a todas as ferramentas. É grátis e sem compromisso.
          </p>
          <Button asChild size="lg" className="bg-gradient-hero hover:shadow-hover transition-all">
            <Link to="/como-participar">
              Cadastrar Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ferramentas;
