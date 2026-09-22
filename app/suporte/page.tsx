import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY, CONTACT_EMAIL, PRIVACY_EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Suporte — Venduzz",
  description:
    "Canais de atendimento do Venduzz, dúvidas frequentes sobre integrações e como solicitar acesso ou exclusão de dados.",
};

const faq = [
  {
    q: "Como conecto um marketplace?",
    a: "No painel do Venduzz, acesse Integrações, selecione a loja e clique em Conectar no card do marketplace. Você é levado ao site do marketplace para autorizar o acesso e depois volta ao Venduzz com a conexão ativa.",
  },
  {
    q: "Como desconecto um marketplace?",
    a: "Em Integrações, use o botão \"Remover conexão\" no card do marketplace. Os tokens de acesso daquela conexão são apagados na hora. Você também pode revogar a autorização diretamente no painel do marketplace.",
  },
  {
    q: "A Amazon pediu para eu autorizar de novo. É normal?",
    a: "Sim. A Amazon exige que o vendedor renove a autorização de aplicativos a cada 365 dias. O Venduzz avisa com 30 dias de antecedência, e a renovação é o mesmo processo da primeira conexão.",
  },
  {
    q: "Meus pedidos não aparecem. O que faço?",
    a: "Confira em Integrações se a conexão da loja está ativa. Se estiver e o problema continuar, escreva para contato@venduzz.com.br com o nome da loja, o marketplace e o número do pedido.",
  },
  {
    q: "Como peço acesso, correção ou exclusão dos meus dados?",
    a: "Escreva para privacidade@venduzz.com.br. Se você comprou de uma loja que usa o Venduzz, o primeiro contato deve ser com a própria loja, mas também podemos intermediar.",
  },
];

export default function SuportePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Suporte
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Como podemos ajudar?
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-10">
          Atendemos lojistas que usam o Venduzz e qualquer pessoa com dúvidas sobre o
          tratamento de dados pessoais. Respondemos por e-mail e WhatsApp em dias úteis.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          <a
            href={whatsappUrl("Olá, preciso de suporte no Venduzz")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-200 p-5 hover:border-primary transition-colors"
          >
            <MessageCircle className="text-primary mb-3" size={22} />
            <p className="font-semibold text-slate-900">WhatsApp</p>
            <p className="text-sm text-slate-500 mt-1">
              Dúvidas rápidas sobre o uso da plataforma.
            </p>
            <p className="text-sm text-primary font-medium mt-3">{WHATSAPP_DISPLAY}</p>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-2xl border border-slate-200 p-5 hover:border-primary transition-colors"
          >
            <Mail className="text-primary mb-3" size={22} />
            <p className="font-semibold text-slate-900">Suporte técnico e comercial</p>
            <p className="text-sm text-slate-500 mt-1">
              Integrações, pedidos, planos e cobrança.
            </p>
            <p className="text-sm text-primary font-medium mt-3">{CONTACT_EMAIL}</p>
          </a>
          <a
            href={`mailto:${PRIVACY_EMAIL}`}
            className="rounded-2xl border border-slate-200 p-5 hover:border-primary transition-colors"
          >
            <ShieldCheck className="text-primary mb-3" size={22} />
            <p className="font-semibold text-slate-900">Privacidade e dados pessoais</p>
            <p className="text-sm text-slate-500 mt-1">
              Acesso, correção ou exclusão de dados (LGPD).
            </p>
            <p className="text-sm text-primary font-medium mt-3">{PRIVACY_EMAIL}</p>
          </a>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-5">Perguntas frequentes</h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200 mb-14">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none flex justify-between gap-4 font-medium text-slate-900">
                {item.q}
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">{item.a}</p>
            </details>
          ))}
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-3">Links úteis</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-14">
          <li>
            <a href="/integracoes/amazon" className="text-primary hover:text-primary-hover font-medium">
              Integração Amazon
            </a>
          </li>
          <li>
            <a href="/politica-de-privacidade" className="text-primary hover:text-primary-hover font-medium">
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="/termos-de-uso" className="text-primary hover:text-primary-hover font-medium">
              Termos de Uso
            </a>
          </li>
        </ul>

        <div className="rounded-2xl bg-brand-subtle p-5 text-xs text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Dados da empresa</p>
          <p>{COMPANY.legalName}</p>
          <p>CNPJ {COMPANY.cnpj}</p>
          <p>{COMPANY.address}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
