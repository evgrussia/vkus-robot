import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  User, 
  Search, 
  Heart, 
  Clock, 
  BarChart3,
  Settings,
  Bell,
  Camera,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface DesktopLayoutProps {
  children: React.ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  user?: {
    name: string;
    avatar: string;
    subscription: string;
  };
}

export function DesktopLayout({ children, currentScreen, onNavigate, user }: DesktopLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const menuItems = [
    { id: 'desktopHome', icon: Home, label: 'Главная', color: 'text-[#FF6B35]' },
    { id: 'desktopRecipes', icon: BookOpen, label: 'Рецепты', color: 'text-blue-600' },
    { id: 'desktopSearch', icon: Search, label: 'Поиск', color: 'text-purple-600' },
    { id: 'desktopFavorites', icon: Heart, label: 'Избранное', color: 'text-red-600' },
    { id: 'desktopHistory', icon: Clock, label: 'История', color: 'text-green-600' },
    { id: 'desktopAnalytics', icon: BarChart3, label: 'Аналитика', color: 'text-indigo-600' },
  ];

  const bottomItems = [
    { id: 'profile', icon: User, label: 'Профиль' },
    { id: 'dietSettings', icon: Settings, label: 'Настройки' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'w-20' : 'w-72'
      }`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              🤖
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">Vkus-Robot</h1>
                <p className="text-xs text-gray-500">AI Кулинарный Ассистент</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        {!sidebarCollapsed && (
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl px-4 py-3 font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Camera size={18} />
              Сканировать холодильник
            </button>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 text-[#FF6B35] font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-[#FF6B35]' : item.color} />
                {!sidebarCollapsed && <span>{item.label}</span>}
                {isActive && !sidebarCollapsed && (
                  <div className="ml-auto w-2 h-2 bg-[#FF6B35] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-3 border-t border-gray-200">
          {user && !sidebarCollapsed && (
            <div className="mb-3 p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-full flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm truncate">{user.name}</div>
                  <div className="text-xs text-orange-600 font-semibold">{user.subscription}</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg px-3 py-2 text-xs font-bold hover:shadow-md transition-all flex items-center justify-center gap-1">
                <Sparkles size={14} />
                Улучшить до Premium+
              </button>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}

            {/* Notifications */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all relative">
              <Bell size={20} />
              {!sidebarCollapsed && <span>Уведомления</span>}
              <div className="absolute top-2 left-8 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-4 border-t border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
