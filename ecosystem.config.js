module.exports = {
  apps: [
    {
      name: "venduzz-site",
      script: "node_modules/.bin/next",
      // Porta 3001 — o hub (venduzz-app) já usa 3000 no mesmo VPS, ver
      // C:\Users\leandro.basso\Desktop\PJT_ANDAMENTO\venduzz\ecosystem.config.js
      args: "start -p 3001",
      env: { NODE_ENV: "production" },
      max_memory_restart: "256M",
    },
  ],
}
