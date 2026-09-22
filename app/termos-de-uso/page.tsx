import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termos de Uso — Venduzz",
  description:
    "Condições de uso da plataforma Venduzz: conta, planos, integrações com marketplaces, responsabilidades e cancelamento.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

const link = "text-primary hover:text-primary-hover font-medium";

export default function TermosDeUsoPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Termos de Uso
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Condições de uso do Venduzz
        </h1>
        <p className="text-sm text-slate-400 mb-10">Última atualização: 22 de setembro de 2026.</p>

        <Section title="1. Quem oferece o serviço">
          <p>
            O Venduzz é oferecido por <strong>{COMPANY.legalName}</strong>, inscrita no CNPJ
            sob o nº {COMPANY.cnpj}, com sede na {COMPANY.address} (&quot;Venduzz&quot;).
          </p>
          <p>
            Ao criar uma conta ou usar a plataforma, você declara que leu e concorda com
            estes Termos e com a{" "}
            <a href="/politica-de-privacidade" className={link}>
              Política de Privacidade
            </a>
            . Se não concordar, não use o serviço.
          </p>
        </Section>

        <Section title="2. O que é o Venduzz">
          <p>
            O Venduzz é uma plataforma online (software como serviço) para lojistas
            gerenciarem, em um só painel, anúncios, estoque, preços e pedidos em
            marketplaces e lojas virtuais conectados, como Mercado Livre, Shopee, Amazon,
            Tray, TikTok Shop e Magalu, além de integrar pedidos com o ERP do lojista.
          </p>
          <p>
            As funcionalidades disponíveis variam conforme o plano contratado e conforme
            o que cada marketplace permite fazer pela sua API.
          </p>
        </Section>

        <Section title="3. Conta e acesso">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              A conta é destinada a pessoas jurídicas ou profissionais que vendem online.
              Você deve fornecer dados verdadeiros e mantê-los atualizados.
            </li>
            <li>
              Você é responsável por manter sua senha em sigilo e por tudo o que é feito
              com a sua conta, inclusive pelos usuários que você convidar para a sua
              organização e pelas permissões que der a eles.
            </li>
            <li>
              Se suspeitar de uso indevido da sua conta, avise-nos imediatamente pelo
              e-mail {CONTACT_EMAIL}.
            </li>
          </ul>
        </Section>

        <Section title="4. Integrações com marketplaces">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Para conectar um marketplace, você autoriza o Venduzz a acessar a sua conta
              de vendedor naquele canal, pelo processo oficial de autorização do próprio
              marketplace. Você pode revogar essa autorização a qualquer momento.
            </li>
            <li>
              Você continua sujeito aos termos e políticas de cada marketplace. O Venduzz
              não é afiliado a nenhum deles e não responde por decisões tomadas por eles,
              como suspensão de anúncios ou de contas.
            </li>
            <li>
              Os marketplaces podem mudar suas APIs, limitar o acesso ou ficar
              indisponíveis. Nesses casos, algumas funções do Venduzz podem parar de
              funcionar até que a integração seja ajustada.
            </li>
          </ul>
        </Section>

        <Section title="5. Preços, estoque e dados enviados aos canais">
          <p>
            O Venduzz calcula e envia preços e estoque aos marketplaces com base nas
            regras, custos, margens e mapeamentos que <strong>você</strong> configura. Você
            é responsável por conferir essas configurações e pelos preços e quantidades
            publicados em seus anúncios. Recomendamos revisar os resultados antes de
            ativar atualizações automáticas.
          </p>
          <p>
            Os cálculos de comissão, frete, impostos e margem exibidos no painel são
            estimativas baseadas nas informações disponíveis e não substituem a
            orientação de um contador.
          </p>
        </Section>

        <Section title="6. Planos e pagamento">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              O uso do Venduzz é pago, conforme o plano escolhido. Valores, limites e forma
              de cobrança são os informados no momento da contratação.
            </li>
            <li>
              A falta de pagamento pode levar à pausa da conta. Enquanto pausada, a
              organização não consegue usar a plataforma e as integrações ficam
              interrompidas.
            </li>
            <li>
              Podemos reajustar valores, com aviso prévio por e-mail antes de a mudança
              valer para a sua conta.
            </li>
          </ul>
        </Section>

        <Section title="7. Uso permitido">
          <p>Você concorda em não:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>usar o Venduzz para atividades ilegais ou para vender produtos proibidos;</li>
            <li>
              tentar acessar dados de outras organizações, contornar controles de
              segurança ou fazer engenharia reversa da plataforma;
            </li>
            <li>
              usar dados de compradores obtidos pelo Venduzz para fins que não sejam
              atender e entregar o pedido, como marketing não autorizado;
            </li>
            <li>sobrecarregar a plataforma com acessos automatizados fora do uso normal.</li>
          </ul>
          <p>
            O descumprimento destas regras pode levar à suspensão ou ao encerramento da
            conta.
          </p>
        </Section>

        <Section title="8. Dados e privacidade">
          <p>
            Os dados da sua loja e dos seus pedidos continuam sendo seus. O Venduzz os
            trata apenas para prestar o serviço, conforme a{" "}
            <a href="/politica-de-privacidade" className={link}>
              Política de Privacidade
            </a>
            . Em relação aos dados dos compradores, você é o controlador e o Venduzz atua
            como operador, nos termos da LGPD.
          </p>
        </Section>

        <Section title="9. Disponibilidade e responsabilidade">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Trabalhamos para manter a plataforma disponível e funcionando corretamente,
              mas não garantimos funcionamento ininterrupto ou livre de erros. Manutenções
              e falhas de terceiros (hospedagem, marketplaces, ERPs) podem causar
              interrupções.
            </li>
            <li>
              Na máxima extensão permitida pela lei, o Venduzz não responde por lucros
              cessantes ou danos indiretos, e a responsabilidade total fica limitada ao
              valor pago pela sua organização nos 3 meses anteriores ao fato.
            </li>
          </ul>
        </Section>

        <Section title="10. Propriedade intelectual">
          <p>
            O software, a marca e o conteúdo do Venduzz pertencem ao Venduzz. A assinatura
            dá à sua organização o direito de usar a plataforma enquanto a conta estiver
            ativa, sem transferir nenhum direito sobre ela.
          </p>
        </Section>

        <Section title="11. Cancelamento">
          <p>
            Você pode cancelar a assinatura a qualquer momento pelo e-mail{" "}
            {CONTACT_EMAIL}. Antes de cancelar, você pode usar o botão &quot;Remover
            conexão&quot; em Integrações, que apaga na hora os tokens de acesso aos
            marketplaces, ou revogar a autorização diretamente em cada marketplace. Os
            demais dados seguem o que está descrito na Política de Privacidade.
          </p>
        </Section>

        <Section title="12. Alterações e foro">
          <p>
            Podemos atualizar estes Termos. Mudanças relevantes serão avisadas por e-mail
            ou no painel, e a data no topo desta página indica a versão vigente.
          </p>
          <p>
            Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca
            de {COMPANY.forum} para resolver qualquer questão relacionada a eles.
          </p>
        </Section>

        <Section title="13. Contato">
          <p>
            Dúvidas sobre estes Termos: {CONTACT_EMAIL} ou pela página de{" "}
            <a href="/suporte" className={link}>
              Suporte
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
