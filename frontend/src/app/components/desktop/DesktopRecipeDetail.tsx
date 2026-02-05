import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Flame, 
  Heart, 
  Bookmark, 
  Share2, 
  ChefHat,
  ShoppingCart,
  Printer,
  MessageCircle,
  Star,
  Play,
  Timer,
  Mic
} from 'lucide-react';
import { NutritionWidget } from '../webapp/ui/NutritionWidget';
import { StepCard } from '../webapp/ui/StepCard';
import { IngredientCard } from '../webapp/ui/IngredientCard';
import { Badge } from '../webapp/ui/Badge';

interface DesktopRecipeDetailProps {
  onNavigate: (screen: string) => void;
}

const recipe = {
  name: 'Паста Карбонара',
  image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1200&h=600&fit=crop',
  author: 'Chef Mario',
  authorAvatar: '👨‍🍳',
  rating: 4.8,
  reviews: 342,
  time: 30,
  servings: 2,
  difficulty: 'Средняя сложность',
  description: 'Классическая итальянская паста с беконом, яйцами и сыром пармезан. Простое, но очень вкусное блюдо, которое готовится за полчаса.',
  tags: ['Итальянская', 'Паста', 'Быстро', 'Ужин'],
};

const nutrition = {
  calories: 650,
  protein: 25,
  fats: 35,
  carbs: 60,
  dailyCaloriesPercent: 32,
};

const ingredients = [
  { id: 1, name: 'Спагетти', amount: '200', unit: 'г', emoji: '🍝', available: true, category: 'Паста' },
  { id: 2, name: 'Бекон', amount: '150', unit: 'г', emoji: '🥓', available: true, category: 'Мясо' },
  { id: 3, name: 'Яйца', amount: '3', unit: 'шт', emoji: '🥚', available: true, category: 'Яйца' },
  { id: 4, name: 'Пармезан', amount: '50', unit: 'г', emoji: '🧀', available: false, category: 'Сыр' },
  { id: 5, name: 'Чеснок', amount: '2', unit: 'зубчика', emoji: '🧄', available: true, category: 'Овощи' },
  { id: 6, name: 'Оливковое масло', amount: '2', unit: 'ст.л.', emoji: '🫒', available: true, category: 'Масла' },
  { id: 7, name: 'Соль', amount: '1', unit: 'щепотка', emoji: '🧂', available: true, category: 'Специи' },
  { id: 8, name: 'Черный перец', amount: '1', unit: 'щепотка', emoji: '🌶️', available: true, category: 'Специи' },
];

const steps = [
  {
    id: 1,
    number: 1,
    title: 'Подготовка ингредиентов',
    description: 'Нарежь бекон тонкими полосками. Натри пармезан на мелкой терке. Раздели яйца на желтки и белки.',
    time: 5,
    tip: 'Используй комнатной температуры яйца для лучшего результата',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    number: 2,
    title: 'Варка пасты',
    description: 'Вскипяти большую кастрюлю с подсоленной водой. Свари спагетти до состояния аль денте (обычно 8-10 минут). Сохрани 1 стакан воды от варки пасты.',
    time: 10,
    tip: 'Не переваривай пасту - она должна быть слегка твердой',
  },
  {
    id: 3,
    number: 3,
    title: 'Обжарка бекона',
    description: 'На среднем огне обжарь бекон до золотистой корочки. Добавь измельченный чеснок и обжарь ещё минуту.',
    time: 8,
    tip: 'Не пережарь бекон - он должен быть хрустящим, но не сухим',
  },
  {
    id: 4,
    number: 4,
    title: 'Смешивание',
    description: 'Сними сковороду с огня. Добавь горячую пасту к бекону. Быстро добавь яичные желтки, пармезан и перемешай. Добавь немного воды от пасты для кремовой консистенции.',
    time: 5,
    tip: 'Важно делать это быстро, чтобы яйца не сварились комками',
  },
  {
    id: 5,
    number: 5,
    title: 'Подача',
    description: 'Приправь черным перцем, посыпь оставшимся пармезаном и сразу подавай на стол.',
    time: 2,
  },
];

const reviews = [
  {
    id: 1,
    author: 'Мария К.',
    avatar: '👩',
    rating: 5,
    date: '2 дня назад',
    text: 'Получилось идеально! Готовила первый раз по этому рецепту, все понятно описано.',
    helpful: 24,
  },
  {
    id: 2,
    author: 'Дмитрий П.',
    avatar: '👨',
    rating: 4,
    date: '5 дней назад',
    text: 'Вкусно, но я добавил больше бекона. Рекомендую!',
    helpful: 18,
  },
];

export function DesktopRecipeDetail({ onNavigate }: DesktopRecipeDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'reviews'>('overview');
  const [servings, setServings] = useState(2);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Floating Actions */}
        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
              isSaved
                ? 'bg-yellow-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
            <Share2 size={20} />
          </button>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
            <Printer size={20} />
          </button>
        </div>

        {/* Recipe Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 mb-3">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="primary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{recipe.name}</h1>
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-lg">
                  {recipe.authorAvatar}
                </div>
                <div>
                  <div className="font-semibold">{recipe.author}</div>
                  <div className="text-sm text-white/80">Шеф-повар</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star size={18} fill="currentColor" className="text-yellow-400" />
                <span className="font-bold">{recipe.rating}</span>
                <span className="text-white/80">({recipe.reviews} отзывов)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={18} />
                <span>{recipe.time} мин</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={18} />
                <span>{recipe.servings} порции</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame size={18} />
                <span>{nutrition.calories} ккал</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm p-2 flex gap-2 border border-gray-200">
              {[
                { id: 'overview', label: 'Обзор', icon: ChefHat },
                { id: 'steps', label: 'Приготовление', icon: Play },
                { id: 'reviews', label: 'Отзывы', icon: MessageCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Description */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Описание</h2>
                  <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
                </div>

                {/* Nutrition */}
                <NutritionWidget nutrition={nutrition} variant="full" />

                {/* Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Советы повара
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Всегда используй свежие яйца комнатной температуры</li>
                    <li>• Не жалей пармезана - он делает блюдо кремовым</li>
                    <li>• Сохрани воду от варки пасты - она нужна для соуса</li>
                    <li>• Подавай немедленно, карбонара не любит ожидания</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Steps Tab */}
            {activeTab === 'steps' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Пошаговая инструкция</h2>
                    <p className="text-gray-600">Следуй инструкциям для идеального результата</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition-colors flex items-center gap-2">
                      <Mic size={18} />
                      Голосовое управление
                    </button>
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 transition-colors flex items-center gap-2">
                      <Timer size={18} />
                      Запустить таймер
                    </button>
                  </div>
                </div>
                {steps.map((step) => (
                  <StepCard key={step.id} step={step} variant="detailed" />
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">Отзывы</h2>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={18}
                              fill={star <= 4.8 ? '#FBBF24' : 'none'}
                              className="text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">{recipe.rating} из 5 ({recipe.reviews} отзывов)</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                      Написать отзыв
                    </button>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-full flex items-center justify-center text-xl">
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-gray-900">{review.author}</div>
                                <div className="text-sm text-gray-500">{review.date}</div>
                              </div>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    size={14}
                                    fill={star <= review.rating ? '#FBBF24' : 'none'}
                                    className="text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.text}</p>
                            <button className="text-sm text-gray-500 hover:text-gray-700">
                              Полезно ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Servings Adjuster */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Количество порций</h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700 transition-colors"
                >
                  -
                </button>
                <div className="text-3xl font-bold text-gray-900">{servings}</div>
                <button
                  onClick={() => setServings(servings + 1)}
                  className="w-12 h-12 bg-[#FF6B35] hover:bg-[#E55428] rounded-full flex items-center justify-center font-bold text-white transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => onNavigate('desktopCooking')}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-3"
              >
                <Play size={20} />
                Начать готовить
              </button>

              <button className="w-full bg-green-100 text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-200 transition-all flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Заказать продукты
              </button>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Ингредиенты ({ingredients.length})</h3>
              <div className="space-y-2">
                {ingredients.map((ingredient) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
