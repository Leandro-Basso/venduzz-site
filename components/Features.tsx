import {
  Megaphone,
  RefreshCw,
  Calculator,
  ShoppingCart,
  BarChart3,
  Store,
} from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Gestão de Anúncios",
    description:
      "Publique e atualize produtos em todos os canais a partir de um único painel. Título, fotos, preço e estoque sincronizados.",
    color: "text-primary",
    bg: "bg-primary-light",
  },
  {
    icon: RefreshCw,
    title: "Sincronização de Estoque",
    description:
      "Estoque atualizado em tempo real em todos os marketplaces. Sem venda de produto indisponível.",
    color: "text-accent",
    bg: "bg-blue-50",
  },
  {
    icon: Calculator,
    title: "Motor de Preços",
    description:
      "Calcule preços automaticamente com base em taxas do marketplace, custo de frete e sua margem de lucro.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: ShoppingCart,
    title: "Gestão de Pedidos",
    description:
      "Acompanhe e processe todos os seus pedidos em um só lugar, independente do canal de venda.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Dashboard",
    description:
      "Visualize faturamento, ticket médio e performance por canal em tempo real para tomar decisões rápidas.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Store,
    title: "Multi-loja",
    description:
      "Gerencie várias lojas e marketplaces com um único acesso. Ideal para operações em escala.",
    color: "text-primary",
    bg: "bg-primary-light",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Funcionalidades
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Tudo que você precisa para escalar
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Do cadastro de produtos até a análise de resultados — o Venduzz
            cobre toda a operação do seu e-commerce multicanal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={f.color} size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
