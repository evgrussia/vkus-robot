import React from 'react';
import { RefreshCw, AlertCircle, Wifi, ServerCrash } from 'lucide-react';

interface ErrorStateProps {
  type?: 'network' | 'server' | 'notfound' | 'generic';
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const errorTypes = {
  network: {
    icon: Wifi,
    emoji: '📡',
    title: 'Нет подключения',
    description: 'Проверь интернет-соединение и попробуй снова',
  },
  server: {
    icon: ServerCrash,
    emoji: '🔧',
    title: 'Ошибка сервера',
    description: 'Что-то пошло не так. Мы уже работаем над исправлением',
  },
  notfound: {
    icon: AlertCircle,
    emoji: '🔍',
    title: 'Ничего не найдено',
    description: 'Попробуй изменить параметры поиска',
  },
  generic: {
    icon: AlertCircle,
    emoji: '😕',
    title: 'Что-то пошло не так',
    description: 'Произошла ошибка. Попробуй ещё раз',
  },
};

export function ErrorState({
  type = 'generic',
  title,
  description,
  onRetry,
  retryLabel = 'Попробовать снова',
}: ErrorStateProps) {
  const errorType = errorTypes[type];
  const Icon = errorType.icon;

  return (
    <div className="text-center py-16 px-4">
      {/* Icon */}
      <div className="relative inline-block mb-6">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-5xl">
          {errorType.emoji}
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
          <Icon size={20} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title || errorType.title}
      </h3>
      <p className="text-gray-600 max-w-sm mx-auto mb-6">
        {description || errorType.description}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          <RefreshCw size={18} />
          {retryLabel}
        </button>
      )}

      {/* Additional Help */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl max-w-md mx-auto">
        <div className="text-sm text-blue-900">
          <strong>Нужна помощь?</strong> Напиши в поддержку, и мы решим проблему
        </div>
        <button className="mt-2 text-sm text-blue-700 font-semibold hover:underline">
          Связаться с поддержкой
        </button>
      </div>
    </div>
  );
}
