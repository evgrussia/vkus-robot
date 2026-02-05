import React from 'react';

interface EmptyStateProps {
  emoji?: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'default' | 'compact';
}

export function EmptyState({
  emoji = '📭',
  title,
  description,
  action,
  variant = 'default',
}: EmptyStateProps) {
  if (variant === 'compact') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-2">{emoji}</div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#E55428] transition-colors"
          >
            {action.label}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-4">
      <div className="text-7xl mb-4 animate-bounce-slow">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-sm mx-auto mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          {action.label}
        </button>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
