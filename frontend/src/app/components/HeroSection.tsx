import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (screen: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [counters, setCounters] = useState({
    users: 0,
    recipes: 0,
    diets: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      users: 50000,
      recipes: 1000000,
      diets: 20,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        users: Math.floor(targets.users * progress),
        recipes: Math.floor(targets.recipes * progress),
        diets: Math.floor(targets.diets * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FFD166] to-[#FF8A5C]">
        {/* Aurora Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Фото холодильника →<br />
              <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Рецепт за 60 секунд
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Вкус-Робот — ваш персональный AI-повар в Telegram. Распознает продукты, генерирует
              рецепты, ведет через готовку голосом.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('home')}
                className="group px-8 py-4 bg-white text-[#FF6B35] rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Попробовать бесплатно
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Смотреть демо
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {formatNumber(counters.users)}+
                </div>
                <div className="text-sm text-white/80">пользователей</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {formatNumber(counters.recipes)}+
                </div>
                <div className="text-sm text-white/80">рецептов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {counters.diets}
                </div>
                <div className="text-sm text-white/80">диет</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Check size={16} className="text-green-300" />
                <span className="text-sm text-white">Работает в Telegram</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Check size={16} className="text-green-300" />
                <span className="text-sm text-white">AI YOLOv8 + GPT-4o</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Check size={16} className="text-green-300" />
                <span className="text-sm text-white">Бесплатный старт</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Floating Phone */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-3">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1758874960056-07aa3d0afa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwc21hcnRwaG9uZSUyMGFwcCUyMGtpdGNoZW58ZW58MXx8fHwxNzcwMzEwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="App Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Telegram Badge */}
                  <div className="absolute -top-4 -right-4 bg-[#0088cc] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    Telegram
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-0 animate-float-slow">
                <div className="text-6xl filter drop-shadow-lg">🥗</div>
              </div>
              <div className="absolute top-40 right-0 animate-float-delay">
                <div className="text-6xl filter drop-shadow-lg">🍳</div>
              </div>
              <div className="absolute bottom-20 left-10 animate-float">
                <div className="text-6xl filter drop-shadow-lg">🥘</div>
              </div>
              <div className="absolute bottom-40 right-20 animate-float-slow">
                <div className="text-6xl filter drop-shadow-lg">🍕</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3.5s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}