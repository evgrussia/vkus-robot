import React, { useState } from 'react';
import { ArrowLeft, Check, Crown, Zap } from 'lucide-react';

interface SubscriptionScreenProps {
  onNavigate: (screen: any) => void;
}

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'Навсегда бесплатно',
    emoji: '🆓',
    features: [
      { text: '5 рецептов в день', included: true },
      { text: 'Базовое распознавание продуктов', included: true },
      { text: 'Стандартный каталог рецептов', included: true },
      { text: 'Таймеры и шаги', included: true },
      { text: 'Расширенное распознавание', included: false },
      { text: 'Голосовое управление', included: false },
      { text: 'Персональные рекомендации', included: false },
      { text: 'Интеграция с доставкой', included: false },
    ],
    color: 'gray',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    period: 'в месяц',
    emoji: '💎',
    popular: true,
    features: [
      { text: 'Безлимитные рецепты', included: true },
      { text: 'Расширенное распознавание (YOLOv8)', included: true },
      { text: 'Голосовое управление', included: true },
      { text: 'Персональные рекомендации (GPT-4o)', included: true },
      { text: 'Интеграция с 5+ сервисами доставки', included: true },
      { text: '20 типов диет', included: true },
      { text: 'Коллекции и избранное', included: true },
      { text: 'Продвинутая аналитика', included: false },
    ],
    color: 'orange',
  },
  {
    id: 'premium-plus',
    name: 'Premium+',
    price: 249,
    period: 'в месяц',
    emoji: '👑',
    features: [
      { text: 'Всё из Premium', included: true },
      { text: 'Продвинутая аналитика КБЖУ', included: true },
      { text: 'Планирование меню на неделю', included: true },
      { text: 'Списки покупок с ценами', included: true },
      { text: 'Приоритетная поддержка', included: true },
      { text: 'Семейный доступ (до 5 человек)', included: true },
      { text: 'Эксклюзивные рецепты шеф-поваров', included: true },
      { text: 'Нутрициолог в чате', included: true },
    ],
    color: 'purple',
  },
];

export function SubscriptionScreen({ onNavigate }: SubscriptionScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const currentPlan = 'premium';

  const getPlanColor = (color: string) => {
    switch (color) {
      case 'gray': return 'from-gray-100 to-gray-200';
      case 'orange': return 'from-[#FF6B35] to-[#FFD166]';
      case 'purple': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-100 to-gray-200';
    }
  };

  const getPlanBorder = (color: string) => {
    switch (color) {
      case 'gray': return 'border-gray-300';
      case 'orange': return 'border-[#FF6B35]';
      case 'purple': return 'border-purple-500';
      default: return 'border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('profile')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Подписка Premium</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Current Plan */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <div className="flex items-center gap-3">
            <div className="text-3xl">💎</div>
            <div>
              <div className="font-bold text-gray-900">Текущий тариф: Premium</div>
              <div className="text-sm text-gray-600">Следующее списание: 15 марта 2026</div>
            </div>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors relative ${
                billingCycle === 'yearly'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Год
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="space-y-4">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isCurrent = currentPlan === plan.id;
            const price = billingCycle === 'yearly' && plan.price > 0
              ? Math.round(plan.price * 12 * 0.8)
              : plan.price;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`bg-white rounded-2xl overflow-hidden transition-all cursor-pointer ${
                  isSelected
                    ? `border-2 ${getPlanBorder(plan.color)} shadow-lg`
                    : 'border border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getPlanColor(plan.color)} p-4 text-white relative`}>
                  {plan.popular && (
                    <div className="absolute top-2 right-2 bg-white text-[#FF6B35] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap size={12} />
                      Популярный
                    </div>
                  )}
                  {isCurrent && (
                    <div className="absolute top-2 right-2 bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Check size={12} />
                      Текущий
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{plan.emoji}</div>
                    <div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className={`text-sm ${plan.color === 'gray' ? 'text-gray-600' : 'text-white/90'}`}>
                        {plan.period}
                      </p>
                    </div>
                  </div>

                  {plan.price > 0 && (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{price}₽</span>
                      <span className={`text-lg ${plan.color === 'gray' ? 'text-gray-600' : 'text-white/90'}`}>
                        /{billingCycle === 'yearly' ? 'год' : 'мес'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="p-4 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {feature.included ? (
                          <Check size={14} />
                        ) : (
                          <span className="text-xs">✕</span>
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {!isCurrent && (
                  <div className="p-4 pt-0">
                    <button
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        isSelected
                          ? `bg-gradient-to-r ${getPlanColor(plan.color)} text-white shadow-md hover:shadow-lg`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {plan.price === 0 ? 'Перейти на Free' : 'Выбрать тариф'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Payment Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <div className="flex gap-3">
            <div className="text-2xl">💳</div>
            <div className="text-sm text-blue-700">
              <strong>Оплата через Telegram:</strong> Безопасно, быстро, без комиссий. Можно отменить подписку в любой момент.
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <button
          onClick={() => onNavigate('faq')}
          className="w-full mt-4 py-3 text-[#FF6B35] font-semibold hover:underline"
        >
          Часто задаваемые вопросы →
        </button>
      </div>

      {/* Bottom CTA */}
      {selectedPlan !== currentPlan && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Crown size={20} />
            Перейти на {plans.find(p => p.id === selectedPlan)?.name}
          </button>
        </div>
      )}
    </div>
  );
}