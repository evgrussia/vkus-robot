# Вкус-Робот — каталог документации проекта

**Кратко:** ИИ-повар в Telegram: генерация рецептов из фото холодильника с пошаговыми инструкциями и адаптацией под диету.

Ниже — структурированный каталог всех документов проекта по категориям и типам со ссылками.

---

## Оглавление

1. [Discovery (исследование и продукт)](#1-discovery-исследование-и-продукт)
2. [Design (дизайн и UX/UI)](#2-design-дизайн-и-uxui)
3. [Deploy (развёртывание)](#3-deploy-развёртывание)
4. [Context (контекст и чекпоинты)](#4-context-контекст-и-чекпоинты)
5. [Frontend (код и гайды)](#5-frontend-код-и-гайды)
6. [Система агентов (.cursor)](#6-система-агентов-cursor)

---

## 1. Discovery (исследование и продукт)

Документы фазы Discovery: видение продукта, требования, рынок, метрики, риски.

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [docs/discovery/vision-document.md](docs/discovery/vision-document.md) | Vision: миссия, проблема, решение, целевая аудитория (50M+), позиционирование и цели к 2027 | Стратегия |
| [docs/discovery/prd.md](docs/discovery/prd.md) | PRD MVP: цели, метрики (10K WAU, D7 >40%), фичи (CV, LLM, таймеры, голос, диеты, КБЖУ, доставка) | Требования |
| [docs/discovery/user-stories-detailed.md](docs/discovery/user-stories-detailed.md) | Детальные пользовательские истории по фичам MVP | Требования |
| [docs/discovery/market-analysis.md](docs/discovery/market-analysis.md) | Анализ рынка: TAM/SAM/SOM, тренды FoodTech, сегменты | Исследование |
| [docs/discovery/competitive-analysis.md](docs/discovery/competitive-analysis.md) | Конкурентный анализ и отличия Вкус-Робота | Исследование |
| [docs/discovery/business-model-canvas.md](docs/discovery/business-model-canvas.md) | Business Model Canvas: ценность, каналы, потоки доходов, партнёры | Бизнес-модель |
| [docs/discovery/go-to-market-strategy.md](docs/discovery/go-to-market-strategy.md) | Go-to-market: каналы привлечения, позиционирование, запуск | Стратегия |
| [docs/discovery/metrics-tracking-plan.md](docs/discovery/metrics-tracking-plan.md) | План метрик: North Star, воронка, события, дашборды | Метрики |
| [docs/discovery/risk-register.md](docs/discovery/risk-register.md) | Реестр рисков: технические, продукт, рынок, митигация | Управление рисками |

---

## 2. Design (дизайн и UX/UI)

Документы фазы Design: информационная архитектура, сценарии, визуал, компоненты, контент.

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [docs/design/information-architecture.md](docs/design/information-architecture.md) | IA: структура Telegram Bot + WebApp, точки входа, навигация, типы контента | UX |
| [docs/design/user-flows.md](docs/design/user-flows.md) | 13 пользовательских сценариев: онбординг, генерация рецепта, готовка, профиль, подписка и др. | UX |
| [docs/design/wireframes.md](docs/design/wireframes.md) | Low-fidelity прототипы: экраны бота и WebApp (20+ экранов), ASCII-схемы | UX |
| [docs/design/design-system.md](docs/design/design-system.md) | Design System: бренд, цвета (#FF6B35, #4ECDC4), типографика, spacing (8px), иконография | UI |
| [docs/design/component-library.md](docs/design/component-library.md) | Библиотека компонентов: кнопки, карточки, навигация, модалки, формы (13 категорий) | UI |
| [docs/design/content-guide.md](docs/design/content-guide.md) | Голос бренда, tone of voice, микро-копирайтинг, эмодзи, ошибки и пустые состояния | Контент |
| [docs/design/figma-make-prompts.md](docs/design/figma-make-prompts.md) | Промпты для генерации макетов в Figma (Figma Make / AI): экраны, компоненты, стили | Инструменты |

---

## 3. Deploy (развёртывание)

Деплой frontend на VPS: стратегия, runbook, конфигурация nginx.

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [deploy/DEPLOY-STRATEGY.md](deploy/DEPLOY-STRATEGY.md) | Стратегия деплоя: хост, порты (8096), домен vkus-robot.ru, SSL (Let's Encrypt), только через Git | Стратегия |
| [deploy/RUNBOOK-MCP-DEPLOY.md](deploy/RUNBOOK-MCP-DEPLOY.md) | Пошаговый runbook: git pull, сборка Docker, nginx, certbot, проверка /health | Runbook |
| [deploy/nginx/vkus-robot.ru](deploy/nginx/vkus-robot.ru) | Конфиг nginx для vkus-robot.ru (upstream на 127.0.0.1:8096) | Конфигурация |

---

## 4. Context (контекст и чекпоинты)

Управление контекстом проекта: бриф, саммари фаз, чекпоинты.

### 4.1. Бриф и саммари

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [context/project-brief.yaml](context/project-brief.yaml) | Project Brief: цель, целевые пользователи, рынок, монетизация (Freemium), scope in/out, UVP, стек | Бриф |
| [context/summaries/discovery-summary.yaml](context/summaries/discovery-summary.yaml) | Краткое саммари фазы Discovery и ключевых артефактов | Саммари |
| [context/summaries/design-summary.yaml](context/summaries/design-summary.yaml) | Краткое саммари фазы Design и ключевых решений | Саммари |

### 4.2. Чекпоинты

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [context/checkpoints/CP-000-intake-2026-02-04.yaml](context/checkpoints/CP-000-intake-2026-02-04.yaml) | Intake: инициализация проекта, Product Brief, готовность к Discovery | Чекпоинт |
| [context/checkpoints/CP-001-clarifications-2026-02-04.yaml](context/checkpoints/CP-001-clarifications-2026-02-04.yaml) | Уточнения по продукту и scope | Чекпоинт |
| [context/checkpoints/CP-002-discovery-complete-2026-02-04.yaml](context/checkpoints/CP-002-discovery-complete-2026-02-04.yaml) | Завершение Discovery: Vision, PRD, аналитика, метрики, риски | Чекпоинт |
| [context/checkpoints/CP-003-design-complete-2026-02-04.yaml](context/checkpoints/CP-003-design-complete-2026-02-04.yaml) | Завершение Design: IA, User Flows, Wireframes, Design System, Component Library, Content Guide | Чекпоинт |

---

## 5. Frontend (код и гайды)

Документация по фронтенду: описание проекта, гайдлайны, атрибуции.

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [frontend/PROJECT_SUMMARY.md](frontend/PROJECT_SUMMARY.md) | Описание фронта: лендинг, WebApp (экраны), UI-компоненты, дизайн (цвета, стек React/TS/Tailwind), структура файлов | Техническая документация |
| [frontend/guidelines/Guidelines.md](frontend/guidelines/Guidelines.md) | Гайдлайны разработки фронтенда (стиль кода, компоненты, практики) | Гайдлайн |
| [frontend/ATTRIBUTIONS.md](frontend/ATTRIBUTIONS.md) | Атрибуции: лицензии, источники ресурсов (шрифты, иконки и т.п.) | Юридическое/атрибуции |

---

## 6. Система агентов (.cursor)

Правила, роли агентов, команды и навыки для агентной системы Cursor.

### 6.1. Правила (rules)

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [.cursor/rules/00-agentic-system-core.mdc](.cursor/rules/00-agentic-system-core.mdc) | Ядро системы: язык, роль Orchestrator, источник истины, делегирование, подписи агентов, команды (/status, /checkpoint, /deploy-vps и др.) | Правило |
| [.cursor/rules/01-agent-routing-and-formats.mdc](.cursor/rules/01-agent-routing-and-formats.mdc) | Роутинг задач по агентам, формат task_request / task_response, handoff | Правило |
| [.cursor/rules/02-context-and-checkpoints.mdc](.cursor/rules/02-context-and-checkpoints.mdc) | Контекст: бюджет, project-brief, summaries, checkpoints, конвенция путей | Правило |
| [.cursor/rules/03-ssh-operations.mdc](.cursor/rules/03-ssh-operations.mdc) | SSH и VPS: безопасность, деплой только через Git, Ubuntu 24.04, systemd/Docker/nginx | Правило |
| [.cursor/rules/04-application-logging.mdc](.cursor/rules/04-application-logging.mdc) | Логирование: CRUD, события, cron, AuditLogService, ротация | Правило |

### 6.2. Агенты (agents)

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [.cursor/agents/INDEX.md](.cursor/agents/INDEX.md) | Индекс агентов и их назначение | Индекс |
| [.cursor/agents/orchestrator.md](.cursor/agents/orchestrator.md) | Orchestrator: координация, делегирование, чекпоинты | Спецификация агента |
| [.cursor/agents/product.md](.cursor/agents/product.md) | Product: PRD, Vision, User Stories | Спецификация агента |
| [.cursor/agents/ux.md](.cursor/agents/ux.md) | UX: IA, user flows, wireframes | Спецификация агента |
| [.cursor/agents/ui.md](.cursor/agents/ui.md) | UI: Design System, компоненты | Спецификация агента |
| [.cursor/agents/coder.md](.cursor/agents/coder.md) | Coder: реализация кода по спекам | Спецификация агента |
| [.cursor/agents/qa.md](.cursor/agents/qa.md) | QA: тесты, верификация | Спецификация агента |
| [.cursor/agents/review.md](.cursor/agents/review.md) | Review: ревью кода и соответствие спекам | Спецификация агента |
| Остальные в [.cursor/agents/](.cursor/agents/) | architect, devops, sre, research, analytics, content, security, data, dev, ai-agents, marketing | Спецификации агентов |

### 6.3. Команды (commands)

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [.cursor/commands/INDEX.md](.cursor/commands/INDEX.md) | Индекс команд чата | Индекс |
| [.cursor/commands/start-project.md](.cursor/commands/start-project.md) | Команда /start-project | Команда |
| [.cursor/commands/status.md](.cursor/commands/status.md) | Команда /status | Команда |
| [.cursor/commands/checkpoint.md](.cursor/commands/checkpoint.md) | Команда /checkpoint | Команда |
| [.cursor/commands/summary.md](.cursor/commands/summary.md) | Команда /summary | Команда |
| [.cursor/commands/route.md](.cursor/commands/route.md) | Команда /route | Команда |
| [.cursor/commands/deploy-vps-mcp.md](.cursor/commands/deploy-vps-mcp.md) | Команда /deploy-vps | Команда |

### 6.4. Навыки (skills)

| Документ | Описание | Тип |
| -------- | -------- | --- |
| [.cursor/skills/INDEX.md](.cursor/skills/INDEX.md) | Индекс навыков | Индекс |
| [.cursor/skills/application-logging/SKILL.md](.cursor/skills/application-logging/SKILL.md) | Логирование в коде, AuditLog | Навык |
| [.cursor/skills/context-manager/SKILL.md](.cursor/skills/context-manager/SKILL.md) | Управление контекстом, summaries, checkpoints | Навык |
| [.cursor/skills/document-generator/SKILL.md](.cursor/skills/document-generator/SKILL.md) | README, API docs, гайды | Навык |
| [.cursor/skills/github-actions/SKILL.md](.cursor/skills/github-actions/SKILL.md) | CI/CD, GitHub Actions | Навык |
| [.cursor/skills/ssh-deployment/SKILL.md](.cursor/skills/ssh-deployment/SKILL.md) | Деплой и диагностика на VPS | Навык |
| [.cursor/skills/telegram-bot-api/SKILL.md](.cursor/skills/telegram-bot-api/SKILL.md) | Telegram Bot API | Навык |
| [.cursor/skills/telegram-core-api/SKILL.md](.cursor/skills/telegram-core-api/SKILL.md) | Telegram Core API (MTProto) | Навык |
| [.cursor/skills/ton-blockchain/SKILL.md](.cursor/skills/ton-blockchain/SKILL.md) | TON Blockchain, Ton API | Навык |
| [.cursor/skills/yookassa-payments/SKILL.md](.cursor/skills/yookassa-payments/SKILL.md) | YooKassa (платежи в рублях) | Навык |
| [.cursor/skills/verification-engine/SKILL.md](.cursor/skills/verification-engine/SKILL.md) | Верификация реализации по спекам | Навык |
| [.cursor/skills/web-research/SKILL.md](.cursor/skills/web-research/SKILL.md) | Веб-исследования, конкуренты | Навык |
| Остальные в [.cursor/skills/](.cursor/skills/) | langchain-development, image-generator | Навыки |

---

## Сводка по типам документов

| Тип | Примеры |
| --- | ------- |
| **Стратегия** | Vision, GTM, Deploy Strategy |
| **Требования** | PRD, User Stories |
| **Исследование** | Market Analysis, Competitive Analysis |
| **Бизнес-модель** | Business Model Canvas |
| **Метрики** | Metrics Tracking Plan |
| **Управление рисками** | Risk Register |
| **UX** | Information Architecture, User Flows, Wireframes |
| **UI** | Design System, Component Library |
| **Контент** | Content Guide |
| **Runbook / Конфигурация** | RUNBOOK-MCP-DEPLOY, nginx |
| **Бриф / Саммари / Чекпоинт** | project-brief.yaml, summaries, CP-*.yaml |
| **Техническая документация** | PROJECT_SUMMARY, Guidelines |
| **Правила и агенты** | .cursor/rules, .cursor/agents, .cursor/commands, .cursor/skills |

---

## Быстрые ссылки

- **С чего начать:** [context/project-brief.yaml](context/project-brief.yaml) → [docs/discovery/vision-document.md](docs/discovery/vision-document.md) → [docs/discovery/prd.md](docs/discovery/prd.md)
- **Дизайн:** [docs/design/information-architecture.md](docs/design/information-architecture.md) → [docs/design/user-flows.md](docs/design/user-flows.md) → [docs/design/wireframes.md](docs/design/wireframes.md) → [docs/design/design-system.md](docs/design/design-system.md)
- **Деплой:** [deploy/RUNBOOK-MCP-DEPLOY.md](deploy/RUNBOOK-MCP-DEPLOY.md)
- **Фронтенд:** [frontend/PROJECT_SUMMARY.md](frontend/PROJECT_SUMMARY.md)
- **Последний чекпоинт:** [context/checkpoints/CP-003-design-complete-2026-02-04.yaml](context/checkpoints/CP-003-design-complete-2026-02-04.yaml)

---

Документ создан: Orchestrator Agent | Дата: 2026-02-05
