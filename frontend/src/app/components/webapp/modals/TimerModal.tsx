import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Plus, Play, Pause, X, RotateCcw, Bell } from 'lucide-react';

interface Timer {
  id: number;
  name: string;
  duration: number;
  remaining: number;
  isRunning: boolean;
}

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TimerModal({ isOpen, onClose }: TimerModalProps) {
  const [timers, setTimers] = useState<Timer[]>([
    { id: 1, name: 'Варка яиц', duration: 420, remaining: 180, isRunning: true },
    { id: 2, name: 'Духовка', duration: 1800, remaining: 1200, isRunning: false },
  ]);
  const [showAddTimer, setShowAddTimer] = useState(false);
  const [newTimerName, setNewTimerName] = useState('');
  const [newTimerMinutes, setNewTimerMinutes] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (timer.isRunning && timer.remaining > 0) {
            const newRemaining = timer.remaining - 1;
            if (newRemaining === 0) {
              // Play notification sound
              console.log(`Timer "${timer.name}" finished!`);
            }
            return { ...timer, remaining: newRemaining };
          }
          return timer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = (id: number) => {
    setTimers(timers.map((t) => 
      t.id === id ? { ...t, isRunning: !t.isRunning } : t
    ));
  };

  const resetTimer = (id: number) => {
    setTimers(timers.map((t) => 
      t.id === id ? { ...t, remaining: t.duration, isRunning: false } : t
    ));
  };

  const deleteTimer = (id: number) => {
    setTimers(timers.filter((t) => t.id !== id));
  };

  const addTimer = () => {
    if (newTimerName.trim() && newTimerMinutes > 0) {
      const newTimer: Timer = {
        id: Date.now(),
        name: newTimerName.trim(),
        duration: newTimerMinutes * 60,
        remaining: newTimerMinutes * 60,
        isRunning: false,
      };
      setTimers([...timers, newTimer]);
      setNewTimerName('');
      setNewTimerMinutes(10);
      setShowAddTimer(false);
    }
  };

  const getProgress = (timer: Timer) => {
    return ((timer.duration - timer.remaining) / timer.duration) * 100;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Таймеры" size="lg">
      <div className="p-6">
        {/* Active Timers */}
        {timers.length > 0 ? (
          <div className="space-y-4 mb-6">
            {timers.map((timer) => {
              const progress = getProgress(timer);
              const isFinished = timer.remaining === 0;

              return (
                <div
                  key={timer.id}
                  className={`bg-white border-2 rounded-xl p-4 transition-all ${
                    isFinished
                      ? 'border-green-500 animate-pulse-slow'
                      : timer.isRunning
                      ? 'border-[#FF6B35]'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        isFinished ? 'bg-green-500' : timer.isRunning ? 'bg-[#FF6B35] animate-pulse' : 'bg-gray-300'
                      }`} />
                      <h4 className="font-semibold text-gray-900">{timer.name}</h4>
                    </div>
                    <button
                      onClick={() => deleteTimer(timer.id)}
                      className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X size={16} className="text-red-500" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative w-full h-2 bg-gray-200 rounded-full mb-3 overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all ${
                        isFinished ? 'bg-green-500' : 'bg-[#FF6B35]'
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Time and Controls */}
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${
                      isFinished ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {isFinished ? (
                        <div className="flex items-center gap-2">
                          <Bell size={24} className="animate-bounce" />
                          <span>Готово!</span>
                        </div>
                      ) : (
                        formatTime(timer.remaining)
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => resetTimer(timer.id)}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <RotateCcw size={18} className="text-gray-700" />
                      </button>
                      <button
                        onClick={() => toggleTimer(timer.id)}
                        disabled={isFinished}
                        className={`p-2 rounded-lg transition-colors ${
                          isFinished
                            ? 'bg-gray-100 cursor-not-allowed'
                            : timer.isRunning
                            ? 'bg-red-100 hover:bg-red-200'
                            : 'bg-green-100 hover:bg-green-200'
                        }`}
                      >
                        {timer.isRunning ? (
                          <Pause size={18} className="text-red-600" />
                        ) : (
                          <Play size={18} className="text-green-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 mb-6">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Нет активных таймеров</h3>
            <p className="text-gray-600">Добавь таймер для контроля готовки</p>
          </div>
        )}

        {/* Add Timer Form */}
        {showAddTimer ? (
          <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 border border-[#FF6B35]/20">
            <h4 className="font-semibold text-gray-900 mb-3">Новый таймер</h4>
            <input
              type="text"
              value={newTimerName}
              onChange={(e) => setNewTimerName(e.target.value)}
              placeholder="Название таймера..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            />
            <div className="flex items-center gap-3 mb-4">
              <label className="font-semibold text-gray-900">Время (мин):</label>
              <input
                type="number"
                value={newTimerMinutes}
                onChange={(e) => setNewTimerMinutes(Number(e.target.value))}
                min="1"
                max="180"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addTimer}
                className="flex-1 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Создать таймер
              </button>
              <button
                onClick={() => {
                  setShowAddTimer(false);
                  setNewTimerName('');
                  setNewTimerMinutes(10);
                }}
                className="px-4 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Отмена
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddTimer(true)}
            className="w-full py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl font-semibold text-gray-600 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Добавить таймер
          </button>
        )}
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </Modal>
  );
}
