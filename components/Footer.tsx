import Image from "next/image";
import Link from "next/link";

const HUB_URL = "https://hub.venduzz.com.br";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logos/logo-venduzz.png"
              alt="Venduzz"
              width={112}
              height={112}
              className="h-7 w-auto object-contain"
            />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">vendu</span><span className="text-primary">zz</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Plataforma multicanal para sellers que querem crescer nos
            marketplaces brasileiros.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
            Produto
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</Link></li>
            <li><Link href="/#planos" className="hover:text-white transition-colors">Planos</Link></li>
            <li><a href={`${HUB_URL}/register`} className="hover:text-white transition-colors">Criar conta</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
            Marketplaces
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {["Mercado Livre", "Shopee", "Amazon", "Tray", "Magalu"].map((m) => (
              <li key={m}>
                {m === "Amazon" ? (
                  <Link href="/integracoes/amazon" className="hover:text-white transition-colors">{m}</Link>
                ) : (
                  <span className="text-slate-500">{m}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
            Suporte
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/suporte" className="hover:text-white transition-colors">Central de suporte</Link></li>
            <li><Link href="/#contato" className="hover:text-white transition-colors">Fale conosco</Link></li>
            <li>
              <a href="mailto:contato@venduzz.com.br" className="hover:text-white transition-colors">
                contato@venduzz.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
        <span>© {new Date().getFullYear()} Venduzz. Todos os direitos reservados.</span>
        <div className="flex gap-4">
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de uso</Link>
        </div>
      </div>
    </footer>
  );
}
