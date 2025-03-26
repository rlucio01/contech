import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="space-y-6">
          <div>
            <Button variant="outline" asChild>
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Política de Privacidade</h1>
          <div className="space-y-4">
            <p>
              A Contech Consultoria de TI está comprometida em proteger sua privacidade. Esta Política de Privacidade
              explica como coletamos, usamos e protegemos suas informações pessoais.
            </p>
            <h2 className="text-xl font-semibold">1. Informações que Coletamos</h2>
            <p>
              Podemos coletar informações pessoais como nome, endereço de e-mail, número de telefone e informações da
              empresa quando você se comunica conosco ou utiliza nossos serviços.
            </p>
            <h2 className="text-xl font-semibold">2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos suas informações para fornecer e melhorar nossos serviços, comunicar-nos com você, processar
              pagamentos e cumprir obrigações legais. Não compartilhamos suas informações com terceiros sem seu
              consentimento, exceto quando exigido por lei.
            </p>
            <h2 className="text-xl font-semibold">3. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso
              não autorizado, alteração, divulgação ou destruição.
            </p>
            <h2 className="text-xl font-semibold">4. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Nosso site pode usar cookies e tecnologias semelhantes para melhorar sua experiência de navegação. Você
              pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>
            <h2 className="text-xl font-semibold">5. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais.
              Para exercer esses direitos, entre em contato conosco através dos canais fornecidos abaixo.
            </p>
            <h2 className="text-xl font-semibold">6. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre
              disponível em nosso site.
            </p>
            <h2 className="text-xl font-semibold">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail
              contato@contech.com.br ou pelo telefone (11) 4321-1234.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

