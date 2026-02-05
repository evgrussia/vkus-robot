import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'fullscreen';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingState({ variant = 'spinner', message, size = 'md' }: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  if (variant === 'fullscreen') {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full" />
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-[#FF6B35] border-t-transparent rounded-full animate-spin" />
        </div>
        {message && (
          <div className="mt-6 text-gray-700 font-semibold">{message}</div>
        )}
        <div className="mt-2 text-sm text-gray-500">Vkus-Robot 🤖</div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        {message && <div className="text-sm text-gray-600">{message}</div>}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className={`${sizeClasses[size]} bg-[#FF6B35] rounded-full animate-pulse mb-3`} />
        {message && <div className="text-sm text-gray-600">{message}</div>}
      </div>
    );
  }

  // Spinner variant (default)
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Loader2 className={`${sizeClasses[size]} text-[#FF6B35] animate-spin mb-3`} />
      {message && <div className="text-sm text-gray-600">{message}</div>}
    </div>
  );
}
