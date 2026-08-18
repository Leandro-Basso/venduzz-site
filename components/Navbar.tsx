"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const HUB_URL = "https://hub.venduzz.com.br";

const links = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logos/logo-venduzz.png"
            alt="Venduzz"
            width={128}
            height={128}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">vendu</span><span className="text-primary">zz</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${HUB_URL}/login`}
            className="text-sm text-slate-300 hover:text-white transition-colors"
          >
            Entrar
          </a>
          <a
            href={`${HUB_URL}/register`}
            className="text-sm bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Criar conta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <a href={`${HUB_URL}/login`} className="text-slate-300 text-sm">
            Entrar
          </a>
          <a
            href={`${HUB_URL}/register`}
            className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            Criar conta
          </a>
        </div>
      )}
    </header>
  );
}
