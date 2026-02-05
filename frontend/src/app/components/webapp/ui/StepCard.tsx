import React from 'react';
import { Clock, CheckCircle, Circle, Info } from 'lucide-react';

export interface Step {
  id: number;
  number: number;
  title: string;
  description: string;
  time?: number;
  tip?: string;
  image?: string;
  completed?: boolean;
}

interface StepCardProps {
  step: Step;
  variant?: 'default' | 'compact' | 'detailed';
  isActive?: boolean;
  onClick?: () => void;
}

export function StepCard({ step, variant = 'default', isActive = false, onClick }: StepCardProps) {
  if (variant === 'compact') {
    return (
      <button
        onClick={onClick}
        className={`w-full bg-white rounded-xl p-4 flex items-start gap-3 transition-all text-left ${
          isActive
            ? 'border-2 border-[#FF6B35] shadow-md'
            : step.completed
            ? 'border border-green-500 bg-green-50'
            : 'border border-gray-200 hover:border-gray-300'
        }`}
      >
        {/* Number Circle */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
            step.completed
              ? 'bg-green-500 text-white'
              : isActive
              ? 'bg-[#FF6B35] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {step.completed ? <CheckCircle size={20} /> : step.number}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-bold text-gray-900 mb-1 ${step.completed ? 'line-through opacity-60' : ''}`}>
            {step.title}
          </h4>
          <p className={`text-sm text-gray-600 line-clamp-2 ${step.completed ? 'opacity-60' : ''}`}>
            {step.description}
          </p>
          {step.time && (
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
              <Clock size={14} />
              <span>{step.time} мин</span>
            </div>
          )}
        </div>
      </button>
    );
  }

  if (variant === 'detailed') {
    return (
      <div
        className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all ${
          isActive ? 'ring-2 ring-[#FF6B35]' : ''
        }`}
      >
        {/* Image */}
        {step.image && (
          <div className="relative h-48">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            {step.completed && (
              <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-white" />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                step.completed
                  ? 'bg-green-500 text-white'
                  : isActive
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {step.completed ? <CheckCircle size={24} /> : step.number}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              {step.time && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{step.time} минут</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>

          {/* Tip */}
          {step.tip && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
              <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-blue-900 mb-1">Совет</div>
                <div className="text-sm text-blue-800">{step.tip}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl p-5 border-2 transition-all cursor-pointer ${
        isActive
          ? 'border-[#FF6B35] shadow-md'
          : step.completed
          ? 'border-green-500 bg-green-50/50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Number */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
            step.completed
              ? 'bg-green-500 text-white'
              : isActive
              ? 'bg-[#FF6B35] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {step.completed ? <CheckCircle size={20} /> : step.number}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className={`font-bold text-gray-900 ${step.completed ? 'line-through opacity-60' : ''}`}>
              {step.title}
            </h4>
            {step.time && (
              <div className="flex items-center gap-1 text-sm text-gray-500 flex-shrink-0">
                <Clock size={14} />
                <span>{step.time}м</span>
              </div>
            )}
          </div>
          <p className={`text-sm text-gray-600 ${step.completed ? 'opacity-60' : ''}`}>
            {step.description}
          </p>

          {/* Tip */}
          {step.tip && !step.completed && (
            <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
              <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">{step.tip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
