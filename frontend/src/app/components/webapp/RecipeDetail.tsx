import React, { useState } from 'react';
import { ArrowLeft, MoreVertical, Heart, FolderOpen, Share2, Clock, Flame, Users, Check, ShoppingCart, ChefHat } from 'lucide-react';

interface RecipeDetailProps {
  recipe: any;
  onNavigate: (screen: any, recipe?: any) => void;
}

const mockFullRecipe = {
  ingredients: [
    { id: 1, name: 'Помидоры', amount: '3 шт (250г)', checked: true, available: true },
    { id: 2, name: 'Сыр моцарелла', amount: '200г', checked: true, available: true },
    { id: 3, name: 'Базилик свежий', amount: '10г', checked: false, available: false },
    { id: 4, name: 'Оливковое масло', amount: '2 ст.л.', checked: true, available: true },
    { id: 5, name: 'Соль', amount: 'по вкусу', checked: true, available: true },
    { id: 6, name: 'Перец чёрный', amount: 'по вкусу', checked: true, available: true },
  ],
  steps: [
    'Нарежь помидоры кружочками толщиной 0.5 см',
    'Выложи моцареллу кружочками такой же толщины',
    'Чередуй помидоры и моцареллу на тарелке',
    'Добавь листья базилика между слоями',
    'Полей оливковым маслом, посоли и поперчи',
  ],
  nutrition: {
    calories: 280,
    protein: 15,
    fat: 20,
    carbs: 8,
  },
};

export function RecipeDetail({ recipe, onNavigate }: RecipeDetailProps) {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps' | 'nutrition'>('ingredients');
  const [servings, setServings] = useState(2);
  const [ingredients, setIngredients] = useState(mockFullRecipe.ingredients);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIngredient = (id: number) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, checked: !ing.checked } : ing
    ));
  };

  const missingCount = ingredients.filter(ing => !ing.available).length;

  if (!recipe) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-20">
        <button
          onClick={() => onNavigate('results')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900 flex-1 text-center px-4 line-clamp-1">
          {recipe.name}
        </h1>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-64">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Save Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart 
            size={24} 
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}
          />
        </button>
      </div>

      {/* Metadata */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex gap-3 mb-4">
          <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm flex items-center gap-2">
            <Clock size={16} />
            {recipe.time}
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm flex items-center gap-2">
            <Flame size={16} />
            {recipe.calories}
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm flex items-center gap-2">
            <Users size={16} />
            {recipe.servings}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`flex-1 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              isFavorite 
                ? 'bg-red-50 text-red-600 border-2 border-red-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
            {isFavorite ? 'В избранном' : 'Избранное'}
          </button>
          <button className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <FolderOpen size={18} />
            В коллекцию
          </button>
          <button className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Share2 size={18} />
            Поделиться
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-10">
        <div className="flex">
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`flex-1 py-4 font-semibold transition-colors relative ${
              activeTab === 'ingredients' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Ингредиенты
            {activeTab === 'ingredients' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`flex-1 py-4 font-semibold transition-colors relative ${
              activeTab === 'steps' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            Приготовление
            {activeTab === 'steps' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex-1 py-4 font-semibold transition-colors relative ${
              activeTab === 'nutrition' ? 'text-[#FF6B35]' : 'text-gray-600'
            }`}
          >
            КБЖУ
            {activeTab === 'nutrition' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B35]" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 py-6">
        {activeTab === 'ingredients' && (
          <div>
            {/* Servings Adjuster */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-700 font-semibold">Количество порций:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="w-10 h-10 bg-gray-100 rounded-lg font-bold text-xl hover:bg-gray-200 transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-[#FF6B35] w-8 text-center">{servings}</span>
                <button
                  onClick={() => setServings(servings + 1)}
                  className="w-10 h-10 bg-gray-100 rounded-lg font-bold text-xl hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients List */}
            <div className="space-y-3 mb-6">
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  onClick={() => toggleIngredient(ingredient.id)}
                  className={`bg-white rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all ${
                    ingredient.checked ? 'shadow-sm' : 'opacity-50'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                      ingredient.checked
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {ingredient.checked && <Check size={16} className="text-white" />}
                  </div>

                  <div className="flex-1">
                    <div className={`font-semibold ${ingredient.checked ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                      {ingredient.name}
                    </div>
                    <div className="text-sm text-gray-500">{ingredient.amount}</div>
                  </div>

                  {!ingredient.available && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                      Нет
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Missing Alert */}
            {missingCount > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                <p className="text-orange-700 font-semibold mb-2">
                  Недостающих продуктов: {missingCount}
                </p>
                <button className="w-full py-3 bg-[#FF6B35] text-white rounded-xl font-semibold hover:bg-[#E55428] transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Заказать базилик
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'steps' && (
          <div className="space-y-4">
            {mockFullRecipe.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{step}</p>
                </div>
              </div>
            ))}
            <div className="text-sm text-gray-500 text-center mt-4">
              Всего шагов: {mockFullRecipe.steps.length}
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div>
            {/* Donut Chart Placeholder */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#FFD166" strokeWidth="32" strokeDasharray="126 377" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#FF6B35" strokeWidth="32" strokeDasharray="94 409" strokeDashoffset="-126" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#4ECDC4" strokeWidth="32" strokeDasharray="63 440" strokeDashoffset="-220" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#E5E7EB" strokeWidth="32" strokeDasharray="220 283" strokeDashoffset="-283" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-900">{mockFullRecipe.nutrition.calories}</div>
                    <div className="text-sm text-gray-500">ккал</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                    <span className="text-sm text-gray-600">Белки</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{mockFullRecipe.nutrition.protein}г</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-[#FFD166]" />
                    <span className="text-sm text-gray-600">Жиры</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{mockFullRecipe.nutrition.fat}г</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
                    <span className="text-sm text-gray-600">Углеводы</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{mockFullRecipe.nutrition.carbs}г</div>
                </div>
              </div>
            </div>

            {/* Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white rounded-xl p-1 shadow-sm">
                <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-semibold text-sm">
                  На порцию
                </button>
                <button className="px-4 py-2 text-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-50">
                  На 100г
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('cooking', recipe)}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <ChefHat size={20} />
          Начать готовить
        </button>
      </div>
    </div>
  );
}
