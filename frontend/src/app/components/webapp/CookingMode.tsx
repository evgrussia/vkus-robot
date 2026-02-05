import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Mic, Play, Pause, Plus } from 'lucide-react';
import { TimerWidget } from './TimerWidget';

interface CookingModeProps {
  recipe: any;
  onNavigate: (screen: any, recipe?: any) => void;
}

const mockSteps = [
  {
    number: 1,
    text: 'Нарежь помидоры кружочками толщиной 0.5 см. Старайся делать кружочки одинаковой толщины для красивой подачи.',
    timer: null,
  },
  {
    number: 2,
    text: 'Выложи моцареллу кружочками такой же толщины. Если сыр слишком мягкий, можно его слегка подморозить.',
    timer: null,
  },
  {
    number: 3,
    text: 'Разогрей духовку до 180°C. Смажь форму маслом и выложи нарезанные овощи.',
    timer: 900, // 15 minutes
  },
  {
    number: 4,
    text: 'Чередуй помидоры и моцареллу на тарелке. Создай красивый узор для эффектной подачи.',
    timer: null,
  },
  {
    number: 5,
    text: 'Добавь листья базилика между слоями. Базилик должен быть свежим и ароматным.',
    timer: null,
  },
  {
    number: 6,
    text: 'Полей оливковым маслом, посоли и поперчи. Дай настояться 5 минут перед подачей.',
    timer: 300, // 5 minutes
  },
];

export function CookingMode({ recipe, onNavigate }: CookingModeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const step = mockSteps[currentStep];
  const progress = ((currentStep + 1) / mockSteps.length) * 100;

  const nextStep = () => {
    if (currentStep < mockSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowTimer(false);
    } else {
      onNavigate('completion', recipe);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowTimer(false);
    }
  };

  const handleExit = () => {
    if (showExitConfirm) {
      onNavigate('recipeDetail', recipe);
    } else {
      setShowExitConfirm(true);
      setTimeout(() => setShowExitConfirm(false), 3000);
    }
  };

  if (!recipe) return null;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`px-4 py-4 flex items-center justify-between sticky top-0 z-20 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b`}>
        <button
          onClick={handleExit}
          className={`p-2 rounded-lg transition-colors ${
            showExitConfirm 
              ? 'bg-red-500 text-white' 
              : darkMode 
                ? 'hover:bg-gray-700 text-gray-200' 
                : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          <X size={20} />
        </button>

        <div className="flex-1 text-center px-4">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Шаг {currentStep + 1} из {mockSteps.length}
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg transition-colors ${
            darkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {showExitConfirm && (
        <div className="bg-red-500 text-white px-4 py-2 text-center text-sm font-semibold">
          Нажмите ещё раз для выхода из режима готовки
        </div>
      )}

      {/* Progress Bar */}
      <div className={`h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div
          className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="px-6 py-8">
        {/* Step Content */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
              {step.number}
            </div>
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Шаг {step.number}
            </h2>
          </div>

          <p className={`text-xl leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {step.text}
          </p>
        </div>

        {/* Timer Section */}
        {step.timer && (
          <div className="mb-8">
            {showTimer ? (
              <TimerWidget 
                initialSeconds={step.timer} 
                darkMode={darkMode}
                onComplete={() => {
                  alert('⏰ Таймер завершён!');
                }}
              />
            ) : (
              <button
                onClick={() => setShowTimer(true)}
                className="w-full py-4 bg-gradient-to-r from-[#4ECDC4] to-[#3AB8AF] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Запустить таймер ({Math.floor(step.timer / 60)} мин)
              </button>
            )}
          </div>
        )}

        {/* Voice Control */}
        <div className={`rounded-xl p-4 mb-8 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        } border`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Голосовое управление
            </span>
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                voiceEnabled ? 'bg-[#FF6B35]' : darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  voiceEnabled ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>
          {voiceEnabled && (
            <div className="flex items-center gap-2 mt-3">
              <Mic size={20} className="text-[#FF6B35] animate-pulse" />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Скажи "Следующий шаг" или "Повтори"
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-3">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ChevronLeft size={20} />
          Назад
        </button>
        <button
          onClick={nextStep}
          className="py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {currentStep === mockSteps.length - 1 ? 'Завершить' : 'Готово, далее'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
