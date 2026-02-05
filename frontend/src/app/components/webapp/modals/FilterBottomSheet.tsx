import React, { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApply?: (filters: any) => void;
}

const cuisines = ['Итальянская', 'Русская', 'Японская', 'Грузинская', 'Французская', 'Мексиканская', 'Китайская', 'Индийская'];
const mealTypes = ['Завтрак', 'Обед', 'Ужин', 'Перекус', 'Десерт'];
const difficulties = ['Легко', 'Средне', 'Сложно'];
const diets = ['Веган', 'Вегетарианская', 'Кето', 'Палео', 'Безглютеновая', 'Безлактозная'];

export function FilterBottomSheet({ isOpen, onClose, onApply }: FilterBottomSheetProps) {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [timeRange, setTimeRange] = useState(60);
  const [caloriesRange, setCaloriesRange] = useState(1000);
  const [servings, setServings] = useState(2);

  const toggleItem = (items: string[], setItems: (items: string[]) => void, item: string) => {
    setItems(items.includes(item) ? items.filter((i) => i !== item) : [...items, item]);
  };

  const resetFilters = () => {
    setSelectedCuisines([]);
    setSelectedMealTypes([]);
    setSelectedDifficulties([]);
    setSelectedDiets([]);
    setTimeRange(60);
    setCaloriesRange(1000);
    setServings(2);
  };

  const handleApply = () => {
    onApply?.({
      cuisines: selectedCuisines,
      mealTypes: selectedMealTypes,
      difficulties: selectedDifficulties,
      diets: selectedDiets,
      timeRange,
      caloriesRange,
      servings,
    });
    onClose();
  };

  const hasActiveFilters =
    selectedCuisines.length > 0 ||
    selectedMealTypes.length > 0 ||
    selectedDifficulties.length > 0 ||
    selectedDiets.length > 0 ||
    timeRange < 60 ||
    caloriesRange < 1000 ||
    servings !== 2;

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="Фильтры" height="full">
      <div className="p-6 pb-24">
        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="w-full mb-4 py-2 text-red-600 font-semibold text-sm hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={16} />
            Сбросить все фильтры
          </button>
        )}

        {/* Cuisines */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Кухня</h3>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => toggleItem(selectedCuisines, setSelectedCuisines, cuisine)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCuisines.includes(cuisine)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Types */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Тип блюда</h3>
          <div className="flex flex-wrap gap-2">
            {mealTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleItem(selectedMealTypes, setSelectedMealTypes, type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedMealTypes.includes(type)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Сложность</h3>
          <div className="flex gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => toggleItem(selectedDifficulties, setSelectedDifficulties, difficulty)}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedDifficulties.includes(difficulty)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Diets */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Диеты</h3>
          <div className="flex flex-wrap gap-2">
            {diets.map((diet) => (
              <button
                key={diet}
                onClick={() => toggleItem(selectedDiets, setSelectedDiets, diet)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDiets.includes(diet)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {diet}
              </button>
            ))}
          </div>
        </div>

        {/* Time Range */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Время приготовления</h3>
            <span className="text-sm text-gray-600">до {timeRange} мин</span>
          </div>
          <input
            type="range"
            min="5"
            max="180"
            step="5"
            value={timeRange}
            onChange={(e) => setTimeRange(Number(e.target.value))}
            className="w-full accent-[#FF6B35]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5 мин</span>
            <span>180 мин</span>
          </div>
        </div>

        {/* Calories Range */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Калорийность</h3>
            <span className="text-sm text-gray-600">до {caloriesRange} ккал</span>
          </div>
          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            value={caloriesRange}
            onChange={(e) => setCaloriesRange(Number(e.target.value))}
            className="w-full accent-[#FF6B35]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>100 ккал</span>
            <span>2000 ккал</span>
          </div>
        </div>

        {/* Servings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Количество порций</h3>
            <span className="text-sm text-gray-600">{servings} порций</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setServings(Math.max(1, servings - 1))}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors"
            >
              −
            </button>
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-gray-900">{servings}</div>
            </div>
            <button
              onClick={() => setServings(Math.min(12, servings + 1))}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Active Filters Count */}
        {hasActiveFilters && (
          <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 border border-[#FF6B35]/20">
            <div className="flex items-center gap-2 text-sm">
              <SlidersHorizontal size={16} className="text-[#FF6B35]" />
              <span className="font-semibold text-gray-900">
                Активных фильтров:{' '}
                {selectedCuisines.length +
                  selectedMealTypes.length +
                  selectedDifficulties.length +
                  selectedDiets.length +
                  (timeRange < 60 ? 1 : 0) +
                  (caloriesRange < 1000 ? 1 : 0) +
                  (servings !== 2 ? 1 : 0)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleApply}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Применить фильтры
        </button>
      </div>
    </BottomSheet>
  );
}
