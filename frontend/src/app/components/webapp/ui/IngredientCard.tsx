import React from 'react';
import { Check, Plus, Minus } from 'lucide-react';

export interface Ingredient {
  id: number;
  name: string;
  amount: string;
  unit: string;
  emoji?: string;
  available?: boolean;
  category?: string;
}

interface IngredientCardProps {
  ingredient: Ingredient;
  variant?: 'default' | 'checklist' | 'editable';
  checked?: boolean;
  onToggle?: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export function IngredientCard({
  ingredient,
  variant = 'default',
  checked = false,
  onToggle,
  onIncrement,
  onDecrement,
}: IngredientCardProps) {
  if (variant === 'checklist') {
    return (
      <button
        onClick={onToggle}
        className={`w-full bg-white rounded-xl p-4 flex items-center gap-3 transition-all ${
          checked
            ? 'border-2 border-green-500 bg-green-50'
            : 'border border-gray-200 hover:border-gray-300'
        }`}
      >
        {/* Checkbox */}
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            checked
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 bg-white'
          }`}
        >
          {checked && <Check size={14} className="text-white" />}
        </div>

        {/* Emoji */}
        {ingredient.emoji && (
          <div className="text-2xl">{ingredient.emoji}</div>
        )}

        {/* Info */}
        <div className={`flex-1 text-left ${checked ? 'opacity-60' : ''}`}>
          <div className={`font-semibold text-gray-900 ${checked ? 'line-through' : ''}`}>
            {ingredient.name}
          </div>
          <div className="text-sm text-gray-600">
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>

        {/* Status */}
        {ingredient.available !== undefined && !checked && (
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              ingredient.available
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {ingredient.available ? 'Есть' : 'Нет'}
          </div>
        )}
      </button>
    );
  }

  if (variant === 'editable') {
    return (
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          {ingredient.emoji && (
            <div className="text-2xl">{ingredient.emoji}</div>
          )}
          <div className="flex-1">
            <div className="font-semibold text-gray-900">{ingredient.name}</div>
            {ingredient.category && (
              <div className="text-xs text-gray-500">{ingredient.category}</div>
            )}
          </div>
        </div>

        {/* Amount Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDecrement}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
          >
            <Minus size={18} className="text-gray-700" />
          </button>

          <div className="flex-1 text-center">
            <div className="text-lg font-bold text-gray-900">
              {ingredient.amount}
            </div>
            <div className="text-sm text-gray-600">{ingredient.unit}</div>
          </div>

          <button
            onClick={onIncrement}
            className="w-10 h-10 bg-[#FF6B35] hover:bg-[#E55428] rounded-lg flex items-center justify-center transition-colors"
          >
            <Plus size={18} className="text-white" />
          </button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-3">
      {/* Emoji */}
      {ingredient.emoji && (
        <div className="text-3xl">{ingredient.emoji}</div>
      )}

      {/* Info */}
      <div className="flex-1">
        <div className="font-semibold text-gray-900">{ingredient.name}</div>
        <div className="text-sm text-gray-600">
          {ingredient.amount} {ingredient.unit}
        </div>
      </div>

      {/* Status */}
      {ingredient.available !== undefined && (
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            ingredient.available
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {ingredient.available ? '✓' : '✗'}
        </div>
      )}
    </div>
  );
}
