import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Mail, Phone, Send, Check } from 'lucide-react';

interface SupportScreenProps {
  onNavigate: (screen: any) => void;
}

const supportChannels = [
  {
    icon: '💬',
    title: 'Telegram чат',
    description: 'Ответим в течение 5 минут',
    action: 'Открыть чат',
    type: 'telegram',
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'support@vkus-robot.ru',
    action: 'Написать письмо',
    type: 'email',
  },
  {
    icon: '📱',
    title: 'Звонок',
    description: '+7 (800) 555-35-35',
    action: 'Позвонить',
    type: 'phone',
  },
];

const issueTypes = [
  { id: 'bug', label: 'Ошибка в приложении', emoji: '🐛' },
  { id: 'payment', label: 'Вопрос по оплате', emoji: '💳' },
  { id: 'recipe', label: 'Проблема с рецептом', emoji: '🍳' },
  { id: 'recognition', label: 'Распознавание продуктов', emoji: '📸' },
  { id: 'other', label: 'Другое', emoji: '❓' },
];

export function SupportScreen({ onNavigate }: SupportScreenProps) {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('anna@example.com');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedIssue && message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMessage('');
        setSelectedIssue('');
      }, 3000);
    }
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
          <h1 className="text-lg font-bold text-gray-900">Поддержка</h1>
          <p className="text-sm text-gray-500">Мы всегда на связи</p>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Сообщение отправлено!</h3>
              <p className="text-sm text-green-700">Мы ответим в течение 24 часов</p>
            </div>
          </div>
        )}

        {/* Quick Channels */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Выбери канал связи</h2>
          <div className="space-y-3">
            {supportChannels.map((channel, index) => (
              <button
                key={index}
                className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl">{channel.icon}</div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">{channel.title}</h3>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
                <span className="text-[#FF6B35] font-semibold text-sm">
                  {channel.action} →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageCircle size={20} className="text-[#FF6B35]" />
            Написать в поддержку
          </h2>

          {/* Issue Type */}
          <div className="mb-4">
            <label className="block font-semibold text-gray-900 mb-2">
              Тип обращения
            </label>
            <div className="grid grid-cols-2 gap-2">
              {issueTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedIssue(type.id)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedIssue === type.id
                      ? 'bg-[#FF6B35] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{type.emoji}</span>
                  <span className="text-left">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold text-gray-900 mb-2">
              Email для ответа
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block font-semibold text-gray-900 mb-2">
              Опиши проблему
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
              placeholder="Чем мы можем помочь?"
              maxLength={1000}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {message.length}/1000
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!selectedIssue || !message.trim() || submitted}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Отправить сообщение
          </button>
        </div>

        {/* FAQ Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Возможно, ответ уже есть в FAQ</p>
          <button
            onClick={() => onNavigate('faq')}
            className="text-[#FF6B35] font-semibold hover:underline"
          >
            Посмотреть часто задаваемые вопросы →
          </button>
        </div>

        {/* Operating Hours */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mt-6">
          <div className="flex gap-3">
            <div className="text-2xl">⏰</div>
            <div className="text-sm text-blue-900">
              <strong>Режим работы поддержки:</strong><br />
              Пн-Пт: 9:00 - 21:00 МСК<br />
              Сб-Вс: 10:00 - 18:00 МСК<br />
              <span className="text-blue-700">Telegram чат работает 24/7</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">
            Мы в социальных сетях
          </h3>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center text-2xl">
              📱
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center text-2xl">
              📘
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center text-2xl">
              📷
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center text-2xl">
              🐦
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
