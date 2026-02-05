import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { Trophy, Share2 } from 'lucide-react';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievement?: {
    id: string;
    title: string;
    description: string;
    emoji: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    points: number;
  };
}

const rarityColors = {
  common: {
    gradient: 'from-gray-400 to-gray-500',
    glow: 'shadow-gray-500/50',
    text: 'Обычное',
  },
  rare: {
    gradient: 'from-blue-400 to-blue-600',
    glow: 'shadow-blue-500/50',
    text: 'Редкое',
  },
  epic: {
    gradient: 'from-purple-400 to-purple-600',
    glow: 'shadow-purple-500/50',
    text: 'Эпическое',
  },
  legendary: {
    gradient: 'from-yellow-400 to-orange-500',
    glow: 'shadow-yellow-500/50',
    text: 'Легендарное',
  },
};

export function AchievementModal({ 
  isOpen, 
  onClose, 
  achievement = {
    id: 'first-recipe',
    title: 'Первый рецепт!',
    description: 'Ты приготовил свой первый рецепт с Vkus-Robot',
    emoji: '🎉',
    rarity: 'common',
    points: 10,
  }
}: AchievementModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [isOpen]);

  const rarity = rarityColors[achievement.rarity];

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false} size="sm">
      <div className="p-8 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${rarity.gradient} opacity-10`} />

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random()}s`,
                }}
              >
                {['🎉', '✨', '🌟', '⭐', '💫'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        {/* Trophy Badge */}
        <div className="relative z-10 mb-6">
          <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${rarity.gradient} rounded-full shadow-2xl ${rarity.glow} flex items-center justify-center animate-scale-in`}>
            <div className="text-7xl animate-bounce-slow">
              {achievement.emoji}
            </div>
          </div>
          
          {/* Rarity Badge */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-4 py-1 bg-gradient-to-r ${rarity.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
            {rarity.text}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Достижение получено!
          </h2>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {achievement.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {achievement.description}
          </p>

          {/* Points */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full">
            <Trophy size={20} className="text-orange-600" />
            <span className="font-bold text-orange-700">
              +{achievement.points} очков
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="relative z-10 space-y-3">
          <button
            className={`w-full py-3 bg-gradient-to-r ${rarity.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
          >
            <Share2 size={18} />
            Поделиться
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Закрыть
          </button>
        </div>

        {/* Progress Hint */}
        <div className="relative z-10 mt-6 text-sm text-gray-500">
          Открыто достижений: 12 / 50
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100%) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(500%) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </Modal>
  );
}
