import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesGrid } from './components/FeaturesGrid';
import { KillerFeatures } from './components/KillerFeatures';
import { DietSupport } from './components/DietSupport';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTAFooter } from './components/CTAFooter';
import { Footer } from './components/Footer';

// WebApp Screens
import { HomeScreen } from './components/webapp/HomeScreen';
import { RecipeGenerationLoading } from './components/webapp/RecipeGenerationLoading';
import { IngredientsConfirmation } from './components/webapp/IngredientsConfirmation';
import { RecipeResults } from './components/webapp/RecipeResults';
import { RecipeDetail } from './components/webapp/RecipeDetail';
import { CookingMode } from './components/webapp/CookingMode';
import { RecipeCompletion } from './components/webapp/RecipeCompletion';
import { RecipesList } from './components/webapp/RecipesList';
import { ProfileScreen } from './components/webapp/ProfileScreen';

// Advanced Screens
import { DietSettings } from './components/webapp/advanced/DietSettings';
import { AllergensSettings } from './components/webapp/advanced/AllergensSettings';
import { SubscriptionScreen } from './components/webapp/advanced/SubscriptionScreen';
import { SearchScreen } from './components/webapp/advanced/SearchScreen';
import { FAQScreen } from './components/webapp/advanced/FAQScreen';
import { SupportScreen } from './components/webapp/advanced/SupportScreen';
import { LanguageSettings } from './components/webapp/advanced/LanguageSettings';
import { NotificationsSettings } from './components/webapp/advanced/NotificationsSettings';

// Modals Demo
import { ModalsDemo } from './components/webapp/ModalsDemo';

// Components Demo
import { ComponentsDemo } from './components/webapp/ComponentsDemo';

// Desktop Version
import { DesktopApp } from './components/desktop/DesktopApp';

export type Screen = 
  | 'landing'
  | 'home'
  | 'loading'
  | 'ingredients'
  | 'results'
  | 'recipeDetail'
  | 'cooking'
  | 'completion'
  | 'recipes'
  | 'profile'
  | 'dietSettings'
  | 'allergensSettings'
  | 'subscription'
  | 'search'
  | 'faq'
  | 'support'
  | 'language'
  | 'notifications'
  | 'modalsDemo'
  | 'componentsDemo'
  | 'desktop';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  // Demo mode toggle
  const toggleWebApp = () => {
    setCurrentScreen(currentScreen === 'landing' ? 'home' : 'landing');
  };

  const navigateToScreen = (screen: Screen, recipe?: any) => {
    setCurrentScreen(screen);
    if (recipe) setSelectedRecipe(recipe);
  };

  // Landing Page
  if (currentScreen === 'landing') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={navigateToScreen} />
        <button
          onClick={toggleWebApp}
          className="fixed bottom-4 right-4 z-50 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          🚀 Открыть WebApp
        </button>
        <main>
          <HeroSection onNavigate={navigateToScreen} />
          <HowItWorks />
          <FeaturesGrid />
          <KillerFeatures />
          <DietSupport />
          <Pricing onNavigate={navigateToScreen} />
          <Testimonials />
          <CTAFooter onNavigate={navigateToScreen} />
        </main>
        <Footer />
      </div>
    );
  }

  // WebApp Screens
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Navigation */}
      <div className="fixed top-2 right-2 z-50 flex gap-2">
        <button
          onClick={toggleWebApp}
          className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs shadow-md hover:shadow-lg transition-all"
        >
          ← Лендинг
        </button>
      </div>

      {currentScreen === 'home' && <HomeScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'loading' && <RecipeGenerationLoading onComplete={() => navigateToScreen('ingredients')} />}
      {currentScreen === 'ingredients' && <IngredientsConfirmation onNavigate={navigateToScreen} />}
      {currentScreen === 'results' && <RecipeResults onNavigate={navigateToScreen} />}
      {currentScreen === 'recipeDetail' && <RecipeDetail recipe={selectedRecipe} onNavigate={navigateToScreen} />}
      {currentScreen === 'cooking' && <CookingMode recipe={selectedRecipe} onNavigate={navigateToScreen} />}
      {currentScreen === 'completion' && <RecipeCompletion recipe={selectedRecipe} onNavigate={navigateToScreen} />}
      {currentScreen === 'recipes' && <RecipesList onNavigate={navigateToScreen} />}
      {currentScreen === 'profile' && <ProfileScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'dietSettings' && <DietSettings onNavigate={navigateToScreen} />}
      {currentScreen === 'allergensSettings' && <AllergensSettings onNavigate={navigateToScreen} />}
      {currentScreen === 'subscription' && <SubscriptionScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'search' && <SearchScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'faq' && <FAQScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'support' && <SupportScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'language' && <LanguageSettings onNavigate={navigateToScreen} />}
      {currentScreen === 'notifications' && <NotificationsSettings onNavigate={navigateToScreen} />}
      {currentScreen === 'modalsDemo' && <ModalsDemo onNavigate={navigateToScreen} />}
      {currentScreen === 'componentsDemo' && <ComponentsDemo onNavigate={navigateToScreen} />}
      {currentScreen === 'desktop' && <DesktopApp onNavigateToMobile={navigateToScreen} />}
    </div>
  );
}