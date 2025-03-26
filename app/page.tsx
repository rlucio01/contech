import Link from "next/link"
import { Phone, Shield, Headset, FileText, Cog, ShieldCheck, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-black"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Soluções de TI para Microempresas
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Transforme sua empresa com tecnologia acessível e eficiente. Conheça nossas soluções personalizadas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
                    <ScrollLink href="#servicos">Nossos Serviços</ScrollLink>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-blue-500 text-white hover:bg-blue-600 border-2 border-blue-400 shadow-lg"
                    asChild
                  >
                    <ScrollLink href="#contato">Agendar Consulta</ScrollLink>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative w-[550px] h-[300px] bg-blue-800/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Server className="w-20 h-20 text-white/50" />
                  </div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-lg font-medium">Consultoria de TI para Microempresas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluções Completas para sua Empresa</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos um conjunto completo de serviços de TI para impulsionar o crescimento da sua microempresa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold">Telefonia</h3>
                <p className="text-center text-gray-500">
                  Sistemas de telefonia IP, centrais telefônicas virtuais e soluções de comunicação unificada.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Phone className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Telefonia IP</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold">Segurança</h3>
                <p className="text-center text-gray-500">
                  Proteção de dados, sistemas de firewall, antivírus corporativo e monitoramento de rede.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Segurança Cibernética</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Headset className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold">Suporte</h3>
                <p className="text-center text-gray-500">
                  Suporte técnico remoto e presencial, manutenção preventiva e corretiva de equipamentos.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Headset className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Suporte Técnico</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <FileText className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold">Office</h3>
                <p className="text-center text-gray-500">
                  Implementação e suporte para Microsoft 365, Google Workspace e soluções de produtividade.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <FileText className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Soluções Office</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Cog className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold">Automações</h3>
                <p className="text-center text-gray-500">
                  Automação de processos, integração de sistemas e soluções personalizadas para seu negócio.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Cog className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Automação e Chatbot</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-900"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Consultoria</h3>
                <p className="text-center text-gray-500">
                  Análise de infraestrutura, planejamento estratégico de TI e otimização de recursos tecnológicos.
                </p>
                <div className="mt-2 w-full h-32 bg-blue-50 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Server className="h-10 w-10 text-blue-500 mb-2" />
                    <p className="text-sm text-blue-700 font-medium">Consultoria de TI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto">
                <div className="relative w-[550px] h-[350px] bg-blue-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-wrap gap-4 justify-center">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 text-blue-600"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-200/70 to-transparent p-4">
                    <p className="text-blue-900 text-lg font-medium">Equipe Contech</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Sobre Nós</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contech Consultoria de TI</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos uma empresa especializada em soluções de tecnologia para microempresas. Nossa missão é tornar
                    a tecnologia acessível e eficiente para negócios de todos os tamanhos.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Mais de 10 anos de experiência no mercado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Equipe de profissionais certificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Atendimento personalizado e ágil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Soluções adaptadas ao seu orçamento</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-blue-900 hover:bg-blue-800" asChild>
                    <ScrollLink href="#sobre">Conheça Nossa História</ScrollLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fale com a Contech</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco para uma avaliação gratuita das necessidades de TI da sua empresa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Informações de Contato</h3>
                <p className="text-gray-500">
                  Estamos disponíveis para atender você de segunda a sexta, das 8h às 18h.
                </p>
                <div className="grid gap-4 py-4">
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div className="text-gray-500">(11) 4321-1234</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div className="text-gray-500">contato@contech.com.br</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className="text-gray-500">Av. Paulista, 1000 - São Paulo, SP</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Envie uma Mensagem</h3>
                <form className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800" type="submit">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

