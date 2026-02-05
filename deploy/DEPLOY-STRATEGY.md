# Стратегия деплоя frontend vkus-robot на VPS

## Сервер (MCP user-deploy-vps)

- **Хост:** 213.159.67.199 (default)
- **Пользователь:** root
- **Деплой:** только через Git (локально commit + push → на сервере pull → build/restart).

## Выбранные порты и сервисы

| Назначение           | Порт (хост) | Привязка   | Примечание                    |
|----------------------|-------------|------------|-------------------------------|
| Frontend (контейнер) | 8096        | 127.0.0.1  | Доступ только через nginx    |
| Nginx                | 80, 443     | 0.0.0.0    | Уже заняты, виртуальные хосты |

Порт **8096** свободен на сервере (проверено по `ss -tuln` и списку контейнеров).

## Домен и SSL

- **Домен:** vkus-robot.ru (и www.vkus-robot.ru)
- **SSL:** Let's Encrypt через certbot (уже установлен на сервере).
- После добавления конфига nginx:  
  `sudo certbot --nginx -d vkus-robot.ru -d www.vkus-robot.ru`

## Файлы в репозитории

- `frontend/Dockerfile` — сборка Vite + раздача через nginx.
- `frontend/docker-compose.yml` — запуск контейнера с маппингом 8096→80.
- `deploy/nginx/vkus-robot.ru` — конфиг nginx (upstream на 127.0.0.1:8096).
- `deploy/RUNBOOK-MCP-DEPLOY.md` — пошаговый деплой через MCP.

## Порядок деплоя (кратко)

1. Локально: закоммитить и запушить все изменения (в т.ч. frontend и deploy).
2. На VPS: клонировать/обновить репо, собрать образ, запустить контейнер на 8096.
3. Скопировать nginx-конфиг в `/etc/nginx/sites-available/`, включить сайт, проверить и перезагрузить nginx.
4. Выпустить сертификаты certbot для vkus-robot.ru и www.vkus-robot.ru.
5. Проверить https://vkus-robot.ru и /health.

Подробные команды — в `deploy/RUNBOOK-MCP-DEPLOY.md`.
