import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface ProgressWidgetProps {
  current: number;
  total: number;
  variant?: 'bar' | 'circle' | 'steps';
  label?: string;
  showPercentage?: boolean;
  timeRemaining?: number;
}

export function ProgressWidget({
  current,
  total,
  variant = 'bar',
  label,
  showPercentage = true,
  timeRemaining,
}: ProgressWidgetProps) {
  const percentage = Math.round((current / total) * 100);

  if (variant === 'circle') {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900">{percentage}%</div>
            {label && <div className="text-sm text-gray-600 mt-1">{label}</div>}
          </div>
        </div>
        {timeRemaining !== undefined && (
          <div className="mt-4 text-center text-sm text-gray-600 flex items-center justify-center gap-1">
            <Clock size={14} />
            <span>Осталось: {timeRemaining} мин</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'steps') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        {label && (
          <h3 className="font-semibold text-gray-900 mb-4">{label}</h3>
        )}
        <div className="flex items-center justify-between mb-2">
          {Array.from({ length: total }).map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    index < current
                      ? 'bg-green-500 text-white'
                      : index === current
                      ? 'bg-[#FF6B35] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index < current ? (
                    <CheckCircle size={20} />
                  ) : index === current ? (
                    <Circle size={20} />
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1">Шаг {index + 1}</div>
              </div>
              {index < total - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full ${
                    index < current ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="text-center text-sm text-gray-600 mt-4">
          Шаг {current + 1} из {total}
        </div>
      </div>
    );
  }

  // Bar variant (default)
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        {label && <span className="font-semibold text-gray-900">{label}</span>}
        {showPercentage && (
          <span className="text-sm font-semibold text-[#FF6B35]">
            {percentage}%
          </span>
        )}
      </div>

      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
        <span>
          {current} / {total}
        </span>
        {timeRemaining !== undefined && (
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {timeRemaining} мин
          </span>
        )}
      </div>
    </div>
  );
}
