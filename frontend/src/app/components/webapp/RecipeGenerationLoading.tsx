import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface RecipeGenerationLoadingProps {
  onComplete: () => void;
}

const phases = [
  {
    range: [0, 30],
    icon: '🔍',
    title: 'Распознаю продукты...',
    subtitle: 'Это займёт около 30 секунд',
  },
  {
    range: [30, 70],
    icon: '🧠',
    title: 'Анализирую сочетания...',
    subtitle: 'Подбираю идеальные рецепты',
  },
  {
    range: [70, 100],
    icon: '🍳',
    title: 'Генерирую рецепты...',
    subtitle: 'Почти готово!',
  },
];

const funFacts = [
  '💡 Знаете ли вы? Помидор — это фрукт!',
  '💡 Мёд никогда не портится — его нашли в египетских пирамидах!',
  '💡 Картофель на 80% состоит из воды',
  '💡 Бананы — это ягоды, а клубника — нет!',
  '💡 Шоколад когда-то использовался как валюта',
];

export function RecipeGenerationLoading({ onComplete }: RecipeGenerationLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds for demo
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Change facts every 2 seconds
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(factTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    const phase = phases.findIndex(
      (p) => progress >= p.range[0] && progress < p.range[1]
    );
    if (phase !== -1) setCurrentPhase(phase);
  }, [progress]);

  const currentPhaseData = phases[currentPhase];
  const circumference = 2 * Math.PI * 110;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        {/* Close Button */}
        <button className="ml-auto mb-4 p-2 hover:bg-gray-100 rounded-lg transition-colors block">
          <X size={20} className="text-gray-500" />
        </button>

        {/* Progress Circle */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <svg className="transform -rotate-90 w-64 h-64">
            <circle
              cx="128"
              cy="128"
              r="110"
              stroke="#E5E7EB"
              strokeWidth="16"
              fill="none"
            />
            <circle
              cx="128"
              cy="128"
              r="110"
              stroke="url(#gradient)"
              strokeWidth="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl mb-3 animate-bounce">{currentPhaseData.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{Math.round(progress)}%</div>
            <div className="text-sm text-gray-500 mt-1">
              ~{Math.round((100 - progress) / 20)} сек
            </div>
          </div>
        </div>

        {/* Phase Title */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {currentPhaseData.title}
          </h3>
          <p className="text-gray-600">{currentPhaseData.subtitle}</p>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-700 transition-all duration-500">
            {funFacts[factIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
