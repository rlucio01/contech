import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="space-y-6">
          <div>
            <Button variant="outline" asChild>
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Política de Cookies</h1>
          <div className="space-y-4">
            <p>
              Esta Política de Cookies explica como a Contech Consultoria de TI utiliza cookies e tecnologias
              semelhantes em nosso site.
            </p>
            <h2 className="text-xl font-semibold">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site.
              Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente e fornecer
              informações aos proprietários do site.
            </p>
            <h2 className="text-xl font-semibold">2. Como Utilizamos os Cookies</h2>
            <p>Utilizamos cookies para os seguintes fins:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies essenciais: necessários para o funcionamento básico do site.</li>
              <li>Cookies de preferências: permitem que o site lembre suas escolhas e preferências.</li>
              <li>Cookies estatísticos: nos ajudam a entender como os visitantes interagem com o site.</li>
              <li>Cookies de marketing: utilizados para rastrear visitantes em sites e exibir anúncios relevantes.</li>
            </ul>
            <h2 className="text-xl font-semibold">3. Controle de Cookies</h2>
            <p>
              Você pode controlar e gerenciar cookies de várias maneiras. A maioria dos navegadores permite que você
              veja quais cookies você tem e exclua-os individualmente ou bloqueie cookies de sites específicos ou todos
              os sites. Esteja ciente de que a exclusão de cookies pode resultar na perda de preferências e algumas
              funcionalidades do site podem não funcionar corretamente.
            </p>
            <h2 className="text-xl font-semibold">4. Cookies de Terceiros</h2>
            <p>
              Nosso site pode incluir cookies de terceiros, como Google Analytics, para análise de tráfego e
              comportamento do usuário. Esses serviços podem coletar informações sobre sua atividade online em
              diferentes sites.
            </p>
            <h2 className="text-xl font-semibold">5. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você revise esta página
              regularmente para estar ciente de quaisquer alterações.
            </p>
            <h2 className="text-xl font-semibold">6. Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco pelo e-mail
              contato@contech.com.br ou pelo telefone (11) 4321-1234.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

