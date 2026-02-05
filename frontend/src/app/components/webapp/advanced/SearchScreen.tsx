import React, { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal, X, Clock, Flame, Users } from 'lucide-react';

interface SearchScreenProps {
  onNavigate: (screen: any, recipe?: any) => void;
}

const mockSearchResults = [
  {
    id: 1,
    name: 'Борщ классический',
    image: 'https://images.unsplash.com/photo-1625937712842-061738bb1e2a?w=200&h=200&fit=crop',
    time: '45 мин',
    calories: '350 ккал',
    servings: '4 порции',
    cuisine: 'Русская',
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop',
    time: '30 мин',
    calories: '520 ккал',
    servings: '2 порции',
    cuisine: 'Итальянская',
  },
  {
    id: 3,
    name: 'Греческий салат',
    image: 'https://images.unsplash.com/photo-1625944525991-c196b2813492?w=200&h=200&fit=crop',
    time: '15 мин',
    calories: '280 ккал',
    servings: '2 порции',
    cuisine: 'Греческая',
  },
];

const recentSearches = ['Борщ', 'Салаты', 'Завтрак', 'Веганские рецепты'];
const popularSearches = ['Быстрые рецепты', 'Десерты', 'Супы', 'Паста', 'Салаты'];

const cuisines = ['Итальянская', 'Русская', 'Японская', 'Грузинская', 'Французская', 'Мексиканская'];
const mealTypes = ['Завтрак', 'Обед', 'Ужин', 'Перекус', 'Десерт'];

export function SearchScreen({ onNavigate }: SearchScreenProps) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);
  const [timeRange, setTimeRange] = useState<number>(60);
  const [caloriesRange, setCaloriesRange] = useState<number>(1000);

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisine) ? prev.filter(c => c !== cuisine) : [...prev, cuisine]
    );
  };

  const toggleMealType = (type: string) => {
    setSelectedMealTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedCuisines([]);
    setSelectedMealTypes([]);
    setTimeRange(60);
    setCaloriesRange(1000);
  };

  const hasActiveFilters = selectedCuisines.length > 0 || selectedMealTypes.length > 0 || timeRange < 60 || caloriesRange < 1000;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск рецептов..."
                autoFocus
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 rounded-lg transition-colors relative ${
                hasActiveFilters
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SlidersHorizontal size={20} />
              {hasActiveFilters && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 px-4 py-4 max-h-96 overflow-y-auto">
            {/* Cuisines */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Кухня</h3>
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => toggleCuisine(cuisine)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedCuisines.includes(cuisine)
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>

            {/* Meal Types */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Тип блюда</h3>
              <div className="flex flex-wrap gap-2">
                {mealTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleMealType(type)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedMealTypes.includes(type)
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Range */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Время приготовления</h3>
                <span className="text-sm text-gray-600">до {timeRange} мин</span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={timeRange}
                onChange={(e) => setTimeRange(Number(e.target.value))}
                className="w-full accent-[#FF6B35]"
              />
            </div>

            {/* Calories Range */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Калорийность</h3>
                <span className="text-sm text-gray-600">до {caloriesRange} ккал</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={caloriesRange}
                onChange={(e) => setCaloriesRange(Number(e.target.value))}
                className="w-full accent-[#FF6B35]"
              />
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full py-2 text-red-600 font-semibold text-sm hover:bg-red-50 rounded-lg transition-colors"
              >
                Сбросить фильтры
              </button>
            )}
          </div>
        )}
      </div>

      <div className="px-4 py-6 pb-24">
        {/* No Query State */}
        {!query && (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Недавние поиски</h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="w-full flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Clock size={18} className="text-gray-400" />
                      <span className="flex-1 text-left text-gray-700">{search}</span>
                      <X size={16} className="text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Популярные запросы</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Search Results */}
        {query && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Найдено {mockSearchResults.length} рецептов
              </h3>
            </div>

            <div className="space-y-3">
              {mockSearchResults.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => onNavigate('recipeDetail', recipe)}
                  className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex gap-3">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 line-clamp-1 mb-1">
                        {recipe.name}
                      </h4>
                      <div className="text-sm text-gray-600 mb-2">
                        {recipe.cuisine}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {recipe.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame size={12} />
                          {recipe.calories}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          {recipe.servings}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
