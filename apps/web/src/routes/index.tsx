import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-primary-shade)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/tanstack-circle-logo.png"
              alt="RPG Scheduler"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold">
              Mesa Mestre
            </span>
          </div>

          <nav className="hidden gap-6 text-sm md:flex text-[var(--color-text-dim)]">
            <a href="#como-funciona" className="hover:text-[var(--color-text)]">
              Como funciona
            </a>
            <a href="#recursos" className="hover:text-[var(--color-text)]">
              Recursos
            </a>
            <a href="#planos" className="hover:text-[var(--color-text)]">
              Planos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-shade)]">
              Criar conta
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[1.3fr,1fr] items-center">
          <div>
            <Badge
              variant="outline"
              className="border-[var(--color-accent)] text-[var(--color-accent)] mb-4"
            >
              Feito para mestres de RPG
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Planeje, organize e agende suas sessões de RPG em um só lugar.
            </h1>

            <p className="text-[var(--color-text-dim)] mb-6 max-w-xl">
              Crie suas campanhas, registre notas, convide jogadores e marque horários
              sem precisar se perder em grupos de chat. Foque na história, nós cuidamos da organização.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-shade)] text-[var(--color-background)]"
              >
                Começar de graça
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-background)]"
              >
                Ver exemplo de campanha
              </Button>
            </div>

            <p className="mt-4 text-xs text-[var(--color-text-dim)]">
              Ideal para mestres de D&D, Tormenta, Call of Cthulhu e muito mais.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-primary-shade)] bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-shade)] p-4 shadow-lg">
            <h2 className="mb-2 text-sm font-semibold text-[var(--color-text-dim)]">
              Próximas sessões
            </h2>
            <div className="space-y-3 text-sm">
              <Card className="bg-black/30 border-[var(--color-secondary-shade)]">
                <CardHeader className="pb-1">
                  <CardTitle className="text-base">
                    Maldição da Fortaleza Sombria
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-[var(--color-text-dim)]">
                  Quinta · 20:00 • 4 jogadores confirmados
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-[var(--color-secondary-shade)]">
                <CardHeader className="pb-1">
                  <CardTitle className="text-base">
                    Crônicas de Porto Arcano
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-[var(--color-text-dim)]">
                  Sábado · 15:00 • aguardando 1 jogador
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURES / RECURSOS */}
        <section id="recursos" className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Pensado para o fluxo de um mestre.
          </h2>
          <p className="text-[var(--color-text-dim)] max-w-2xl">
            Do primeiro rascunho da campanha até o pós-sessão, tudo organizado em uma interface feita para quem narra.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-[#111229] border-[var(--color-primary-shade)]">
              <CardHeader>
                <CardTitle>Agenda de sessões</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-text-dim)]">
                Visualize todas as mesas em um calendário simples, com confirmação automática de jogadores.
              </CardContent>
            </Card>

            <Card className="bg-[#111229] border-[var(--color-secondary-shade)]">
              <CardHeader>
                <CardTitle>Notas da campanha</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-text-dim)]">
                Guarde NPCs, mapas, ganchos de trama e loot em um só lugar, vinculados a cada sessão.
              </CardContent>
            </Card>

            <Card className="bg-[#111229] border-[var(--color-accent)]">
              <CardHeader>
                <CardTitle>Convites mágicos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-text-dim)]">
                Envie convites com link direto para jogadores e acompanhe quem aceitou ou recusou.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="planos" className="space-y-4">
          <Separator className="bg-[var(--color-primary-shade)]" />
          <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-secondary-shade)] bg-[#111229] px-6 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Pronto para narrar sua próxima aventura?
              </h2>
              <p className="text-sm text-[var(--color-text-dim)] max-w-md">
                Crie sua conta em poucos cliques e comece a organizar sessões hoje mesmo.
              </p>
            </div>
            <form className="flex w-full max-w-sm flex-col gap-3 md:flex-row">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="bg-black/40 border-[var(--color-secondary-shade)]"
              />
              <Button
                className="w-full md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-shade)] text-[var(--color-background)]"
                type="submit"
              >
                Criar conta grátis
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-primary-shade)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-[var(--color-text-dim)]">
          <span>© {new Date().getFullYear()} Mesa Mestre · Plataforma para mestres de RPG.</span>
          <a href="#como-funciona" className="hover:text-[var(--color-text)]">
            Guia rápido
          </a>
        </div>
      </footer>
    </div>
  )
}