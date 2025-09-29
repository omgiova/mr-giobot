"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  MessageSquare,
  Calendar,
  Bot,
  Smartphone,
  Scissors,
  Heart,
} from "lucide-react"
import Carousel from "@/components/ui/carousel"
import { useIsMobile } from "@/components/ui/use-mobile"
import Head from 'next/head'

export default function BarbershopAILanding() {
  const isMobile = useIsMobile()
  
  // Supondo que suas imagens estejam em public/images/
  const images = [
    "/images/card-0.png",
    "/images/card-2.png",
    "/images/card-3.png",
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mr. Giobot",
    "url": "https://mr-giobot.vercel.app", // Replace with your actual deployment URL
    "logo": "https://mr-giobot.vercel.app/icon3.png", // Replace with your actual deployment URL
    "sameAs": [
      "https://www.instagram.com/mrgiobot",
      "https://www.facebook.com/mrgiobot/"
    ],
    "description": "Transforme sua barbearia em uma máquina de agendamentos com Mr. Giobot, o assistente de IA que atende seus clientes 24/7 no WhatsApp."
  };

  return (
    <>
<Head>
  {/* Título da Página: O mais importante para o Google e para quem pesquisa */}
  <title>Mr. Giobot: Automação Inteligente no WhatsApp para Barbearias | O Piloto Automático do Barbeiro no WhatsApp</title>

  {/* Descrição da Página: O que aparece abaixo do título no Google. Precisa ser atraente! */}
  <meta name="description" content="Mr. Giobot: A automação inteligente que revoluciona o atendimento e agendamento de barbearias no WhatsApp. Ganhe tempo, economize dinheiro e lote sua agenda. Teste grátis!" />

  {/* URL Canônica: Diz ao Google qual é a versão 'oficial' da sua página, evitando duplicidade */}
  <link rel="canonical" href="https://oferta-especial-mr-giobot.giovaniamorim.com/" />

  {/* Open Graph Tags (para compartilhamento bonito no WhatsApp, Facebook, LinkedIn ) */}
  <meta property="og:title" content="Mr. Giobot: Automação Inteligente no WhatsApp para Barbearias" />
  <meta property="og:description" content="A automação inteligente que revoluciona o atendimento e agendamento de barbearias no WhatsApp. Ganhe tempo e aumente seu lucro. Teste grátis!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://oferta-especial-mr-giobot.giovaniamorim.com/" />
  <meta property="og:image" content="https://oferta-especial-mr-giobot.giovaniamorim.com/images/og-image.jpg" /> {/* Crie uma imagem atraente para compartilhamento (1200x630px ) */}
  <meta property="og:site_name" content="Mr. Giobot" />

  {/* Twitter Card Tags (para compartilhamento no Twitter) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mrgiobot" /> {/* Se tiver um Twitter, coloque o @ aqui */}
  <meta name="twitter:creator" content="@mrgiobot" />
  <meta name="twitter:title" content="Mr. Giobot: Automação Inteligente WhatsApp para Barbearias" />
  <meta name="twitter:description" content="A automação inteligente que revoluciona o atendimento e agendamento de barbearias no WhatsApp. Ganhe tempo e aumente seu lucro. Teste grátis!" />
  <meta name="twitter:image" content="https://oferta-especial-mr-giobot.giovaniamorim.com/images/twitter-image.jpg" />

  {/* Structured Data (já existente, mas com a URL correta e descrição ajustada ) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mr. Giobot",
      "url": "https://oferta-especial-mr-giobot.giovaniamorim.com/", // Sua URL final
      "logo": "https://oferta-especial-mr-giobot.giovaniamorim.com/icon3.png", // Sua URL final para o logo
      "sameAs": [
        "https://www.instagram.com/mrgiobot",
        "https://www.facebook.com/mrgiobot/"
      ],
      "description": "Transforme sua barbearia em uma máquina de agendamentos com Mr. Giobot, a automação inteligente que atende seus clientes 24/7 no WhatsApp."
    } ) }}
  />
</Head>
      <div className="min-h-screen bg-background text-foreground cyber-grid">
        {/* Hero Section - Fully Responsive */}
        <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 hero-mobile">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1">
                <Badge className="bg-accent/20 text-accent border-accent/50 cyber-border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold neon-glow-green w-fit">
                  Mr. Giobot: O piloto automático do barbeiro no WhatsApp
                </Badge>

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mobile-text">
                    <span className="block text-foreground">Transforme sua barbearia em uma</span>
                    <span className="block gradient-text-cyan neon-text-glow">Máquina de Agendamentos!</span>
                  </h1>

                  <div className="relative flex-shrink-0 hidden sm:block">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                    <MessageSquare className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-primary neon-glow" />
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed mobile-text">
                  Chega de perder cliente por demorar um pouco pra responder, ou aquele que manda mensagem 10 da noite de um sábado.
                  Nossa solução tem a{" "}
                  <strong className="text-primary neon-text-glow">maior paciência do mundo </strong>
                  e vai atender seus clientes com a naturalidade de uma conversa real <strong className="text-primary neon-text-glow">24 horas por dia</strong>. Se liga no vídeo de exemplo!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="https://formulario-mr-giobot.giovaniamorim.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground cyber-border px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold neon-glow-green w-full sm:w-auto mobile-touch-target cursor-pointer"
                    >
                      Teste grátis
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 cyber-border px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent neon-glow w-full sm:w-auto mobile-touch-target"
                  >
                    <a
                      href="https://wa.me/5511986501499?text=Ol%C3%A1%21%20Quero%20implantar%20o%20Mr.%20Giobot%2C%20a%20m%C3%A1quina%20de%20agendamentos%2C%20na%20minha%20barbearia%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center"
                    >
                      Agendar implantação agora
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center order-2">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Video container - responsive */}
<div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-muted/10 rounded-2xl cyber-border neon-glow overflow-hidden">
  <iframe
    src="https://drive.google.com/file/d/11AUrmvJQ6XVFvVQ8WijTkD34lD9s0CUt/preview"
    className="w-full h-full rounded-2xl"
    allow="autoplay"
    title="Demonstração do Mr. Giobot em ação"
    loading="lazy"
  ></iframe>
</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solucao" className="py-10 px-4 bg-muted/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-cyan neon-text-glow-green">
              Entende gírias, áudios e erros de digitação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apresentamos{" "}
              <strong className="gradient-text-cyan neon-text-glow">Mr. Giobot, o piloto automático do barbeiro</strong>
            </p>

            {/* Cards comparativos */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="cyber-border border-destructive/50 bg-destructive/5 neon-glow">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <Bot className="w-6 h-6" />
                    Outras soluções
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">• Respostas robóticas e limitadas</p>
                  <p className="text-muted-foreground">• Não entendem linguagem natural</p>
                  <p className="text-muted-foreground">• Quebram a experiência do cliente</p>
                  <p className="text-muted-foreground">• Soluções genéricas que não funcionam</p>
                  <p className="text-muted-foreground">• Clientes frustrados e perdidos</p>
                </CardContent>
              </Card>

              <Card className="cyber-border border-primary/50 bg-primary/5 neon-glow">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Nossa inteligência avançada para sua barbearia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Atende 24/7, sem cansaço ou erros
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Entende tudo e responde corretamente, com naturalidade
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Atendimento personalizado com base no histórico 
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Treinada especificamente para barbearias
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Agenda, confirma e gerencia automaticamente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Mobile Carousel Section - Fully Responsive */}
        <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 bg-muted/10 carousel-mobile">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 gradient-text-cyan neon-text-glow text-center mobile-text">
              Foque em fazer um corte perfeito e deixe a gente dar conta de todo o seu atendimento
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-16 text-center mobile-text">
              Você não precisa{" "} <strong className="gradient-text-cyan neon-text-glow">fazer tudo sozinho</strong>
            </p>
            
            {/* Mobile Carousel - Always visible on mobile screens */}
            <div className="md:hidden">
              <div className="w-full max-w-sm mx-auto px-2">
                <Carousel 
                  images={images} 
                  altTexts={["Demonstração do Mr. Giobot - Exemplo 1", "Demonstração do Mr. Giobot - Exemplo 2", "Demonstração do Mr. Giobot - Exemplo 3"]}
                />
              </div>
            </div>
            
            {/* Desktop Images - Responsive */}
            <div className="hidden md:flex flex-row justify-center items-end gap-4 lg:gap-6 xl:gap-8">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Demonstração do Mr. Giobot - Exemplo ${index + 1}`}
                  className="rounded-2xl border cyber-border neon-glow w-56 lg:w-72 xl:w-80 aspect-[9/16] object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="resultados" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-cyan neon-text-glow">
                Conecta com Agenda Google ou Booksy
              </h2>
              <p className="text-xl text-muted-foreground">
                O sistema que todo <strong className="gradient-text-cyan neon-text-glow-green">barbeiro precisa!</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center cyber-border bg-card/50 neon-glow-green">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
<h3 className="text-2xl font-bold gradient-text-cyan mb-2">Mais agendamentos mensais</h3>
<p className="text-sm text-muted-foreground">Com a automação inteligente do Mr. Giobot, sua barbearia garante um fluxo constante de novos agendamentos, otimizando cada interação no WhatsApp.</p>
                </CardContent>
              </Card>

              <Card className="text-center cyber-border bg-card/50 neon-glow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
<h3 className="text-2xl font-bold text-primary mb-2">Não para pra nada! Trampa o dia todo.</h3>
<p className="text-sm text-muted-foreground">O Mr. Giobot é o seu <strong>piloto automÃ¡tico</strong> de atendimento, trabalhando incansavelmente 24 horas por dia, 7 dias por semana. Sua barbearia <strong>sempre ativa</strong> no WhatsApp!</p>
                </CardContent>
              </Card>

              <Card className="text-center cyber-border bg-card/50 neon-glow-magenta">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
<h3 className="text-2xl font-bold gradient-text-magenta mb-2">Menos "bolos", mais AGENDA CHEIA</h3>
<p className="text-sm text-muted-foreground">Com a <strong>automação inteligente</strong> do Mr. Giobot, você <strong>reduz drasticamente as faltas</strong> e garante sua agenda<strong> sempre cheia</strong>.</p>
                </CardContent>
              </Card>

              <Card className="text-center cyber-border bg-card/50 neon-glow-green">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
<h3 className="text-2xl font-bold text-accent mb-2">Foco no cliente que já está na cadeira</h3>
<p className="text-sm text-muted-foreground">Deixe o Mr. Giobot cuidar do <strong>atendimento e agendamento</strong> na sua barbearia no WhatsApp. Assim, você pode dedicar 100% da sua atenção e talento ao cliente que está na sua cadeira!</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mb-8">
  <img
    src="/images/agenda.png"
    alt="Exemplo de agenda integrada do Mr. Giobot com Google Calendar"
    className="rounded-2xl border cyber-border neon-glow w-full max-w-3xl aspect-[16/9] object-cover"
  />
</div>
<h3 className="text-2xl font-bold gradient-text-cyan neon-text-glow-green text-center mb-8">
  Na sua própria agenda, organizado com lembretes.
</h3>

            {/* Cloned Cards Section - Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 mt-20">
              <Card className="cyber-border border-primary/50 bg-primary/5 neon-glow">
                <CardHeader>
                  <CardTitle className="gradient-text-cyan neon-text-glow flex items-center gap-2 text-xl">
                    <MessageSquare className="w-6 h-6" />
                    Por que um atendimento eficiente, instantâneo e inteligente funciona?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-primary font-medium text-base leading-relaxed">
                      Quando falamos em atendimento no WhatsApp, a paciência é mínima. Seu cliente quer resposta agora e se não tiver, procura outra barbearia.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <strong>70% dos seus clientes potenciais desistem de um agendamento</strong> se não recebem uma resposta em até 5 minutos no WhatsApp. <em className="text-primary font-medium">Você está perdendo 7 em cada 10 clientes por demora!</em>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <strong>92% das empresas perdem vendas devido à demora na resposta no WhatsApp</strong>, de acordo com um estudo do WhatsApp Business. <em className="text-primary font-medium">Sua barbearia não pode ser uma delas!</em>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <strong>67% dos clientes de salões de beleza e barbearias desejam agendar online.</strong> <em className="text-primary font-medium">O WhatsApp é a plataforma perfeita para atender essa demanda crescente e simplificar a vida dos seus clientes.</em>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <strong>90% dos clientes escolhem quem responde rápido.</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <strong>Só 1 experiência negativa já basta para 32% nunca mais voltarem.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-border border-primary/50 bg-primary/5 neon-glow">
                <CardHeader>
                  <CardTitle className="gradient-text-cyan neon-text-glow flex items-center justify-center gap-2 text-xl">
                    <TrendingUp className="w-6 h-6" />
                    E o resultado?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <p className="text-foreground leading-relaxed">
                      <strong>Empresas que respondem em até 1 minuto têm 90% de taxa de conversão positiva</strong>, enquanto as que demoram 30 minutos ou mais têm apenas 10% de sucesso. <em className="text-primary font-medium">A velocidade da sua resposta pode multiplicar seus agendamentos em 9 vezes!</em>
                    </p>
                  </div>
                
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Scissors className="w-6 h-6 text-primary" />
                    <p className="text-foreground leading-relaxed">
                      <strong>Barbearias que adotaram a automação já relatam redução de até 50%</strong> no tempo gasto em trocas de mensagens e <em className="text-primary font-medium">um aumento significativo na taxa de novos agendamentos.</em>
                    </p>
                  </div>
                
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <p className="text-foreground leading-relaxed">
                      <strong>Uma esmagadora maioria, 82,9% dos clientes,</strong> acredita que <em className="text-primary font-medium">um bom atendimento influencia diretamente sua fidelização a uma empresa.</em>
                    </p>
                  </div>
                
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Zap className="w-6 h-6 text-primary" />
                    <p className="text-foreground leading-relaxed">
                      <strong>Redução de até 100% no tempo </strong> <em className="text-primary font-medium">de atendimento.</em>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="cyber-border bg-card/50 neon-glow inline-block p-8 mt-20">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-primary">Imagine sua barbearia:</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Agenda sempre cheia
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Clientes satisfeitos respondidos instantaneamente
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Zero tempo perdido no telefone
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Mais organização
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Equipe focada no que importa: CORTAR!
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Diferencial competitivo real
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="dashboard" className="py-10 px-4 bg-muted/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-magenta neon-text-glow-magenta">
                Uma verdadeira máquina de vendas e engajamento para sua barbearia
              </h2>
              <p className="text-xl text-muted-foreground">Com a paciência que só um robô treinado tem!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="cyber-border bg-card/50 neon-glow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Integrações diversas</h3>
                  <p className="text-muted-foreground text-sm">
                    Pode ser integrado com pix, outras agendas, CRMs
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 neon-glow-green">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Gestão de horários</h3>
                  <p className="text-muted-foreground text-sm">
                    Visualize e gerencie todos os agendamentos de forma intuitiva e eficiente na sua própria agenda
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 neon-glow-magenta">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">No seu próprio WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    Gerencie seu WhatsApp de qualquer lugar, a qualquer hora. Ele continua sendo seu!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold gradient-text-cyan neon-text-glow">
                Pronto pra levar sua barbearia pro futuro?
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Chega de perder tempo e dinheiro... e a cabeça! A oportunidade de revolucionar o atendimento da sua barbearia
                está batendo à sua porta.{" "}
                <strong className="gradient-text-cyan neon-text-glow">
                  Não deixe seus concorrentes saírem na frente!
                </strong>
              </p>

              <Card className="cyber-border bg-card/50 neon-glow p-8 inline-block">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold gradient-text-cyan">Teste gratuito sem compromisso</h3>
                  <p className="text-muted-foreground">
                    Experimente todo o poder da nossa solução e veja os resultados na prática!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://formulario-mr-giobot.giovaniamorim.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto cursor-pointer"
                    >
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground cyber-border px-8 py-4 text-lg font-bold neon-glow-green cursor-pointer"
                      >
                        Teste grátis
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary/10 cyber-border px-8 py-4 text-lg bg-transparent neon-glow"
                    >
                      <a
                        href="https://wa.me/5511986501499?text=Ol%C3%A1%21%20Quero%20implantar%20o%20Mr.%20Giobot%2C%20a%20m%C3%A1quina%20de%20agendamentos%2C%20na%20minha%20barbearia%21"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar implantação
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-accent" />
                <span>Sem cartão de crédito • Configuração em 5 minutos • Suporte incluído</span>
                <Star className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </section>

        <footer className="py-14 px-4 border-t border-primary/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-NOmy5RUrrIWedIQFcQP0Z2BrNCLlcU.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-48 w-auto neon-glow"
                  aria-label="Logo animado do Mr. Giobot"
                />
              </div>
              <p className="text-muted-foreground">© 2025 Mr. Giobot - Transformando o futuro com automações. Por Giovani Amorim.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
