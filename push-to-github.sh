#!/usr/bin/env bash
# Abrek Gear — GitHub'a tek komutla gönderme scripti
#
# Kullanım:
#   ./scripts/push-to-github.sh <repo-url>
#   ./scripts/push-to-github.sh git@github.com:kullaniciadi/abrek-gear.git
#
# Repo URL vermezseniz script sizden ister.
# GitHub CLI (gh) kuruluysa ve giriş yapılmışsa, repo henüz yoksa
# sizin için otomatik olarak oluşturmayı da teklif eder.

set -euo pipefail

BOLD="\033[1m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
RESET="\033[0m"

info()  { echo -e "${BOLD}${GREEN}➜${RESET} $1"; }
warn()  { echo -e "${BOLD}${YELLOW}!${RESET} $1"; }
fail()  { echo -e "${BOLD}${RED}✗${RESET} $1"; exit 1; }

# Proje kökünde çalıştığından emin ol
cd "$(dirname "$0")/.."

if ! command -v git >/dev/null 2>&1; then
  fail "git bulunamadı. Lütfen önce git kurun: https://git-scm.com"
fi

REPO_URL="${1:-}"

# Repo URL verilmediyse iste, gh cli varsa repo oluşturmayı teklif et
if [ -z "$REPO_URL" ]; then
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    warn "Repo URL'si verilmedi."
    read -rp "GitHub CLI ile yeni bir repo oluşturulsun mu? (e/h): " CREATE_NEW
    if [[ "$CREATE_NEW" =~ ^[eE]$ ]]; then
      read -rp "Repo adı (varsayılan: abrek-gear): " REPO_NAME
      REPO_NAME="${REPO_NAME:-abrek-gear}"
      read -rp "Repo görünürlüğü — public/private (varsayılan: private): " VISIBILITY
      VISIBILITY="${VISIBILITY:-private}"
      info "GitHub'da '$REPO_NAME' reposu oluşturuluyor..."
      gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin
      REPO_URL="$(git remote get-url origin)"
    fi
  fi

  if [ -z "$REPO_URL" ]; then
    read -rp "GitHub repo URL'nizi girin (örn. https://github.com/kullanici/abrek-gear.git): " REPO_URL
  fi
fi

[ -z "$REPO_URL" ] && fail "Repo URL'si olmadan devam edilemez."

# Git deposu değilse başlat
if [ ! -d ".git" ]; then
  info "Git deposu başlatılıyor..."
  git init
fi

# Ana branch'i main olarak ayarla
CURRENT_BRANCH="$(git symbolic-ref --short -q HEAD || echo "")"
if [ "$CURRENT_BRANCH" != "main" ]; then
  info "Branch 'main' olarak ayarlanıyor..."
  git branch -M main
fi

# origin remote'unu ekle/güncelle
if git remote get-url origin >/dev/null 2>&1; then
  info "Mevcut 'origin' remote'u güncelleniyor..."
  git remote set-url origin "$REPO_URL"
else
  info "'origin' remote'u ekleniyor: $REPO_URL"
  git remote add origin "$REPO_URL"
fi

# Değişiklikleri ekle ve commit'le
info "Dosyalar ekleniyor..."
git add .

if git diff --cached --quiet; then
  warn "Commit edilecek yeni değişiklik yok."
else
  read -rp "Commit mesajı (varsayılan: 'Abrek Gear projesi'): " COMMIT_MSG
  COMMIT_MSG="${COMMIT_MSG:-Abrek Gear projesi}"
  git commit -m "$COMMIT_MSG"
fi

# Push et
info "GitHub'a gönderiliyor..."
git push -u origin main

echo ""
info "${GREEN}Tamamlandı!${RESET} Projeniz GitHub'a gönderildi: $REPO_URL"
info "Codespaces ile açmak için: GitHub reponuzda 'Code → Codespaces → Create codespace on main'"
