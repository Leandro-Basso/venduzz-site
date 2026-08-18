import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — Venduzz",
  description:
    "Como a Venduzz coleta, usa, armazena, protege, compartilha e exclui dados pessoais na plataforma e nas integrações com marketplaces.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Política de Privacidade
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Como tratamos seus dados
        </h1>
        <p className="text-sm text-slate-400 mb-10">Última atualização: 18 de agosto de 2026.</p>

        <Section title="1. Quem somos">
          <p>
            A Venduzz (
            <strong>
              [PREENCHER: razão social completa], inscrita no CNPJ sob o nº [PREENCHER]
            </strong>
            , com sede em [PREENCHER: endereço completo]) é a controladora dos dados
            pessoais tratados nos termos desta política, para os fins da Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <p>
            A Venduzz é uma plataforma de gestão multicanal que permite a lojistas
            (&quot;clientes&quot;, &quot;organizações&quot;) centralizar anúncios, estoque,
            pedidos e precificação em marketplaces brasileiros (Mercado Livre, Shopee,
            Amazon, Tray Commerce, TikTok Shop, entre outros).
          </p>
        </Section>

        <Section title="2. A quem esta política se aplica">
          <p>Esta política cobre dois grupos diferentes de titulares de dados:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Usuários da plataforma</strong> — pessoas que criam conta na
              Venduzz para administrar uma loja (nome, e-mail, senha).
            </li>
            <li>
              <strong>Clientes finais dos nossos clientes</strong> — compradores que
              finalizam uma compra num marketplace integrado à Venduzz. Nesse caso, a
              Venduzz atua como <strong>operadora</strong> dos dados em nome do lojista
              (controlador da relação de venda), processando informações que o próprio
              marketplace já coletou no momento da compra.
            </li>
          </ul>
        </Section>

        <Section title="3. Quais dados coletamos">
          <p>
            <strong>Dados de conta</strong>: nome, e-mail e senha (armazenada com hash,
            nunca em texto legível) de quem cria uma conta na Venduzz.
          </p>
          <p>
            <strong>Dados de integração com marketplaces</strong>: credenciais de acesso
            (tokens OAuth) às contas de vendedor que o lojista conecta — usadas
            exclusivamente para sincronizar anúncios, estoque, preços e pedidos em nome
            dele.
          </p>
          <p>
            <strong>Dados de pedidos e clientes finais</strong>: quando um pedido é
            sincronizado a partir de um marketplace, importamos automaticamente nome,
            e-mail, telefone, CPF/CNPJ (quando disponível) e endereço de entrega do
            comprador — informação necessária para o lojista emitir nota fiscal, calcular
            frete e cumprir obrigações comerciais e fiscais da venda.
          </p>
          <p>
            <strong>Dados de pagamento da assinatura</strong>: informações de cobrança do
            plano contratado pelo lojista junto à Venduzz.
          </p>
          <p>
            <strong>Dados de navegação neste site</strong>: este site
            (venduzz.com.br) não utiliza cookies de rastreamento nem ferramentas de
            analytics de terceiros além do necessário para seu funcionamento básico.
          </p>
        </Section>

        <Section title="4. Como usamos os dados">
          <ul className="list-disc pl-5 space-y-1">
            <li>Operar a plataforma: autenticação, permissões e funcionamento das lojas.</li>
            <li>
              Sincronizar catálogo, estoque, preços e pedidos entre a loja do lojista e
              os marketplaces conectados.
            </li>
            <li>
              Calcular precificação, comissões, frete e margem de lucro por venda
              (&quot;Venduzz Price&quot;).
            </li>
            <li>
              Integrar pedidos com o ERP do lojista, quando configurado, para emissão de
              nota fiscal e baixa financeira.
            </li>
            <li>
              Cadastrar automaticamente o cliente final na base do lojista (CRM), para
              que ele tenha histórico de compras e possa atendê-lo.
            </li>
            <li>
              Quando o lojista habilita o recurso opcional &quot;Venduzz Verifica&quot;,
              consultar o nome vinculado a um CPF junto a um provedor especializado
              (BigDataCorp), para reduzir fraude — recurso de opt-in por loja, nunca
              ativado por padrão.
            </li>
            <li>Cobrança da assinatura contratada.</li>
            <li>Suporte técnico e comunicação sobre a conta.</li>
          </ul>
          <p>
            Não usamos os dados de clientes finais para qualquer finalidade de marketing
            da própria Venduzz, nem os vendemos a terceiros.
          </p>
        </Section>

        <Section title="5. Base legal (LGPD)">
          <p>
            Tratamos dados de conta e de assinatura com base na <strong>execução de
            contrato</strong> (art. 7º, V) firmado com o lojista. Dados de pedidos e
            clientes finais são tratados com base no <strong>cumprimento de obrigação
            legal ou regulatória</strong> (art. 7º, II — obrigações fiscais e comerciais
            da venda) e no <strong>legítimo interesse</strong> do lojista em gerenciar
            sua própria operação (art. 7º, IX), sempre limitado ao necessário para
            prestar o serviço contratado.
          </p>
        </Section>

        <Section title="6. Como protegemos os dados">
          <ul className="list-disc pl-5 space-y-1">
            <li>Conexão criptografada (HTTPS/TLS) em toda a plataforma.</li>
            <li>
              Credenciais de integração com marketplaces (tokens OAuth) armazenadas com
              criptografia (AES-256-GCM), nunca em texto plano.
            </li>
            <li>
              Isolamento de dados por loja/organização a nível de banco de dados
              (row-level security) — uma loja nunca acessa dado de outra.
            </li>
            <li>
              Controle de acesso por papéis (quem vê o quê dentro de uma organização é
              definido por permissão, não por padrão amplo).
            </li>
            <li>Registro de auditoria para ações sensíveis (ex.: exclusão de cliente).</li>
          </ul>
        </Section>

        <Section title="7. Com quem compartilhamos">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Marketplaces conectados</strong> (Mercado Livre, Shopee, Amazon,
              Tray, TikTok Shop, etc.) — necessário para sincronizar preço, estoque e
              status do pedido, sempre por decisão do próprio lojista ao conectar a
              integração.
            </li>
            <li>
              <strong>ERP do lojista</strong> (quando configurado) — para emissão de nota
              fiscal e controle financeiro do pedido.
            </li>
            <li>
              <strong>Provedores de infraestrutura</strong> que hospedam nossos
              servidores e banco de dados, sob obrigação contratual de confidencialidade.
            </li>
            <li>
              <strong>BigDataCorp</strong>, exclusivamente quando o lojista ativa o
              recurso opcional de verificação de CPF (&quot;Venduzz Verifica&quot;).
            </li>
            <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p>Nunca vendemos dados pessoais a terceiros para fins de marketing.</p>
        </Section>

        <Section title="8. Por quanto tempo guardamos">
          <p>
            Dados de pedido e cliente final são mantidos enquanto a conta do lojista
            estiver ativa, pelo prazo necessário ao cumprimento de obrigações fiscais e
            comerciais aplicáveis à venda. O lojista pode solicitar a exclusão do
            cadastro de um cliente a qualquer momento diretamente na plataforma; dados de
            pedido vinculados a obrigação fiscal são preservados nos termos da lei mesmo
            após a exclusão do cadastro do cliente (LGPD, art. 16, II).
          </p>
        </Section>

        <Section title="9. Seus direitos como titular de dados">
          <p>Nos termos da LGPD, você pode solicitar, a qualquer momento:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Eliminação dos dados tratados com base no seu consentimento;</li>
            <li>Informação sobre com quem compartilhamos seus dados.</li>
          </ul>
          <p>
            Se você é cliente final de uma loja que usa a Venduzz, seu primeiro contato
            deve ser diretamente com essa loja (ela é a controladora da relação de venda).
            Se preferir, também pode nos contatar pelos canais abaixo e faremos a
            intermediação.
          </p>
        </Section>

        <Section title="10. Alterações a esta política">
          <p>
            Podemos atualizar esta política para refletir mudanças na plataforma ou na
            legislação aplicável. A data no topo desta página sempre indica a versão
            vigente.
          </p>
        </Section>

        <Section title="11. Fale conosco">
          <p>
            Dúvidas sobre esta política ou sobre o tratamento dos seus dados:{" "}
            <a
              href="mailto:privacidade@venduzz.com.br"
              className="text-primary hover:text-primary-hover font-medium"
            >
              privacidade@venduzz.com.br
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
