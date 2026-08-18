import { ArrowRight, MessageCircle } from "lucide-react";

const HUB_URL = "https://hub.venduzz.com.br";
const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C+quero+conhecer+o+Venduzz";

const badges = ["Mercado Livre", "Shopee", "Amazon", "Tray", "Magalu"];

export default function Hero() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-24 px-4 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Pill badge */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Plataforma multicanal para sellers brasileiros
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up">
          Venda em todos os{" "}
          <span className="bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">
            marketplaces.
          </span>
          <br />
          Gerencie tudo em um lugar.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
          O Venduzz conecta seus produtos, pedidos e preços no Mercado Livre,
          Shopee, Amazon e muito mais — sem planilha, sem dor de cabeça.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
          <a
            href={`${HUB_URL}/register`}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-primary/30"
          >
            Criar minha conta
            <ArrowRight size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            <MessageCircle size={18} />
            Falar com especialista
          </a>
        </div>

        {/* Marketplace badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <span className="text-xs text-slate-500 self-center mr-1">
            Integrado com:
          </span>
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
