# Runbook: деплой frontend vkus-robot на VPS через MCP deploy-vps

Деплой **только через Git**: файлы проекта на сервер не загружаются вручную, только `git pull` в каталоге репозитория.

## Предусловия

- Репозиторий запушен (включая `frontend/`, `deploy/`) в удалённый Git (GitHub и т.п.).
- На VPS настроен SSH-доступ (MCP `user-deploy-vps`, connection `default`).
- Домен **vkus-robot.ru** указывает на IP сервера (A-запись).

---

## Шаг 1. Обновить код на сервере

В корне проекта на VPS (путь заменить на фактический, например `/opt/vkus-robot` или `~/vkus-robot`):

```bash
cd /path/to/vkus-robot
git pull
```

Если репо ещё не клонирован:

```bash
git clone <URL_РЕПОЗИТОРИЯ> vkus-robot
cd vkus-robot
```

---

## Шаг 2. Собрать и запустить контейнер frontend

```bash
cd /path/to/vkus-robot/frontend
docker compose build --no-cache
docker compose up -d
```

Проверка:

```bash
docker ps | grep vkus-robot
curl -s http://127.0.0.1:8096/health
```

Ожидается: контейнер `vkus-robot-frontend` в статусе Up, порт `127.0.0.1:8096->80/tcp`, ответ на `/health` — `ok`.

---

## Шаг 3. Настроить nginx

Скопировать конфиг из репо (файлы проекта только из Git):

```bash
sudo cp /path/to/vkus-robot/deploy/nginx/vkus-robot.ru /etc/nginx/sites-available/vkus-robot.ru
sudo ln -sf /etc/nginx/sites-available/vkus-robot.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Шаг 4. Выпустить SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d vkus-robot.ru -d www.vkus-robot.ru
```

Следовать подсказкам (email, согласие с ToS). Certbot сам добавит в конфиг `listen 443 ssl` и редиректы с 80 на 443.

Проверка:

```bash
curl -sI https://vkus-robot.ru
curl -s https://vkus-robot.ru/health
```

---

## Шаг 5. Верификация

- Открыть в браузере: https://vkus-robot.ru
- Проверить редирект www → без www (https://vkus-robot.ru)
- Проверить https://vkus-robot.ru/health — ответ `ok`

---

## Команды через MCP (execute-command)

Использовать `connectionName: "default"` (или не указывать). Примеры:

1. **Проверка окружения:**  
   `hostname && whoami && cd /path/to/vkus-robot && git status`

2. **Обновление и сборка:**  
   `cd /path/to/vkus-robot && git pull && cd frontend && docker compose build --no-cache && docker compose up -d`

3. **Проверка контейнера:**  
   `docker ps | grep vkus-robot && curl -s http://127.0.0.1:8096/health`

4. **Nginx (после копирования конфига вручную или из репо):**  
   `sudo cp /path/to/vkus-robot/deploy/nginx/vkus-robot.ru /etc/nginx/sites-available/ && sudo ln -sf /etc/nginx/sites-available/vkus-robot.ru /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl reload nginx`

5. **SSL:**  
   `sudo certbot --nginx -d vkus-robot.ru -d www.vkus-robot.ru --non-interactive --agree-tos -m YOUR_EMAIL`

Заменить `/path/to/vkus-robot` на реальный путь к репо на сервере и `YOUR_EMAIL` на email для Let's Encrypt.

---

## Откат

- Остановить контейнер: `cd frontend && docker compose down`
- Отключить сайт nginx: `sudo rm /etc/nginx/sites-enabled/vkus-robot.ru && sudo systemctl reload nginx`
- При необходимости откатить код: `git checkout <предыдущий_коммит>`

---

*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
