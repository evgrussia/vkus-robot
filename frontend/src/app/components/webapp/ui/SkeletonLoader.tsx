import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'recipeCard' | 'recipeList' | 'text' | 'circle' | 'avatar';
  count?: number;
}

export function SkeletonLoader({ variant = 'recipeCard', count = 1 }: SkeletonLoaderProps) {
  if (variant === 'text') {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-200 rounded animate-pulse"
            style={{ width: `${Math.random() * 30 + 70}%` }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  if (variant === 'avatar') {
    return (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3" />
        </div>
      </div>
    );
  }

  if (variant === 'recipeList') {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex"
          >
            {/* Image Skeleton */}
            <div className="w-32 h-32 bg-gray-200 animate-pulse flex-shrink-0" />

            {/* Content Skeleton */}
            <div className="flex-1 p-4 space-y-3">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="flex gap-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
              </div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16" />
                <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Recipe Card Skeleton (default)
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Image Skeleton */}
          <div className="h-40 bg-gray-200 animate-pulse" />

          {/* Content Skeleton */}
          <div className="p-3 space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
            <div className="flex gap-2 pt-1">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
