import React, { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';

interface PricingProps {
  onNavigate: (screen: string) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Бесплатно',
      price: 0,
      priceAnnual: 0,
      description: 'Для начала',
      features: [
        { text: '3 генерации рецептов в день', included: true },
        { text: '10 базовых диет', included: true },
        { text: 'Встроенные таймеры', included: true },
        { text: 'Сохранение рецептов (до 50)', included: true },
        { text: 'Голосовое управление', included: false },
        { text: 'Расчёт КБЖУ', included: false },
        { text: 'Приоритетная поддержка', included: false },
      ],
      cta: 'Начать бесплатно',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 149,
      priceAnnual: 99,
      oldPrice: 199,
      description: 'Популярный',
      trial: '7 дней бесплатно',
      features: [
        { text: 'Безлимитные генерации', included: true },
        { text: '20 диет', included: true },
        { text: 'Встроенные таймеры', included: true },
        { text: 'Безлимитное сохранение', included: true },
        { text: 'Голосовое управление', included: true },
        { text: 'Расчёт КБЖУ', included: true },
        { text: 'Экспорт списка покупок', included: true },
        { text: 'Персональный план питания', included: false },
      ],
      cta: 'Попробовать 7 дней бесплатно',
      highlighted: true,
    },
    {
      name: 'Premium+',
      price: 299,
      priceAnnual: 199,
      description: 'Максимум возможностей',
      features: [
        { text: 'Всё из Premium', included: true },
        { text: 'Персональный план питания на неделю', included: true },
        { text: 'AI-советы по здоровому питанию', included: true },
        { text: 'Приоритетная поддержка', included: true },
        { text: 'Ранний доступ к новым фичам', included: true },
      ],
      cta: 'Выбрать Premium+',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Тарифы для любых потребностей
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Начни бесплатно. Перейди на Premium когда понадобится.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white'
                  : 'text-gray-600'
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white'
                  : 'text-gray-600'
              }`}
            >
              Год
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                -33%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#FF6B35] to-[#FFD166] p-[2px] transform md:scale-105 shadow-2xl'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Sparkles size={14} />
                    Популярный
                  </div>
                </div>
              )}

              <div
                className={`${
                  plan.highlighted ? 'bg-white' : ''
                } rounded-2xl p-6 md:p-8 h-full flex flex-col`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {billingPeriod === 'monthly' ? plan.price : plan.priceAnnual}₽
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">
                        / {billingPeriod === 'monthly' ? 'мес' : 'мес'}
                      </span>
                    )}
                  </div>
                  {plan.oldPrice && billingPeriod === 'monthly' && (
                    <div className="text-gray-400 line-through text-sm mt-1">{plan.oldPrice}₽</div>
                  )}
                  {billingPeriod === 'annual' && plan.price > 0 && (
                    <div className="text-sm text-gray-600 mt-1">
                      {plan.priceAnnual * 12}₽ в год
                    </div>
                  )}
                  {plan.trial && (
                    <div className="text-green-600 font-semibold text-sm mt-2">{plan.trial}</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included ? 'bg-green-100' : 'bg-gray-100'
                        }`}
                      >
                        {feature.included ? (
                          <Check size={14} className="text-green-600" />
                        ) : (
                          <X size={14} className="text-gray-400" />
                        )}
                      </div>
                      <span
                        className={
                          feature.included ? 'text-gray-700' : 'text-gray-400 line-through'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('home')}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-500" />
            <span>Оплата через YooKassa</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-500" />
            <span>Отмена в любой момент</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-500" />
            <span>Вернём деньги в течение 7 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
}