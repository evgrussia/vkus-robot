import React from 'react';
import { Modal } from './Modal';
import { AlertTriangle, Trash2, LogOut, Info } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  icon?: 'trash' | 'logout' | 'warning' | 'info';
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
  type = 'danger',
  icon = 'warning',
}: ConfirmationModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const iconComponents = {
    trash: Trash2,
    logout: LogOut,
    warning: AlertTriangle,
    info: Info,
  };

  const IconComponent = iconComponents[icon];

  const typeColors = {
    danger: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      button: 'bg-red-600 hover:bg-red-700',
    },
    warning: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      button: 'bg-yellow-600 hover:bg-yellow-700',
    },
    info: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
  };

  const colors = typeColors[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false} size="sm">
      <div className="p-6">
        {/* Icon */}
        <div className={`w-16 h-16 mx-auto mb-4 ${colors.bg} rounded-full flex items-center justify-center`}>
          <IconComponent size={32} className={colors.text} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 text-center leading-relaxed">
          {message}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-1 py-3 text-white rounded-xl font-semibold transition-colors ${colors.button}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
