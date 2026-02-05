import React, { useState } from 'react';
import { Modal } from './Modal';
import { Share2, Copy, Check } from 'lucide-react';

interface RecipeShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: any;
}

const shareChannels = [
  { id: 'telegram', name: 'Telegram', icon: '✈️', color: 'bg-blue-500' },
  { id: 'whatsapp', name: 'WhatsApp', icon: '💬', color: 'bg-green-500' },
  { id: 'vk', name: 'ВКонтакте', icon: '🔵', color: 'bg-blue-600' },
  { id: 'instagram', name: 'Instagram', icon: '📷', color: 'bg-gradient-to-tr from-purple-600 to-pink-500' },
  { id: 'twitter', name: 'Twitter', icon: '🐦', color: 'bg-blue-400' },
  { id: 'facebook', name: 'Facebook', icon: '📘', color: 'bg-blue-700' },
];

export function RecipeShareModal({ isOpen, onClose, recipe }: RecipeShareModalProps) {
  const [copied, setCopied] = useState(false);

  const shareLink = `https://vkus-robot.ru/recipe/${recipe?.id || '123'}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (channel: string) => {
    // In real app, would trigger actual share
    console.log(`Sharing to ${channel}`);
    setTimeout(onClose, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Поделиться рецептом">
      <div className="p-6">
        {/* Recipe Preview */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <div className="flex items-center gap-3">
            {recipe?.image && (
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div>
              <h4 className="font-bold text-gray-900">{recipe?.name || 'Рецепт'}</h4>
              <p className="text-sm text-gray-600">Vkus-Robot 🤖</p>
            </div>
          </div>
        </div>

        {/* Share Channels */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Поделиться через:</h4>
          <div className="grid grid-cols-3 gap-3">
            {shareChannels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => handleShare(channel.id)}
                className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl hover:border-[#FF6B35] transition-all"
              >
                <div className={`w-12 h-12 ${channel.color} rounded-full flex items-center justify-center text-2xl text-white shadow-md`}>
                  {channel.icon}
                </div>
                <span className="text-xs font-medium text-gray-700">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Copy Link */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Или скопируй ссылку:</h4>
          <div className="flex gap-2">
            <div className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-700 truncate">
              {shareLink}
            </div>
            <button
              onClick={handleCopyLink}
              className={`px-4 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-green-100 text-green-600'
                  : 'bg-[#FF6B35] text-white hover:bg-[#E55428]'
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  <span className="hidden sm:inline">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span className="hidden sm:inline">Копировать</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* QR Code Option */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📱</div>
              <div>
                <div className="font-semibold text-gray-900">QR-код</div>
                <div className="text-sm text-gray-600">Сгенерировать QR-код</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Создать
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
