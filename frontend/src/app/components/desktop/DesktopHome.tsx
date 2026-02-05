import React, { useState } from 'react';
import { Camera, Search, TrendingUp, Clock, Heart, Sparkles, ArrowRight, Zap, Trophy } from 'lucide-react';
import { RecipeCard } from '../webapp/ui/RecipeCard';
import { StatsWidget } from '../webapp/ui/StatsWidget';
import { AlertBanner } from '../webapp/ui/AlertBanner';

interface DesktopHomeProps {
  onNavigate: (screen: string) => void;
}

const trendingRecipes = [
  {
    id: 1,
    name: 'Паста Карбонара',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    time: 30,
    servings: 2,
    calories: 650,
    difficulty: 'medium' as const,
    tags: ['Итальянская', 'Быстро'],
    trending: true,
  },
  {
    id: 2,
    name: 'Том Ям',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    time: 45,
    servings: 4,
    calories: 320,
    difficulty: 'medium' as const,
    tags: ['Тайская', 'Суп'],
    trending: true,
  },
  {
    id: 3,
    name: 'Шакшука',
    image: 'https://images.unsplash.com/photo-1595908129862-7295e1d88e0c?w=400&h=300&fit=crop',
    time: 25,
    servings: 2,
    calories: 380,
    difficulty: 'easy' as const,
    tags: ['Завтрак', 'Яйца'],
  },
  {
    id: 4,
    name: 'Поке Боул',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    time: 20,
    servings: 2,
    calories: 420,
    difficulty: 'easy' as const,
    tags: ['ПП', 'Рыба'],
  },
];

const quickRecipes = [
  {
    id: 5,
    name: 'Греческий салат',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    time: 10,
    servings: 2,
    calories: 240,
    difficulty: 'easy' as const,
    tags: ['Салат', 'Быстро'],
  },
  {
    id: 6,
    name: 'Смузи боул',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    time: 5,
    servings: 1,
    calories: 280,
    difficulty: 'easy' as const,
    tags: ['Завтрак', 'Веган'],
  },
  {
    id: 7,
    name: 'Авокадо тост',
    image: 'https://images.unsplash.com/photo-1603046891726-36bfd957f19f?w=400&h=300&fit=crop',
    time: 5,
    servings: 1,
    calories: 320,
    difficulty: 'easy' as const,
    tags: ['Завтрак', 'ПП'],
  },
];

const stats = [
  { label: 'Рецепты', value: '42', icon: '📚', trend: 12, color: 'text-[#FF6B35]' },
  { label: 'Приготовлено', value: '28', icon: '👨‍🍳', trend: 8, color: 'text-green-600' },
  { label: 'Streak дней', value: '7', icon: '🔥', trend: -2, color: 'text-purple-600' },
  { label: 'Сэкономлено', value: '12,400₽', icon: '💰', trend: 15, color: 'text-blue-600' },
];

export function DesktopHome({ onNavigate }: DesktopHomeProps) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="h-full overflow-y-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FFD166] text-white px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">
                Привет, Анна! 👋
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Что будем готовить сегодня?
              </p>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('home')}
                  className="bg-white text-[#FF6B35] px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Camera size={20} />
                  Сканировать холодильник
                </button>
                <button
                  onClick={() => onNavigate('desktopSearch')}
                  className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
                >
                  <Search size={20} />
                  Искать рецепт
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">28</div>
                  <div className="text-sm text-white/80">Рецепты</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">7</div>
                  <div className="text-sm text-white/80">Streak 🔥</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">42</div>
                  <div className="text-sm text-white/80">Готовка</div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Challenge */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl">
                  <Trophy />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Ежедневный вызов</h3>
                  <p className="text-white/90">Приготовь блюдо менее чем за 20 минут</p>
                </div>
              </div>
              <button className="bg-white text-[#FF6B35] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Принять вызов
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Alert Banner */}
        {showBanner && (
          <AlertBanner
            type="info"
            title="🎉 Новая функция!"
            message="Теперь ты можешь заказывать недостающие продукты прямо из рецепта с доставкой от Яндекс.Лавка"
            dismissible
            onDismiss={() => setShowBanner(false)}
            action={{
              label: 'Попробовать',
              onClick: () => console.log('Try delivery'),
            }}
          />
        )}

        {/* Stats Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Твоя статистика</h2>
          <StatsWidget stats={stats} variant="cards" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="col-span-2 space-y-8">
            {/* Trending Recipes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp size={24} className="text-[#FF6B35]" />
                  <h2 className="text-2xl font-bold text-gray-900">Популярное сегодня</h2>
                </div>
                <button
                  onClick={() => onNavigate('desktopRecipes')}
                  className="text-[#FF6B35] font-semibold hover:underline flex items-center gap-1"
                >
                  Все рецепты
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {trendingRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    variant="grid"
                    onClick={() => onNavigate('desktopRecipeDetail')}
                  />
                ))}
              </div>
            </div>

            {/* Quick Recipes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={24} className="text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Быстрые рецепты</h2>
                <span className="text-sm text-gray-500">До 10 минут</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {quickRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    variant="grid"
                    onClick={() => onNavigate('desktopRecipeDetail')}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-blue-600" />
                <h3 className="font-bold text-gray-900">Недавно готовили</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Паста Карбонара', time: '2 часа назад', emoji: '🍝' },
                  { name: 'Греческий салат', time: 'Вчера', emoji: '🥗' },
                  { name: 'Панкейки', time: '2 дня назад', emoji: '🥞' },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button className="w-full mt-4 text-[#FF6B35] font-semibold text-sm hover:underline">
                Посмотреть всю историю
              </button>
            </div>

            {/* Favorites */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={20} className="text-red-600" />
                <h3 className="font-bold text-gray-900">Избранное</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Борщ', saves: 142, emoji: '🍲' },
                  { name: 'Шарлотка', saves: 89, emoji: '🍰' },
                  { name: 'Цезарь', saves: 67, emoji: '🥗' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.saves} сохранений</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Upsell */}
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={24} />
                <h3 className="font-bold text-xl">Premium+</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Безлимитные рецепты, голосовой ассистент и доставка продуктов
              </p>
              <button className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                Попробовать 7 дней бесплатно
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
