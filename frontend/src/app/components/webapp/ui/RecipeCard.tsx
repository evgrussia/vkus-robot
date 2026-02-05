import React from 'react';
import { Clock, Users, Flame, Heart, Bookmark, TrendingUp } from 'lucide-react';

export interface Recipe {
  id: number;
  name: string;
  image: string;
  time: number;
  servings: number;
  calories: number;
  difficulty: 'easy' | 'medium' | 'hard';
  rating?: number;
  tags?: string[];
  isLiked?: boolean;
  isSaved?: boolean;
  trending?: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
  variant?: 'grid' | 'list' | 'featured';
  onClick?: () => void;
  onLike?: () => void;
  onSave?: () => void;
}

const difficultyColors = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
};

const difficultyText = {
  easy: 'Легко',
  medium: 'Средне',
  hard: 'Сложно',
};

export function RecipeCard({ recipe, variant = 'grid', onClick, onLike, onSave }: RecipeCardProps) {
  if (variant === 'list') {
    return (
      <div
        onClick={onClick}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden flex"
      >
        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          {recipe.trending && (
            <div className="absolute top-2 left-2 bg-[#FF6B35] text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <TrendingUp size={12} />
              Trending
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{recipe.name}</h3>

          {/* Info */}
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{recipe.time} мин</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{recipe.servings}</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame size={14} />
              <span>{recipe.calories}</span>
            </div>
          </div>

          {/* Tags */}
          {recipe.tags && recipe.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {recipe.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-2 pr-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike?.();
            }}
            className={`p-2 rounded-lg transition-colors ${
              recipe.isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Heart size={18} fill={recipe.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave?.();
            }}
            className={`p-2 rounded-lg transition-colors ${
              recipe.isSaved ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Bookmark size={18} fill={recipe.isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div
        onClick={onClick}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-56">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Actions */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike?.();
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                recipe.isLiked
                  ? 'bg-red-500 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart size={20} fill={recipe.isLiked ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSave?.();
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                recipe.isSaved
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Bookmark size={20} fill={recipe.isSaved ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Trending Badge */}
          {recipe.trending && (
            <div className="absolute top-3 left-3 bg-[#FF6B35] text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
              <TrendingUp size={14} />
              Trending
            </div>
          )}

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white mb-2">{recipe.name}</h3>
            <div className="flex items-center gap-3 text-sm text-white/90">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{recipe.time} мин</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{recipe.servings} порций</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame size={16} />
                <span>{recipe.calories} ккал</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="p-4 flex gap-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[recipe.difficulty]}`}>
              {difficultyText[recipe.difficulty]}
            </span>
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-40">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />

        {/* Actions */}
        <div className="absolute top-2 right-2 flex gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike?.();
            }}
            className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
              recipe.isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart size={16} fill={recipe.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave?.();
            }}
            className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
              recipe.isSaved
                ? 'bg-yellow-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Bookmark size={16} fill={recipe.isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Difficulty Badge */}
        <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-md ${difficultyColors[recipe.difficulty]}`}>
          {difficultyText[recipe.difficulty]}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{recipe.name}</h3>

        {/* Info */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{recipe.time}м</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={12} />
            <span>{recipe.calories}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
