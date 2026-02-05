import React, { useState } from 'react';
import { DesktopLayout } from './DesktopLayout';
import { DesktopHome } from './DesktopHome';
import { DesktopRecipeDetail } from './DesktopRecipeDetail';
import { DesktopRecipes } from './DesktopRecipes';
import { DesktopAnalytics } from './DesktopAnalytics';

// Import mobile screens for reuse in desktop mode
import { ProfileScreen } from '../webapp/ProfileScreen';
import { DietSettings } from '../webapp/advanced/DietSettings';

export type DesktopScreen =
  | 'desktopHome'
  | 'desktopRecipes'
  | 'desktopRecipeDetail'
  | 'desktopSearch'
  | 'desktopFavorites'
  | 'desktopHistory'
  | 'desktopAnalytics'
  | 'desktopCooking'
  | 'profile'
  | 'dietSettings';

interface DesktopAppProps {
  onNavigateToMobile: (screen: any) => void;
}

export function DesktopApp({ onNavigateToMobile }: DesktopAppProps) {
  const [currentScreen, setCurrentScreen] = useState<DesktopScreen>('desktopHome');

  const user = {
    name: 'Анна Петрова',
    avatar: '👩‍💼',
    subscription: 'Premium 💎',
  };

  const handleNavigate = (screen: any) => {
    // If it's a mobile screen, navigate to mobile mode
    if (screen === 'home' || screen === 'loading' || screen === 'ingredients') {
      onNavigateToMobile(screen);
    } else {
      setCurrentScreen(screen as DesktopScreen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'desktopHome':
        return <DesktopHome onNavigate={handleNavigate} />;
      
      case 'desktopRecipes':
        return <DesktopRecipes onNavigate={handleNavigate} />;
      
      case 'desktopRecipeDetail':
        return <DesktopRecipeDetail onNavigate={handleNavigate} />;
      
      case 'desktopAnalytics':
        return <DesktopAnalytics onNavigate={handleNavigate} />;
      
      case 'desktopSearch':
      case 'desktopFavorites':
      case 'desktopHistory':
      case 'desktopCooking':
        return (
          <div className="h-full flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                В разработке
              </h2>
              <p className="text-gray-600 mb-6">
                Этот экран скоро будет готов
              </p>
              <button
                onClick={() => handleNavigate('desktopHome')}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        );
      
      case 'profile':
        return <ProfileScreen onNavigate={handleNavigate} />;
      
      case 'dietSettings':
        return <DietSettings onNavigate={handleNavigate} />;
      
      default:
        return <DesktopHome onNavigate={handleNavigate} />;
    }
  };

  return (
    <DesktopLayout
      currentScreen={currentScreen}
      onNavigate={handleNavigate}
      user={user}
    >
      {renderScreen()}
    </DesktopLayout>
  );
}