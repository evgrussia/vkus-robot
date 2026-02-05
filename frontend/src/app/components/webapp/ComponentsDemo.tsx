import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { RecipeCard } from './ui/RecipeCard';
import { IngredientCard } from './ui/IngredientCard';
import { StepCard } from './ui/StepCard';
import { StatsWidget } from './ui/StatsWidget';
import { NutritionWidget } from './ui/NutritionWidget';
import { ProgressWidget } from './ui/ProgressWidget';
import { AlertBanner } from './ui/AlertBanner';
import { EmptyState } from './ui/EmptyState';
import { ErrorState } from './ui/ErrorState';
import { SkeletonLoader } from './ui/SkeletonLoader';
import { Badge } from './ui/Badge';
import { LoadingState } from './ui/LoadingState';

interface ComponentsDemoProps {
  onNavigate: (screen: any) => void;
}

const demoRecipe = {
  id: 1,
  name: 'Паста Карбонара',
  image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
  time: 30,
  servings: 2,
  calories: 650,
  difficulty: 'medium' as const,
  rating: 4.8,
  tags: ['Итальянская', 'Быстро'],
  trending: true,
};

const demoIngredient = {
  id: 1,
  name: 'Помидоры',
  amount: '3',
  unit: 'шт',
  emoji: '🍅',
  available: true,
  category: 'Овощи',
};

const demoStep = {
  id: 1,
  number: 1,
  title: 'Подготовка ингредиентов',
  description: 'Нарежь помидоры кубиками, измельчи чеснок и нарежь базилик',
  time: 5,
  tip: 'Используй очень острый нож для помидоров',
  image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop',
};

const demoStats = [
  { label: 'Рецепты', value: '42', icon: '📚', trend: 12, color: 'text-[#FF6B35]' },
  { label: 'Готовка', value: '28', icon: '👨‍🍳', trend: 8, color: 'text-green-600' },
  { label: 'Streak', value: '7', icon: '🔥', trend: -2, color: 'text-purple-600' },
];

const demoNutrition = {
  calories: 650,
  protein: 25,
  fats: 35,
  carbs: 60,
  dailyCaloriesPercent: 32,
};

export function ComponentsDemo({ onNavigate }: ComponentsDemoProps) {
  const [activeTab, setActiveTab] = useState<string>('cards');
  const [ingredientChecked, setIngredientChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const sections = [
    { id: 'cards', name: 'Cards', emoji: '🎴' },
    { id: 'widgets', name: 'Widgets', emoji: '📊' },
    { id: 'states', name: 'States', emoji: '⏳' },
    { id: 'other', name: 'Other', emoji: '🎨' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => onNavigate('modalsDemo')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">States & Components</h1>
            <p className="text-sm text-gray-500">Переиспользуемые компоненты</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === section.id
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{section.emoji}</span>
              {section.name}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-6 space-y-8">
        {/* Cards Tab */}
        {activeTab === 'cards' && (
          <>
            {/* Recipe Cards */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Recipe Cards</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Grid Variant</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <RecipeCard recipe={demoRecipe} variant="grid" />
                <RecipeCard recipe={{ ...demoRecipe, isLiked: true }} variant="grid" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">List Variant</h3>
              <div className="space-y-3 mb-4">
                <RecipeCard recipe={demoRecipe} variant="list" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Featured Variant</h3>
              <RecipeCard recipe={demoRecipe} variant="featured" />
            </div>

            {/* Ingredient Cards */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Ingredient Cards</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Default</h3>
              <div className="mb-4">
                <IngredientCard ingredient={demoIngredient} variant="default" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Checklist</h3>
              <div className="mb-4">
                <IngredientCard
                  ingredient={demoIngredient}
                  variant="checklist"
                  checked={ingredientChecked}
                  onToggle={() => setIngredientChecked(!ingredientChecked)}
                />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Editable</h3>
              <IngredientCard ingredient={demoIngredient} variant="editable" />
            </div>

            {/* Step Cards */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Step Cards</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Default</h3>
              <div className="mb-4">
                <StepCard step={demoStep} variant="default" isActive />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Compact</h3>
              <div className="space-y-2 mb-4">
                <StepCard step={{ ...demoStep, completed: true }} variant="compact" />
                <StepCard step={{ ...demoStep, number: 2 }} variant="compact" isActive />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Detailed</h3>
              <StepCard step={demoStep} variant="detailed" />
            </div>
          </>
        )}

        {/* Widgets Tab */}
        {activeTab === 'widgets' && (
          <>
            {/* Stats Widgets */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Stats Widgets</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Grid</h3>
              <div className="mb-4">
                <StatsWidget stats={demoStats} variant="grid" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Row</h3>
              <div className="mb-4">
                <StatsWidget stats={demoStats} variant="row" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Cards</h3>
              <StatsWidget stats={demoStats} variant="cards" />
            </div>

            {/* Nutrition Widgets */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Nutrition Widgets</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Full</h3>
              <div className="mb-4">
                <NutritionWidget nutrition={demoNutrition} variant="full" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Compact</h3>
              <div className="mb-4">
                <NutritionWidget nutrition={demoNutrition} variant="compact" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Circular</h3>
              <NutritionWidget nutrition={demoNutrition} variant="circular" />
            </div>

            {/* Progress Widgets */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Progress Widgets</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Bar</h3>
              <div className="mb-4">
                <ProgressWidget current={3} total={5} variant="bar" label="Прогресс готовки" timeRemaining={15} />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Circle</h3>
              <div className="mb-4">
                <ProgressWidget current={7} total={10} variant="circle" label="Завершено" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Steps</h3>
              <ProgressWidget current={2} total={5} variant="steps" label="Шаги рецепта" />
            </div>
          </>
        )}

        {/* States Tab */}
        {activeTab === 'states' && (
          <>
            {/* Loading States */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Loading States</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Spinner</h3>
              <div className="bg-white rounded-xl mb-4">
                <LoadingState variant="spinner" message="Загрузка рецептов..." size="md" />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Dots</h3>
              <div className="bg-white rounded-xl mb-4">
                <LoadingState variant="dots" message="Обработка изображения..." />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Pulse</h3>
              <div className="bg-white rounded-xl">
                <LoadingState variant="pulse" message="Подготовка..." size="lg" />
              </div>
            </div>

            {/* Skeleton Loaders */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Skeleton Loaders</h2>
              
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Recipe Cards</h3>
              <div className="mb-4">
                <SkeletonLoader variant="recipeCard" count={2} />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Recipe List</h3>
              <div className="mb-4">
                <SkeletonLoader variant="recipeList" count={2} />
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-2">Avatar</h3>
              <div className="bg-white rounded-xl p-4">
                <SkeletonLoader variant="avatar" />
              </div>
            </div>

            {/* Empty States */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Empty States</h2>
              
              <div className="bg-white rounded-xl mb-4">
                <EmptyState
                  emoji="📚"
                  title="Нет рецептов"
                  description="Начни с фото холодильника или поиска рецептов"
                  action={{
                    label: 'Создать рецепт',
                    onClick: () => console.log('Create recipe'),
                  }}
                  variant="default"
                />
              </div>

              <div className="bg-white rounded-xl p-4">
                <EmptyState
                  emoji="🔍"
                  title="Ничего не найдено"
                  description="Попробуй другие параметры поиска"
                  variant="compact"
                />
              </div>
            </div>

            {/* Error States */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Error States</h2>
              
              <div className="bg-white rounded-xl mb-4">
                <ErrorState
                  type="network"
                  onRetry={() => console.log('Retry')}
                />
              </div>

              <div className="bg-white rounded-xl">
                <ErrorState
                  type="notfound"
                  title="Рецепт не найден"
                  description="Этот рецепт был удален или не существует"
                />
              </div>
            </div>
          </>
        )}

        {/* Other Tab */}
        {activeTab === 'other' && (
          <>
            {/* Alert Banners */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Alert Banners</h2>
              
              <div className="space-y-3">
                {showAlert && (
                  <AlertBanner
                    type="info"
                    title="Новая функция"
                    message="Теперь ты можешь заказывать продукты прямо из приложения!"
                    dismissible
                    onDismiss={() => setShowAlert(false)}
                  />
                )}

                <AlertBanner
                  type="success"
                  message="Рецепт успешно сохранён в избранное"
                />

                <AlertBanner
                  type="warning"
                  title="Внимание"
                  message="У тебя заканчивается подписка Premium. Продли её до 15 марта"
                  action={{
                    label: 'Продлить',
                    onClick: () => console.log('Renew'),
                  }}
                />

                <AlertBanner
                  type="error"
                  title="Ошибка"
                  message="Не удалось загрузить изображение. Попробуй ещё раз"
                />
              </div>
            </div>

            {/* Badges */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Badges</h2>
              
              <div className="bg-white rounded-xl p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="primary">Primary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="primary" size="sm">Small</Badge>
                      <Badge variant="primary" size="md">Medium</Badge>
                      <Badge variant="primary" size="lg">Large</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">With Icons</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="success" icon="✓">Завершено</Badge>
                      <Badge variant="warning" icon="⏰">Готовится</Badge>
                      <Badge variant="primary" icon="🔥">Trending</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-6 border border-[#FF6B35]/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">13</div>
            <div className="text-gray-600">Компонентов создано</div>
            <div className="text-sm text-gray-500 mt-1">
              Cards • Widgets • States • UI Elements
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
