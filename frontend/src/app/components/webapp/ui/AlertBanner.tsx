import React from 'react';
import { X, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface AlertBannerProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const alertStyles = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-900',
    icon: Info,
    iconColor: 'text-blue-600',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-900',
    icon: CheckCircle,
    iconColor: 'text-green-600',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-900',
    icon: AlertTriangle,
    iconColor: 'text-yellow-600',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-900',
    icon: XCircle,
    iconColor: 'text-red-600',
  },
};

export function AlertBanner({
  type,
  title,
  message,
  dismissible = false,
  onDismiss,
  action,
}: AlertBannerProps) {
  const style = alertStyles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4`}>
      <div className="flex gap-3">
        {/* Icon */}
        <Icon size={20} className={`${style.iconColor} flex-shrink-0 mt-0.5`} />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold ${style.text} mb-1`}>{title}</h4>
          )}
          <p className={`text-sm ${style.text}`}>{message}</p>

          {/* Action Button */}
          {action && (
            <button
              onClick={action.onClick}
              className={`mt-3 px-4 py-2 ${style.bg} ${style.border} border ${style.text} rounded-lg font-semibold text-sm hover:opacity-80 transition-opacity`}
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            onClick={onDismiss}
            className={`${style.iconColor} hover:opacity-70 transition-opacity flex-shrink-0`}
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
