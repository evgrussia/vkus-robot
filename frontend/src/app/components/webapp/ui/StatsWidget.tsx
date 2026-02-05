import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface Stat {
  label: string;
  value: string | number;
  icon?: string;
  trend?: number;
  color?: string;
  subtitle?: string;
}

interface StatsWidgetProps {
  stats: Stat[];
  variant?: 'grid' | 'row' | 'cards';
}

export function StatsWidget({ stats, variant = 'grid' }: StatsWidgetProps) {
  if (variant === 'row') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            {stat.icon && <div className="text-2xl mb-1">{stat.icon}</div>}
            <div className={`text-2xl font-bold ${stat.color || 'text-gray-900'}`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            {stat.trend !== undefined && (
              <div
                className={`text-xs font-semibold mt-1 flex items-center justify-center gap-1 ${
                  stat.trend > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend > 0 ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                {Math.abs(stat.trend)}%
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              {stat.icon && <div className="text-2xl">{stat.icon}</div>}
              {stat.trend !== undefined && (
                <div
                  className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    stat.trend > 0
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {stat.trend > 0 ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  {Math.abs(stat.trend)}%
                </div>
              )}
            </div>
            <div className={`text-2xl font-bold mb-1 ${stat.color || 'text-gray-900'}`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            {stat.subtitle && (
              <div className="text-xs text-gray-500 mt-1">{stat.subtitle}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 shadow-sm text-center border border-gray-200"
        >
          {stat.icon && <div className="text-3xl mb-2">{stat.icon}</div>}
          <div className={`text-xl font-bold mb-1 ${stat.color || 'text-gray-900'}`}>
            {stat.value}
          </div>
          <div className="text-xs text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
