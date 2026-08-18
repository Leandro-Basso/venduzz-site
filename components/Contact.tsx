"use client";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C+quero+conhecer+o+Venduzz";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar endpoint de e-mail / CRM
    setSent(true);
  }

  return (
    <section id="contato" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Contato
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Fale com a gente
          </h2>
          <p className="mt-4 text-slate-500 text-base">
            Tem dúvidas sobre a plataforma? Quer uma demonstração ao vivo?
            Nossa equipe responde rápido — no chat, no WhatsApp ou por e-mail.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-4 rounded-xl transition-colors shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
              <ArrowRight size={16} className="ml-auto" />
            </a>
            <a
              href="mailto:contato@venduzz.com.br"
              className="inline-flex items-center gap-3 border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold px-6 py-4 rounded-xl transition-colors"
            >
              <Mail size={20} />
              contato@venduzz.com.br
            </a>
          </div>
        </div>

        <div className="bg-brand-subtle rounded-2xl p-8 border border-slate-100">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Mensagem enviada!
              </h3>
              <p className="text-slate-500 text-sm">
                Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nome
                </label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
