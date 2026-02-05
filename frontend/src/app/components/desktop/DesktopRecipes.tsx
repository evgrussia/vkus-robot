import React, { useState } from 'react';
import { Search, SlidersHorizontal, Grid3x3, List, TrendingUp, Clock, Heart, X } from 'lucide-react';
import { RecipeCard } from '../webapp/ui/RecipeCard';
import { Badge } from '../webapp/ui/Badge';

interface DesktopRecipesProps {
  onNavigate: (screen: string) => void;
}

const allRecipes = [
  {
    id: 1,
    name: 'Паста Карбонара',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    time: 30,
    servings: 2,
    calories: 650,
    difficulty: 'medium' as const,
    tags: ['Итальянская', 'Паста'],
    trending: true,
    isLiked: true,
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
    isSaved: true,
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
  {
    id: 5,
    name: 'Греческий салат',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    time: 10,
    servings: 2,
    calories: 240,
    difficulty: 'easy' as const,
    tags: ['Салат', 'Греческая'],
  },
  {
    id: 6,
    name: 'Борщ',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    time: 90,
    servings: 6,
    calories: 280,
    difficulty: 'hard' as const,
    tags: ['Русская', 'Суп'],
  },
  {
    id: 7,
    name: 'Тирамису',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    time: 40,
    servings: 6,
    calories: 450,
    difficulty: 'medium' as const,
    tags: ['Десерт', 'Итальянская'],
    isLiked: true,
  },
  {
    id: 8,
    name: 'Панкейки',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    time: 15,
    servings: 2,
    calories: 340,
    difficulty: 'easy' as const,
    tags: ['Завтрак', 'Быстро'],
  },
];

const categories = [
  { id: 'all', name: 'Все', emoji: '📚', count: 158 },
  { id: 'trending', name: 'Популярное', emoji: '🔥', count: 24 },
  { id: 'quick', name: 'Быстрые', emoji: '⚡', count: 45 },
  { id: 'healthy', name: 'ПП', emoji: '🥗', count: 67 },
  { id: 'dessert', name: 'Десерты', emoji: '🍰', count: 32 },
  { id: 'breakfast', name: 'Завтраки', emoji: '🥞', count: 28 },
  { id: 'soup', name: 'Супы', emoji: '🍲', count: 19 },
  { id: 'salad', name: 'Салаты', emoji: '🥗', count: 34 },
];

const cuisines = ['Итальянская', 'Тайская', 'Греческая', 'Русская', 'Японская', 'Французская'];
const difficulties = ['easy', 'medium', 'hard'];
const timeRanges = ['До 15 мин', '15-30 мин', '30-60 мин', '60+ мин'];

export function DesktopRecipes({ onNavigate }: DesktopRecipesProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    cuisines: [] as string[],
    difficulties: [] as string[],
    timeRanges: [] as string[],
  });

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({ cuisines: [], difficulties: [], timeRanges: [] });
  };

  const activeFiltersCount = Object.values(filters).flat().length;

  return (
    <div className="h-full flex">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Библиотека рецептов</h1>

            {/* Search and Controls */}
            <div className="flex gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск рецептов..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                />
              </div>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#FF6B35] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white text-[#FF6B35] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 relative ${
                  showFilters
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <SlidersHorizontal size={20} />
                Фильтры
                {activeFiltersCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </div>
                )}
              </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.name}
                  <span className="ml-2 opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Активные фильтры:</span>
                {Object.entries(filters).map(([type, values]) =>
                  values.map((value) => (
                    <Badge key={`${type}-${value}`} variant="primary" size="sm">
                      {value}
                      <button
                        onClick={() => toggleFilter(type as keyof typeof filters, value)}
                        className="ml-1"
                      >
                        <X size={12} />
                      </button>
                    </Badge>
                  ))
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#FF6B35] font-semibold hover:underline ml-2"
                >
                  Сбросить все
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recipes Grid/List */}
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600">
              Найдено рецептов: <span className="font-semibold text-gray-900">{allRecipes.length}</span>
            </div>
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
              <option>По популярности</option>
              <option>По времени приготовления</option>
              <option>По калориям</option>
              <option>По рейтингу</option>
            </select>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-4 gap-4">
              {allRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  variant="grid"
                  onClick={() => onNavigate('desktopRecipeDetail')}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {allRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  variant="list"
                  onClick={() => onNavigate('desktopRecipeDetail')}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters Sidebar */}
      {showFilters && (
        <aside className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Фильтры</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Cuisines */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Кухня</h3>
                <div className="space-y-2">
                  {cuisines.map((cuisine) => (
                    <label
                      key={cuisine}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.cuisines.includes(cuisine)}
                        onChange={() => toggleFilter('cuisines', cuisine)}
                        className="w-5 h-5 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {cuisine}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Сложность</h3>
                <div className="space-y-2">
                  {[
                    { id: 'easy', label: 'Легко' },
                    { id: 'medium', label: 'Средне' },
                    { id: 'hard', label: 'Сложно' },
                  ].map((difficulty) => (
                    <label
                      key={difficulty.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.difficulties.includes(difficulty.id)}
                        onChange={() => toggleFilter('difficulties', difficulty.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {difficulty.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Время приготовления</h3>
                <div className="space-y-2">
                  {timeRanges.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.timeRanges.includes(range)}
                        onChange={() => toggleFilter('timeRanges', range)}
                        className="w-5 h-5 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calories Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Калорийность</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">От</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">До</label>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 space-y-2">
                <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Применить фильтры
                </button>
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
