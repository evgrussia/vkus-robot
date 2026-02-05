# Промпты для Figma Make — Вкус-Робот

> Полный набор промптов для создания WEB и WebApp версии проекта в Figma Make

---

## Metadata

```yaml
title: "Figma Make Prompts"
created_by: "UI Agent"
created_at: "2026-02-05"
version: "1.0"
project: "Вкус-Робот"
phase: "Design"
design_style: "Modern 2026"
dependencies:
  - "design-system.md"
  - "wireframes.md"
  - "user-flows.md"
  - "prd.md"
  - "vision-document.md"
```

---

## Инструкция по использованию

### Порядок выполнения

1. **Часть 1**: Landing Page (лендинг) — выполнить промпты 1.1–1.8
2. **Часть 2**: WebApp Core — выполнить промпты 2.1–2.10
3. **Часть 3**: WebApp Advanced — выполнить промпты 3.1–3.8
4. **Часть 4**: Modals & Overlays — выполнить промпты 4.1–4.6
5. **Часть 5**: States & Components — выполнить промпты 5.1–5.5
6. **Часть 6**: Web Full Version — выполнить промпты 6.1–6.6

### Настройки Figma Make

```yaml
Рекомендации:
  - Разрешение: Desktop 1440px, Mobile 375px
  - Стиль: Modern, Clean, 2026 UI Trends
  - Цвета: #FF6B35 (primary), #4ECDC4 (secondary), #F9FAFB (background)
  - Шрифты: Inter или системные (-apple-system)
  - Радиусы: 8px (cards), 12px (buttons), 16px (modals)
  - Тени: Soft shadows, glassmorphism elements
```

---

# ЧАСТЬ 1: LANDING PAGE (ЛЕНДИНГ)

## 1.1. Hero Section (Главный экран)

```
Prompt for Figma Make:

Design a hero section for "Vkus-Robot" — an AI-powered cooking assistant Telegram bot.

REQUIREMENTS:
- Full-width hero with gradient background (orange #FF6B35 to warm yellow #FFD166)
- Modern 2026 design with glassmorphism elements
- 3D floating elements: stylized fridge, smartphone with Telegram, food ingredients
- Large headline in Russian: "Фото холодильника → Рецепт за 60 секунд"
- Subheadline: "Вкус-Робот — ваш персональный AI-повар в Telegram. Распознает продукты, генерирует рецепты, ведет через готовку голосом."
- Two CTA buttons:
  - Primary: "Попробовать бесплатно" (opens Telegram)
  - Secondary: "Смотреть демо"
- Animated stats counters: "50,000+ пользователей", "1M+ рецептов", "20 диет"
- Trust badges: "Работает в Telegram", "AI YOLOv8 + GPT-4o", "Бесплатный старт"
- Mobile-responsive layout
- Dark mode compatible

STYLE:
- Gradient mesh backgrounds
- Floating 3D illustrations (Spline-style)
- Glassmorphism cards
- Micro-animations on hover
- Aurora/northern lights subtle effects
```

---

## 1.2. How It Works Section (Как это работает)

```
Prompt for Figma Make:

Design a "How It Works" section for AI cooking assistant landing page.

REQUIREMENTS:
- 4-step horizontal timeline with animated connectors
- Each step is a card with:
  - Step number in gradient circle
  - Icon (3D or Lottie-style)
  - Title + description

STEPS CONTENT:
1. "📸 Фото холодильника"
   - "Сфотографируй содержимое холодильника и отправь в Telegram-бот"
   - Icon: Camera with refrigerator

2. "🤖 AI распознает продукты"
   - "Нейросеть YOLOv8 определит все продукты за 30 секунд"
   - Icon: AI brain scanning food

3. "🍳 Генерация рецептов"
   - "GPT-4o создаст 3-5 рецептов из твоих продуктов с учётом диеты"
   - Icon: Magic wand with recipe cards

4. "👨‍🍳 Готовь с AI-ассистентом"
   - "Пошаговые инструкции, встроенные таймеры, голосовое управление"
   - Icon: Chef hat with voice waves

STYLE:
- Neumorphism cards on light background
- Animated dotted line connecting steps
- Numbers 01, 02, 03, 04 with gradient fill
- Hover effects revealing more details
- Mobile: vertical stack with connecting line
```

---

## 1.3. Features Grid Section (Возможности)

```
Prompt for Figma Make:

Design a features grid section showcasing all product capabilities.

REQUIREMENTS:
- 3x3 grid of feature cards (desktop), 2-column (tablet), 1-column (mobile)
- Each card has: emoji icon, title, description, "Learn more" link
- Alternating card styles: filled vs outlined

FEATURES CONTENT:

Row 1 - Core Features:
1. "📸 Распознавание из фото"
   "AI определяет продукты на фото холодильника с точностью 85%+"

2. "🧠 Генерация рецептов GPT-4o"
   "Уникальные рецепты за 30 секунд с учётом ваших продуктов"

3. "⏱️ Встроенные таймеры"
   "Автоматические таймеры в каждом шаге. Push-уведомления когда готово"

Row 2 - Killer Features:
4. "🎤 Голосовое управление"
   "Управляй рецептом голосом: 'Следующий шаг', 'Поставь таймер'"

5. "🥗 20 диет"
   "Кето, веган, DASH, палео, безглютеновая и ещё 15 диет"

6. "📊 Расчёт КБЖУ"
   "Калории, белки, жиры, углеводы для каждого рецепта"

Row 3 - Convenience:
7. "🛒 Заказ продуктов"
   "Недостающие продукты — в СберМаркет или Яндекс.Лавку в 1 клик"

8. "📁 Коллекции рецептов"
   "Сохраняй любимые рецепты в тематические коллекции"

9. "📈 Персонализация"
   "Рекомендации на основе истории и предпочтений"

STYLE:
- Cards with subtle gradient borders
- Hover: card lifts with shadow
- Feature icons as 3D badges
- "Killer Feature" badges on cards 4, 5
- Animated background blobs
```

---

## 1.4. Killer Features Deep Dive (Уникальные фичи)

```
Prompt for Figma Make:

Design two side-by-side feature showcase blocks highlighting unique features.

BLOCK 1 - TIMERS:
- Title: "Встроенные таймеры — больше ничего не пригорит"
- Visual: iPhone mockup showing WebApp with active timer
- Timer UI: circular progress, large numbers "12:45", pause/stop buttons
- Notification popup: "⏰ Таймер завершён! Проверь блюдо"
- Bullet points:
  - "Автоматически создаются из текста рецепта"
  - "Работают в фоне даже при закрытом приложении"
  - "Push-уведомления в Telegram"
  - "Несколько таймеров одновременно"
- Badge: "Killer Feature — никто не делает"

BLOCK 2 - VOICE:
- Title: "Голосовое управление — готовь без рук"
- Visual: iPhone mockup with voice waveform animation
- Voice commands showcase:
  - "Следующий шаг" → Animation of step transition
  - "Повтори ингредиенты" → TTS icon
  - "Поставь таймер на 10 минут" → Timer starts
- Bullet points:
  - "Грязные руки? Не проблема"
  - "8 голосовых команд на русском"
  - "Озвучка шагов через TTS"
  - "Точность распознавания >90%"
- Badge: "Killer Feature — уникально"

STYLE:
- Split layout: text left, mockup right (alternating)
- Phone mockups with 3D perspective
- Animated icons
- Glassmorphism badges
- Video preview thumbnails
```

---

## 1.5. Diet Support Section (Поддержка диет)

```
Prompt for Figma Make:

Design a diet support showcase section.

REQUIREMENTS:
- Title: "Рецепты под твою диету — автоматически"
- Subtitle: "20 диет из коробки. Просто выбери свою — AI адаптирует все рецепты"

VISUAL ELEMENT:
- Interactive diet selector (tabs or horizontal scroll)
- When diet selected → shows example recipe transformation

DIETS TO SHOW (carousel/tabs):
1. 🥬 Средиземноморская
2. ❤️ DASH
3. 🥓 Кето
4. 🌱 Веганская
5. 🦴 Палео
6. 🌾 Безглютеновая
7. ⏰ Интервальное голодание
8. 🥩 Флекситарианская
9. 🧠 MIND
10. 📉 Низкоуглеводная

RECIPE TRANSFORMATION EXAMPLE:
- Original: "Паста Карбонара" (450 ккал, 15г белка)
- Кето version: "Кабачковая лапша Карбонара" (280 ккал, 20г белка)
  - Shows: "🔄 Макароны → Кабачковая лапша"
  - Shows: "🔄 Сливки → Кокосовые сливки"
- Visual: Before/After recipe cards side by side

KBJU DISPLAY:
- Nutrition facts card: Калории, Б, Ж, У
- Progress bars comparing to daily norm
- "Вписывается в твой дневной план"

STYLE:
- Horizontal scroll of diet pills
- Recipe cards with transformation animation
- Nutrition donut chart
- Soft color coding per diet type
```

---

## 1.6. Pricing Section (Тарифы)

```
Prompt for Figma Make:

Design a pricing section with 3 tiers.

REQUIREMENTS:
- Title: "Тарифы для любых потребностей"
- Subtitle: "Начни бесплатно. Перейди на Premium когда понадобится."

PRICING CARDS:

CARD 1 - FREE:
- Title: "Бесплатно"
- Price: "0₽" / навсегда
- Features:
  ✓ 3 генерации рецептов в день
  ✓ 10 базовых диет
  ✓ Встроенные таймеры
  ✓ Сохранение рецептов (до 50)
  ✗ Голосовое управление
  ✗ Расчёт КБЖУ
  ✗ Приоритетная поддержка
- CTA: "Начать бесплатно"
- Style: Outlined card

CARD 2 - PREMIUM (Featured):
- Badge: "Популярный"
- Title: "Premium"
- Price: "149₽" / месяц
- Old price crossed: "199₽"
- Trial: "7 дней бесплатно"
- Features:
  ✓ Безлимитные генерации
  ✓ 20 диет
  ✓ Встроенные таймеры
  ✓ Безлимитное сохранение
  ✓ Голосовое управление
  ✓ Расчёт КБЖУ
  ✓ Экспорт списка покупок
  ✗ Персональный план питания
- CTA: "Попробовать 7 дней бесплатно"
- Style: Gradient background, elevated, glow effect

CARD 3 - PREMIUM+:
- Title: "Premium+"
- Price: "299₽" / месяц
- Features:
  ✓ Всё из Premium
  ✓ Персональный план питания на неделю
  ✓ AI-советы по здоровому питанию
  ✓ Приоритетная поддержка
  ✓ Ранний доступ к новым фичам
- CTA: "Выбрать Premium+"
- Style: Dark/premium card with gold accents

ADDITIONAL:
- FAQ accordion below: "Как отменить подписку?", "Как работает пробный период?"
- Trust: "Оплата через YooKassa", "Отмена в любой момент"
- Money back: "Вернём деньги в течение 7 дней"

STYLE:
- Cards with hover lift effect
- Premium card 10% larger, centered
- Animated checkmarks
- Price with "₽" symbol styled
- Annual discount toggle: "Год за 1,190₽ (скидка 33%)"
```

---

## 1.7. Testimonials & Social Proof (Отзывы)

```
Prompt for Figma Make:

Design a testimonials section with social proof.

REQUIREMENTS:
- Title: "Уже готовят с Вкус-Роботом"
- Stats bar: "50,000+ пользователей", "4.8★ средний рейтинг", "1,000,000+ рецептов"

TESTIMONIAL CARDS (carousel):

Card 1:
- Avatar: Woman, 30s, professional look
- Name: "Анна К."
- Role: "Работающая мама"
- Rating: ★★★★★
- Quote: "Раньше тратила 30 минут на выбор рецепта. Теперь — 1 минута. Таймеры — это вообще магия, ничего не пригорает!"
- Date: "Январь 2026"

Card 2:
- Avatar: Man, 20s, casual
- Name: "Дмитрий П."
- Role: "Начинающий кулинар"
- Rating: ★★★★★
- Quote: "Боялся готовить — теперь готовлю каждый день. Пошаговые инструкции и голосовое управление сделали меня поваром!"
- Date: "Декабрь 2025"

Card 3:
- Avatar: Woman, 30s, fitness look
- Name: "Елена В."
- Role: "Веган, фитнес"
- Rating: ★★★★☆
- Quote: "Наконец-то рецепты под мою диету без лишних телодвижений. КБЖУ считается автоматически — мечта!"
- Date: "Февраль 2026"

Card 4:
- Avatar: Woman, 40s, homey look
- Name: "Ольга Н."
- Role: "Многодетная мама"
- Rating: ★★★★★
- Quote: "Экономлю 3-4 тысячи в месяц — продукты больше не портятся. Дети довольны разнообразием!"
- Date: "Январь 2026"

MEDIA MENTIONS:
- Logos: "vc.ru", "Habr", "TJournal", "Telegram News"
- Text: "О нас пишут"

STYLE:
- Horizontal carousel with arrows
- Cards with soft shadows
- Avatar with colored ring (matching rating)
- Star ratings animated
- Auto-scroll with pause on hover
```

---

## 1.8. CTA Footer Section (Финальный призыв)

```
Prompt for Figma Make:

Design a final CTA section above the footer.

REQUIREMENTS:
- Full-width gradient background (primary orange to warm)
- Large headline: "Готов попробовать?"
- Subheadline: "Присоединяйся к 50,000 домашних поваров. Первые 3 рецепта — бесплатно."

MAIN CTA:
- Large button: "Открыть в Telegram" with Telegram icon
- Button style: White background, dark text, shadow
- Micro-animation: pulse effect

QR CODE:
- QR code to Telegram bot link
- Caption: "Или отсканируй QR-код"

SECONDARY LINKS:
- "Посмотреть демо-видео"
- "Часто задаваемые вопросы"
- "Связаться с нами"

NEWSLETTER:
- Email input: "Получай рецепты недели на почту"
- Submit button: "Подписаться"
- Checkbox: "Согласен на обработку данных"

TRUST BADGES:
- "🔒 Данные защищены"
- "📱 Работает в Telegram"
- "💳 Безопасная оплата YooKassa"

STYLE:
- Gradient mesh background with floating elements
- Button with hover animation
- QR code in white rounded card
- Input with icon inside
```

---

# ЧАСТЬ 2: WEBAPP CORE (Основные экраны)

## 2.1. Home Screen (Главный экран WebApp)

```
Prompt for Figma Make:

Design a home screen for Telegram WebApp cooking assistant.

REQUIREMENTS:
- Viewport: 375px width (mobile-first)
- Top bar: Hamburger menu (☰), Title "Главная", User avatar
- Greeting: "Привет, Анна! 👋" (personalized)

QUICK ACTIONS SECTION:
- Large primary button: "📸 Сгенерировать рецепт" (full width)
- Two smaller buttons in row:
  - "🎤 Голосовой ввод"
  - "✏️ Ввести текстом"

RECOMMENDATIONS SECTION:
- Section title: "Рекомендации для вас"
- Horizontal scroll of recipe cards (3-4 visible)
- Each card: Image (4:3), Recipe name, Time + Calories badges

RECENT RECIPES SECTION:
- Section title: "Недавние"
- Vertical list of compact recipe cards
- Each card: Thumbnail (left), Name + metadata (right)
- Show 3 recipes, "Показать все" link

BOTTOM NAVIGATION:
- Fixed bottom, 64px height
- 3 tabs: 🏠 Главная (active), 📚 Рецепты, ⚙️ Профиль
- Active tab: primary color, label visible

MOCK DATA:
- User: "Анна"
- Recommendations: "Борщ", "Паста Карбонара", "Греческий салат", "Куриный плов"
- Recent: "Омлет с овощами" (10 мин), "Салат Цезарь" (15 мин), "Тосты с авокадо" (5 мин)

STYLE:
- Clean white background
- Cards with 8px radius
- Subtle shadows
- Primary color accents (#FF6B35)
- System font, 16px body
```

---

## 2.2. Recipe Generation Loading Screen

```
Prompt for Figma Make:

Design a recipe generation loading screen.

REQUIREMENTS:
- Full screen overlay
- Animated progress indicator

LOADING STATES (3 phases):

Phase 1 (0-30%):
- Icon: 🔍 (magnifying glass)
- Text: "Распознаю продукты..."
- Subtext: "Это займёт около 30 секунд"

Phase 2 (30-70%):
- Icon: 🧠 (brain)
- Text: "Анализирую сочетания..."
- Subtext: "Подбираю идеальные рецепты"

Phase 3 (70-100%):
- Icon: 🍳 (cooking)
- Text: "Генерирую рецепты..."
- Subtext: "Почти готово!"

VISUAL ELEMENTS:
- Circular progress ring (animated)
- Percentage counter: "45%"
- Estimated time: "~15 сек"
- Fun facts carousel: "💡 Знаете ли вы? Помидор — это фрукт!"

CANCEL BUTTON:
- Bottom: "Отмена" (tertiary style)

STYLE:
- Semi-transparent dark overlay
- White modal card (centered)
- Animated spinner with gradient
- Smooth transitions between phases
- Lottie-style animations
```

---

## 2.3. Ingredients Confirmation Screen

```
Prompt for Figma Make:

Design an ingredients confirmation screen after CV recognition.

REQUIREMENTS:
- Header: "Найденные продукты"
- Subheader: "Проверь список — я нашёл в твоём холодильнике:"

INGREDIENTS LIST:
- Vertical list with checkboxes
- Each item: ✅ checkbox, Product name, [x] remove button
- Items can be toggled off (won't use in recipe)

MOCK DATA (8 items):
✅ Помидоры (3 шт)
✅ Огурцы (2 шт)
✅ Сыр (200г)
✅ Яйца (6 шт)
✅ Молоко (500 мл)
✅ Лук репчатый (1 шт)
✅ Морковь (2 шт)
✅ Куриное филе (400г)

ADD MORE SECTION:
- Input field: "Добавить продукт..."
- Recent suggestions: chips "Масло", "Соль", "Чеснок"

ACTION BUTTONS:
- Primary: "✅ Всё верно — сгенерировать рецепты"
- Secondary: "🔄 Переснять фото"
- Tertiary: "✏️ Ввести список вручную"

STATS:
- "Найдено: 8 продуктов"
- Confidence indicator: "Точность: 92%"

STYLE:
- List items with subtle borders
- Swipe-to-delete on mobile
- Smooth checkbox animations
- Green color for confirmed items
```

---

## 2.4. Recipe Preview Cards (Results)

```
Prompt for Figma Make:

Design a recipe results screen showing 3-5 generated recipes.

REQUIREMENTS:
- Header: "Вот что можно приготовить"
- Subheader: "Выбери рецепт для приготовления"

RECIPE CARDS (vertical scroll):

Card 1 (Featured):
- Hero image: Italian salad (16:9)
- Title: "Итальянский салат Капрезе"
- Badges: "🕐 20 мин", "🔥 280 ккал", "👤 2 порции", "🥗 Веган"
- Short description: "Классический итальянский салат с помидорами и моцареллой"
- Match indicator: "95% из твоих продуктов"
- CTA: "🍳 Готовить"

Card 2:
- Image: Omelette
- Title: "Омлет с овощами и сыром"
- Badges: "🕐 15 мин", "🔥 350 ккал", "👤 2 порции"
- Match: "100% из твоих продуктов"

Card 3:
- Image: Salad
- Title: "Греческий салат с яйцом"
- Badges: "🕐 10 мин", "🔥 220 ккал", "👤 2 порции", "🥗 Низкоуглеводный"
- Match: "90% из твоих продуктов"

Card 4:
- Image: Shakshuka
- Title: "Шакшука"
- Badges: "🕐 25 мин", "🔥 320 ккал", "👤 3 порции"
- Match: "85% из твоих продуктов"
- Missing: "Не хватает: перец болгарский"

FILTER/SORT:
- Pills: "Все", "Быстрые (<15 мин)", "Лёгкие (<300 ккал)"
- Sort: "По соответствию" dropdown

ACTION BUTTONS (bottom sticky):
- "🔄 Сгенерировать другие рецепты"
- "📸 Новое фото"

STYLE:
- Cards with rounded corners (12px)
- Image with gradient overlay for text
- Match percentage as progress bar
- Missing ingredients in red text
- Horizontal badge scroll if many
```

---

## 2.5. Recipe Detail Screen (Full)

```
Prompt for Figma Make:

Design a complete recipe detail screen.

REQUIREMENTS:
- Full recipe information with tabs

HEADER:
- Back button (←)
- Recipe name: "Итальянский салат Капрезе"
- More menu (⋮): Share, Report, Delete

HERO IMAGE:
- Full width, 16:9 aspect ratio
- Gradient overlay at bottom
- Save button (heart) floating top-right

METADATA ROW:
- Three pills in row:
  - 🕐 20 минут
  - 🔥 280 ккал
  - 👤 2 порции

ACTION BUTTONS ROW:
- ⭐ Избранное (toggle)
- 📁 В коллекцию
- 🔗 Поделиться

TABS:
Tab 1: "Ингредиенты" (active)
Tab 2: "Приготовление"
Tab 3: "КБЖУ"

TAB 1 CONTENT - INGREDIENTS:
- Servings adjuster: "- 2 +" (changes quantities)
- Checklist:
  ☑️ Помидоры — 3 шт (250г)
  ☑️ Сыр моцарелла — 200г
  ☐ Базилик свежий — 10г
  ☑️ Оливковое масло — 2 ст.л.
  ☑️ Соль — по вкусу
  ☑️ Перец чёрный — по вкусу
- Missing counter: "Недостающих: 1"
- CTA: "🛒 Заказать базилик"

TAB 2 CONTENT - STEPS (preview):
- Step 1: "Нарежь помидоры кружочками..."
- Step 2: "Выложи моцареллу..."
- Total: 5 шагов

TAB 3 CONTENT - NUTRITION:
- Donut chart with КБЖУ breakdown
- Table: Калории 280, Белки 15г, Жиры 20г, Углеводы 8г
- Per serving / Per 100g toggle

BOTTOM CTA (sticky):
- Large button: "🍳 Начать готовить" (opens cooking mode)

STYLE:
- Smooth tab transitions
- Checkbox with strike-through when checked
- Floating action button style
- Sticky bottom with blur effect
```

---

## 2.6. Cooking Mode Screen (Step-by-Step)

```
Prompt for Figma Make:

Design an immersive cooking mode screen with step-by-step instructions.

REQUIREMENTS:
- Full screen mode optimized for kitchen use
- Large text, high contrast

HEADER:
- Back button with confirmation: "Выйти из режима готовки?"
- Progress: "Шаг 3 из 8"
- Close button (X)

PROGRESS BAR:
- Horizontal, full width
- Filled: 37% (3/8 steps)
- Animated fill

STEP CONTENT:
- Step number: "Шаг 3"
- Instruction text (large, 20px):
  "Разогрей духовку до 180°C. Смажь форму маслом и выложи нарезанные овощи."
- Step image (if applicable): 16:9, shows expected result

TIMER COMPONENT (if step has timer):
- Large circular timer display
- Time: "15:00" (countdown)
- Circular progress ring (animated)
- Controls: ⏸️ Пауза | ⏹️ Стоп
- "Добавить время" dropdown: +1 мин, +5 мин

VOICE CONTROL:
- Toggle switch: "🎤 Голосовое управление"
- When ON: pulsing microphone icon
- Hint: "Скажи 'Следующий шаг' или 'Повтори'"

NAVIGATION:
- Two large buttons at bottom:
  - "← Назад" (secondary)
  - "Готово, далее →" (primary)
- Swipe gestures supported

VOICE FEEDBACK TOAST:
- When command recognized: "✓ Следующий шаг"
- Animated, auto-dismiss

STYLE:
- Dark mode option (toggle in header)
- Extra large touch targets (60px+ buttons)
- High contrast text
- Minimal distractions
- Lock screen prevention hint
```

---

## 2.7. Timer Component (Detailed)

```
Prompt for Figma Make:

Design a detailed timer component for cooking mode.

REQUIREMENTS:
- Standalone timer widget that can be embedded or full-screen

TIMER DISPLAY:
- Large circular progress ring (200px diameter)
- Time in center: "12:45" (minutes:seconds)
- Ring color: primary gradient when active, gray when paused
- Ring animation: smooth countdown

TIMER STATES:

State 1 - Ready:
- Ring: empty (gray)
- Text: "15:00"
- Button: "▶️ Старт"

State 2 - Running:
- Ring: filling with gradient (animated)
- Text: counting down
- Buttons: "⏸️ Пауза" | "⏹️ Стоп"
- Subtle pulse animation

State 3 - Paused:
- Ring: static, dimmed
- Text: paused time
- Buttons: "▶️ Продолжить" | "⏹️ Стоп"
- "ПАУЗА" badge

State 4 - Completed:
- Ring: full, green color
- Text: "00:00"
- Icon: ✅ checkmark
- Bell animation
- Text: "Таймер завершён!"
- Button: "Готово"

ADDITIONAL CONTROLS:
- "Добавить время" button
- Dropdown: +1 мин, +5 мин, +10 мин
- Quick presets: "5 мин", "10 мин", "15 мин", "30 мин"

MULTIPLE TIMERS VIEW:
- Compact timer pills when multiple active
- Example: "🍝 Паста 8:20" | "🥕 Овощи 3:45"
- Tap to expand

NOTIFICATION PREVIEW:
- Push notification mockup:
  "⏰ Вкус-Робот"
  "Таймер завершён! Проверь блюдо"
  [Открыть] [Ещё 5 мин]

STYLE:
- Neumorphic ring design
- Smooth animations (ease-in-out)
- Vibration feedback indication
- Sound toggle icon
```

---

## 2.8. Recipe Completion Screen

```
Prompt for Figma Make:

Design a celebration screen after completing a recipe.

REQUIREMENTS:
- Full screen celebration overlay
- Engaging, shareable moment

CELEBRATION VISUAL:
- Confetti animation (Lottie)
- Large emoji: 🎉
- Headline: "Поздравляем!"
- Subheadline: "Рецепт «Итальянский салат Капрезе» завершён!"

STATS:
- "Время готовки: 18 минут"
- "Использовано таймеров: 2"
- "Голосовых команд: 5"

RATING REQUEST:
- "Как получилось?"
- 5 star rating (interactive)
- Stars animate on hover/tap
- Optional: "Добавить комментарий"

ACTION BUTTONS:

Primary actions:
- "📸 Добавить фото результата" (opens camera)
- "💾 Сохранить в избранное"
- "🔗 Поделиться рецептом"

Secondary:
- "Готово" (closes to home)

SHARE PREVIEW:
- Recipe card preview for sharing
- Platforms: Telegram, WhatsApp, Copy link

ACHIEVEMENTS (gamification):
- "🏆 Новичок" badge if first recipe
- "🔥 7 дней подряд" streak badge
- "+10 очков кулинара"

STYLE:
- Festive gradient background
- Animated elements
- Stars with particle effects
- Photo upload preview frame
- Share card preview
```

---

## 2.9. Recipes List Screen

```
Prompt for Figma Make:

Design a recipes library/list screen.

REQUIREMENTS:
- Full recipe collection management

HEADER:
- Menu (☰)
- Title: "Рецепты"
- Search icon (🔍)
- Settings/filter icon (⚙️)

TABS:
- "Все" (active) | "Избранное" ⭐ | "Коллекции" 📁
- Tab indicator animation

FILTERS BAR:
- Horizontal scroll of filter pills:
  - "🔽 Фильтры" (opens modal)
  - "🔽 Сортировка"
  - Quick filters: "Быстрые", "Лёгкие", "Веган"

RECIPE CARDS (vertical list):

Card layout:
- Thumbnail (left, 80x80, rounded)
- Content (right):
  - Title (1 line, ellipsis)
  - Cuisine • Time • Calories
  - Tags (max 2): "#Обед", "#Веган"
- Favorite star (if favorited)
- Swipe actions: Delete, Share

MOCK DATA:
1. "Борщ" | Русская • 45 мин • 350 ккал | #Обед #Супы | ⭐
2. "Паста Карбонара" | Итальянская • 30 мин • 520 ккал | #Ужин
3. "Греческий салат" | Греческая • 15 мин • 280 ккал | #Салат #Веган | ⭐
4. "Куриный плов" | Узбекская • 60 мин • 450 ккал | #Обед
5. "Омлет с овощами" | Французская • 10 мин • 250 ккал | #Завтрак

EMPTY STATE (for Favorites tab):
- Icon: Heart
- Title: "Здесь будут ваши любимые рецепты"
- Text: "Отмечайте понравившиеся рецепты ⭐"
- CTA: "Найти рецепт"

COLLECTIONS TAB:
- Grid of collection cards (2 columns)
- Each: Emoji icon, Name, Count
- "⭐ Избранное (12)", "🔥 Завтраки (8)", "🍝 Итальянское (5)"
- "+ Создать коллекцию" card

LOAD MORE:
- Infinite scroll or "Загрузить ещё" button
- Skeleton loading state

STYLE:
- Clean list design
- Subtle dividers
- Quick action hints on swipe
- Smooth scroll
```

---

## 2.10. Profile Screen

```
Prompt for Figma Make:

Design a comprehensive profile/settings screen.

REQUIREMENTS:
- User profile and all settings

USER CARD:
- Avatar (64px, circular, with camera overlay for edit)
- Name: "Анна Петрова"
- Subscription badge: "Premium 💎" or "Free"
- Edit profile button

STATS ROW:
- Three stat cards:
  - "42" Рецепты
  - "28" Приготовлено
  - "7" Дней streak

SETTINGS SECTIONS:

Section 1: "Настройки"
- 📋 Мои диеты → (arrow)
- 🚫 Аллергены и нелюбимые →
- 🌐 Язык интерфейса → "Русский"
- 📏 Единицы измерения → "Метрические"
- 🔔 Уведомления →
- 🎤 Голосовой движок →

Section 2: "Подписка"
- 💎 Premium — 149₽/мес →
  (shows current plan, next billing date)
- 📜 История платежей →

Section 3: "Прочее"
- ❓ FAQ →
- 💬 Поддержка →
- ℹ️ О приложении →
- 🚪 Выход (red text)

DIET PREFERENCES PREVIEW:
- Selected diets as pills: "🥗 Веган", "📉 Низкоуглеводная"
- "Изменить" link

VERSION INFO:
- Bottom: "Вкус-Робот v1.0.0"
- "Сделано с ❤️ в России"

STYLE:
- Grouped settings with section headers
- Chevron arrows for navigation
- Toggle switches inline where applicable
- Danger zone styling for logout
- Card-based sections
```

---

# ЧАСТЬ 3: WEBAPP ADVANCED (Расширенные экраны)

## 3.1. Diet Selection Screen

```
Prompt for Figma Make:

Design a diet preferences selection screen.

REQUIREMENTS:
- Header: "Мои диеты"
- Subheader: "Рецепты будут адаптироваться под выбранные диеты"

DIET OPTIONS (multi-select):
Grid layout (2 columns), each option is a card:

Row 1:
- 🌊 Средиземноморская
- ❤️ DASH

Row 2:
- 🥓 Кето
- 🌱 Веганская

Row 3:
- 🦴 Палео
- 🌾 Безглютеновая

Row 4:
- ⏰ Интервальное голодание (16/8)
- 🥩 Флекситарианская

Row 5:
- 🧠 MIND
- 📉 Низкоуглеводная

CARD STATES:
- Unselected: outlined, gray
- Selected: filled with primary color, checkmark
- Hover: subtle lift

DIET INFO:
- "ℹ️" button on each card
- Opens tooltip with diet description

SELECTED PREVIEW:
- Bottom sticky bar
- "Выбрано: 2 диеты"
- Pills showing selected: "🌱 Веган", "📉 Низкоуглеводная"

ACTION BUTTONS:
- "Сохранить" (primary)
- "Сбросить" (tertiary)

STYLE:
- Card grid with gap
- Animated selection
- Smooth state transitions
- Color coding per diet type
```

---

## 3.2. Allergens & Dislikes Screen

```
Prompt for Figma Make:

Design an allergens and disliked ingredients management screen.

REQUIREMENTS:
- Header: "Аллергены и нелюбимые продукты"
- Subheader: "Эти продукты не будут включаться в рецепты"

SECTION 1: АЛЛЕРГЕНЫ
- Title: "🚨 Аллергены" (red accent)
- Input: "Добавить аллерген..." with autocomplete
- Existing tags (removable):
  [Глютен ×] [Лактоза ×] [Орехи ×] [Морепродукты ×]
- Common allergens suggestion chips:
  "Яйца", "Соя", "Молоко", "Арахис"

SECTION 2: НЕЛЮБИМЫЕ ПРОДУКТЫ
- Title: "👎 Нелюбимые продукты"
- Input: "Добавить продукт..."
- Existing tags:
  [Грибы ×] [Оливки ×] [Кинза ×]
- Popular suggestions:
  "Лук", "Чеснок", "Баклажаны", "Перец"

TAG COMPONENT:
- Pill shape with × button
- Red color for allergens
- Gray color for dislikes
- Tap × to remove (with confirmation)

ADD FLOW:
- Autocomplete dropdown on typing
- Shows matching ingredients
- "Не нашли? Добавить вручную"

ACTION BUTTONS:
- "Сохранить изменения" (primary)
- Unsaved changes indicator

STYLE:
- Distinct visual difference: allergens (red), dislikes (gray)
- Smooth tag add/remove animations
- Warning icon next to allergens
- Clear input state
```

---

## 3.3. Shopping Flow Screen

```
Prompt for Figma Make:

Design a shopping/delivery integration screen.

REQUIREMENTS:
- Header: "Заказать продукты"
- Context: User is ordering missing ingredients

MISSING INGREDIENTS LIST:
- Title: "Недостающие продукты (3)"
- Checklist with quantities:
  ☑️ Базилик свежий — 10г
  ☑️ Оливковое масло — 100 мл
  ☑️ Бальзамический уксус — 50 мл
- Can uncheck items to not order

TOTAL:
- "Примерная стоимость: ~350₽"
- Disclaimer: "Цены могут отличаться"

DELIVERY PARTNER SELECTION:
- Title: "Выберите магазин"

Partner Card 1 - СберМаркет:
- Logo (green)
- "Доставка от 30 минут"
- "🎁 Скидка 10% на первый заказ"
- "Перейти →" button

Partner Card 2 - Яндекс.Лавка:
- Logo (yellow)
- "Доставка от 15 минут"
- "Без минимальной суммы заказа"
- "Перейти →" button

HOW IT WORKS:
- Info block:
  "1. Выберите магазин"
  "2. Корзина заполнится автоматически"
  "3. Оформите заказ в приложении партнёра"

ALTERNATIVE:
- "📋 Скопировать список" button
- Copies to clipboard as text

CANCEL:
- "Отмена" link

STYLE:
- Partner logos prominent
- Card selection state
- Promo badges highlighted
- Trusted partner indicators
```

---

## 3.4. Premium Upgrade Screen (In-App)

```
Prompt for Figma Make:

Design an in-app premium upgrade screen.

REQUIREMENTS:
- Triggered when user hits freemium limit
- Compelling upgrade flow

HEADER:
- "← Назад"
- Title: "Выберите тариф"

CURRENT STATUS:
- If free: "Ваш текущий тариф: Бесплатный"
- Usage: "Использовано сегодня: 3/3 генерации"
- Reset time: "Обновится завтра в 00:00"

PLANS COMPARISON:

FREE CARD:
- Title: "Бесплатно"
- Price: "0₽"
- Features list with ✓ and ✗
- Badge: "Текущий тариф" (if active)

PREMIUM CARD (highlighted):
- Badge: "🔥 Популярный"
- Title: "Premium"
- Price: "149₽/месяц"
- Discount: was "199₽" crossed out
- Features list (all ✓)
- CTA: "Оформить подписку"
- Trial: "7 дней бесплатно"

FEATURE COMPARISON TABLE:
| Функция | Free | Premium |
|---------|------|---------|
| Генерации в день | 3 | ∞ |
| Диеты | 10 | 20 |
| Голосовое управление | ✗ | ✓ |
| Расчёт КБЖУ | ✗ | ✓ |
| Реклама | Есть | Нет |

PAYMENT METHODS (when Buy clicked):
- Card icons: Visa, Mastercard, MIR
- СБП logo
- Apple Pay / Google Pay icons

TRUST ELEMENTS:
- "🔒 Безопасная оплата через YooKassa"
- "Отмена в любой момент"
- "Возврат в течение 7 дней"

STYLE:
- Premium card visually elevated
- Gradient background for premium
- Animated feature highlights
- Price emphasis design
```

---

## 3.5. Search Screen

```
Prompt for Figma Make:

Design a recipe search screen.

REQUIREMENTS:
- Full search functionality

SEARCH INPUT:
- Large input field at top
- Placeholder: "Поиск по названию, ингредиентам, кухне..."
- 🔍 icon (left)
- × clear button (right, when has text)
- Auto-focus on open

SEARCH STATES:

State 1 - Empty (no query):
- Section: "Последние запросы"
  - "Борщ" [×]
  - "Итальянская кухня" [×]
  - "Быстрые завтраки" [×]
- Section: "Популярные запросы"
  - "Куриное филе"
  - "Веганские рецепты"
  - "Блюда за 15 минут"

State 2 - Typing (autocomplete):
- Real-time suggestions
- Matching part highlighted in bold
- Categories: "В рецептах", "В ингредиентах", "В категориях"

State 3 - Results:
- Header: "Результаты по запросу «паста»"
- Count: "Найдено: 12 рецептов"
- Filter pills: "Все", "До 30 мин", "Вегетарианские"
- Recipe cards list

State 4 - No results:
- Icon: 🔍
- Title: "Ничего не найдено"
- Text: "По запросу «xyz» нет рецептов"
- Suggestions:
  - "Проверьте правописание"
  - "Попробуйте другие слова"
- CTA: "📸 Сгенерировать новый рецепт"

VOICE SEARCH:
- 🎤 button in input
- "Скажите, что искать..."

STYLE:
- Clean, minimal interface
- Fast response feel
- Clear visual hierarchy
- Recent searches easily clearable
```

---

## 3.6. Filter Modal

```
Prompt for Figma Make:

Design a comprehensive filter modal for recipes.

REQUIREMENTS:
- Bottom sheet modal style
- Multiple filter categories

MODAL HEADER:
- Title: "Фильтры"
- × close button
- Reset link: "Сбросить всё"

FILTER SECTIONS:

Section 1: ДИЕТА
- Multi-select checkboxes
- ☐ Кето
- ☑ Веган (selected)
- ☐ Безглютеновая
- "+ Ещё 17..." expander

Section 2: ВРЕМЯ ПРИГОТОВЛЕНИЯ
- Radio buttons (single select)
- ○ До 15 минут
- ● До 30 минут (selected)
- ○ До 60 минут
- ○ Более часа

Section 3: СЛОЖНОСТЬ
- Multi-select
- ☑ Легко
- ☑ Средне
- ☐ Сложно

Section 4: КАЛОРИЙНОСТЬ
- Range slider
- Min: 0, Max: 1000 ккал
- Selected: 100 - 500 ккал
- Labels showing current values

Section 5: КУХНЯ
- Horizontal scroll of cuisine pills
- "🇮🇹 Итальянская", "🇷🇺 Русская", "🇯🇵 Японская"...

ACTIVE FILTERS PREVIEW:
- Top area showing active filters as removable chips
- "Веган", "До 30 мин", "100-500 ккал"

ACTION BUTTONS (bottom sticky):
- "Сбросить" (secondary)
- "Применить (24)" (primary, shows count)

STYLE:
- Collapsible sections
- Smooth slider interaction
- Clear visual feedback
- Badge showing filter count
```

---

## 3.7. Notifications Settings Screen

```
Prompt for Figma Make:

Design a notifications preferences screen.

REQUIREMENTS:
- Header: "Уведомления"
- Granular control over notifications

NOTIFICATION CATEGORIES:

Section 1: ТАЙМЕРЫ
- Master toggle: "Уведомления о таймерах"
- Sub-options (when enabled):
  - ☑ Push-уведомления
  - ☑ Звук
  - ☑ Вибрация
- Sound selector: "Стандартный ▼"

Section 2: РЕЦЕПТЫ
- Toggle: "Рекомендации рецептов"
- Frequency: "Ежедневно ▼" (dropdown)
- Time: "18:00" (time picker)
- Preview: "Получайте идеи для ужина каждый вечер"

Section 3: НАПОМИНАНИЯ
- Toggle: "Напоминания о готовке"
- When: "За 30 минут до обеда"

Section 4: ПРОМО
- Toggle: "Акции и новости"
- Note: "(не чаще раза в неделю)"

TEST NOTIFICATION:
- Button: "Отправить тестовое уведомление"
- Sends sample push

QUIET HOURS:
- Toggle: "Тихий режим"
- Time range: "23:00 - 08:00"
- "Уведомления не будут беспокоить в это время"

STYLE:
- Toggle switches with animation
- Grouped settings
- Time pickers native feel
- Info tooltips
```

---

## 3.8. FAQ / Help Screen

```
Prompt for Figma Make:

Design a FAQ and help screen.

REQUIREMENTS:
- Searchable FAQ
- Contact support option

SEARCH:
- Input: "Поиск по вопросам..."
- Auto-suggest as you type

FAQ CATEGORIES:

Category 1: "🚀 Начало работы"
Expandable questions:
- "Как начать использовать бота?" (expanded by default)
  Answer: "Отправьте /start в боте @vkus_robot_bot..."
- "Как загрузить фото холодильника?"
- "Какие форматы фото поддерживаются?"

Category 2: "🍳 Рецепты"
- "Как работает генерация рецептов?"
- "Почему не все продукты распознаны?"
- "Как изменить количество порций?"

Category 3: "⏱️ Таймеры и голос"
- "Как работают встроенные таймеры?"
- "Какие голосовые команды поддерживаются?"
- "Таймер не звучит в фоне, что делать?"

Category 4: "💳 Подписка и оплата"
- "Как оформить Premium?"
- "Как отменить подписку?"
- "Можно ли вернуть деньги?"

Category 5: "🔧 Проблемы"
- "Бот не отвечает"
- "Не работает голосовое управление"
- "Ошибка при оплате"

DIDN'T FIND ANSWER:
- Section: "Не нашли ответ?"
- Contact options:
  - "💬 Написать в поддержку" (opens Telegram chat)
  - "📧 support@vkusrobot.ru"
- Response time: "Отвечаем в течение 24 часов"

STYLE:
- Accordion for questions
- Category icons
- Smooth expand/collapse
- Highlighted search matches
- Contact cards at bottom
```

---

# ЧАСТЬ 4: MODALS & OVERLAYS

## 4.1. Collection Picker Modal

```
Prompt for Figma Make:

Design a collection selection modal for saving recipes.

REQUIREMENTS:
- Bottom sheet style
- Select existing or create new collection

HEADER:
- Title: "Сохранить в коллекцию"
- × close

COLLECTIONS LIST:
- ⭐ Избранное (12) — default, always first
- 🔥 Завтраки (8)
- 🍝 Итальянское (5)
- 🥗 Здоровое (15)
- 🎉 На праздник (3)

LIST ITEM:
- Emoji icon (left)
- Collection name
- Recipe count (right, muted)
- Checkmark if already in collection

CREATE NEW:
- Divider
- "+ Создать новую коллекцию"
- Opens create modal

STYLE:
- Scrollable list
- Tap to select
- Already saved indicator
- Smooth transitions
```

---

## 4.2. Create Collection Modal

```
Prompt for Figma Make:

Design a create new collection modal.

REQUIREMENTS:
- Input for name and emoji selection

HEADER:
- Title: "Новая коллекция"
- × close

FORM FIELDS:

Name Input:
- Label: "Название"
- Placeholder: "Например: Рецепты для гостей"
- Max length: 50 characters
- Counter: "15/50"

Emoji Picker:
- Label: "Иконка"
- Grid of common emojis:
  🍕 🍝 🍰 🥗 📁 ⭐ 🔥 🎉 ❤️ 🏠
  🌅 🌙 👨‍👩‍👧 💼 🎂 🍳 🥘 🍜 🍣 🥐
- Selected emoji: highlighted with border
- Default: 📁

PREVIEW:
- Live preview of collection card
- Shows emoji + name together

BUTTONS:
- "Отмена" (secondary)
- "Создать" (primary, disabled until name entered)

VALIDATION:
- Name required
- Name must be unique (error if exists)

STYLE:
- Clean form layout
- Emoji grid scrollable
- Real-time preview
- Error states for validation
```

---

## 4.3. Rating Modal

```
Prompt for Figma Make:

Design a recipe rating modal.

REQUIREMENTS:
- Quick rating after cooking
- Optional feedback

HEADER:
- "Как получился рецепт?"
- Recipe name: "Итальянский салат Капрезе"

RATING:
- 5 large stars (60px each)
- Interactive: tap to rate
- Animation: stars fill with yellow/gold
- Current rating: "4 из 5"

RATING LABELS:
- 1★ "Плохо"
- 2★ "Так себе"
- 3★ "Нормально"
- 4★ "Хорошо"
- 5★ "Отлично!"

OPTIONAL FEEDBACK:
- Toggle: "Добавить комментарий"
- Textarea when expanded:
  - Placeholder: "Что понравилось или что улучшить?"
  - Max 500 chars

QUICK TAGS:
- "Что понравилось:"
- Chips: "Вкусно", "Быстро", "Легко", "Полезно"
- "Что улучшить:"
- Chips: "Инструкции", "Время", "Ингредиенты", "КБЖУ"

BUTTONS:
- "Пропустить" (tertiary)
- "Сохранить оценку" (primary)

STYLE:
- Star animation on selection
- Smooth reveal of comment field
- Chip selection visual feedback
- Encouraging microcopy
```

---

## 4.4. Confirmation Modal

```
Prompt for Figma Make:

Design a generic confirmation modal.

REQUIREMENTS:
- Reusable for different scenarios

VARIANTS:

Variant 1 - Exit Cooking:
- Icon: ⚠️
- Title: "Выйти из режима готовки?"
- Text: "Прогресс рецепта не сохранится"
- Buttons: "Отмена" | "Выйти"

Variant 2 - Delete Recipe:
- Icon: 🗑️
- Title: "Удалить рецепт?"
- Text: "Рецепт «Борщ» будет удалён из истории"
- Buttons: "Отмена" | "Удалить" (red)

Variant 3 - Delete Collection:
- Icon: 📁
- Title: "Удалить коллекцию?"
- Text: "Коллекция «Завтраки» будет удалена. Рецепты останутся в истории."
- Buttons: "Отмена" | "Удалить" (red)

Variant 4 - Cancel Subscription:
- Icon: 💳
- Title: "Отменить подписку?"
- Text: "Premium-функции будут доступны до конца оплаченного периода (15 февраля)"
- Buttons: "Оставить" | "Отменить подписку"

GENERAL STRUCTURE:
- Centered modal
- Icon at top (48px)
- Title (H3)
- Description text
- Two buttons side by side

STYLE:
- White background, rounded
- Semi-transparent overlay
- Destructive button in red
- Default focus on safe option
```

---

## 4.5. Success Toast

```
Prompt for Figma Make:

Design success notification toasts.

REQUIREMENTS:
- Non-intrusive feedback
- Auto-dismiss

TOAST VARIANTS:

Success:
- ✅ "Рецепт сохранён в «Избранное»"
- Green accent

Info:
- ℹ️ "Скопировано в буфер обмена"
- Blue accent

Warning:
- ⚠️ "Осталась 1 бесплатная генерация"
- Yellow accent

Error:
- ❌ "Не удалось сохранить. Попробуйте снова"
- Red accent

TOAST STRUCTURE:
- Icon (left)
- Message text (center)
- × dismiss (right, optional)
- Action link (optional): "Отменить"

POSITION:
- Bottom center
- Above bottom navigation (if present)
- 16px margins

BEHAVIOR:
- Slide up animation
- Auto-dismiss: 3-5 seconds
- Tap to dismiss
- Swipe to dismiss

STYLE:
- Rounded corners (12px)
- Shadow for elevation
- Color accent on left border
- Semi-transparent background (glassmorphism)
```

---

## 4.6. Paywall Modal (Freemium Limit)

```
Prompt for Figma Make:

Design a freemium paywall modal that appears when limit reached.

REQUIREMENTS:
- Appears when user tries to generate with 0 remaining
- Compelling but not aggressive

HEADER:
- Large emoji: 🎯
- Title: "Лимит на сегодня исчерпан"
- Subtext: "Вы использовали все 3 бесплатные генерации"

PREMIUM OFFER:
- Card with gradient background
- "💎 Premium — безлимитные рецепты"
- Price: "149₽/мес"
- Key benefits:
  - ∞ Безлимитные генерации
  - 🎤 Голосовое управление
  - 📊 Расчёт КБЖУ
- CTA: "Попробовать 7 дней бесплатно"

ALTERNATIVE:
- Divider with "или"
- "⏰ Подождать до завтра"
- "Бесплатные генерации обновятся в 00:00"
- Progress bar: "До обновления: 5 часов 23 минуты"

DISMISS:
- × in corner
- Closes modal, returns to home

STYLE:
- Modal overlay (60% opacity black)
- White card centered
- Premium CTA prominent
- Countdown timer animated
- Friendly, not pushy tone
```

---

# ЧАСТЬ 5: STATES & COMPONENTS

## 5.1. Empty States Collection

```
Prompt for Figma Make:

Design a collection of empty state illustrations.

REQUIREMENTS:
- Consistent style across all empty states
- Actionable with CTAs

EMPTY STATES:

1. No Recipes:
- Illustration: Empty plate with fork and knife
- Title: "У вас пока нет рецептов"
- Text: "Сгенерируйте первый рецепт из продуктов в холодильнике"
- CTA: "📸 Сгенерировать рецепт"

2. No Favorites:
- Illustration: Empty star/heart
- Title: "Здесь будут любимые рецепты"
- Text: "Нажимайте ⭐ чтобы сохранить рецепт в избранное"
- CTA: "Найти рецепт"

3. No Collections:
- Illustration: Empty folder
- Title: "Нет коллекций"
- Text: "Создавайте коллекции для организации рецептов"
- CTA: "+ Создать коллекцию"

4. No Search Results:
- Illustration: Magnifying glass with question mark
- Title: "Ничего не найдено"
- Text: "Попробуйте другой поисковый запрос"
- Suggestions list

5. Network Error:
- Illustration: Broken cloud/wifi
- Title: "Нет подключения к интернету"
- Text: "Проверьте соединение и попробуйте снова"
- CTA: "🔄 Повторить"

6. Recognition Failed:
- Illustration: Camera with X
- Title: "Не удалось распознать продукты"
- Text: "Фото слишком тёмное или размытое"
- CTAs: "📸 Переснять" | "✏️ Ввести вручную"

STYLE:
- Minimal line illustrations
- Primary color accents
- Centered layout
- Consistent spacing
- Friendly, helpful tone
```

---

## 5.2. Loading States Collection

```
Prompt for Figma Make:

Design a collection of loading states.

REQUIREMENTS:
- Various loading indicators
- Skeleton screens

LOADING TYPES:

1. Spinner (inline):
- Circular spinner, 24px
- Primary color
- Used for buttons, small areas

2. Spinner (full screen):
- Larger spinner, 48px
- "Загрузка..." text below
- Semi-transparent overlay

3. Skeleton - Recipe Card:
- Gray rectangles mimicking card layout
- Shimmer animation (left to right)
- Image placeholder, text lines, badges

4. Skeleton - Recipe List:
- Multiple skeleton cards stacked
- Staggered shimmer timing

5. Skeleton - Profile:
- Avatar circle
- Name bar
- Stats rectangles

6. Progress Bar:
- Thin horizontal bar
- Indeterminate: moving gradient
- Determinate: percentage fill

7. Content Loading:
- "Подбираю рецепты..." with animated dots
- Context-aware messages

SHIMMER ANIMATION:
- Gradient: light gray to white to light gray
- Speed: 1.5s loop
- Direction: left to right

STYLE:
- Consistent gray colors (#E5E7EB, #F3F4F6)
- Smooth animations
- Avoid jarring transitions
- Match content layout exactly
```

---

## 5.3. Error States Collection

```
Prompt for Figma Make:

Design a collection of error state screens.

REQUIREMENTS:
- Clear error communication
- Recovery actions

ERROR SCREENS:

1. Generic Error:
- Icon: ⚠️ (yellow)
- Title: "Что-то пошло не так"
- Text: "Произошла ошибка. Попробуйте снова."
- CTAs: "Повторить" | "На главную"

2. Network Error:
- Icon: 📡 (with X)
- Title: "Нет подключения"
- Text: "Проверьте интернет-соединение"
- CTA: "🔄 Повторить"

3. Server Error (500):
- Icon: 🔧
- Title: "Сервер временно недоступен"
- Text: "Мы уже работаем над этим. Попробуйте через несколько минут."
- CTA: "Повторить"
- Contact: "Или напишите нам: support@vkusrobot.ru"

4. Photo Recognition Error:
- Icon: 📸 (with ❌)
- Title: "Не удалось распознать продукты"
- Reasons list:
  - "Фото слишком тёмное"
  - "Продукты не в фокусе"
  - "Слишком много объектов"
- CTAs: "Переснять фото" | "Ввести вручную"

5. Payment Error:
- Icon: 💳 (with ❌)
- Title: "Ошибка оплаты"
- Text: "[Dynamic error message from payment provider]"
- CTAs: "Повторить оплату" | "Другой способ оплаты"

6. Rate Limit Error:
- Icon: ⏱️
- Title: "Слишком много запросов"
- Text: "Подождите немного перед следующей попыткой"
- Timer: "Повторить через: 00:30"

INLINE ERRORS (form fields):
- Red border on field
- Error message below: "Это поле обязательно"
- Icon: ⚠️ in field

STYLE:
- Error color: #EF476F
- Clear iconography
- Actionable recovery
- Empathetic tone
```

---

## 5.4. Button States

```
Prompt for Figma Make:

Design comprehensive button states for all button types.

REQUIREMENTS:
- All interactive states
- Accessibility compliant

BUTTON TYPES:

1. Primary Button:
Default:
- Background: #FF6B35, Text: white
- Padding: 12px 24px, Radius: 8px
- Shadow: subtle

Hover:
- Background: #E55428 (darker)
- Shadow: increased
- Cursor: pointer

Active (pressed):
- Background: #CC4A22 (darkest)
- Transform: scale(0.98)
- Shadow: reduced

Disabled:
- Background: #E5E7EB
- Text: #9CA3AF
- Cursor: not-allowed

Loading:
- Background: #FF6B35 (dimmed)
- Spinner inside
- Text: "Загрузка..."

2. Secondary Button:
- Outlined style
- Border: 2px solid #FF6B35
- Background: transparent
- Same states as primary

3. Tertiary Button (Link):
- No background
- Text: #FF6B35
- Underline on hover
- Same states

4. Danger Button:
- Background: #EF476F
- For destructive actions
- Same states with red palette

5. Icon Button:
- Circle, 44px diameter
- Icon centered
- Hover: background appears

FOCUS STATE (all buttons):
- Visible focus ring
- 3px offset, primary color at 30% opacity
- Keyboard navigation indicator

STYLE:
- 200ms transition on all states
- Consistent across all buttons
- Touch target: minimum 44px
```

---

## 5.5. Form Elements

```
Prompt for Figma Make:

Design a complete form elements library.

REQUIREMENTS:
- All form inputs with states
- Mobile-optimized

FORM ELEMENTS:

1. Text Input:
States: Empty, Focused, Filled, Error, Disabled
- Label above
- Placeholder text
- Helper text below
- Character counter (optional)
- Icon left/right (optional)
- Clear button (optional)

2. Textarea:
- Same states as text input
- Resize handle
- Character counter
- Auto-grow option

3. Select/Dropdown:
- Native feel on mobile
- Chevron icon right
- Selected value displayed
- Options list (modal on mobile)

4. Checkbox:
States: Unchecked, Checked, Indeterminate, Disabled
- 20x20px box
- Checkmark animation
- Label right

5. Radio Button:
States: Unselected, Selected, Disabled
- 20x20px circle
- Dot fill animation
- Group layout

6. Toggle Switch:
States: Off, On, Disabled
- 44x24px track
- Sliding thumb animation
- Label left

7. Range Slider:
- Track with filled portion
- Thumb (24px)
- Min/max labels
- Value tooltip on drag
- Dual thumb for range

8. Search Input:
- 🔍 icon left
- × clear button right
- Full-width style
- Autocomplete dropdown

VALIDATION:
- Success state (green border, ✓)
- Error state (red border, error message)
- Real-time validation indicator

STYLE:
- Consistent sizing (44px height for inputs)
- Clear focus states
- Touch-friendly spacing
- Accessibility labels
```

---

# ЧАСТЬ 6: WEB FULL VERSION (Десктопная версия)

## 6.1. Desktop Landing Page

```
Prompt for Figma Make:

Design a desktop-optimized landing page for 1440px width.

REQUIREMENTS:
- All sections from mobile but desktop layout
- Navigation header

HEADER:
- Logo: "Вкус-Робот" (left)
- Navigation: "Возможности", "Тарифы", "FAQ", "Блог"
- CTA: "Попробовать бесплатно" (right)
- Sticky on scroll

HERO:
- Split layout: Text left (50%), Visual right (50%)
- Large headline with gradient text
- 3D illustration of phone with app
- Floating product images around phone

SECTIONS (same content, desktop layout):
- How it works: 4-column horizontal
- Features: 3x3 grid with larger cards
- Pricing: 3 cards side by side
- Testimonials: 3 visible at once
- CTA: Centered, full-width background

FOOTER:
- 4-column layout:
  - Column 1: Logo + description
  - Column 2: Product links
  - Column 3: Company links
  - Column 4: Contact + Social
- Bottom: Copyright, Legal links

STYLE:
- Max-width content: 1200px
- Generous whitespace
- Larger typography scale
- Hover effects on all interactive elements
```

---

## 6.2. Desktop WebApp Dashboard

```
Prompt for Figma Make:

Design a desktop version of the WebApp for browser use.

REQUIREMENTS:
- Full-featured dashboard
- 1440px width

LAYOUT:
- Left sidebar (240px): Navigation
- Main content (flexible): Content area
- Right sidebar (320px): Quick actions, stats (optional, can collapse)

LEFT SIDEBAR:
- Logo at top
- Navigation items with icons:
  - 🏠 Главная
  - 📸 Сгенерировать
  - 📚 Мои рецепты
  - ⭐ Избранное
  - 📁 Коллекции
  - 🛒 Список покупок
- Divider
- ⚙️ Настройки
- 💎 Premium
- 🚪 Выход
- User card at bottom: Avatar, Name, Plan

MAIN CONTENT - HOME:
- Welcome banner with quick stats
- Quick action cards: "Сгенерировать из фото", "Ввести продукты"
- Recent recipes: Grid view (3 columns)
- Recommendations: Horizontal scroll or grid

MAIN CONTENT - RECIPES:
- Header with search and filters
- View toggle: Grid | List
- Recipe cards grid (3-4 columns)
- Sidebar filters (desktop has more space)

RIGHT SIDEBAR (optional):
- Quick stats widget
- Upcoming features teaser
- Promo banner

STYLE:
- Clean sidebar design
- Card-based content
- Consistent spacing grid
- Responsive within desktop range
```

---

## 6.3. Desktop Recipe Detail

```
Prompt for Figma Make:

Design a desktop recipe detail page.

REQUIREMENTS:
- Full recipe with cooking mode
- 1440px width

LAYOUT:
Split view:
- Left (60%): Recipe content
- Right (40%): Cooking actions / Ingredients sticky

LEFT COLUMN:
- Breadcrumb: Главная > Рецепты > Итальянский салат
- Hero image (full column width)
- Recipe title (H1)
- Metadata row: Time, Calories, Servings, Difficulty
- Action buttons: Save, Collection, Share, Print
- Tabs: Описание | Приготовление | КБЖУ | Отзывы
- Tab content area

RIGHT COLUMN (sticky):
- Ingredients card:
  - Servings adjuster
  - Checklist with items
  - Missing ingredients alert
  - "Заказать" CTA
- Start cooking CTA (large)
- Related recipes (small cards)

COOKING MODE (desktop):
- Full screen option
- Split view: Instructions left, Timer right
- Large text mode toggle
- Keyboard shortcuts hint

PRINT VERSION:
- Clean layout without UI chrome
- Recipe only
- Page break handling

STYLE:
- Magazine-style layout
- Sticky sidebar
- Print-friendly option
- Image gallery lightbox
```

---

## 6.4. Desktop Cooking Mode

```
Prompt for Figma Make:

Design a desktop cooking mode interface.

REQUIREMENTS:
- Optimized for kitchen display (tablet/laptop on counter)
- Large, clear UI

LAYOUT OPTIONS:

Option 1 - Side by Side:
- Left (60%): Current step with large text
- Right (40%): Timer and controls

Option 2 - Full Focus:
- Full width step display
- Timer overlay in corner
- Minimal chrome

STEP DISPLAY:
- Step number: "Шаг 3 из 8"
- Progress bar (horizontal)
- Step text: Extra large (24-28px)
- Step image: Large, below text

TIMER AREA:
- Multiple timers stacked
- Each: Name, Time, Progress ring
- Audio controls: Mute toggle

CONTROLS:
- Large navigation buttons (80px+)
- "← Назад" | "Далее →"
- Keyboard: Arrow keys work
- Voice: "Голосовое управление вкл."

VOICE FEEDBACK:
- Visual: Waveform animation when listening
- Commands list overlay (?) button
- "Следующий шаг", "Повтори", etc.

SETTINGS:
- Font size: S / M / L toggle
- Dark mode toggle
- Keep screen awake toggle

STYLE:
- High contrast option
- Focus on readability
- Minimal distractions
- Responsive to smaller screens (tablet)
```

---

## 6.5. Desktop Profile & Settings

```
Prompt for Figma Make:

Design a desktop profile and settings page.

REQUIREMENTS:
- Full settings access
- 1440px width

LAYOUT:
- Left sidebar (240px): Settings navigation
- Main content: Active settings section

SETTINGS NAVIGATION:
- 👤 Профиль
- 🥗 Диеты и предпочтения
- 🚫 Аллергены
- 🔔 Уведомления
- 🎤 Голос и звук
- 💳 Подписка
- 🔐 Приватность
- ❓ Помощь

PROFILE SECTION:
- Large avatar with change option
- Name, email fields
- Connected accounts (Telegram)
- Delete account (danger zone)

DIETS SECTION:
- Large grid of diet options (4 columns)
- Selected diets highlighted
- Diet info on hover

SUBSCRIPTION SECTION:
- Current plan card
- Usage stats (generations used)
- Plan comparison table
- Change plan / Cancel options
- Billing history table

NOTIFICATIONS SECTION:
- Detailed toggle matrix
- Email preferences
- Push preferences
- Quiet hours

STYLE:
- Form-heavy layout
- Clear section headers
- Save/Cancel buttons per section or auto-save
- Success feedback on save
```

---

## 6.6. Admin Dashboard (Bonus)

```
Prompt for Figma Make:

Design an admin dashboard for the Vkus-Robot team.

REQUIREMENTS:
- Internal tool for monitoring and management
- Data-focused design

SIDEBAR:
- Logo: "Вкус-Робот Admin"
- Navigation:
  - 📊 Dashboard
  - 👥 Пользователи
  - 🍳 Рецепты
  - 💳 Подписки
  - 📈 Аналитика
  - ⚙️ Настройки
  - 🔔 Уведомления

DASHBOARD OVERVIEW:
Key metrics cards (4 in row):
- WAU: 52,340 (+12%)
- Генераций сегодня: 15,420
- Активных подписок: 2,890
- Выручка сегодня: 143,500₽

Charts:
- Line chart: WAU over time (30 days)
- Bar chart: Генерации по дням
- Pie chart: Distribution by plan (Free/Premium/Premium+)
- Funnel: Onboarding → Generation → Cooking → Rating

Recent Activity:
- Table: Latest generations, users, subscriptions
- Error log: Recent failures

USERS TABLE:
- Columns: ID, Telegram, Plan, Generations, Last Active, Actions
- Filters, Search, Export
- User detail modal

STYLE:
- Data-dense but readable
- Neutral color scheme (blue accent)
- Charts with clear legends
- Responsive tables
```

---

# ПРИЛОЖЕНИЕ: Дизайн-токены

## Цвета

```css
/* Primary */
--primary: #FF6B35;
--primary-light: #FF8A5C;
--primary-dark: #E55428;

/* Secondary */
--secondary: #4ECDC4;
--secondary-light: #7ED9D2;
--secondary-dark: #3AB8AF;

/* Semantic */
--success: #06D6A0;
--warning: #FFA500;
--error: #EF476F;
--info: #118AB2;

/* Neutral */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

## Типографика

```css
/* Font Family */
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'SF Mono', Monaco, monospace;

/* Font Sizes */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 28px;
--text-4xl: 32px;
```

## Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

## Радиусы

```css
--radius-sm: 4px;
--radius-base: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

## Тени

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow-base: 0 4px 6px rgba(0,0,0,0.1);
--shadow-md: 0 10px 15px rgba(0,0,0,0.1);
--shadow-lg: 0 20px 25px rgba(0,0,0,0.1);
--shadow-xl: 0 25px 50px rgba(0,0,0,0.25);
```

---

*Документ создан: UI Agent | Дата: 2026-02-05*
