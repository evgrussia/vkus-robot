import React from 'react';
import { Menu, Camera, Mic, Edit3, Clock, Flame, User as UserIcon } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: any) => void;
}

const mockRecommendations = [
  {
    id: 1,
    name: 'Борщ',
    image: 'https://images.unsplash.com/photo-1625937712842-061738bb1e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JzY2glMjBzb3VwJTIwcnVzc2lhbnxlbnwxfHx8fDE3NzAzMTA1OTV8MA&ixlib=rb-4.1.0&q=80&w=400',
    time: '45 мин',
    calories: '350 ккал',
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    time: '30 мин',
    calories: '520 ккал',
  },
  {
    id: 3,
    name: 'Греческий салат',
    image: 'https://images.unsplash.com/photo-1625944525991-c196b2813492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2h8ZW58MXx8fHwxNzcwMjEzMDQyfDA&ixlib=rb-4.1.0&q=80&w=400',
    time: '15 мин',
    calories: '280 ккал',
  },
  {
    id: 4,
    name: 'Куриный плов',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
    time: '60 мин',
    calories: '450 ккал',
  },
];

const mockRecent = [
  {
    id: 1,
    name: 'Омлет с овощами',
    image: 'https://images.unsplash.com/photo-1637036124319-4fa1881c9ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVsZXR0ZSUyMHZlZ2V0YWJsZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMzEwNTkzfDA&ixlib=rb-4.1.0&q=80&w=400',
    time: '10 мин',
  },
  {
    id: 2,
    name: 'Салат Цезарь',
    image: 'https://images.unsplash.com/photo-1746211224437-8340316b288d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGRpc2h8ZW58MXx8fHwxNzcwMjkzNTYyfDA&ixlib=rb-4.1.0&q=80&w=400',
    time: '15 мин',
  },
  {
    id: 3,
    name: 'Тосты с авокадо',
    image: 'https://images.unsplash.com/photo-1616902666559-af398792d890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMjQwNjQwfDA&ixlib=rb-4.1.0&q=80&w=400',
    time: '5 мин',
  },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu size={24} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Главная</h1>
        <div className="flex gap-2">
          <button 
            onClick={() => onNavigate('search')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="text-xl">🔍</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center"
          >
            <UserIcon size={20} className="text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Greeting */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Привет, Анна! 👋
        </h2>

        {/* Quick Actions */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => onNavigate('loading')}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Camera size={20} />
            Сгенерировать рецепт
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('loading')}
              className="py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#FF6B35] transition-all flex items-center justify-center gap-2"
            >
              <Mic size={18} />
              Голосовой ввод
            </button>
            <button
              onClick={() => onNavigate('ingredients')}
              className="py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#FF6B35] transition-all flex items-center justify-center gap-2"
            >
              <Edit3 size={18} />
              Ввести текстом
            </button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Рекомендации для вас</h3>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {mockRecommendations.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => {
                  onNavigate('recipeDetail', recipe);
                }}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-40">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-semibold text-lg">{recipe.name}</h4>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Flame size={14} />
                    <span>{recipe.calories}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Recipes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Недавние</h3>
            <button
              onClick={() => onNavigate('recipes')}
              className="text-[#FF6B35] font-semibold text-sm"
            >
              Показать все
            </button>
          </div>

          <div className="space-y-3">
            {mockRecent.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => {
                  onNavigate('recipeDetail', recipe);
                }}
                className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{recipe.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <Clock size={12} />
                    <span>{recipe.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center z-20">
        <button className="flex flex-col items-center gap-1 text-[#FF6B35]">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">🏠</span>
          </div>
          <span className="text-xs font-semibold">Главная</span>
        </button>
        <button
          onClick={() => onNavigate('recipes')}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">📚</span>
          </div>
          <span className="text-xs">Рецепты</span>
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