"use client";

import { useState, useMemo } from "react";
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react";

const HUB_URL = "https://hub.venduzz.com.br";
const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Quero+saber+mais+sobre+o+plano+Enterprise+do+Venduzz";

export type Plan = {
  id: string;
  name: string;
  basePriceMonthly: number;
  maxSkus: number;
  benefits: string[];
  isPopular: boolean;
  isCustom: boolean;
};

export type Tier = {
  id: string;
  fromOrders: number;
  toOrders: number | null;
  pricePerOrder: number;
  label: string;
};

function calcOrderCost(orders: number, tiers: Tier[]): number {
  let cost = 0;
  for (const tier of tiers) {
    if (orders <= tier.fromOrders) break;
    const cap = tier.toOrders ?? Infinity;
    const inTier = Math.min(orders, cap) - tier.fromOrders;
    if (inTier > 0) cost += inTier * tier.pricePerOrder;
  }
  return cost;
}

function fmt(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

type Props = { plans: Plan[]; tiers: Tier[] };

export default function PriceCalculator({ plans, tiers }: Props) {
  const [orders, setOrders] = useState(500);
  const [skus, setSkus] = useState(200);

  const results = useMemo(() => {
    return plans
      .filter((p) => !p.isCustom)
      .map((plan) => {
        const fits = plan.maxSkus >= skus;
        const base = plan.basePriceMonthly;
        const variable = calcOrderCost(orders, tiers);
        const total = base + variable;
        return { plan, fits, base, variable, total };
      })
      .sort((a, b) => a.total - b.total);
  }, [plans, tiers, orders, skus]);

  const hasCustom = plans.some((p) => p.isCustom);
  const eligible = results.filter((r) => r.fits);
  const bestId = eligible[0]?.plan.id ?? null;

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Simulador
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Qual o melhor plano para você?
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Informe sua estimativa de pedidos e SKUs e veja qual plano encaixa
            melhor na sua operação.
          </p>
        </div>

        {/* Sliders */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-brand-subtle rounded-2xl p-6 border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-slate-700">
                Pedidos por mês
              </label>
              <span className="text-2xl font-extrabold text-primary">
                {orders.toLocaleString("pt-BR")}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10000}
              step={10}
              value={orders}
              onChange={(e) => setOrders(Number(e.target.value))}
              className="w-full accent-[#6b46c1]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1</span>
              <span>10.000</span>
            </div>
          </div>

          <div className="bg-brand-subtle rounded-2xl p-6 border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-slate-700">
                Quantidade de SKUs
              </label>
              <span className="text-2xl font-extrabold text-primary">
                {skus.toLocaleString("pt-BR")}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={50000}
              step={50}
              value={skus}
              onChange={(e) => setSkus(Number(e.target.value))}
              className="w-full accent-[#6b46c1]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1</span>
              <span>50.000</span>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length === 0 && !hasCustom ? (
          <p className="text-center text-slate-400">Carregando planos…</p>
        ) : (
          <div className="flex flex-col gap-4">
            {results.map(({ plan, fits, base, variable, total }) => {
              const isBest = fits && plan.id === bestId;
              const isLocked = !fits;

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all ${
                    isBest
                      ? "border-primary bg-primary-light shadow-md"
                      : isLocked
                      ? "border-slate-100 bg-slate-50 opacity-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-base">
                        {plan.name}
                      </span>
                      {isBest && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-white border border-primary/20 px-2 py-0.5 rounded-full">
                          <Star size={11} /> Recomendado
                        </span>
                      )}
                      {isLocked && (
                        <span className="text-xs text-slate-400 font-medium">
                          SKU limite: {plan.maxSkus.toLocaleString("pt-BR")}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span>
                        Mensalidade:{" "}
                        <strong className="text-slate-700">{fmt(base)}</strong>
                      </span>
                      {tiers.length > 0 && (
                        <span>
                          {orders.toLocaleString("pt-BR")} pedidos:{" "}
                          <strong className="text-slate-700">{fmt(variable)}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-xs text-slate-400 mb-0.5">Total estimado</p>
                    <p
                      className={`text-2xl font-extrabold ${
                        isBest ? "text-primary" : "text-slate-900"
                      }`}
                    >
                      {fmt(total)}
                      <span className="text-sm font-normal text-slate-400">/mês</span>
                    </p>
                  </div>

                  {!isLocked && (
                    <a
                      href={`${HUB_URL}/register?plan=${plan.id}`}
                      className={`shrink-0 text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 ${
                        isBest
                          ? "bg-primary hover:bg-primary-hover text-white"
                          : "border border-slate-200 hover:border-primary text-slate-700 hover:text-primary"
                      }`}
                    >
                      <Check size={15} /> Escolher
                    </a>
                  )}
                </div>
              );
            })}

            {hasCustom && (
              <div className="rounded-2xl border border-slate-200 bg-brand-dark p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-bold text-white text-base mb-1">Enterprise</p>
                  <p className="text-sm text-slate-400">
                    Pedidos ilimitados, SKUs ilimitados, SLA dedicado e
                    integrações customizadas. Preço sob consulta.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle size={15} /> Falar com especialista
                  <ArrowRight size={14} />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
