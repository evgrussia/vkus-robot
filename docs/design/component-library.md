# Component Library — Вкус-Робот

> Библиотека переиспользуемых UI компонентов

---

## Metadata

```yaml
title: "Component Library"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
project: "Вкус-Робот"
phase: "Design"
dependencies:
  - "design-system.md"
  - "wireframes.md"
```

---

## 1. Buttons

### 1.1. Primary Button

```yaml
Appearance:
  background: var(--color-primary)
  color: white
  padding: 12px 24px
  border-radius: var(--radius-base)
  font-weight: 600
  font-size: 16px
  box-shadow: var(--shadow-sm)

States:
  hover: background lighter, shadow increased
  active: scale(0.95)
  disabled: opacity 0.5, cursor not-allowed
  loading: spinner + "Загрузка..."

Usage: Основное действие на экране
```

### 1.2. Secondary Button

```yaml
Appearance:
  background: transparent
  border: 2px solid var(--color-primary)
  color: var(--color-primary)
  (остальное как Primary)

Usage: Второстепенное действие
```

### 1.3. Tertiary Button (Link)

```yaml
Appearance:
  background: transparent
  color: var(--color-primary)
  padding: 8px 16px
  text-decoration: underline (on hover)

Usage: Наименее важное действие
```

---

## 2. Inputs

### 2.1. Text Input

```yaml
Appearance:
  border: 1px solid var(--color-gray-300)
  padding: 12px 16px
  border-radius: var(--radius-sm)
  font-size: 16px

States:
  focus: border-color primary, shadow focus-ring
  error: border-color error, show error message below
  disabled: background gray-100, opacity 0.6

Variants:
  - Default
  - With icon (left/right)
  - Search (with clear button)
```

### 2.2. Textarea

```yaml
Appearance: (как Text Input)
  min-height: 80px
  resize: vertical
```

### 2.3. Checkbox

```yaml
Size: 20x20px
Appearance:
  unchecked: border 2px gray-400
  checked: background primary, white checkmark

Usage: Multi-select (диеты, фильтры)
```

### 2.4. Radio

```yaml
Size: 20x20px
Appearance:
  unchecked: border 2px gray-400, круг
  checked: border primary, filled dot inside

Usage: Single select (время приготовления)
```

---

## 3. Cards

### 3.1. Recipe Card (Compact)

```yaml
Layout:
  - Image (left, 80x80px, rounded)
  - Content (right):
      - Title (1 line, ellipsis)
      - Metadata (cuisine • time • calories)
      - Tags (chips, max 2)
  - Favorite star (top-right)

Shadow: var(--shadow-sm)
Border radius: var(--radius-base)
Padding: 12px

Hover: shadow увеличивается
```

### 3.2. Recipe Card (Large)

```yaml
Layout:
  - Hero image (full width, 16:9)
  - Content padding:
      - Title (H3)
      - Description (2 lines, ellipsis)
      - Metadata row
      - Action button

Shadow: var(--shadow-base)
Border radius: var(--radius-lg)
```

### 3.3. Collection Card

```yaml
Layout:
  - Icon (emoji, 48px)
  - Title
  - Recipes count

Min height: 120px
Background: gradient-warm (subtle)
```

---

## 4. Navigation

### 4.1. Bottom Navigation (WebApp)

```yaml
Position: fixed bottom
Height: 64px
Background: white
Border top: 1px gray-200
Box shadow: shadow-lg (inverted)

Items:
  - Icon (24px)
  - Label (12px)
  - Active indicator (primary color)

Max items: 3-5
```

### 4.2. Top Bar (WebApp)

```yaml
Height: 56px
Background: white
Border bottom: 1px gray-200

Elements:
  - Left: Back button / Menu
  - Center: Page title (truncated)
  - Right: Action button(s)
```

---

## 5. Modals & Overlays

### 5.1. Modal

```yaml
Overlay:
  background: rgba(0, 0, 0, 0.5)
  z-index: 1000

Content:
  max-width: 90vw (макс 480px)
  background: white
  border-radius: var(--radius-lg)
  padding: 24px
  shadow: var(--shadow-xl)

Animation:
  enter: fade + slide up
  exit: fade + slide down
  duration: 250ms
```

### 5.2. Bottom Sheet

```yaml
Position: fixed bottom
Height: auto (max 80vh)
Background: white
Border radius: var(--radius-2xl) (top only)

Drag handle: visible (для закрытия свайпом)
```

---

## 6. Feedback Components

### 6.1. Toast Notification

```yaml
Position: bottom center
Width: max 90vw
Padding: 16px 24px
Border radius: var(--radius-base)
Shadow: var(--shadow-lg)

Variants:
  - Success: green background, checkmark icon
  - Error: red background, X icon
  - Info: blue background, info icon

Duration: 3-5 seconds
Animation: slide up + fade
```

### 6.2. Progress Bar

```yaml
Height: 4px
Background: gray-200
Fill: primary gradient
Border radius: full

Variants:
  - Determinate (with %)
  - Indeterminate (animated)
```

### 6.3. Skeleton Loader

```yaml
Background: gray-100
Animation: shimmer (left to right, 1.5s)
Border radius: match component

Usage: Recipe cards, lists
```

---

## 7. Lists & Tables

### 7.1. List Item

```yaml
Padding: 12px 16px
Border bottom: 1px gray-200
Min height: 56px (touch target)

Hover: background gray-50
Active: background gray-100
```

---

## 8. Badges & Pills

### 8.1. Badge

```yaml
Padding: 4px 12px
Font size: 12px
Border radius: full
Font weight: 600

Variants:
  - Primary: primary background
  - Success: success background
  - Warning: warning background
  - Gray: gray background

Usage: Premium, labels, statuses
```

### 8.2. Tag (Chip)

```yaml
Padding: 6px 12px
Font size: 14px
Border: 1px gray-300
Border radius: full

Removable: X icon (right)

Usage: Диеты, ингредиенты
```

---

## 9. Timers & Steppers

### 9.1. Timer Display

```yaml
Layout:
  - Large time (32px, monospace)
  - Circular progress (optional)
  - Controls (pause, stop)

Color: primary (when active), gray (when paused)
```

### 9.2. Step Indicator

```yaml
Layout:
  - Steps: circles connected by lines
  - Active: filled primary
  - Completed: checkmark
  - Upcoming: outlined gray

Usage: Onboarding, cooking flow
```

---

## 10. Media Components

### 10.1. Image Placeholder

```yaml
Background: gray-200
Icon: image icon (gray-400)
Aspect ratio: 16:9

Usage: Until image loads
```

### 10.2. Avatar

```yaml
Size variants: 32px, 48px, 64px
Border radius: full
Default: initials on primary background

Usage: Profile, user info
```

---

## 11. Empty States

```yaml
Layout:
  - Icon (64px, gray-400)
  - Heading (H3)
  - Description (gray-500)
  - CTA button (primary)

Alignment: center
Padding: 40px 24px
```

---

## 12. Error States

```yaml
Layout:
  - Error icon (48px, error color)
  - Error message
  - Suggested actions (buttons)
```

---

## 13. Voice Components

### 13.1. Voice Control Toggle

```yaml
Appearance:
  - Microphone icon
  - ON/OFF state (toggle switch)
  - Active indicator (pulsing animation)

Usage: Cooking screen
```

---

*Документ создан: UI Agent | Дата: 2026-02-04*
