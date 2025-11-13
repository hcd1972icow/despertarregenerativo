import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Coluna = () => {
  const articles = [
    {
      title: "O Futuro da Pecuária é Regenerativo",
      author: "Equipe Despertar Regenerativo",
      date: "15 de Janeiro, 2025",
      excerpt: "Entenda por que práticas regenerativas não são apenas uma tendência, mas o caminho inevitável para a pecuária sustentável e lucrativa do século XXI.",
      readTime: "8 min",
    },
    {
      title: "Como Mensurar o Sequestro de Carbono na Sua Fazenda",
      author: "Dr. João Silva - ESGpec",
      date: "22 de Janeiro, 2025",
      excerpt: "Um guia prático para produtores sobre como calcular e documentar o sequestro de carbono através de práticas de manejo regenerativo do solo.",
      readTime: "12 min",
    },
    {
      title: "Caso de Sucesso: Fazenda Santa Clara",
      author: "Maria Santos - MilkPoint",
      date: "29 de Janeiro, 2025",
      excerpt: "Conheça a história inspiradora de como a Fazenda Santa Clara aumentou sua produtividade em 40% enquanto reduzia custos com insumos em 30% através de práticas regenerativas.",
      readTime: "10 min",
    },
    {
      title: "Pastoreio Rotacionado: Ciência e Prática",
      author: "Prof. Carlos Oliveira",
      date: "5 de Fevereiro, 2025",
      excerpt: "Os fundamentos científicos por trás do pastoreio rotacionado e como implementá-lo de forma eficaz na sua propriedade, independente do tamanho.",
      readTime: "15 min",
    },
    {
      title: "Biodiversidade: O Seguro da Sua Fazenda",
      author: "Dra. Ana Paula - ESGpec",
      date: "12 de Fevereiro, 2025",
      excerpt: "Por que fazendas com maior biodiversidade são mais resilientes a mudanças climáticas e pragas, e como aumentar a diversidade de vida na sua propriedade.",
      readTime: "9 min",
    },
    {
      title: "Viabilidade Econômica da Regeneração",
      author: "Roberto Lima - Consultor",
      date: "19 de Fevereiro, 2025",
      excerpt: "Análise detalhada dos custos de transição para práticas regenerativas e o retorno sobre investimento esperado em diferentes contextos produtivos.",
      readTime: "11 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Coluna no MilkPoint
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Artigos semanais sobre regeneração, sustentabilidade e inovação na pecuária brasileira
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Conhecimento para Transformar</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A coluna Despertar Regenerativo no MilkPoint traz conteúdo exclusivo produzido por especialistas da ESGpec, MilkPoint e convidados especiais. Toda semana, novos artigos sobre práticas regenerativas, casos de sucesso, ciência aplicada e tendências do setor.
            </p>
            <p className="text-lg text-muted-foreground">
              Nosso objetivo é democratizar o conhecimento sobre pecuária regenerativa, tornando-o acessível e prático para produtores de todos os tamanhos e regiões do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Artigos Recentes</h2>
            
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-hover transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 hover:text-accent transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span>{article.readTime} de leitura</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="whitespace-nowrap">
                        Ler no MilkPoint
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Temas Abordados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Saúde do Solo",
                "Pastoreio Rotacionado",
                "Sequestro de Carbono",
                "Biodiversidade",
                "Bem-estar Animal",
                "Viabilidade Econômica",
                "Casos de Sucesso",
                "Ciência Aplicada",
                "Mudanças Climáticas",
                "Certificações",
                "Mercados Diferenciados",
                "Gestão da Água",
              ].map((topic, index) => (
                <Card key={index} className="border-none shadow-soft text-center hover:shadow-hover transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{topic}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Receba os Artigos no Seu E-mail</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cadastre-se para receber semanalmente os novos artigos da coluna Despertar Regenerativo diretamente na sua caixa de entrada.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:shadow-hover transition-all">
              <a href="https://www.milkpoint.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Acessar MilkPoint
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coluna;
