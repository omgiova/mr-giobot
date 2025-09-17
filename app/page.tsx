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
} from "lucide-react"

export default function BarbershopAILanding() {
  return (
    <div className="min-h-screen bg-background text-foreground cyber-grid">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent/20 text-accent border-accent/50 cyber-border px-4 py-2 text-sm font-bold neon-glow-green">
                Mr. Giobot: A revolução do atendimento no WhatsApp
              </Badge>

              <div className="flex items-start gap-6">
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                  <span className="block text-foreground">Transforme sua barbearia em uma</span>
                  <span className="block gradient-text-cyan neon-text-glow">Máquina de Agendamentos!</span>
                </h1>

                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <MessageSquare className="relative w-16 h-16 text-primary neon-glow" />
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty">
                Chega de perder clientes por demorar um pouco pra responder, ou aquele que manda mensagem 10 da noite de um sábado.
                Nossa solução tem a{" "}
                <strong className="text-primary neon-text-glow">maior paciência do mundo </strong>
                e vai atender seus clientes com a naturalidade de uma conversa real <strong className="text-primary neon-text-glow">24 horas por dia</strong>. Se liga no exemplo ao lado!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground cyber-border px-8 py-4 text-lg font-bold neon-glow-green"
                >
                  Teste grátis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 cyber-border px-8 py-4 text-lg bg-transparent neon-glow"
                ><a
    href="https://wa.me/5511986501499?text=Ol%C3%A1!%20Quero%20minha%20demonstra%C3%A7%C3%A3o%20do%20MR.%20GIOBOT%2C%20a%20m%C3%A1quina%20de%20agendamentos%20para%20barbearias%21"
    target="_blank"
    rel="noopener noreferrer"
  >
    Agendar demonstração
  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-12 max-w-md">
                {/* Espaço para vídeo formato story (9:16) - maior */}
                <div className="relative w-90 h-180 bg-muted/10 rounded-2xl cyber-border neon-glow overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/11AUrmvJQ6XVFvVQ8WijTkD34lD9s0CUt/preview"
                    className="w-full h-full rounded-2xl"
                    allow="autoplay"
                    title="Demonstração"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucao" className="py-10 px-4 bg-muted/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-cyan neon-text-glow-green">
              Entende gírias, áudios e erros de digitação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apresentamos{" "}
              <strong className="gradient-text-cyan neon-text-glow">Mr. Giobot, seu Atendente Virtual altamente treinado</strong>
            </p>
          </div>

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
      <section className="pt-0 pb-8 px-4 bg-muted/10">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-cyan neon-text-glow-green text-center">
      Foque em fazer um corte perfeito e deixe a gente dar conta de todo o seu atendimento.
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 text-center">
              Você não precisa{" "} <strong className="gradient-text-cyan neon-text-glow">fazer tuido sozinho</strong>
            </p>
    <div className="flex flex-row justify-center items-end gap-8">
      <img
        src="/images/card-0.png"
        alt="Imagem 1"
        className="rounded-2xl border cyber-border neon-glow w-88 aspect-[9/16] object-cover"
      />
      <img
        src="/images/card-2.png"
        alt="Imagem 2"
        className="rounded-2xl border cyber-border neon-glow w-88 aspect-[9/16] object-cover"
      />
      <img
        src="/images/card-3.png"
        alt="Imagem 3"
        className="rounded-2xl border cyber-border neon-glow w-88 aspect-[9/16] object-cover"
      />
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
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>

            <Card className="text-center cyber-border bg-card/50 neon-glow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Não para pra nada! Trampa o dia todo.</h3>
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>

            <Card className="text-center cyber-border bg-card/50 neon-glow-magenta">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold gradient-text-magenta mb-2">Menos "bolos", mais AGENDA CHEIA</h3>
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>

            <Card className="text-center cyber-border bg-card/50 neon-glow-green">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent mb-2">Foco no cliente que já está na cadeira</h3>
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mb-8">
  <img
    src="/images/agenda.png"
    alt="Descrição da imagem"
    className="rounded-2xl border cyber-border neon-glow w-full max-w-3xl aspect-[16/9] object-cover"
  />
</div>
<h3 className="text-2xl font-bold gradient-text-cyan neon-text-glow-green text-center mb-8">
  Na sua própria agenda, organizado com lembretes.
</h3>
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
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground cyber-border px-8 py-4 text-lg font-bold neon-glow-green"
                  >
                    Teste grátis
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 cyber-border px-8 py-4 text-lg bg-transparent neon-glow"
                  >
                    <a
    href="https://wa.me/5511986501499?text=Ol%C3%A1!%20Quero%20minha%20demonstra%C3%A7%C3%A3o%20do%20MR.%20GIOBOT%2C%20a%20m%C3%A1quina%20de%20agendamentos%20para%20barbearias%21"
    target="_blank"
    rel="noopener noreferrer"
  >
    Agendar demonstração
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
                aria-label="MR. Giobot"
              />
            </div>
            <p className="text-muted-foreground">© 2025 Mr. Giobot - Transformando o futuro com automações.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
