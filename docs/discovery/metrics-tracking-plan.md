# Metrics Framework & Tracking Plan: Вкус-Робот

---
title: "Metrics Framework & Tracking Plan"
created_by: "Analytics Agent"
created_at: "2026-02-04"
version: "1.0"
phase: "Discovery"
---

## Executive Summary

**North Star Metric:** Количество рецептов, приготовленных пользователями в неделю

**Почему:** Отражает core value (помощь в готовке) + коррелирует с retention и монетизацией

**Цель Year 1:** 50,000 приготовленных рецептов/неделю (к Q4 2026)

**Tracking stack:**
- Events: Amplitude / Mixpanel
- Product analytics: PostHog
- Attribution: AppsFlyer / Adjust
- BI: Metabase / Superset

---

## 1. Metrics Framework (AARRR Pirate Metrics)

### Acquisition (Привлечение)

#### Primary Metrics

```yaml
WAU (Weekly Active Users):
  Definition: Уникальные пользователи, открывшие бота минимум 1 раз за неделю
  Target:
    - Q1: 10,000
    - Q2: 50,000
    - Q3: 100,000
    - Q4: 200,000

CAC (Customer Acquisition Cost):
  Definition: (Marketing Spend + Sales Spend) / New Users
  Target: <80₽
  Breakdown:
    - Paid: 100₽/пользователь
    - Organic: 0₽/пользователь
    - Referral: 20₽/пользователь

Источники трафика (Traffic Sources):
  - Telegram Ads: 40%
  - Блогеры / партнёрства: 30%
  - Referral: 15%
  - Organic: 15%
```

#### Secondary Metrics

```yaml
Impressions → Install Rate:
  Definition: % пользователей, кликнувших на рекламу и запустивших бота
  Target: >5% (Telegram Ads)

Install → Activation Rate:
  Definition: % пользователей, загрузивших первое фото после /start
  Target: >60%

Viral Coefficient (k):
  Definition: Среднее количество рефералов на пользователя
  Target: k > 0.2 (каждый пользователь приводит 0.2 друга)
```

---

### Activation (Активация)

#### Primary Metrics

```yaml
Time to First Recipe (TTFR):
  Definition: Время от /start до первого сгенерированного рецепта
  Target: <5 минут
  Percentiles:
    - P50: <2 минуты
    - P95: <10 минут

Activation Rate:
  Definition: % новых пользователей, сгенерировавших хотя бы 1 рецепт в первые 24 часа
  Target: >70%

Aha Moment:
  Definition: Пользователь приготовил рецепт с таймерами (использовал минимум 1 таймер)
  Target: >40% пользователей достигают Aha Moment в первую неделю
```

#### Onboarding Funnel

```yaml
/start → Выбор диеты: 90%
Выбор диеты → Tutorial Complete: 80%
Tutorial → Первое фото загружено: 70%
Фото загружено → Рецепт сгенерирован: 95%
Рецепт сгенерирован → Открыл WebApp: 80%
WebApp → Начал готовить (первый шаг): 60%
Начал готовить → Завершил рецепт: 50%

End-to-End Activation: /start → Завершил первый рецепт = 19% (target: >20%)
```

---

### Retention (Удержание)

#### Primary Metrics

```yaml
D1 Retention (Day 1):
  Definition: % пользователей, вернувшихся на следующий день после регистрации
  Target: >70%

D7 Retention (Day 7):
  Definition: % пользователей, активных на 7 день после регистрации
  Target: >40%

D30 Retention (Day 30):
  Definition: % пользователей, активных на 30 день
  Target: >25%

Cohort Retention Curve:
  M1: 25%
  M3: 15%
  M6: 10%
  M12: 8%
```

#### Engagement Metrics

```yaml
Recipes Generated per Week (RPW):
  Definition: Среднее количество рецептов, сгенерированных активным пользователем за неделю
  Target: >5 рецептов/неделю

Recipes Cooked per Week (RCPW):
  Definition: Количество рецептов, фактически приготовленных (открыл WebApp + прошёл >50% шагов)
  Target: >2 рецепта/неделю

Feature Adoption:
  - Таймеры: >50% пользователей
  - Голосовое управление: >30%
  - Список покупок: >40%
  - История: >60%
  - Избранное: >20%

Stickiness (DAU/MAU):
  Definition: Daily Active Users / Monthly Active Users
  Target: >20% (high engagement)
```

---

### Revenue (Монетизация)

#### Primary Metrics

```yaml
Free → Premium Conversion:
  Definition: % бесплатных пользователей, оформивших Premium подписку
  Target: >5%
  Funnel:
    - Hit paywall (израсходовали free лимит): 80% пользователей
    - Кликнули "Upgrade": 10%
    - Начали оформление: 7%
    - Оплатили: 5%

ARPU (Average Revenue Per User):
  Definition: Средняя выручка на активного пользователя в месяц
  Target: 100₽/месяц
  Breakdown:
    - Подписки: 60₽
    - Партнёрка: 30₽
    - Реклама: 10₽

ARPPU (Average Revenue Per Paying User):
  Definition: Средняя выручка на платящего пользователя
  Target: 180₽/месяц (смешанный: Premium 149₽ + Premium+ 299₽)

LTV (Lifetime Value):
  Definition: ARPU × Average Lifetime (месяцы)
  Target: 1,200₽
  Calculation:
    - Average Lifetime = 1 / Monthly Churn = 1 / 0.10 = 10 месяцев
    - LTV = 100₽ × 10 + (Referral value 200₽) = 1,200₽
```

#### Secondary Metrics

```yaml
MRR (Monthly Recurring Revenue):
  Definition: Ежемесячная подписочная выручка
  Target:
    - Q1: 74,500₽
    - Q2: 372,500₽
    - Q3: 745,000₽
    - Q4: 1,490,000₽

Churn Rate (Monthly):
  Definition: % платящих пользователей, отменивших подписку в месяц
  Target: <10%

Net MRR Churn:
  Definition: (Churned MRR - Expansion MRR) / Starting MRR
  Target: <5% (negative churn ideal: upgrades > downgrades)

Партнёрская выручка:
  - % пользователей, делающих заказ через интеграцию: >10%/месяц
  - Средний чек заказа: 2,000₽
  - Комиссия за заказ: 80₽
  - Частота заказов: 1.5/месяц на активного пользователя

Payment Conversion Rate:
  - Trial Start → Paid: >60%
  - Paywall → Payment Initiated: >7%
  - Payment Initiated → Payment Success: >90%
```

---

### Referral (Рекомендации)

#### Metrics

```yaml
Referral Rate:
  Definition: % пользователей, пригласивших хотя бы 1 друга
  Target: >15%

Viral Coefficient (k):
  Definition: Среднее количество успешных рефералов на пользователя
  Target: k > 0.2 (organic growth)
  Formula: k = (% пользователей, делающих referral) × (Conversion Rate рефералов) × (Среднее приглашений)

Viral Cycle Time:
  Definition: Время от регистрации до первого реферала
  Target: <7 дней

Referral Source Quality:
  - Retention D30 (реферал vs organic): Referral должен быть >organic
  - LTV (реферал vs organic): Referral >1.2x organic
```

---

## 2. North Star Metric Framework

### North Star Metric

```yaml
Метрика: Количество рецептов, приготовленных пользователями в неделю (RCPW)

Определение:
  Рецепт считается "приготовленным", если:
    - Пользователь открыл WebApp с рецептом
    - Прошёл минимум 50% шагов
    - Или использовал минимум 1 таймер

Почему North Star:
  - Отражает core value: "Помощь в готовке"
  - Коррелирует с retention (готовящие пользователи возвращаются)
  - Коррелирует с монетизацией (готовящие → конвертируются в Premium)
  - Измеримо и actionable

Цель:
  - Q1: 5,000 рецептов/неделю (10K WAU × 50% готовят × 1 рецепт)
  - Q2: 30,000 рецептов/неделю
  - Q3: 70,000 рецептов/неделю
  - Q4: 200,000 рецептов/неделю (200K WAU × 50% × 2 рецепта)
```

### Input Metrics (Drivers)

```yaml
1. Breadth: Количество активных пользователей (WAU)
   Lever: Marketing, Referral, Retention

2. Depth: Частота приготовления на пользователя (Recipes per Week)
   Lever: Product features (таймеры, голос), UX, диеты

3. Efficiency: % пользователей, завершающих рецепт (Completion Rate)
   Lever: Пошаговые инструкции, таймеры, UX

Формула North Star:
  RCPW = WAU × % Cooking Users × Avg Recipes per Cooking User
  200,000 = 200,000 × 50% × 2
```

---

## 3. Product Health Metrics

### Quality Metrics

```yaml
AI Quality:
  - CV точность (Product Recognition): >85%
  - Recipe Satisfaction (Rating 1-5): >4.2
  - % успешных генераций (no errors): >95%

Performance:
  - Латентность генерации (P95): <30 сек
  - WebApp Load Time (P95): <2 сек
  - Таймер Accuracy: >99.9%

Reliability:
  - Uptime: >99%
  - Error Rate: <1% (по запросам)
  - Crash Rate: <0.1%
```

### User Sentiment

```yaml
NPS (Net Promoter Score):
  Definition: % Promoters (9-10) - % Detractors (0-6)
  Target: >50 (excellent)

CSAT (Customer Satisfaction):
  Definition: "Насколько ты доволен Вкус-Роботом?" (1-5)
  Target: >4.2

Feature-specific CSAT:
  - Таймеры: >4.5
  - Голосовое управление: >4.3
  - Рецепты под диету: >4.0
```

---

## 4. Event Tracking Plan

### Core Events

#### Onboarding

```yaml
bot_started:
  Когда: Пользователь нажал /start
  Properties:
    - user_id (string)
    - referral_source (string, optional)
    - utm_source, utm_medium, utm_campaign (string, optional)

diet_selected:
  Когда: Пользователь выбрал диету
  Properties:
    - user_id
    - diet_type (enum: none, keto, vegan, paleo, ...)
    - custom_diet (string, если "other")

tutorial_completed:
  Когда: Пользователь завершил tutorial
  Properties:
    - user_id
    - steps_completed (int)
```

#### Photo Upload & CV

```yaml
photo_uploaded:
  Когда: Пользователь отправил фото холодильника
  Properties:
    - user_id
    - photo_size (bytes)
    - timestamp

products_recognized:
  Когда: CV модель распознала продукты
  Properties:
    - user_id
    - products_count (int)
    - products_list (array of strings)
    - confidence_avg (float, 0-1)
    - processing_time (seconds)

products_edited:
  Когда: Пользователь отредактировал список продуктов
  Properties:
    - user_id
    - added_products (array)
    - removed_products (array)
```

#### Recipe Generation

```yaml
recipes_generated:
  Когда: LLM сгенерировал рецепты
  Properties:
    - user_id
    - recipes_count (int)
    - products_input (array)
    - diet_type
    - generation_time (seconds)
    - llm_model (string: gpt-4o, claude-3.5, ...)

recipe_selected:
  Когда: Пользователь выбрал рецепт для готовки
  Properties:
    - user_id
    - recipe_id
    - recipe_name
    - difficulty (easy/medium/hard)
    - cooking_time (minutes)
    - calories (kcal)
```

#### Cooking (WebApp)

```yaml
recipe_opened:
  Когда: WebApp с рецептом открыт
  Properties:
    - user_id
    - recipe_id

step_viewed:
  Когда: Пользователь перешёл к шагу
  Properties:
    - user_id
    - recipe_id
    - step_number (int)
    - navigation_method (button/swipe/voice)

timer_started:
  Когда: Таймер запущен
  Properties:
    - user_id
    - recipe_id
    - step_number
    - duration (seconds)

timer_completed:
  Когда: Таймер завершился
  Properties:
    - user_id
    - recipe_id
    - step_number

voice_command_used:
  Когда: Использована голосовая команда
  Properties:
    - user_id
    - recipe_id
    - command (enum: next, previous, repeat, timer, shopping_list)
    - recognition_confidence (float)

recipe_completed:
  Когда: Пользователь завершил все шаги рецепта
  Properties:
    - user_id
    - recipe_id
    - completion_time (seconds)
    - steps_completed (int)
    - timers_used (int)
    - voice_commands_used (int)

recipe_rating:
  Когда: Пользователь оценил рецепт
  Properties:
    - user_id
    - recipe_id
    - rating (1-5)
    - feedback_text (string, optional)
```

#### Shopping List & Delivery

```yaml
shopping_list_created:
  Когда: Создан список покупок
  Properties:
    - user_id
    - recipe_id
    - missing_products (array)
    - missing_products_count (int)

delivery_link_clicked:
  Когда: Клик на "Заказать в СберМаркет/Лавке"
  Properties:
    - user_id
    - recipe_id
    - delivery_service (sbermarket/yandex_lavka)
    - products_in_list (int)
```

#### Collections

```yaml
recipe_favorited:
  Когда: Рецепт добавлен в избранное
  Properties:
    - user_id
    - recipe_id

history_viewed:
  Когда: Открыта история рецептов
  Properties:
    - user_id

recipe_repeated:
  Когда: Пользователь повторно приготовил рецепт из истории
  Properties:
    - user_id
    - recipe_id
    - first_cooked_at (timestamp)
```

#### Monetization

```yaml
paywall_shown:
  Когда: Пользователь увидел paywall (израсходовал free лимит)
  Properties:
    - user_id
    - trigger (daily_limit_reached/feature_locked)
    - free_generations_used (int)

upgrade_clicked:
  Когда: Нажата кнопка "Upgrade to Premium"
  Properties:
    - user_id
    - plan (premium/premium_plus)
    - price (rub)
    - source (paywall/settings)

payment_initiated:
  Когда: Начат процесс оплаты
  Properties:
    - user_id
    - plan
    - price
    - payment_method (yookassa/telegram_stars)

subscription_started:
  Когда: Подписка успешно оформлена
  Properties:
    - user_id
    - plan
    - price
    - period (monthly/yearly)
    - payment_method

subscription_cancelled:
  Когда: Подписка отменена
  Properties:
    - user_id
    - plan
    - cancellation_reason (dropdown: too_expensive, not_using, ...)
    - days_subscribed (int)
```

#### Referral

```yaml
referral_link_shared:
  Когда: Пользователь поделился реферальной ссылкой
  Properties:
    - user_id
    - share_method (telegram/copy_link)

referral_signup:
  Когда: Новый пользователь зарегистрировался по реферальной ссылке
  Properties:
    - user_id (новый)
    - referrer_id
```

---

## 5. Funnels (Воронки)

### Funnel 1: Onboarding → First Recipe

```yaml
Этапы:
  1. bot_started
  2. diet_selected
  3. photo_uploaded
  4. products_recognized
  5. recipes_generated
  6. recipe_selected
  7. recipe_opened
  8. recipe_completed

Target Conversion (end-to-end): >20%

Анализ:
  - Где самое большое падение? (обычно: photo → products или recipe_opened → completed)
  - A/B тесты для улучшения каждого шага
```

### Funnel 2: Free → Premium

```yaml
Этапы:
  1. paywall_shown
  2. upgrade_clicked
  3. payment_initiated
  4. subscription_started

Target Conversion: >5%

Анализ:
  - Цена влияет на conversion (A/B: 149₽ vs 199₽ vs 249₽)
  - Trial offer увеличивает conversion? (A/B: 7 дней бесплатно vs сразу платить)
```

### Funnel 3: Recipe Generated → Cooked

```yaml
Этапы:
  1. recipes_generated
  2. recipe_selected
  3. recipe_opened
  4. step_viewed (step 1)
  5. recipe_completed

Target Conversion: >40%

Анализ:
  - Какие рецепты чаще готовят? (простые vs сложные, быстрые vs долгие)
  - Влияние таймеров и голоса на completion rate
```

---

## 6. Cohort Analysis

### Retention Cohorts

```yaml
Group by:
  - Registration Week (Weekly cohorts)
  - Acquisition Channel (Paid vs Organic vs Referral)
  - Diet Type (Keto vs Vegan vs None)

Metrics:
  - D1, D7, D30 Retention
  - LTV по когортам
  - Recipes per Week

Инсайты:
  - Какие каналы приводят самых engaged пользователей?
  - Какие диеты имеют лучший retention?
```

### Revenue Cohorts

```yaml
Group by:
  - Subscription Start Month
  - Plan (Premium vs Premium+)

Metrics:
  - Monthly Churn
  - LTV
  - Net MRR Retention

Инсайты:
  - Какие когорты самые прибыльные?
  - Когда churn самый высокий? (M1, M3, M6?)
```

---

## 7. A/B Testing Plan

### Приоритетные тесты Q1-Q2

```yaml
Test 1: Paywall Timing
  Hypothesis: Раньше показывать paywall → больше конверсия
  Variants:
    - A (control): После 5 генераций
    - B: После 3 генераций
  Metric: Conversion Rate (Free → Premium)

Test 2: Free Tier Limit
  Hypothesis: Жёстче лимит → больше конверсия (но меньше engagement)
  Variants:
    - A (control): 5 генераций/день
    - B: 3 генерации/день
  Metric: Conversion + Retention D7

Test 3: Premium Price
  Hypothesis: 149₽ optimal (vs 199₽ или 99₽)
  Variants:
    - A: 99₽/мес
    - B (control): 149₽/мес
    - C: 199₽/мес
  Metric: Conversion × Price (Revenue per user)

Test 4: Trial Offer
  Hypothesis: Trial увеличивает conversion
  Variants:
    - A (control): Без trial
    - B: 7 дней Premium бесплатно
  Metric: Trial → Paid Conversion

Test 5: Voice Onboarding
  Hypothesis: Показывать голосовое управление в tutorial → больше adoption
  Variants:
    - A (control): Упоминание голоса в tutorial
    - B: Демо голосовой команды в tutorial
  Metric: % пользователей, использующих голос
```

---

## 8. Dashboards

### Executive Dashboard (Daily)

```yaml
Metrics:
  - WAU (тренд)
  - New Users (daily)
  - RCPW (North Star)
  - MRR
  - CAC
  - Retention D7 (rolling cohort)

Alerts:
  - WAU падение >10% week-over-week
  - Retention D7 <35%
  - Error Rate >2%
```

### Product Dashboard (Daily)

```yaml
Metrics:
  - Активация (funnel: bot_started → recipe_completed)
  - Feature Adoption (таймеры, голос, избранное)
  - Recipe Rating (avg)
  - CV Accuracy
  - Латентность генерации

Alerts:
  - Recipe Rating <4.0
  - CV Accuracy <80%
  - Латентность >45 сек (P95)
```

### Growth Dashboard (Weekly)

```yaml
Metrics:
  - Acquisition by Channel (тренд)
  - CAC by Channel
  - Viral Coefficient
  - Referral Rate
  - Cohort Retention Curves

Insights:
  - Лучшие каналы (CAC vs LTV)
  - A/B тесты результаты
```

### Revenue Dashboard (Weekly)

```yaml
Metrics:
  - MRR (тренд + breakdown: new, expansion, churn)
  - ARPU, ARPPU
  - Conversion Rate (Free → Premium)
  - Churn Rate
  - LTV/CAC Ratio
  - Партнёрская выручка

Alerts:
  - MRR падение >5% month-over-month
  - Churn >12%
```

---

## 9. Data Infrastructure

### Stack

```yaml
Event Collection:
  - Amplitude / Mixpanel (product analytics)
  - Segment (data pipeline, опционально)

Storage:
  - PostgreSQL (transactional data)
  - ClickHouse / BigQuery (analytical data, events)

BI & Visualization:
  - Metabase / Superset (dashboards)
  - Amplitude Charts (cohorts, funnels)

Attribution:
  - AppsFlyer / Adjust (mobile attribution)
  - Custom UTM tracking (Telegram Ads)

A/B Testing:
  - Amplitude Experiment
  - Или custom (feature flags + statistical analysis)
```

### Data Governance

```yaml
Privacy:
  - Псевдонимизация user_id (Telegram ID → internal UUID)
  - Хранение PII: минимально (только Telegram ID)
  - Retention: 90 дней для events, 2 года для aggregated

GDPR/152-ФЗ Compliance:
  - User data export (на запрос)
  - User data deletion (на запрос)
  - Согласие на аналитику (opt-in в onboarding)
```

---

*Документ создан: Analytics Agent | Дата: 2026-02-04*
