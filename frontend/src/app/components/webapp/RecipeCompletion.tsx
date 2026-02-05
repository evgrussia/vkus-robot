import React, { useState } from 'react';
import { Star, Camera, Heart, Share2, Home } from 'lucide-react';

interface RecipeCompletionProps {
  recipe: any;
  onNavigate: (screen: any) => void;
}

export function RecipeCompletion({ recipe, onNavigate }: RecipeCompletionProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);

  const ratingLabels = ['Плохо', 'Так себе', 'Нормально', 'Хорошо', 'Отлично!'];

  const stats = {
    time: 18,
    timers: 2,
    voiceCommands: 5,
  };

  const handleSubmit = () => {
    if (rating > 0) {
      alert('Спасибо за оценку!');
      onNavigate('home');
    }
  };

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD166]/10 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl my-8">
        {/* Confetti Animation */}
        <div className="text-center mb-6">
          <div className="text-7xl mb-4 animate-bounce">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Поздравляем!</h2>
          <p className="text-lg text-gray-600">
            Рецепт «{recipe.name}» завершён!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 text-center border border-[#FF6B35]/20">
            <div className="text-2xl font-bold text-[#FF6B35] mb-1">{stats.time} мин</div>
            <div className="text-xs text-gray-600">Время готовки</div>
          </div>
          <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#3AB8AF]/10 rounded-xl p-4 text-center border border-[#4ECDC4]/20">
            <div className="text-2xl font-bold text-[#4ECDC4] mb-1">{stats.timers}</div>
            <div className="text-xs text-gray-600">Таймера</div>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">{stats.voiceCommands}</div>
            <div className="text-xs text-gray-600">Команд голосом</div>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
            Как получилось?
          </h3>
          
          <div className="flex justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={48}
                  className={`${
                    value <= (hoverRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>

          {(rating > 0 || hoverRating > 0) && (
            <div className="text-center text-lg font-semibold text-[#FF6B35] mb-4">
              {ratingLabels[(hoverRating || rating) - 1]}
            </div>
          )}

          {/* Comment */}
          <button
            onClick={() => setShowComment(!showComment)}
            className="w-full py-2 text-[#FF6B35] font-semibold text-sm hover:underline"
          >
            {showComment ? 'Скрыть' : '+ Добавить комментарий'}
          </button>

          {showComment && (
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Что понравилось или что улучшить?"
              className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
              rows={3}
              maxLength={500}
            />
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6">
          <button className="w-full py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <Camera size={18} />
            Добавить фото результата
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Heart size={18} />
              В избранное
            </button>
            <button className="py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Share2 size={18} />
              Поделиться
            </button>
          </div>
        </div>

        {/* Achievement */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4 mb-6 text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="font-bold text-gray-900 mb-1">Новичок</div>
          <div className="text-sm text-gray-600">Первый рецепт завершён!</div>
          <div className="text-[#FF6B35] font-bold mt-2">+10 очков кулинара</div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Home size={20} />
          {rating > 0 ? 'Сохранить оценку' : 'Готово'}
        </button>

        {rating === 0 && (
          <button
            onClick={() => onNavigate('home')}
            className="w-full mt-3 py-2 text-gray-600 font-semibold text-sm hover:underline"
          >
            Пропустить
          </button>
        )}
      </div>

      {/* Floating Confetti */}
      <style>{`
        @keyframes float-confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
