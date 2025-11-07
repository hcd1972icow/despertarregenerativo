import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Sprout, MapPin, Award, Target, Leaf, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impacto = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Produtores Cadastrados", color: "text-accent" },
    { icon: MapPin, value: "15.000", label: "Hectares em Regeneração", color: "text-primary" },
    { icon: Sprout, value: "30%", label: "Redução Média de Carbono", color: "text-accent" },
    { icon: TrendingUp, value: "25%", label: "Aumento de Produtividade", color: "text-primary" },
    { icon: Droplets, value: "40%", label: "Economia de Água", color: "text-accent" },
    { icon: Award, value: "50+", label: "Certificações Obtidas", color: "text-primary" },
  ];

  const cases = [
    {
      name: "Fazenda Santa Clara",
      location: "Minas Gerais",
      size: "180 hectares",
      practices: "Pastoreio rotacionado, integração lavoura-pecuária",
      results: [
        "Aumento de 40% na produtividade",
        "Redução de 30% nos custos com insumos",
        "Sequestro de 500 toneladas de CO2/ano",
        "Certificação em pecuária regenerativa",
      ],
    },
    {
      name: "Sítio Boa Vista",
      location: "São Paulo",
      size: "85 hectares",
      practices: "Silvipastoril, adubação verde",
      results: [
        "Aumento de 35% na lotação animal",
        "Redução de 50% no uso de herbicidas",
        "Melhoria de 60% na qualidade do solo",
        "Reconhecimento MilkPoint de Sustentabilidade",
      ],
    },
    {
      name: "Estância Verde Vida",
      location: "Paraná",
      size: "320 hectares",
      practices: "Manejo holístico, corredores ecológicos",
      results: [
        "Aumento de 45% na biodiversidade",
        "Redução de 35% nos custos veterinários",
        "Recuperação de 3 nascentes",
        "Prêmio Nacional de Regeneração 2024",
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
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Impacto Real, Resultados Mensuráveis
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Veja os resultados concretos do movimento Despertar Regenerativo em fazendas por todo o Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Impacto em Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-soft text-center hover:shadow-hover transition-shadow">
                  <CardContent className="pt-8">
                    <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Impacto Ambiental</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <Leaf className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Sequestro de Carbono</h3>
                  <p className="text-muted-foreground mb-4">
                    As fazendas participantes já sequestram coletivamente mais de 12.000 toneladas de CO2 equivalente por ano, contribuindo ativamente para mitigação das mudanças climáticas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Meta 2025:</span>
                      <span className="font-semibold">20.000 ton CO2e</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <Sprout className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Recuperação de Solo</h3>
                  <p className="text-muted-foreground mb-4">
                    Aumento médio de 45% na matéria orgânica do solo nas propriedades que implementaram práticas regenerativas há mais de 2 anos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Áreas Recuperadas:</span>
                      <span className="font-semibold">8.500 hectares</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <Droplets className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Gestão da Água</h3>
                  <p className="text-muted-foreground mb-4">
                    Redução média de 40% no consumo de água e recuperação de 45 nascentes nas propriedades participantes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Nascentes Recuperadas:</span>
                      <span className="font-semibold">45 nascentes</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Biodiversidade</h3>
                  <p className="text-muted-foreground mb-4">
                    Aumento médio de 50% na diversidade de espécies de fauna e flora nas áreas sob manejo regenerativo.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Corredores Ecológicos:</span>
                      <span className="font-semibold">28 criados</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Casos de Sucesso</h2>
            
            <div className="space-y-8">
              {cases.map((caseStudy, index) => (
                <Card key={index} className="border-none shadow-soft">
                  <CardContent className="pt-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                          <Award className="h-10 w-10 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{caseStudy.name}</h3>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{caseStudy.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            <span>{caseStudy.size}</span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Práticas Implementadas:</h4>
                          <p className="text-muted-foreground">{caseStudy.practices}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Resultados:</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                                <span className="text-muted-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Impacto Social</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-soft text-center">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-muted-foreground mb-4">Empregos Gerados</div>
                  <p className="text-sm text-muted-foreground">
                    Novas vagas de trabalho criadas nas propriedades participantes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft text-center">
                <CardContent className="pt-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-muted-foreground mb-4">Satisfação</div>
                  <p className="text-sm text-muted-foreground">
                    Dos produtores relatam melhoria na qualidade de vida
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft text-center">
                <CardContent className="pt-8">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-muted-foreground mb-4">Capacitações</div>
                  <p className="text-sm text-muted-foreground">
                    Cursos e workshops realizados para produtores
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

export default Impacto;
