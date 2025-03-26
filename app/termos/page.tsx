import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="space-y-6">
          <div>
            <Button variant="outline" asChild>
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Termos de Serviço</h1>
          <div className="space-y-4">
            <p>
              Bem-vindo aos Termos de Serviço da Contech Consultoria de TI. Ao utilizar nossos serviços, você concorda
              com estes termos.
            </p>
            <h2 className="text-xl font-semibold">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou usar os serviços da Contech, você concorda em ficar vinculado a estes Termos de Serviço. Se
              você não concordar com algum aspecto destes termos, não utilize nossos serviços.
            </p>
            <h2 className="text-xl font-semibold">2. Descrição dos Serviços</h2>
            <p>
              A Contech oferece serviços de consultoria em TI, incluindo mas não limitado a Telefonia, Segurança,
              Suporte, Office e Automações. Os detalhes específicos dos serviços serão acordados em contratos
              individuais com cada cliente.
            </p>
            <h2 className="text-xl font-semibold">3. Responsabilidades do Cliente</h2>
            <p>
              O cliente é responsável por fornecer informações precisas e completas necessárias para a prestação dos
              serviços. O cliente também é responsável por manter a confidencialidade de suas credenciais de acesso.
            </p>
            <h2 className="text-xl font-semibold">4. Pagamentos</h2>
            <p>
              Os preços e condições de pagamento serão estabelecidos em contratos individuais. Todos os pagamentos devem
              ser feitos de acordo com os termos acordados.
            </p>
            <h2 className="text-xl font-semibold">5. Propriedade Intelectual</h2>
            <p>
              Todos os direitos de propriedade intelectual relacionados aos serviços da Contech permanecem propriedade
              da Contech, a menos que especificado de outra forma em um contrato individual.
            </p>
            <h2 className="text-xl font-semibold">6. Limitação de Responsabilidade</h2>
            <p>
              A Contech não será responsável por danos indiretos, incidentais, especiais ou consequentes resultantes do
              uso ou incapacidade de usar nossos serviços.
            </p>
            <h2 className="text-xl font-semibold">7. Alterações nos Termos</h2>
            <p>
              A Contech reserva-se o direito de modificar estes termos a qualquer momento. As alterações entrarão em
              vigor após a publicação dos termos revisados em nosso site.
            </p>
            <h2 className="text-xl font-semibold">8. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida
              nos tribunais competentes de São Paulo.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

