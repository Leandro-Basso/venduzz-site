import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HUB_URL = "https://hub.venduzz.com.br";

export const metadata: Metadata = {
  title: "Integração Amazon — Venduzz",
  description:
    "Como o Venduzz se conecta à sua conta de vendedor da Amazon: o que sincroniza, como autorizar, quais dados acessa e como são protegidos.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

const steps = [
  "Crie uma conta no Venduzz e cadastre a loja que vende na Amazon.",
  "No painel, acesse Integrações e selecione a loja.",
  "No card da Amazon, clique em Conectar.",
  "Você é redirecionado ao Seller Central da Amazon, faz login com a sua conta de vendedor e autoriza o aplicativo Venduzz.",
  "A Amazon devolve você ao Venduzz com a conexão ativa. Os anúncios são importados e os pedidos passam a ser sincronizados automaticamente.",
];

export default function IntegracaoAmazonPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Integrações
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Integração Amazon
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-12">
          O Venduzz conecta sua conta de vendedor da Amazon Brasil (amazon.com.br) ao
          painel onde você já gerencia seus outros marketplaces. A conexão usa a API
          oficial da Amazon (Selling Partner API) e só acontece depois que você autoriza
          o aplicativo Venduzz dentro do Seller Central.
        </p>

        <Section title="O que a integração faz">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Importa seus anúncios</strong>: lê os anúncios que você já tem na
              Amazon (SKU, título, ASIN, preço, estoque e status) e mostra tudo no painel.
            </li>
            <li>
              <strong>Atualiza preço e estoque</strong>: quando você ativa a atualização
              automática, o Venduzz calcula o preço a partir das suas regras de margem e
              custo e envia preço e quantidade disponível para os anúncios existentes.
            </li>
            <li>
              <strong>Sincroniza pedidos</strong>: consulta novos pedidos e mudanças de
              status a cada poucos minutos, com itens, valores e endereço de entrega, para
              você separar, faturar e acompanhar a venda.
            </li>
            <li>
              <strong>Centraliza a operação</strong>: pedidos, preços e estoque da Amazon
              ficam lado a lado com Mercado Livre, Shopee, Tray e os demais canais.
            </li>
          </ul>
          <p>
            A integração <strong>não cria anúncios novos</strong> na Amazon e não altera
            título, descrição ou imagens. Ela trabalha só com anúncios que você já
            publicou.
          </p>
        </Section>

        <Section title="Como conectar">
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-none w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p>
            A autorização é feita no próprio site da Amazon. O Venduzz nunca vê nem guarda
            a sua senha do Seller Central.
          </p>
        </Section>

        <Section title="Autorização e reautorização">
          <p>
            Depois que você autoriza, a Amazon entrega ao Venduzz um token de acesso
            vinculado à sua conta de vendedor. Esse token é válido por até 365 dias, que é
            uma regra da Amazon. O Venduzz avisa com 30 dias de antecedência para você
            renovar a autorização, e a renovação é o mesmo processo da primeira conexão.
          </p>
          <p>Você pode encerrar o acesso a qualquer momento, de duas formas:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              No Venduzz, em Integrações, no botão &quot;Remover conexão&quot; do card da
              Amazon. Os tokens de acesso são apagados na hora.
            </li>
            <li>
              No Seller Central, em Aplicativos e serviços → Gerenciar seus aplicativos,
              revogando a autorização do Venduzz.
            </li>
          </ul>
        </Section>

        <Section title="Dados que acessamos e por quê">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Anúncios</strong> (SKU, ASIN, título, preço, estoque, status): para
              exibir o catálogo e atualizar preço e estoque.
            </li>
            <li>
              <strong>Pedidos</strong> (itens, quantidades, valores, status, datas): para
              você gerenciar a venda e integrar com o seu ERP.
            </li>
            <li>
              <strong>Endereço de entrega do comprador</strong>: dado restrito da Amazon,
              solicitado pedido a pedido por meio de um token específico (Restricted Data
              Token), usado somente para o envio e a emissão da nota fiscal da venda.
            </li>
          </ul>
          <p>
            O Venduzz não solicita CPF nem dados de cobrança do comprador à Amazon. O
            e-mail do comprador que a Amazon fornece é um endereço intermediário gerado
            pela própria Amazon, e não o e-mail pessoal dele.
          </p>
        </Section>

        <Section title="Como protegemos esses dados">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Tokens de acesso e endereço do comprador são armazenados com criptografia
              AES-256-GCM, nunca em texto plano.
            </li>
            <li>
              O endereço do comprador é apagado automaticamente 30 dias após a data do
              pedido.
            </li>
            <li>
              Os dados de cada loja ficam isolados no banco de dados. Uma loja não acessa
              os dados de outra.
            </li>
            <li>
              Dentro da sua organização, cada usuário só vê o que as permissões dele
              liberam.
            </li>
            <li>
              Os dados da Amazon são usados só para operar a sua loja. Não são vendidos,
              não são usados para marketing e não são cruzados com dados de outros
              vendedores.
            </li>
          </ul>
          <p>
            Detalhes completos na nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Política de Privacidade
            </a>
            .
          </p>
        </Section>

        <Section title="Dúvidas">
          <p>
            Fale com a gente pela página de{" "}
            <a href="/suporte" className="text-primary hover:text-primary-hover font-medium">
              Suporte
            </a>{" "}
            ou pelo e-mail{" "}
            <a
              href="mailto:contato@venduzz.com.br"
              className="text-primary hover:text-primary-hover font-medium"
            >
              contato@venduzz.com.br
            </a>
            .
          </p>
        </Section>

        <div className="mt-12 rounded-2xl bg-brand-dark px-6 py-8 text-center">
          <p className="text-white font-semibold text-lg mb-4">
            Pronto para conectar sua conta Amazon?
          </p>
          <a
            href={`${HUB_URL}/register`}
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Criar conta
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
