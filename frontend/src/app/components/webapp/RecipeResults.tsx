import React, { useState } from 'react';
import { ArrowLeft, Clock, Flame, Users, Camera, RefreshCw } from 'lucide-react';

interface RecipeResultsProps {
  onNavigate: (screen: any, recipe?: any) => void;
}

const mockRecipes = [
  {
    id: 1,
    name: 'Итальянский салат Капрезе',
    image: 'https://images.unsplash.com/photo-1760023570385-ee484f7076b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2FwcmVzZSUyMHNhbGFkJTIwZnJlc2h8ZW58MXx8fHwxNzcwMzEwMTk1fDA&ixlib=rb-4.1.0&q=80&w=600',
    time: '20 мин',
    calories: '280 ккал',
    servings: '2 порции',
    diet: '🥗 Веган',
    match: 95,
    description: 'Классический итальянский салат с помидорами и моцареллой',
    featured: true,
  },
  {
    id: 2,
    name: 'Омлет с овощами и сыром',
    image: 'https://images.unsplash.com/photo-1637036124319-4fa1881c9ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVsZXR0ZSUyMHZlZ2V0YWJsZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMzEwNTkzfDA&ixlib=rb-4.1.0&q=80&w=600',
    time: '15 мин',
    calories: '350 ккал',
    servings: '2 порции',
    match: 100,
    description: 'Питательный завтрак с овощами',
    featured: false,
  },
  {
    id: 3,
    name: 'Греческий салат с яйцом',
    image: 'https://images.unsplash.com/photo-1625944525991-c196b2813492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2h8ZW58MXx8fHwxNzcwMjEzMDQyfDA&ixlib=rb-4.1.0&q=80&w=600',
    time: '10 мин',
    calories: '220 ккал',
    servings: '2 порции',
    diet: '🥗 Низкоуглеводный',
    match: 90,
    description: 'Свежий салат с фетой и оливками',
    featured: false,
  },
  {
    id: 4,
    name: 'Шакшука',
    image: 'https://images.unsplash.com/photo-1759216278358-cd3d585b9116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFrc2h1a2ElMjBlZ2dzJTIwZGlzaHxlbnwxfHx8fDE3NzAzMTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=600',
    time: '25 мин',
    calories: '320 ккал',
    servings: '3 порции',
    match: 85,
    missing: ['Перец болгарский'],
    description: 'Яичница в томатном соусе',
    featured: false,
  },
];

const filters = ['Все', 'Быстрые (<15 мин)', 'Лёгкие (<300 ккал)'];

export function RecipeResults({ onNavigate }: RecipeResultsProps) {
  const [activeFilter, setActiveFilter] = useState('Все');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => onNavigate('ingredients')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Вот что можно приготовить</h1>
            <p className="text-sm text-gray-500">Выбери рецепт для приготовления</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Recipe Cards */}
        <div className="space-y-4">
          {mockRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              onClick={() => onNavigate('recipeDetail', recipe)}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer ${
                recipe.featured ? 'border-2 border-[#FF6B35]' : ''
              }`}
            >
              {/* Featured Badge */}
              {recipe.featured && (
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFD166] px-4 py-2 text-white text-sm font-semibold">
                  ⭐ Рекомендуем
                </div>
              )}

              {/* Image */}
              <div className="relative h-48">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white mb-2">{recipe.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {recipe.time}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                    <Flame size={14} />
                    {recipe.calories}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                    <Users size={14} />
                    {recipe.servings}
                  </span>
                  {recipe.diet && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {recipe.diet}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>

                {/* Match */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Соответствие продуктам</span>
                    <span className="text-sm font-bold text-[#FF6B35]">{recipe.match}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] transition-all"
                      style={{ width: `${recipe.match}%` }}
                    />
                  </div>
                </div>

                {/* Missing Ingredients */}
                {recipe.missing && recipe.missing.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-700">
                      <strong>Не хватает:</strong> {recipe.missing.join(', ')}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  🍳 Готовить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-2">
        <button
          onClick={() => onNavigate('loading')}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw size={18} />
          Сгенерировать другие рецепты
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <Camera size={18} />
          Новое фото
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
