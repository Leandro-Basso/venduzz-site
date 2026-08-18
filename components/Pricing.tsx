import { Check, Minus, Zap, MessageCircle } from "lucide-react";
import type { Plan } from "@/components/PriceCalculator";

const HUB_URL = "https://hub.venduzz.com.br";
const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Quero+saber+mais+sobre+o+plano+Enterprise+do+Venduzz";

function formatPrice(cents: number, isCustom: boolean) {
  if (isCustom || cents === 0) return "Sob consulta";
  return `R$ ${(cents / 100).toLocaleString("pt-BR", { minimumFractionDigits: 0 })}`;
}

export default function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <section id="planos" className="py-24 px-4 bg-brand-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Planos e Preços
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Planos para cada etapa do crescimento
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Comece gratuitamente e escale conforme sua operação cresce. Cancele
            quando quiser, sem burocracia.
          </p>
        </div>

        {plans.length === 0 ? (
          <p className="text-center text-slate-400 py-12">Carregando planos…</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => {
              const priceLabel = formatPrice(plan.basePriceMonthly, plan.isCustom);
              const showPeriod = !plan.isCustom && plan.basePriceMonthly > 0;
              const ctaHref = plan.isCustom
                ? WHATSAPP_URL
                : `${HUB_URL}/register?plan=${plan.id}`;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 border flex flex-col gap-6 ${
                    plan.isPopular
                      ? "bg-brand-dark border-primary shadow-2xl shadow-primary/20 scale-105"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap size={12} /> Mais popular
                    </span>
                  )}

                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        plan.isPopular ? "text-purple-300" : "text-primary"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <div className="mt-2 flex items-end gap-1">
                      <span
                        className={`text-3xl font-extrabold ${
                          plan.isPopular ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {priceLabel}
                      </span>
                      {showPeriod && (
                        <span
                          className={`text-sm pb-1 ${
                            plan.isPopular ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          /mês
                        </span>
                      )}
                    </div>
                    {plan.maxSkus < 999999 && (
                      <p
                        className={`mt-1 text-xs ${
                          plan.isPopular ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        Até {plan.maxSkus.toLocaleString("pt-BR")} SKUs
                      </p>
                    )}
                  </div>

                  {plan.benefits.length > 0 && (
                    <ul className="flex flex-col gap-3 flex-1">
                      {plan.benefits.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm">
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.isPopular ? "text-purple-300" : "text-primary"
                            }`}
                          />
                          <span
                            className={
                              plan.isPopular ? "text-slate-300" : "text-slate-600"
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={ctaHref}
                    target={plan.isCustom ? "_blank" : undefined}
                    rel={plan.isCustom ? "noopener noreferrer" : undefined}
                    className={`flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl transition-colors ${
                      plan.isPopular
                        ? "bg-primary hover:bg-primary-hover text-white"
                        : "border border-slate-200 hover:border-primary hover:text-primary text-slate-700"
                    }`}
                  >
                    {plan.isCustom ? (
                      <>
                        <MessageCircle size={16} /> Falar com especialista
                      </>
                    ) : (
                      "Assinar plano"
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {plans.length > 0 && (
          <div className="mt-16 hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-slate-500 pb-4 pr-4 w-1/4">
                    Comparar recursos
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="pb-4 px-4 text-center">
                      <span
                        className={`text-sm font-bold ${
                          plan.isPopular ? "text-primary" : "text-slate-900"
                        }`}
                      >
                        {plan.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="py-4 pr-4 text-sm text-slate-600">Preço</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="py-4 px-4 text-center text-sm font-semibold text-slate-900">
                      {formatPrice(plan.basePriceMonthly, plan.isCustom)}
                      {!plan.isCustom && plan.basePriceMonthly > 0 && "/mês"}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="py-4 pr-4 text-sm text-slate-600">SKUs</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="py-4 px-4 text-center text-sm text-slate-600">
                      {plan.maxSkus < 999999
                        ? `Até ${plan.maxSkus.toLocaleString("pt-BR")}`
                        : "Ilimitado"}
                    </td>
                  ))}
                </tr>
                {Array.from(new Set(plans.flatMap((p) => p.benefits))).map((feature) => (
                  <tr key={feature} className="border-t border-slate-200">
                    <td className="py-4 pr-4 text-sm text-slate-600">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="py-4 px-4 text-center">
                        {plan.benefits.includes(feature) ? (
                          <Check size={18} className="mx-auto text-primary" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-center text-xs text-slate-400 mt-8">
          Cancele quando quiser, sem fidelidade.
        </p>
      </div>
    </section>
  );
}
