module.exports = {
  apps: [
    {
      name: "venduzz-site",
      script: "node_modules/.bin/next",
      // Porta 3003 — VPS compartilhado com INTEGRA_MART (integra-mart:3000,
      // integra-bull-board:3001) e o hub Venduzz roda na 3002 (ajustado
      // manualmente na VPS, diferente do que ecosystem.config.js do hub
      // documenta) — confirmado ao vivo via `ss -tlnp` em 18/08/2026.
      args: "start -p 3003",
      env: { NODE_ENV: "production" },
      max_memory_restart: "256M",
    },
  ],
}
