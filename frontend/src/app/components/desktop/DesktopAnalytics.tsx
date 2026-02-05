import React from 'react';
import { TrendingUp, TrendingDown, Award, Flame, Clock, Heart, Target, Calendar } from 'lucide-react';
import { StatsWidget } from '../webapp/ui/StatsWidget';
import { Badge } from '../webapp/ui/Badge';

interface DesktopAnalyticsProps {
  onNavigate: (screen: string) => void;
}

const stats = [
  { label: 'Всего рецептов', value: '42', icon: '📚', trend: 12, color: 'text-[#FF6B35]', subtitle: '+5 за неделю' },
  { label: 'Приготовлено', value: '28', icon: '👨‍🍳', trend: 8, color: 'text-green-600', subtitle: '+3 за неделю' },
  { label: 'Streak дней', value: '7', icon: '🔥', trend: 0, color: 'text-purple-600', subtitle: 'Текущая серия' },
  { label: 'Сэкономлено', value: '12,400₽', icon: '💰', trend: 15, color: 'text-blue-600', subtitle: '+2,100₽ за месяц' },
];

const achievements = [
  { id: 1, name: 'Первые шаги', description: 'Приготовь первый рецепт', icon: '🎯', unlocked: true, date: '15 янв' },
  { id: 2, name: 'Неделя готовки', description: '7 дней подряд', icon: '🔥', unlocked: true, date: '5 фев' },
  { id: 3, name: 'Кулинарный энтузиаст', description: '25 рецептов', icon: '👨‍🍳', unlocked: true, date: '3 фев' },
  { id: 4, name: 'Итальянский мастер', description: '10 итальянских блюд', icon: '🍝', unlocked: true, date: '1 фев' },
  { id: 5, name: 'Здоровое питание', description: '15 ПП рецептов', icon: '🥗', unlocked: false },
  { id: 6, name: 'Месяц готовки', description: '30 дней подряд', icon: '📅', unlocked: false },
];

const weeklyActivity = [
  { day: 'Пн', recipes: 2, time: 45 },
  { day: 'Вт', recipes: 1, time: 30 },
  { day: 'Ср', recipes: 3, time: 90 },
  { day: 'Чт', recipes: 0, time: 0 },
  { day: 'Пт', recipes: 2, time: 60 },
  { day: 'Сб', recipes: 4, time: 120 },
  { day: 'Вс', recipes: 3, time: 75 },
];

const topRecipes = [
  { name: 'Паста Карбонара', cooks: 8, emoji: '🍝', trend: 'up' },
  { name: 'Греческий салат', cooks: 6, emoji: '🥗', trend: 'up' },
  { name: 'Панкейки', cooks: 5, emoji: '🥞', trend: 'same' },
  { name: 'Борщ', cooks: 4, emoji: '🍲', trend: 'down' },
  { name: 'Тирамису', cooks: 3, emoji: '🍰', trend: 'up' },
];

const nutritionSummary = {
  avgCalories: 1850,
  targetCalories: 2000,
  avgProtein: 85,
  avgFats: 62,
  avgCarbs: 230,
};

export function DesktopAnalytics({ onNavigate }: DesktopAnalyticsProps) {
  const maxActivity = Math.max(...weeklyActivity.map((d) => d.recipes));

  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FFD166] text-white px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Аналитика и статистика 📊</h1>
          <p className="text-xl text-white/90">
            Отслеживай свой кулинарный прогресс
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Main Stats */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Общая статистика</h2>
          <StatsWidget stats={stats} variant="cards" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Weekly Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Активность за неделю</h2>
                  <p className="text-gray-600">Количество приготовленных рецептов</p>
                </div>
                <select className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700">
                  <option>Эта неделя</option>
                  <option>Прошлая неделя</option>
                  <option>Этот месяц</option>
                </select>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-3 h-64">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-3">
                    <div className="flex-1 w-full flex flex-col justify-end">
                      <div className="relative group">
                        <div
                          className="w-full bg-gradient-to-t from-[#FF6B35] to-[#FFD166] rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                          style={{
                            height: `${(day.recipes / maxActivity) * 200}px`,
                            minHeight: day.recipes > 0 ? '20px' : '0px',
                          }}
                        />
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                            <div className="font-bold">{day.recipes} рецептов</div>
                            <div className="text-xs text-gray-300">{day.time} минут</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-600">{day.day}</div>
                    <div className="text-xs text-gray-500">{day.recipes}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">15</div>
                  <div className="text-sm text-gray-600">Рецептов за неделю</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">420</div>
                  <div className="text-sm text-gray-600">Минут готовки</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2.1</div>
                  <div className="text-sm text-gray-600">Рецепта в день</div>
                </div>
              </div>
            </div>

            {/* Top Recipes */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Топ рецептов</h2>
              <div className="space-y-3">
                {topRecipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-full flex items-center justify-center font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="text-3xl">{recipe.emoji}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{recipe.name}</div>
                      <div className="text-sm text-gray-500">
                        Приготовлено {recipe.cooks} раз
                      </div>
                    </div>
                    {recipe.trend === 'up' && (
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp size={16} />
                        <span className="text-sm font-semibold">+2</span>
                      </div>
                    )}
                    {recipe.trend === 'down' && (
                      <div className="flex items-center gap-1 text-red-600">
                        <TrendingDown size={16} />
                        <span className="text-sm font-semibold">-1</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Summary */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Средняя пищевая ценность</h2>
              
              {/* Calories Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Калории</span>
                  <span className="text-sm text-gray-600">
                    {nutritionSummary.avgCalories} / {nutritionSummary.targetCalories} ккал
                  </span>
                </div>
                <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166]"
                    style={{
                      width: `${(nutritionSummary.avgCalories / nutritionSummary.targetCalories) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Macros */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {nutritionSummary.avgProtein}г
                  </div>
                  <div className="text-sm text-gray-600">Белки</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {nutritionSummary.avgFats}г
                  </div>
                  <div className="text-sm text-gray-600">Жиры</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {nutritionSummary.avgCarbs}г
                  </div>
                  <div className="text-sm text-gray-600">Углеводы</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Award size={20} className="text-yellow-600" />
                <h3 className="font-bold text-gray-900">Достижения</h3>
              </div>
              <div className="space-y-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {achievement.description}
                        </div>
                        {achievement.unlocked && achievement.date && (
                          <div className="text-xs text-gray-500 mt-1">
                            {achievement.date}
                          </div>
                        )}
                      </div>
                      {achievement.unlocked && (
                        <div className="text-green-600">
                          <Badge variant="success" size="sm">
                            ✓
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <div className="text-sm text-gray-600">
                  Разблокировано <span className="font-bold text-gray-900">4 из 6</span>
                </div>
                <div className="mt-2 relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                    style={{ width: '67%' }}
                  />
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Target size={20} className="text-blue-600" />
                <h3 className="font-bold text-gray-900">Цели</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      30 дней streak
                    </span>
                    <span className="text-sm text-gray-600">7/30</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: '23%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      50 рецептов
                    </span>
                    <span className="text-sm text-gray-600">42/50</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166]"
                      style={{ width: '84%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      100 часов готовки
                    </span>
                    <span className="text-sm text-gray-600">67/100</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ width: '67%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Инсайты
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Твой любимый день готовки - суббота</li>
                <li>• Средняя сложность рецептов - средняя</li>
                <li>• Ты предпочитаешь итальянскую кухню</li>
                <li>• Среднее время готовки - 35 минут</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
