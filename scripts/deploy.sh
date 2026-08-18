#!/bin/bash
# deploy.sh — atualiza e reinicia o venduzz-site na VPS (mesma VPS do hub, porta 3001)
# Uso: bash scripts/deploy.sh
set -e

echo "▶ git pull..."
git pull

echo "▶ npm install..."
npm install

echo "▶ npm run build..."
npm run build

echo "▶ pm2 (start na 1a vez, restart depois)..."
pm2 describe venduzz-site > /dev/null 2>&1 && pm2 restart venduzz-site --update-env || pm2 start ecosystem.config.js

echo "✅ Deploy concluído."
