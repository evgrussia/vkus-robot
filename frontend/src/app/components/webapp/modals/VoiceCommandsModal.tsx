import React, { useState } from 'react';
import { Modal } from './Modal';
import { Mic } from 'lucide-react';

interface VoiceCommandsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commandCategories = [
  {
    category: 'Навигация',
    emoji: '🧭',
    commands: [
      { phrase: 'Следующий шаг', description: 'Переход к следующему шагу рецепта' },
      { phrase: 'Предыдущий шаг', description: 'Вернуться к предыдущему шагу' },
      { phrase: 'Повтори', description: 'Повторить текущий шаг' },
      { phrase: 'Начать сначала', description: 'Вернуться к первому шагу' },
    ],
  },
  {
    category: 'Таймеры',
    emoji: '⏲️',
    commands: [
      { phrase: 'Запусти таймер на [время]', description: 'Создать и запустить таймер' },
      { phrase: 'Пауза таймера', description: 'Приостановить активный таймер' },
      { phrase: 'Продолжить таймер', description: 'Возобновить таймер' },
      { phrase: 'Отменить таймер', description: 'Удалить активный таймер' },
      { phrase: 'Сколько осталось', description: 'Узнать оставшееся время' },
    ],
  },
  {
    category: 'Информация',
    emoji: 'ℹ️',
    commands: [
      { phrase: 'Покажи ингредиенты', description: 'Показать список ингредиентов' },
      { phrase: 'Сколько калорий', description: 'Узнать калорийность блюда' },
      { phrase: 'Время приготовления', description: 'Узнать общее время готовки' },
      { phrase: 'Сколько порций', description: 'Узнать количество порций' },
    ],
  },
  {
    category: 'Управление',
    emoji: '⚙️',
    commands: [
      { phrase: 'Увеличить громкость', description: 'Сделать голос громче' },
      { phrase: 'Уменьшить громкость', description: 'Сделать голос тише' },
      { phrase: 'Читай быстрее', description: 'Ускорить темп чтения' },
      { phrase: 'Читай медленнее', description: 'Замедлить темп чтения' },
      { phrase: 'Закончить готовку', description: 'Завершить режим готовки' },
    ],
  },
];

export function VoiceCommandsModal({ isOpen, onClose }: VoiceCommandsModalProps) {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setRecognizedText('Следующий шаг');
      setTimeout(() => {
        setIsListening(false);
        setRecognizedText('');
      }, 2000);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Голосовые команды" size="lg">
      <div className="p-6">
        {/* Voice Test */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-10">🎤</div>
          <h3 className="text-xl font-bold mb-2 relative z-10">Попробуй голосовое управление</h3>
          <p className="text-purple-100 mb-4 relative z-10">Нажми кнопку и произнеси команду</p>
          
          <button
            onClick={startListening}
            disabled={isListening}
            className={`relative z-10 w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
              isListening
                ? 'bg-white/20 cursor-wait'
                : 'bg-white text-purple-600 hover:scale-105'
            }`}
          >
            <Mic size={24} className={isListening ? 'animate-pulse' : ''} />
            {isListening ? 'Слушаю...' : 'Попробовать'}
          </button>

          {recognizedText && (
            <div className="mt-4 p-3 bg-white/20 rounded-lg relative z-10">
              <div className="text-sm text-purple-100 mb-1">Распознано:</div>
              <div className="font-bold text-lg">"{recognizedText}"</div>
            </div>
          )}
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div className="text-sm text-blue-900">
              <strong>Совет:</strong> Говори чётко и громко. Голосовое управление работает даже когда экран заблокирован (Premium+).
            </div>
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-6">
          {commandCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">{category.emoji}</span>
                {category.category}
              </h3>

              <div className="space-y-2">
                {category.commands.map((command, cmdIndex) => (
                  <div
                    key={cmdIndex}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-lg flex items-center justify-center">
                        <Mic size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          "{command.phrase}"
                        </h4>
                        <p className="text-sm text-gray-600">
                          {command.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌐</div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Поддерживаемые языки</div>
              <div className="text-sm text-gray-600 mt-1">
                Русский, English, Español, Français, Deutsch
              </div>
            </div>
          </div>
        </div>

        {/* Premium Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">👑</div>
              <div>
                <div className="font-bold text-gray-900">Premium+</div>
                <div className="text-sm text-gray-600">Голосовое управление без интернета</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Купить
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
