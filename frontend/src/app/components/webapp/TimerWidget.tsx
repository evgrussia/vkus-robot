import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Plus } from 'lucide-react';

interface TimerWidgetProps {
  initialSeconds: number;
  darkMode?: boolean;
  onComplete?: () => void;
}

export function TimerWidget({ initialSeconds, darkMode = false, onComplete }: TimerWidgetProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((initialSeconds - timeLeft) / initialSeconds) * 100;
  const circumference = 2 * Math.PI * 110;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const handleToggle = () => {
    if (isCompleted) {
      setTimeLeft(initialSeconds);
      setIsCompleted(false);
    }
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(initialSeconds);
    setIsCompleted(false);
  };

  const addTime = (seconds: number) => {
    setTimeLeft((prev) => prev + seconds);
  };

  return (
    <div className={`rounded-2xl p-6 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg`}>
      {/* Timer Circle */}
      <div className="relative w-64 h-64 mx-auto mb-6">
        <svg className="transform -rotate-90 w-64 h-64">
          <circle
            cx="128"
            cy="128"
            r="110"
            stroke={darkMode ? '#374151' : '#E5E7EB'}
            strokeWidth="16"
            fill="none"
          />
          <circle
            cx="128"
            cy="128"
            r="110"
            stroke={isCompleted ? '#06D6A0' : 'url(#timerGradient)'}
            strokeWidth="16"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all ${isRunning ? 'animate-pulse' : ''}`}
          />
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {isCompleted ? (
            <>
              <div className="text-6xl mb-2">✅</div>
              <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Готово!
              </div>
            </>
          ) : (
            <>
              <div className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {formatTime(timeLeft)}
              </div>
              {isRunning && (
                <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  осталось
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-4">
        {!isCompleted && (
          <>
            <button
              onClick={handleToggle}
              className="flex-1 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isRunning ? (
                <>
                  <Pause size={18} />
                  Пауза
                </>
              ) : (
                <>
                  <Play size={18} />
                  {timeLeft === initialSeconds ? 'Старт' : 'Продолжить'}
                </>
              )}
            </button>
            <button
              onClick={handleStop}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Square size={18} />
              Стоп
            </button>
          </>
        )}
        {isCompleted && (
          <button
            onClick={() => {
              setTimeLeft(initialSeconds);
              setIsCompleted(false);
            }}
            className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Готово
          </button>
        )}
      </div>

      {/* Add Time */}
      {!isCompleted && (
        <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="text-sm mb-2">Добавить время</div>
          <div className="flex gap-2 justify-center">
            {[60, 300, 600].map((seconds) => (
              <button
                key={seconds}
                onClick={() => addTime(seconds)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                +{seconds / 60} мин
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
