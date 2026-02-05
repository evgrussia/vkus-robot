import React, { useState } from 'react';
import { Modal } from './Modal';
import { ShoppingCart, Check, ExternalLink } from 'lucide-react';

interface DeliveryIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  missingIngredients?: string[];
}

const deliveryServices = [
  {
    id: 'yandex',
    name: 'Яндекс.Лавка',
    logo: '🟡',
    deliveryTime: '15-30 мин',
    minOrder: '0₽',
    price: 850,
    rating: 4.8,
    available: true,
  },
  {
    id: 'samokat',
    name: 'Самокат',
    logo: '🛴',
    deliveryTime: '15-25 мин',
    minOrder: '0₽',
    price: 920,
    rating: 4.9,
    available: true,
  },
  {
    id: 'delivery',
    name: 'Деливери',
    logo: '🚚',
    deliveryTime: '30-45 мин',
    minOrder: '500₽',
    price: 780,
    rating: 4.6,
    available: true,
  },
  {
    id: 'utkonos',
    name: 'Утконос',
    logo: '🦆',
    deliveryTime: '60-90 мин',
    minOrder: '1000₽',
    price: 690,
    rating: 4.7,
    available: false,
  },
  {
    id: 'sbermarket',
    name: 'СберМаркет',
    logo: '🟢',
    deliveryTime: '60-120 мин',
    minOrder: '800₽',
    price: 650,
    rating: 4.5,
    available: true,
  },
];

export function DeliveryIntegrationModal({ 
  isOpen, 
  onClose, 
  missingIngredients = ['Помидоры', 'Базилик', 'Моцарелла'] 
}: DeliveryIntegrationModalProps) {
  const [selectedService, setSelectedService] = useState<string | null>('yandex');

  const handleOrder = (serviceId: string) => {
    console.log(`Ordering from ${serviceId}`);
    // In real app, would redirect to delivery service
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Заказать продукты" size="lg">
      <div className="p-6">
        {/* Missing Ingredients */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <ShoppingCart size={20} className="text-[#FF6B35]" />
            Недостающие продукты ({missingIngredients.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {missingIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div className="text-sm text-blue-900">
              <strong>Умная интеграция:</strong> Мы автоматически подберём нужные продукты и добавим их в корзину выбранного сервиса.
            </div>
          </div>
        </div>

        {/* Delivery Services */}
        <div className="space-y-3">
          {deliveryServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white border-2 rounded-xl p-4 transition-all ${
                selectedService === service.id
                  ? 'border-[#FF6B35] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              } ${!service.available ? 'opacity-60' : ''}`}
            >
              {/* Selected Indicator */}
              {selectedService === service.id && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}

              {/* Not Available Badge */}
              {!service.available && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                  Недоступен
                </div>
              )}

              <button
                onClick={() => service.available && setSelectedService(service.id)}
                disabled={!service.available}
                className="w-full text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                    {service.logo}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{service.name}</h4>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
                        <span className="text-gray-600">{service.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                      <div>🕐 {service.deliveryTime}</div>
                      <div>💰 от {service.minOrder}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gray-900">
                        {service.price}₽
                      </div>
                      <div className="text-sm text-gray-500">
                        ~цена корзины
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => selectedService && handleOrder(selectedService)}
            disabled={!selectedService}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Заказать в{' '}
            {selectedService
              ? deliveryServices.find((s) => s.id === selectedService)?.name
              : '...'}
            <ExternalLink size={16} />
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 text-gray-600 font-semibold hover:text-gray-800 transition-colors"
          >
            Закрыть
          </button>
        </div>

        {/* Premium Note */}
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="text-2xl">💎</div>
            <div className="flex-1 text-sm text-orange-900">
              <strong>Premium функция:</strong> Автоматическое добавление продуктов в корзину. В Free версии откроется сайт сервиса доставки.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
