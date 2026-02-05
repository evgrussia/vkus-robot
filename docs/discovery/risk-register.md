# Risk Register: Вкус-Робот

---
title: "Risk Register & Mitigation Plan"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
phase: "Discovery"
---

## Executive Summary

**Total Identified Risks:** 24 критических рисков

**Risk Breakdown:**
- Critical (потенциал провала проекта): 6 рисков
- High (серьёзное влияние на timeline/budget): 10 рисков
- Medium (управляемые, требуют мониторинга): 8 рисков

**Top 3 Critical Risks:**
1. Низкая точность CV (<85%) → пользователи не доверяют продукту
2. Партнёры отказываются от интеграции → потеря revenue stream
3. Яндекс запускает конкурента → потеря market share

**Mitigation Budget:** 2M₽ (резерв на непредвиденные расходы)

---

## Risk Matrix

| Risk ID | Risk | Probability | Impact | Severity | Mitigation Cost |
|---------|------|-------------|--------|----------|-----------------|
| R-001 | Низкая точность CV (<85%) | High | Critical | **CRITICAL** | 500K₽ |
| R-002 | Партнёры отказываются от интеграции | Medium | High | **HIGH** | 200K₽ |
| R-003 | Яндекс запускает конкурента | Medium | Critical | **CRITICAL** | 0₽ (стратегия) |
| R-004 | Высокая латентность (>60 сек) | Medium | High | **HIGH** | 300K₽ |
| R-005 | Низкое качество рецептов | Medium | Critical | **CRITICAL** | 200K₽ |
| R-006 | Низкая конверсия Free→Premium (<3%) | High | Critical | **CRITICAL** | 100K₽ (A/B тесты) |
| R-007 | Высокий churn (>15%) | Medium | High | **HIGH** | 150K₽ |
| R-008 | API costs растут (OpenRouter/LLM) | Low | High | **MEDIUM** | 0₽ (переговоры) |
| R-009 | Telegram блокировка/ограничения | Low | Critical | **MEDIUM** | 500K₽ (fallback) |
| R-010 | GDPR/152-ФЗ compliance проблемы | Low | Critical | **MEDIUM** | 100K₽ (юрист) |
| R-011 | Команда: ключевой сотрудник уходит | Medium | High | **HIGH** | 200K₽ (hiring) |
| R-012 | Funding gap (не хватает капитала) | Low | Critical | **MEDIUM** | 0₽ (fundraising) |
| R-013 | Security breach (утечка данных) | Low | Critical | **MEDIUM** | 100K₽ (security audit) |
| R-014 | Негативный PR (AI ошибки → viral) | Medium | High | **HIGH** | 50K₽ (PR crisis) |
| R-015 | CAC explosion (>150₽) | Medium | High | **HIGH** | 0₽ (стратегия) |
| R-016 | Low retention D7 (<30%) | Medium | High | **HIGH** | 100K₽ (product) |
| R-017 | Feature bloat (scope creep) | High | Medium | **MEDIUM** | 0₽ (дисциплина) |
| R-018 | Technical debt накапливается | Medium | Medium | **MEDIUM** | 0₽ (process) |
| R-019 | Регуляторные изменения (диеты → медицина) | Low | High | **MEDIUM** | 50K₽ (юрист) |
| R-020 | Сезонность спроса (летом меньше готовят) | High | Medium | **MEDIUM** | 0₽ (стратегия) |
| R-021 | ChatGPT добавляет kitchen features | Low | High | **MEDIUM** | 0₽ (positioning) |
| R-022 | Infrastructure outage (VPS down) | Low | High | **MEDIUM** | 100K₽ (HA setup) |
| R-023 | Партнёры меняют условия (комиссия ↓) | Medium | Medium | **MEDIUM** | 0₽ (diversification) |
| R-024 | User-generated content problems (spam, abuse) | Medium | Medium | **MEDIUM** | 50K₽ (moderation) |

---

## CRITICAL RISKS (детальный анализ)

### R-001: Низкая точность CV (<85%)

**Описание:**
YOLOv8 модель распознаёт продукты из фото холодильника с точностью <85%, пользователи видят неправильные продукты, теряют доверие к системе.

**Probability:** High (60%)
- Русские продукты могут быть плохо представлены в open datasets
- Качество фото пользователей варьируется (освещение, ракурс)
- Некоторые продукты визуально похожи (молоко vs кефир, курица vs индейка)

**Impact:** Critical
- Core value proposition нарушен ("фото → рецепт" не работает)
- Retention падает (пользователи уходят после первого плохого опыта)
- Негативный WOM (word-of-mouth): "AI не работает"

**Consequences:**
- Retention D7 <20% (вместо >40%)
- NPS <0 (detractors преобладают)
- Viral Coefficient отрицательный (anti-referral)
- Проект проваливается к M3

**Mitigation Strategy:**

```yaml
Pre-Launch (Before MVP):
  1. Fine-tuning YOLOv8 на датасете русских продуктов
     - Собрать 10,000 изображений русских продуктов (краудсорсинг)
     - Аннотация: 50 категорий продуктов (мясо, овощи, молочка, etc.)
     - Fine-tuning: 2 недели GPU time
     - Cost: 300K₽

  2. Fallback: Ручная корректировка списка продуктов
     - UI: пользователь видит распознанные продукты + может редактировать
     - "Всё верно?" кнопка → если нет, inline keyboard для корректировки
     - Cost: 0₽ (UX feature)

  3. Active Learning Pipeline
     - Пользовательские корректировки → новые training samples
     - Continuous improvement модели
     - Cost: 100K₽ (ML инфраструктура)

Post-Launch (If accuracy <85%):
  1. Emergency: Human-in-the-Loop
     - Модераторы проверяют первые 1000 распознаваний
     - Корректируют ошибки в реальном времени (latency +10 сек)
     - Cost: 100K₽/месяц (2 модератора × 50K₽)

  2. Plan B: Simplify (reduce categories)
     - Вместо 50 категорий → 20 основных
     - Точность растёт, но гранулярность падает
     - Trade-off: "курица" вместо "куриное филе vs куриные бёдра"

  3. Plan C: Hybrid (CV + User Input)
     - CV как suggestion, пользователь обязательно подтверждает
     - UX: "Я вижу: курица, морковь, лук. Что ещё?" (text input)
```

**Monitoring:**
- Accuracy metric (daily): % правильно распознанных продуктов
- User corrections rate: % пользователей, редактирующих список
- Threshold alert: accuracy <80% → escalate

**Responsible:** AI/ML Engineer + Product Manager

**Budget:** 500K₽ (fine-tuning + infrastructure)

---

### R-002: Партнёры отказываются от интеграции

**Описание:**
СберМаркет и Яндекс.Лавка отказываются от партнёрской интеграции (API, комиссии), теряем revenue stream и sticky feature.

**Probability:** Medium (40%)
- У партнёров могут быть свои планы (собственный AI-помощник)
- Комиссия 3-5% может показаться высокой
- Юридические сложности (договор, compliance)

**Impact:** High
- Потеря ~30₽ ARPU (партнёрская выручка)
- Снижение retention (нет seamless shopping experience)
- LTV падает: 1,200₽ → 900₽

**Consequences:**
- MRR к Q4: 1.5M₽ вместо 4.9M₽ (-70%)
- Break-even отодвигается на 6-12 месяцев
- Нужен дополнительный funding

**Mitigation Strategy:**

```yaml
Pre-Launch (Weeks 1-4):
  1. Parallel negotiations с 3+ партнёрами
     - СберМаркет (приоритет 1)
     - Яндекс.Лавка (приоритет 2)
     - Самокат (план B)
     - ВкусВилл (план C)
     Strategy: "Хотя бы 1 должен согласиться"

  2. Снизить барьер входа для партнёров
     - Начать с Affiliate (не требует API интеграции)
     - Affiliate ссылки: партнёр получает traffic → мы комиссию
     - Минимум юридических сложностей

  3. Pilot program (3 месяца)
     - "Давайте попробуем 3 месяца, без long-term commitment"
     - Метрики: конверсия, средний чек, retention
     - Если работает → full partnership

Launch (If все отказались):
  1. Plan B: Affiliate Links (без API)
     - Deep links в СберМаркет/Лавку
     - Пользователь кликает → переходит в приложение → заказывает
     - Комиссия: 1-2% (ниже чем API, но лучше чем ничего)
     - Tracking: UTM parameters

  2. Plan C: Shopping List Export
     - Список недостающих продуктов → копируется в clipboard
     - Пользователь вставляет в любое приложение доставки
     - Нет комиссии, но UX лучше чем ничего

  3. Plan D: Собственный Marketplace (долгосрочно)
     - Партнёрства с магазинами напрямую
     - Минимальный заказ: 1000₽
     - Timeline: M12+ (после PMF)

Post-Launch (Renegotiation):
  1. Доказать value через data
     - После 10K пользователей: "Мы генерируем X заказов/месяц"
     - Leverage: "Партнёрство win-win"
     - Renegotiate с позиции силы
```

**Monitoring:**
- Partnership pipeline: статус переговоров с каждым партнёром
- Milestone: хотя бы 1 партнёр подписан к M2

**Responsible:** CEO / Business Development

**Budget:** 200K₽ (юридические услуги, переговоры)

---

### R-003: Яндекс запускает конкурента

**Описание:**
Яндекс интегрирует AI-рецепты в Яндекс.Еду, Алису или Яндекс.Холодильник, используя свои ресурсы (brand, distribution, капитал).

**Probability:** Medium (30%)
- Яндекс активен в FoodTech (Яндекс.Еда, Лавка)
- AI возможности (YandexGPT)
- Но: большие компании медленные, могут не считать приоритетом

**Impact:** Critical
- Яндекс имеет огромное преимущество в distribution (миллионы пользователей Еды/Лавки)
- Мы теряем market share (50-70% потенциальных пользователей)
- Funding становится сложнее (инвесторы видят Яндекс-конкурента)

**Consequences:**
- WAU растёт медленнее: 50K вместо 200K к Q4
- Acquisition cost растёт (конкуренция за attention)
- Valuation падает (competitive pressure)

**Mitigation Strategy:**

```yaml
Defensive Strategy (Pre-emptive):
  1. Speed to Market (first-mover advantage)
     - Запуск MVP за 12 недель (агрессивный timeline)
     - Захват early adopters ДО Яндекса
     - Build brand: "Вкус-Робот = AI-повар" (category ownership)

  2. Differentiation через Killer Features
     - Таймеры + Голосовое управление (сложно скопировать быстро)
     - 20 диет (глубокая персонализация vs generic Яндекс)
     - Позиционирование: "Специализированный продукт vs side-feature в экосистеме"

  3. Community Lock-in
     - Лояльные пользователи защищают от Яндекса
     - Network effects: избранные рецепты, история, персонализация
     - Switching cost: "Мои 100 рецептов в истории, не хочу терять"

  4. Partnership Exclusivity (если возможно)
     - Эксклюзивность с СберМаркет (конкурент Яндекс.Лавки)
     - "Вкус-Робот работает только с СберМаркет" → differentiation

Offensive Strategy (If Яндекс launches):
  1. Messaging War
     - PR: "Вкус-Робот — independent, user-first, без Яндекс-экосистемы lock-in"
     - Appeal to anti-monopoly sentiment
     - "Маленькая команда vs корпорация"

  2. Product Velocity
     - Outpace Яндекс в скорости фич
     - Weekly releases vs Яндекс quarterly
     - Сommunity feedback loop (мы ближе к пользователям)

  3. Niche Focus
     - Яндекс будет generic, мы — специализированные
     - Фокус на power users (люди на диете, food enthusiasts)
     - Premium tier с advanced features (Яндекс скорее всего free)

  4. M&A Consideration
     - Если Яндекс слишком агрессивен → рассмотреть acquisition
     - Альтернатива: VK, Сбер (у них нет AI-повара)
     - Exit strategy: sell to non-Yandex player

Contingency (Worst Case):
  1. Pivot to B2B
     - Интеграция с умной техникой (холодильники Samsung, LG)
     - White-label решение для ритейлеров
     - Яндекс не будет конкурировать в B2B сразу

  2. International Expansion
     - Если РФ рынок насыщен → выход на СНГ, Восточная Европа
     - Яндекс слабее за пределами РФ
```

**Monitoring:**
- Яндекс product releases (мониторинг блога, TechCrunch)
- Competitor intel: hired AI/ML engineers? (LinkedIn tracking)
- Early warning: за 3-6 месяцев до запуска Яндекс-продукта

**Responsible:** CEO + Product Manager

**Budget:** 0₽ (стратегия, не затраты; M&A/pivot — отдельный бюджет)

---

### R-004: Высокая латентность (>60 сек)

**Описание:**
Генерация рецептов занимает >60 секунд (SLA нарушен), пользователи не хотят ждать, закрывают бота.

**Probability:** Medium (40%)
- LLM латентность зависит от load (OpenRouter может быть перегружен)
- CV processing добавляет 5-10 секунд
- Network latency (РФ → OpenRouter servers)

**Impact:** High
- UX страдает (пользователи ожидают instant results)
- Conversion падает (фото → рецепт funnel)
- Retention падает (frustration)

**Consequences:**
- Activation rate: 50% вместо 70%
- Retention D7: 30% вместо 40%
- Negative reviews: "Слишком медленно"

**Mitigation Strategy:**

```yaml
Pre-Launch Optimization:
  1. Prompt Optimization
     - Сократить prompt size (меньше токенов = быстрее)
     - Текущий: ~1000 tokens → Оптимизированный: ~500 tokens
     - Gain: -10 секунд latency

  2. Model Selection
     - Тестировать разные модели (GPT-4o vs Claude vs Gemini Flash)
     - Gemini Flash: самый быстрый (5-10 сек), но качество?
     - Trade-off: скорость vs качество
     - A/B test: пользователи предпочитают скорость или качество?

  3. Caching Popular Combinations
     - Top-100 комбинаций продуктов → pre-generated рецепты
     - Cache hit rate: ~20% (каждый 5-й запрос instant)
     - Gain: -30 секунд для 20% запросов

  4. Parallel Processing
     - CV и LLM в параллель (если возможно)
     - CV: распознавание продуктов (10 сек)
     - LLM: пока CV работает, pre-load context
     - Gain: -5 секунд

Launch (Progressive Enhancement):
  1. Loading States
     - UX: "Анализирую фото... (10 сек)"
     - "Генерирую рецепты... (20 сек)"
     - "Почти готово... (10 сек)"
     - Perceived latency ниже (пользователь знает что происходит)

  2. Async Generation
     - "Я сгенерирую рецепты и пришлю через 30 секунд"
     - Пользователь может закрыть бота, рецепты придут push-уведомлением
     - Trade-off: UX менее seamless, но нет frustration от ожидания

Post-Launch (If latency >60 сек):
  1. Infrastructure Upgrade
     - Dedicated GPU для CV (вместо cloud API)
     - Self-hosted LLM (если budget позволяет)
     - Cost: 300K₽/месяц (GPU rental)

  2. Smart Routing
     - Low-load times → GPT-4o (лучшее качество, медленнее)
     - High-load times → Gemini Flash (быстрее)
     - Adaptive: баланс скорость/качество

  3. Batch Requests (если много пользователей одновременно)
     - Group similar requests → single LLM call
     - Gain: снижение load на OpenRouter
```

**Monitoring:**
- P50, P95, P99 latency (daily dashboard)
- Threshold alert: P95 >60 сек → investigate
- User feedback: "Слишком медленно" reviews

**Responsible:** AI/ML Engineer + Backend Engineer

**Budget:** 300K₽ (infrastructure, GPU)

---

### R-005: Низкое качество рецептов

**Описание:**
LLM генерирует несъедобные, странные или опасные рецепты (например, сырая курица, несовместимые продукты).

**Probability:** Medium (30%)
- LLM галлюцинации
- Неправильные промпты
- Отсутствие domain knowledge (LLM не повар)

**Impact:** Critical
- Health risk (пользователи могут отравиться)
- Legal risk (иски, ответственность)
- Brand damage (viral негативные отзывы)
- Trust loss (пользователи уходят навсегда)

**Consequences:**
- Retention D7: 20% вместо 40%
- NPS: <0
- Viral anti-WOM: "AI чуть не отравил меня"
- Regulatory scrutiny (Роспотребнадзор?)

**Mitigation Strategy:**

```yaml
Pre-Launch (Quality Assurance):
  1. Prompt Engineering
     - Explicit safety instructions in prompt:
       "НИКОГДА не предлагай сырое мясо/рыбу"
       "Проверь сочетаемость продуктов"
       "Укажи время термообработки"
     - Few-shot examples (хорошие рецепты в промпте)

  2. Human-in-the-Loop Moderation (первые 1000 рецептов)
     - Повар-модератор проверяет каждый рецепт
     - Одобрение ДО показа пользователю
     - Latency +1 час (async generation)
     - Cost: 100K₽ (1 повар × 100K₽/месяц × 1 месяц)

  3. Automated Safety Checks
     - Rule-based validation:
       IF "курица" in ingredients AND cooking_temp < 75°C → REJECT
       IF "сырые яйца" in recipe AND no warning → ADD WARNING
     - Blacklist опасных комбинаций

Launch (User Feedback Loop):
  1. Rating System (1-5 звёзд)
     - Пользователи оценивают рецепт после готовки
     - Low rating (<3) → флаг для review
     - Threshold: если рецепт получает <3 от 5+ пользователей → remove

  2. Report Button
     - "Этот рецепт опасен" кнопка
     - Immediate escalation to moderation
     - Recipe скрывается ДО review

  3. Disclaimers (Legal Protection)
     - "AI может ошибаться. Проверяй рецепт перед готовкой."
     - "Если сомневаешься — не готовь."
     - "Мы не несём ответственности за ошибки AI."
     - Юридическая консультация: 50K₽

Post-Launch (Continuous Improvement):
  1. Fine-tuning LLM на user-rated recipes
     - High-rated recipes → positive examples
     - Low-rated → negative examples
     - Continuous learning

  2. Expert Review (M3+)
     - Нанять шеф-повара (part-time consultant)
     - Review топ-100 популярных рецептов
     - Quality seal: "Chef-approved" badge
     - Cost: 50K₽/месяц
```

**Monitoring:**
- Average Recipe Rating (target: >4.2)
- % recipes flagged as "dangerous" (target: <0.1%)
- User reports (immediate escalation)

**Responsible:** Product Manager + AI/ML Engineer + Legal

**Budget:** 200K₽ (moderation + legal + expert)

---

### R-006: Низкая конверсия Free→Premium (<3%)

**Описание:**
Менее 3% бесплатных пользователей конвертируются в платных, монетизация не работает.

**Probability:** High (50%)
- Freemium conversion обычно 2-5% (наша цель: 5%)
- Пользователи могут не видеть value в Premium
- Paywall может быть слишком агрессивным (или слишком мягким)

**Impact:** Critical
- Revenue: 74K₽/мес вместо 1.5M₽/мес к Q4
- LTV падает: 600₽ вместо 1,200₽
- Проект не окупается (burn rate >revenue)

**Consequences:**
- Break-even не достигнут в Year 2
- Нужен дополнительный funding
- Pivot к другой бизнес-модели

**Mitigation Strategy:**

```yaml
Pre-Launch (Paywall Design):
  1. Value-Based Pricing
     - Показывать value ПЕРЕД paywall:
       "Ты сэкономил 500₽ на продуктах за месяц"
       "Ты приготовил 20 рецептов — пора upgrade!"
     - Emotional triggers: "Не теряй свои 50 избранных рецептов"

  2. A/B Test Paywall Timing
     - Variant A: После 3 генераций/день
     - Variant B: После 5 генераций/день
     - Variant C: После 7 дней использования (time-based)
     - Metric: Conversion Rate × Engagement

  3. Trial Offer
     - "7 дней Premium бесплатно" (кредитная карта не требуется)
     - Trial → Paid conversion: >60% (industry benchmark)
     - After trial: "Ты готовил 15 рецептов за неделю, продолжай!"

Launch (Conversion Optimization):
  1. Retargeting Campaigns
     - Push notification (Day 3): "Unlock unlimited recipes for 149₽/мес"
     - Email (Day 7): "Upgrade and get 20 diets + КБЖУ"
     - In-app message: "You hit the limit, upgrade?"

  2. Social Proof
     - "10,000 пользователей уже готовят с Premium"
     - Testimonials: "Premium изменил мою жизнь" — Анна, 32
     - Influencer endorsements

  3. Limited-Time Offers
     - "Первые 100 пользователей: Premium за 99₽/мес (вместо 149₽)"
     - "Black Friday: -50% на год"
     - FOMO (Fear of Missing Out)

Post-Launch (If conversion <3%):
  1. Price Adjustment
     - A/B test: 99₽ vs 149₽ vs 199₽ vs 249₽
     - Find optimal price point (Revenue = Price × Conversion)
     - Data-driven decision (не интуиция)

  2. Feature Gating
     - Пересмотреть какие фичи в Free vs Premium
     - Слишком много в Free → нет incentive для upgrade
     - Слишком мало в Free → пользователи уходят до paywall

  3. Annual Plan
     - "12 месяцев за 1,499₽ (вместо 1,788₽)" — экономия 16%
     - Upfront payment → better LTV
     - Lower churn (annual subscribers stay longer)

Emergency Plan (If <2% conversion):
  1. Pivot to Ad-Supported Free Tier
     - Free tier с рекламой (native ads, sponsored recipes)
     - Premium = ad-free
     - Revenue mix: 60% ads, 40% subscriptions

  2. Transaction-Based Pricing
     - Pay-per-recipe: 10₽ за рецепт
     - или: 50₽ за 10 рецептов
     - No subscription (lower barrier)
```

**Monitoring:**
- Daily Conversion Rate (Free → Premium)
- Funnel: Paywall Shown → Upgrade Clicked → Payment Initiated → Subscribed
- Drop-off points: где пользователи отваливаются?

**Responsible:** Product Manager + Growth Marketer

**Budget:** 100K₽ (A/B testing tools, retargeting ads)

---

## HIGH RISKS (краткое резюме)

### R-007: Высокий churn (>15%)

**Mitigation:**
- Retention features: streak badges, personalized recommendations
- Win-back campaigns: email/push для churned users
- Exit surveys: "Почему отменил подписку?"
- Budget: 150K₽

### R-011: Ключевой сотрудник уходит

**Mitigation:**
- Documentation: все critical knowledge задокументировано
- Bus factor: ≥2 человека знают каждую critical систему
- Retention bonuses: equity, performance bonuses
- Budget: 200K₽ (hiring + onboarding)

### R-014: Негативный PR (viral AI errors)

**Mitigation:**
- PR crisis plan (24h response)
- Apology + fix (transparent communication)
- Quality control (модерация)
- Budget: 50K₽

### R-015: CAC explosion (>150₽)

**Mitigation:**
- Channel diversification (не зависеть от одного канала)
- A/B тесты креативов
- Organic channels (SEO, PR, referral)
- Budget: 0₽ (стратегия)

### R-016: Low retention D7 (<30%)

**Mitigation:**
- Onboarding optimization (tutorial, first recipe success)
- Push notifications (Day 1, 3, 7)
- Product improvements (UX, features)
- Budget: 100K₽

---

## MEDIUM RISKS (summary)

- **R-008:** API costs растут → переговоры, volume discounts
- **R-009:** Telegram блокировка → fallback (web version)
- **R-017:** Feature bloat → product discipline, roadmap prioritization
- **R-020:** Сезонность спроса → контр-сезонные кампании
- **R-023:** Партнёры меняют условия → diversification (3+ партнёров)

---

## Risk Monitoring Dashboard

```yaml
Weekly Review:
  - Top 5 critical risks: статус, изменения
  - New risks identified
  - Mitigation actions: progress

Monthly Review:
  - Full risk register review
  - Reassess probability/impact (based on data)
  - Budget burn: mitigation spend vs plan

Quarterly Review:
  - Strategic risks (Яндекс, ChatGPT, regulatory)
  - Board presentation
```

---

## Contingency Budget

**Total Mitigation Budget:** 2,000,000₽

**Allocation:**
- Critical risks (R-001 to R-006): 1,500,000₽
- High risks (R-007 to R-016): 400,000₽
- Reserve (unidentified risks): 100,000₽

**Burn Rate:** ~200K₽/месяц (Year 1)

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
