import React from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  Stethoscope, 
  Bot, 
  Sprout, 
  Settings, 
  Sparkles, 
  X,
  Languages,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { TabType, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  mobileOpen,
  setMobileOpen,
}) => {
  const t = getTranslation(language);

  const navItems = [
    { 
      id: 'dashboard' as TabType, 
      label: t.nav.dashboard, 
      icon: LayoutDashboard,
      badge: null
    },
    { 
      id: 'planner' as TabType, 
      label: t.nav.planner, 
      icon: Compass,
      badge: 'AI Plan' 
    },
    { 
      id: 'doctor' as TabType, 
      label: t.nav.doctor, 
      icon: Stethoscope,
      badge: 'Vision AI'
    },
    { 
      id: 'assistant' as TabType, 
      label: t.nav.assistant, 
      icon: Bot,
      badge: 'Bilingual'
    },
    { 
      id: 'garden' as TabType, 
      label: t.nav.garden, 
      icon: Sprout,
      badge: '3 Crops'
    },
    { 
      id: 'settings' as TabType, 
      label: t.nav.settings, 
      icon: Settings,
      badge: null
    },
    { 
      id: 'landing' as TabType, 
      label: t.nav.landing, 
      icon: Sparkles,
      badge: null
    },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'ha' : 'en';
    setLanguage(nextLang);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#14532D] text-white select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-emerald-900/60 flex items-center justify-between">
        <div 
          onClick={() => handleNavClick('dashboard')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white font-sans">
                Sauti Verti
              </span>
              <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-[#22C55E] text-[#14532D] tracking-wider">
                AI
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 font-medium">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Mobile close button */}
        <button 
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 text-emerald-200 hover:text-white rounded-lg hover:bg-emerald-900/50"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Language Quick Switcher */}
      <div className="px-4 pt-4 pb-2">
        <button
          onClick={toggleLanguage}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-900/50 hover:bg-emerald-800/60 border border-emerald-700/40 text-xs font-medium text-emerald-100 transition-colors"
          title={t.switchLang}
        >
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-[#22C55E]" />
            <span>{language === 'en' ? 'English (🇬🇧)' : 'Harshen Hausa (🇳🇬)'}</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 font-semibold border border-emerald-700/50">
            {language === 'en' ? 'Hausa' : 'English'}
          </span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-3 space-y-1.5 overflow-y-auto">
        <div className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300/70 px-3 py-1">
          Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-[#15803D] text-white shadow-md shadow-emerald-950/40 border border-emerald-600/40'
                  : 'text-emerald-100/90 hover:bg-emerald-900/40 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1 rounded-lg ${isActive ? 'text-[#DCFCE7]' : 'text-emerald-300 group-hover:text-white'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="tracking-wide text-left">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-[#DCFCE7] text-[#14532D]' 
                    : 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/40'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Hackathon Context Card */}
      <div className="p-4 border-t border-emerald-900/60 bg-emerald-950/40">
        <div className="rounded-xl p-3 bg-gradient-to-br from-emerald-900/80 to-[#14532D] border border-emerald-700/40 shadow-inner">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Hack Day Gombe 2026</span>
          </div>
          <p className="text-[11px] text-emerald-200/80 mt-1 leading-relaxed">
            Women Build with Open-Source AI.
          </p>
          <div className="mt-2.5 pt-2 border-t border-emerald-800/50 flex items-center justify-between text-[10px] text-emerald-300/80">
            <span>Powered by Gemini AI</span>
            <span className="flex items-center gap-0.5 text-emerald-200 hover:text-white">
              v1.0 MVP
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 lg:border-r lg:border-emerald-900/30 lg:fixed lg:inset-y-0 lg:left-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer (Slide in) */}
      <div 
        className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
};
