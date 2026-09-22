// Contatos e dados cadastrais públicos da empresa — fonte única para todo o site.
// São publicados de propósito (LGPD exige identificar o controlador; a Amazon exige
// canal de suporte e dados da empresa na análise do app).

export const HUB_URL = "https://hub.venduzz.com.br";

export const CONTACT_EMAIL = "contato@venduzz.com.br";
export const PRIVACY_EMAIL = "privacidade@venduzz.com.br";

export const WHATSAPP_NUMBER = "551631701966";
export const WHATSAPP_DISPLAY = "(16) 3170-1966";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const COMPANY = {
  legalName: "58.850.103 Leandro Basso Ribeiro da Silva",
  cnpj: "58.850.103/0001-20",
  address:
    "Rua Olivia Maria de Jesus, 1 — Residencial Parque dos Servidores, Ribeirão Preto/SP, CEP 14094-236",
  forum: "Ribeirão Preto/SP",
};
