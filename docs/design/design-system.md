# Design System — Вкус-Робот

> Фундаментальные элементы визуального дизайна: цвета, типографика, spacing, иконография

---

## Metadata

```yaml
title: "Design System"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
project: "Вкус-Робот"
phase: "Design"
platform: "Telegram Bot + WebApp"
```

---

## 1. Brand Identity

### 1.1. Позиционирование

**Brand Personality:**
- Дружелюбный, умный помощник на кухне
- Надёжный, но не скучный
- Современный, технологичный
- Доступный каждому

**Brand Values:**
- Простота использования
- Персонализация
- Инновации (AI, голос, таймеры)
- Забота о здоровье

---

## 2. Color System

### 2.1. Primary Colors

```css
/* Brand Colors */
--color-primary: #FF6B35;        /* Яркий оранжевый — энергия, аппетит */
--color-primary-light: #FF8A5C;  /* Lighter variant */
--color-primary-dark: #E55428;   /* Darker variant */

/* Использование:
   - Primary CTA кнопки
   - Active states
   - Акценты на ключевых элементах
   - Brand elements (logo, icons)
*/
```

### 2.2. Secondary Colors

```css
/* Supporting Colors */
--color-secondary: #4ECDC4;      /* Бирюзовый — свежесть, здоровье */
--color-secondary-light: #7ED9D2;
--color-secondary-dark: #3AB8AF;

/* Использование:
   - Secondary actions
   - Info states
   - Icons для здоровых рецептов
   - Badges
*/
```

### 2.3. Semantic Colors

```css
/* Success */
--color-success: #06D6A0;
--color-success-light: #38E0B3;
--color-success-dark: #05BD8C;

/* Warning */
--color-warning: #FFA500;
--color-warning-light: #FFB733;
--color-warning-dark: #E69400;

/* Error */
--color-error: #EF476F;
--color-error-light: #F26B8C;
--color-error-dark: #D63859;

/* Info */
--color-info: #118AB2;
--color-info-light: #3AA1C3;
--color-info-dark: #0E749A;
```

### 2.4. Neutral Colors

```css
/* Grayscale */
--color-gray-50: #F9FAFB;   /* Backgrounds */
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;  /* Borders, dividers */
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;  /* Disabled text */
--color-gray-500: #6B7280;  /* Secondary text */
--color-gray-600: #4B5563;
--color-gray-700: #374151;  /* Body text */
--color-gray-800: #1F2937;  /* Headings */
--color-gray-900: #111827;  /* High emphasis */

/* Pure */
--color-white: #FFFFFF;
--color-black: #000000;
```

### 2.5. Gradient Палитра

```css
/* Premium Gradient */
--gradient-premium: linear-gradient(135deg, #FF6B35 0%, #FFD166 100%);

/* Success Gradient */
--gradient-success: linear-gradient(135deg, #06D6A0 0%, #4ECDC4 100%);

/* Warm Gradient (для food imagery) */
--gradient-warm: linear-gradient(135deg, #FF6B35 0%, #F4A261 50%, #FFD166 100%);
```

---

## 3. Typography

### 3.1. Font Family

```css
/* Primary Font (система) */
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Helvetica Neue', Arial, sans-serif;

/* Monospace (для кода, таймеров) */
--font-mono: 'SF Mono', 'Monaco', 'Cascadia Code',
             'Roboto Mono', monospace;

/* Причины:
   - Системные шрифты — быстрая загрузка
   - Привычная читаемость на всех платформах
   - Не требуют веб-фонтов (экономия трафика)
*/
```

### 3.2. Font Sizes

```css
/* Mobile-first scale */
--font-size-xs: 12px;    /* Captions, fine print */
--font-size-sm: 14px;    /* Secondary text, labels */
--font-size-base: 16px;  /* Body text (default) */
--font-size-lg: 18px;    /* Lead paragraphs */
--font-size-xl: 20px;    /* H3 */
--font-size-2xl: 24px;   /* H2 */
--font-size-3xl: 28px;   /* H1 */
--font-size-4xl: 32px;   /* Display headings */
```

### 3.3. Font Weights

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 3.4. Line Heights

```css
--line-height-tight: 1.2;    /* Headings */
--line-height-normal: 1.5;   /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
```

### 3.5. Typography Scale

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| H1 | 28px | 700 | 1.2 | gray-900 |
| H2 | 24px | 700 | 1.2 | gray-900 |
| H3 | 20px | 600 | 1.2 | gray-800 |
| Body | 16px | 400 | 1.5 | gray-700 |
| Body Bold | 16px | 600 | 1.5 | gray-800 |
| Caption | 14px | 400 | 1.5 | gray-500 |
| Small | 12px | 400 | 1.5 | gray-500 |
| Button | 16px | 600 | 1.2 | white |

---

## 4. Spacing System

### 4.1. Spacing Scale (8px grid)

```css
--space-0: 0px;
--space-1: 4px;     /* 0.25rem */
--space-2: 8px;     /* 0.5rem */
--space-3: 12px;    /* 0.75rem */
--space-4: 16px;    /* 1rem */
--space-5: 20px;    /* 1.25rem */
--space-6: 24px;    /* 1.5rem */
--space-8: 32px;    /* 2rem */
--space-10: 40px;   /* 2.5rem */
--space-12: 48px;   /* 3rem */
--space-16: 64px;   /* 4rem */
--space-20: 80px;   /* 5rem */
```

### 4.2. Component Spacing

| Component | Padding | Margin | Gap |
|-----------|---------|--------|-----|
| Button | 12px 24px | - | - |
| Card | 16px | 16px | - |
| Input | 12px 16px | - | - |
| List Item | 12px 16px | - | 8px |
| Section | 24px | 32px | 16px |
| Page | 16px | - | 24px |

---

## 5. Border Radius

```css
--radius-none: 0px;
--radius-sm: 4px;       /* Inputs, small buttons */
--radius-base: 8px;     /* Cards, buttons */
--radius-lg: 12px;      /* Modals, large cards */
--radius-xl: 16px;      /* Hero images */
--radius-2xl: 24px;     /* Special elements */
--radius-full: 9999px;  /* Pills, avatars */
```

---

## 6. Shadows

### 6.1. Elevation System

```css
/* Shadow Scale */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* Colored Shadows (для акцентов) */
--shadow-primary: 0 4px 14px rgba(255, 107, 53, 0.3);
--shadow-success: 0 4px 14px rgba(6, 214, 160, 0.3);
```

### 6.2. Usage

| Element | Shadow |
|---------|--------|
| Card | shadow-sm |
| Modal | shadow-lg |
| Dropdown | shadow-md |
| Button (hover) | shadow-base |
| Premium Badge | shadow-primary |
| Floating Action Button | shadow-lg |

---

## 7. Iconography

### 7.1. Icon System

**Библиотека:** Lucide Icons (open-source, MIT)
**Стиль:** Outline (stroke-based)
**Размеры:**

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-base: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### 7.2. Ключевые иконки

| Функция | Иконка | Unicode |
|---------|--------|---------|
| Генерация | 📸 Camera | U+1F4F8 |
| Голос | 🎤 Microphone | U+1F3A4 |
| Таймер | ⏱️ Stopwatch | U+23F1 |
| Избранное | ⭐ Star | U+2B50 |
| Коллекция | 📁 Folder | U+1F4C1 |
| Настройки | ⚙️ Gear | U+2699 |
| Помощь | ❓ Question | U+2753 |
| Premium | 💎 Gem | U+1F48E |
| Кухня | 🍳 Cooking | U+1F373 |
| Покупки | 🛒 Shopping Cart | U+1F6D2 |

### 7.3. Icon Guidelines

- Всегда с label (accessibility)
- Consistent stroke width: 2px
- Optical alignment, не geometric
- 44x44px min touch target

---

## 8. Images & Media

### 8.1. Aspect Ratios

```css
/* Recipe Images */
--aspect-ratio-recipe-hero: 16 / 9;     /* Hero images */
--aspect-ratio-recipe-thumb: 4 / 3;     /* Thumbnails */
--aspect-ratio-recipe-square: 1 / 1;    /* Square variants */

/* Step Images */
--aspect-ratio-step: 16 / 9;

/* Avatar */
--aspect-ratio-avatar: 1 / 1;
```

### 8.2. Image Treatments

```css
/* Border Radius */
.image-recipe-hero {
  border-radius: var(--radius-xl);
}

.image-recipe-thumb {
  border-radius: var(--radius-base);
}

.image-avatar {
  border-radius: var(--radius-full);
}

/* Overlays (для читаемости текста) */
--overlay-dark: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.6) 100%
);

--overlay-light: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.9) 0%,
  rgba(255, 255, 255, 0.7) 100%
);
```

---

## 9. Animation & Motion

### 9.1. Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 9.2. Duration

```css
--duration-fast: 150ms;     /* Micro-interactions */
--duration-base: 250ms;     /* Standard transitions */
--duration-slow: 350ms;     /* Page transitions */
--duration-slower: 500ms;   /* Modals, complex animations */
```

### 9.3. Animation Guidelines

```yaml
Hover States:
  - Duration: 150ms
  - Easing: ease-in-out
  - Properties: background, border, shadow

Button Press:
  - Duration: 100ms
  - Easing: ease-in
  - Transform: scale(0.95)

Modal Open:
  - Duration: 250ms
  - Easing: ease-out
  - From: opacity 0, translateY(20px)
  - To: opacity 1, translateY(0)

Toast Notification:
  - Duration: 350ms
  - Easing: ease-spring
  - From: translateY(100%)
  - To: translateY(0)
```

---

## 10. Accessibility

### 10.1. Contrast Ratios (WCAG 2.1 AA)

```yaml
Text:
  - Large text (>= 18px): >= 3:1
  - Normal text (< 18px): >= 4.5:1
  - Headings (>= 24px bold): >= 3:1

Interactive Elements:
  - Buttons, inputs, icons: >= 3:1
  - Focus indicators: >= 3:1
```

### 10.2. Touch Targets

```yaml
Minimum Size: 44x44 px (WCAG 2.1 AAA)
Recommended: 48x48 px
Spacing: 8px между соседними targets
```

### 10.3. Focus States

```css
/* Visible focus ring */
--focus-ring: 0 0 0 3px rgba(255, 107, 53, 0.3);

/* Usage */
.button:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}
```

---

## 11. Responsive Design

### 11.1. Breakpoints

```css
/* Mobile-first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops (не для MVP) */
--breakpoint-xl: 1280px;  /* Large desktops (не для MVP) */
```

### 11.2. Telegram WebApp Viewport

```yaml
Typical WebApp size:
  - Width: 100vw (max 600px)
  - Height: 100vh (varies by device)

Safe Area:
  - Top: Status bar + Telegram header
  - Bottom: Telegram bottom nav (если есть)

Constraints:
  - Всегда vertical orientation
  - No horizontal scroll
  - Consider keyboard overlay
```

---

## 12. Component States

### 12.1. Interactive States

```yaml
Default:
  - Base colors
  - No shadow / minimal shadow

Hover (desktop only):
  - Darker background / border
  - Increase shadow
  - Cursor: pointer

Active (pressed):
  - Scale: 0.95
  - Slightly darker
  - Decrease shadow

Focus:
  - Focus ring (visible)
  - Same as hover color

Disabled:
  - Opacity: 0.5
  - Cursor: not-allowed
  - No hover/active states
```

### 12.2. Loading States

```yaml
Skeleton:
  - Background: gray-100
  - Animation: shimmer (1.5s infinite)
  - Border radius: match component

Spinner:
  - Color: primary
  - Size: 24px (sm), 32px (base), 48px (lg)
  - Animation: rotate (0.8s linear infinite)

Progress Bar:
  - Background: gray-200
  - Fill: primary
  - Height: 4px
  - Border radius: full
```

---

## 13. Dark Mode (Phase 2, опционально)

```css
/* Dark Mode Tokens (для будущего) */
@media (prefers-color-scheme: dark) {
  --color-bg: #111827;
  --color-surface: #1F2937;
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #D1D5DB;
  --color-border: #374151;
}
```

---

## 14. Design Tokens (Export for Dev)

### 14.1. CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #FF6B35;
  --color-secondary: #4ECDC4;
  /* ... (все токены выше) */

  /* Typography */
  --font-primary: -apple-system, ...;
  --font-size-base: 16px;
  /* ... */

  /* Spacing */
  --space-4: 16px;
  /* ... */

  /* Shadows */
  --shadow-sm: 0 1px 3px ...;
  /* ... */
}
```

### 14.2. JSON Export (для React/JS)

```json
{
  "colors": {
    "primary": "#FF6B35",
    "secondary": "#4ECDC4",
    ...
  },
  "spacing": {
    "4": "16px",
    "8": "32px",
    ...
  },
  "typography": {
    "fontFamily": {
      "primary": "-apple-system, ..."
    },
    "fontSize": {
      "base": "16px",
      ...
    }
  }
}
```

---

## 15. Brand Assets

### 15.1. Logo Specifications

```yaml
Logo Variants:
  - Full logo (text + icon): Для splash, marketing
  - Icon only: Для bot avatar, favicon
  - Wordmark: Для headers

Colors:
  - Primary: Full color (оранжевый)
  - Monochrome: Black / White (для dark/light backgrounds)

Clear Space:
  - Минимум = высота логотипа / 2
  - Нельзя обрезать, искажать, изменять цвета
```

### 15.2. Bot Avatar

```yaml
Size: 512x512 px (Telegram requirement)
Format: PNG with transparency
Style: Friendly robot chef
Colors: Primary orange + secondary teal
```

---

## 16. Usage Guidelines

### 16.1. Do's

✅ Использовать системные шрифты
✅ Следовать 8px grid для spacing
✅ Проверять контраст (WCAG AA)
✅ Минимальный touch target 44px
✅ Использовать semantic colors (success, error, warning)
✅ Анимации для обратной связи

### 16.2. Don'ts

❌ Не использовать цвета вне палитры
❌ Не создавать кастомные font sizes вне scale
❌ Не ставить text <16px для body
❌ Не использовать pure black (#000) для текста
❌ Не делать анимации >500ms
❌ Не использовать >3 цветов в одном компоненте

---

## 17. Design Checklist

### Перед Handoff разработчикам:

```yaml
[ ] Все цвета из палитры
[ ] Typography scale применён
[ ] Spacing использует 8px grid
[ ] Контраст >= 4.5:1 для текста
[ ] Touch targets >= 44px
[ ] Focus states определены
[ ] Loading states определены
[ ] Error states определены
[ ] Empty states определены
[ ] Responsive поведение задано
[ ] Accessibility notes добавлены
```

---

*Документ создан: UI Agent | Дата: 2026-02-04*
