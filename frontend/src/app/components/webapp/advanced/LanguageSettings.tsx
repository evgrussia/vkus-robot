import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface LanguageSettingsProps {
  onNavigate: (screen: any) => void;
}

const languages = [
  { code: 'ru', name: 'Русский', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
];

export function LanguageSettings({ onNavigate }: LanguageSettingsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [changed, setChanged] = useState(false);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    if (code !== 'ru') {
      setChanged(true);
    }
  };

  const handleSave = () => {
    // In real app, would save to backend
    onNavigate('profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => onNavigate('profile')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">Язык интерфейса</h1>
          <p className="text-sm text-gray-500">Выбери язык приложения</p>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-2xl">ℹ️</div>
            <div className="text-sm text-blue-900">
              <strong>Мультиязычность:</strong> Рецепты будут генерироваться на выбранном языке. Голосовое управление также адаптируется.
            </div>
          </div>
        </div>

        {/* Languages List */}
        <div className="space-y-2">
          {languages.map((language) => {
            const isSelected = selectedLanguage === language.code;

            return (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full bg-white rounded-xl p-4 flex items-center gap-4 transition-all ${
                  isSelected
                    ? 'border-2 border-[#FF6B35] shadow-md'
                    : 'border border-gray-200 hover:border-[#FF6B35]/50'
                }`}
              >
                <div className="text-4xl">{language.flag}</div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">{language.nativeName}</h3>
                  <p className="text-sm text-gray-600">{language.name}</p>
                </div>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#FF6B35] border-[#FF6B35]'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected && <Check size={16} className="text-white" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Premium Notice */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <div className="flex gap-3">
            <div className="text-2xl">💎</div>
            <div className="text-sm text-orange-900">
              <strong>Premium функция:</strong> Некоторые языки доступны только в тарифах Premium и Premium+. Базовый набор из 5 языков доступен в Free.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      {changed && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button
            onClick={handleSave}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Сохранить изменения
          </button>
        </div>
      )}
    </div>
  );
}
