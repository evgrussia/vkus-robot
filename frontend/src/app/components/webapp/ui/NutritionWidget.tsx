import React from 'react';
import { Flame, Droplet, Beef, Wheat } from 'lucide-react';

export interface Nutrition {
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
  dailyCaloriesPercent?: number;
}

interface NutritionWidgetProps {
  nutrition: Nutrition;
  variant?: 'full' | 'compact' | 'circular';
}

export function NutritionWidget({ nutrition, variant = 'full' }: NutritionWidgetProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Flame size={18} className="text-[#FF6B35]" />
          КБЖУ
        </h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-[#FF6B35]">{nutrition.calories}</div>
            <div className="text-xs text-gray-600">ккал</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-600">{nutrition.protein}г</div>
            <div className="text-xs text-gray-600">белки</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-yellow-600">{nutrition.fats}г</div>
            <div className="text-xs text-gray-600">жиры</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{nutrition.carbs}г</div>
            <div className="text-xs text-gray-600">углев</div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'circular') {
    const total = nutrition.protein + nutrition.fats + nutrition.carbs;
    const proteinPercent = (nutrition.protein / total) * 100;
    const fatsPercent = (nutrition.fats / total) * 100;
    const carbsPercent = (nutrition.carbs / total) * 100;

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4 text-center">
          Пищевая ценность
        </h3>

        {/* Circular Progress */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full -rotate-90">
            {/* Protein */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#fee2e2"
              strokeWidth="12"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dc2626"
              strokeWidth="12"
              strokeDasharray={`${proteinPercent * 4.4} ${440 - proteinPercent * 4.4}`}
              strokeLinecap="round"
            />
            {/* Fats */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#fef3c7"
              strokeWidth="12"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#d97706"
              strokeWidth="12"
              strokeDasharray={`${fatsPercent * 4.4} ${440 - fatsPercent * 4.4}`}
              strokeDashoffset={`-${proteinPercent * 4.4}`}
              strokeLinecap="round"
            />
            {/* Carbs */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="12"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#2563eb"
              strokeWidth="12"
              strokeDasharray={`${carbsPercent * 4.4} ${440 - carbsPercent * 4.4}`}
              strokeDashoffset={`-${(proteinPercent + fatsPercent) * 4.4}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900">{nutrition.calories}</div>
            <div className="text-sm text-gray-600">ккал</div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600" />
              <span className="text-sm text-gray-700">Белки</span>
            </div>
            <span className="font-semibold text-gray-900">{nutrition.protein}г</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-600" />
              <span className="text-sm text-gray-700">Жиры</span>
            </div>
            <span className="font-semibold text-gray-900">{nutrition.fats}г</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="text-sm text-gray-700">Углеводы</span>
            </div>
            <span className="font-semibold text-gray-900">{nutrition.carbs}г</span>
          </div>
        </div>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Пищевая ценность</h3>

      {/* Calories */}
      <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-4 border border-[#FF6B35]/20">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Flame size={20} className="text-[#FF6B35]" />
            <span className="font-semibold text-gray-900">Калории</span>
          </div>
          <div className="text-2xl font-bold text-[#FF6B35]">
            {nutrition.calories} ккал
          </div>
        </div>
        {nutrition.dailyCaloriesPercent !== undefined && (
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166]"
              style={{ width: `${Math.min(nutrition.dailyCaloriesPercent, 100)}%` }}
            />
          </div>
        )}
        {nutrition.dailyCaloriesPercent !== undefined && (
          <div className="text-xs text-gray-600 mt-1">
            {nutrition.dailyCaloriesPercent}% от дневной нормы (2000 ккал)
          </div>
        )}
      </div>

      {/* Macros */}
      <div className="space-y-3">
        {/* Protein */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Beef size={18} className="text-red-600" />
            <span className="text-sm text-gray-700">Белки</span>
          </div>
          <span className="font-semibold text-gray-900">{nutrition.protein}г</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-red-600"
            style={{ width: `${Math.min((nutrition.protein / 150) * 100, 100)}%` }}
          />
        </div>

        {/* Fats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet size={18} className="text-yellow-600" />
            <span className="text-sm text-gray-700">Жиры</span>
          </div>
          <span className="font-semibold text-gray-900">{nutrition.fats}г</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-yellow-600"
            style={{ width: `${Math.min((nutrition.fats / 70) * 100, 100)}%` }}
          />
        </div>

        {/* Carbs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wheat size={18} className="text-blue-600" />
            <span className="text-sm text-gray-700">Углеводы</span>
          </div>
          <span className="font-semibold text-gray-900">{nutrition.carbs}г</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600"
            style={{ width: `${Math.min((nutrition.carbs / 250) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
