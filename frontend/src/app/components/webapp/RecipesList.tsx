import React, { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal, Star, Trash2, Share2 } from 'lucide-react';

interface RecipesListProps {
  onNavigate: (screen: any, recipe?: any) => void;
}

const mockRecipes = [
  {
    id: 1,
    name: 'Борщ',
    image: 'https://images.unsplash.com/photo-1625937712842-061738bb1e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JzY2glMjBzb3VwJTIwcnVzc2lhbnxlbnwxfHx8fDE3NzAzMTA1OTV8MA&ixlib=rb-4.1.0&q=80&w=200',
    cuisine: 'Русская',
    time: '45 мин',
    calories: '350 ккал',
    tags: ['#Обед', '#Супы'],
    favorite: true,
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop',
    cuisine: 'Итальянская',
    time: '30 мин',
    calories: '520 ккал',
    tags: ['#Ужин'],
    favorite: false,
  },
  {
    id: 3,
    name: 'Греческий салат',
    image: 'https://images.unsplash.com/photo-1625944525991-c196b2813492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2h8ZW58MXx8fHwxNzcwMjEzMDQyfDA&ixlib=rb-4.1.0&q=80&w=200',
    cuisine: 'Греческая',
    time: '15 мин',
    calories: '280 ккал',
    tags: ['#Салат', '#Веган'],
    favorite: true,
  },
  {
    id: 4,
    name: 'Куриный плов',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop',
    cuisine: 'Узбекская',
    time: '60 мин',
    calories: '450 ккал',
    tags: ['#Обед'],
    favorite: false,
  },
  {
    id: 5,
    name: 'Омлет с овощами',
    image: 'https://images.unsplash.com/photo-1637036124319-4fa1881c9ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVsZXR0ZSUyMHZlZ2V0YWJsZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMzEwNTkzfDA&ixlib=rb-4.1.0&q=80&w=200',
    cuisine: 'Французская',
    time: '10 мин',
    calories: '250 ккал',
    tags: ['#Завтрак'],
    favorite: false,
  },
];

const mockCollections = [
  { id: 1, emoji: '⭐', name: 'Избранное', count: 12 },
  { id: 2, emoji: '🔥', name: 'Завтраки', count: 8 },
  { id: 3, emoji: '🍝', name: 'Итальянское', count: 5 },
];

export function RecipesList({ onNavigate }: RecipesListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'collections'>('all');
  const [recipes, setRecipes] = useState(mockRecipes);

  const toggleFavorite = (id: number) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, favorite: !r.favorite } : r));
  };

  const deleteRecipe = (id: number) => {
    if (confirm('Удалить рецепт?')) {
      setRecipes(recipes.filter(r => r.id !== id));
    }
  };

  const filteredRecipes = activeTab === 'favorites' 
    ? recipes.filter(r => r.favorite)
    : recipes;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Рецепты</h1>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <SlidersHorizontal size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 -mx-4 px-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'all' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Все
            {activeTab === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'favorites' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Избранное ⭐
            {activeTab === 'favorites' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`flex-1 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === 'collections' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Коллекции 📁
            {activeTab === 'collections' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* All/Favorites Tab Content */}
        {(activeTab === 'all' || activeTab === 'favorites') && (
          <>
            {filteredRecipes.length === 0 && activeTab === 'favorites' ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Здесь будут ваши любимые рецепты
                </h3>
                <p className="text-gray-600 mb-6">
                  Отмечайте понравившиеся рецепты ⭐
                </p>
                <button
                  onClick={() => setActiveTab('all')}
                  className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Найти рецепт
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-3">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        onClick={() => onNavigate('recipeDetail', recipe)}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0 cursor-pointer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3
                            onClick={() => onNavigate('recipeDetail', recipe)}
                            className="font-semibold text-gray-900 line-clamp-1 cursor-pointer hover:text-[#FF6B35]"
                          >
                            {recipe.name}
                          </h3>
                          <button
                            onClick={() => toggleFavorite(recipe.id)}
                            className="flex-shrink-0"
                          >
                            <Star
                              size={20}
                              className={recipe.favorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                            />
                          </button>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {recipe.cuisine} • {recipe.time} • {recipe.calories}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {recipe.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Swipe Actions (simulated) */}
                    <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                      <button
                        onClick={() => deleteRecipe(recipe.id)}
                        className="flex-1 py-2 text-red-600 text-sm font-semibold hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <Trash2 size={14} />
                        Удалить
                      </button>
                      <button className="flex-1 py-2 text-[#FF6B35] text-sm font-semibold hover:bg-orange-50 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Share2 size={14} />
                        Поделиться
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Collections Tab Content */}
        {activeTab === 'collections' && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {mockCollections.map((collection) => (
                <div
                  key={collection.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
                >
                  <div className="text-4xl mb-2">{collection.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{collection.name}</h3>
                  <div className="text-sm text-gray-500">{collection.count} рецептов</div>
                </div>
              ))}
              <button className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD166]/10 border-2 border-dashed border-[#FF6B35]/30 rounded-xl p-6 hover:border-[#FF6B35] transition-colors text-center">
                <div className="text-4xl mb-2">➕</div>
                <div className="font-semibold text-[#FF6B35]">Создать коллекцию</div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center">
        <button
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">🏠</span>
          </div>
          <span className="text-xs">Главная</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#FF6B35]">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">📚</span>
          </div>
          <span className="text-xs font-semibold">Рецепты</span>
        </button>
        <button
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">⚙️</span>
          </div>
          <span className="text-xs">Профиль</span>
        </button>
      </div>
    </div>
  );
}
