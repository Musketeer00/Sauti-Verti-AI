import React from 'react';
import { 
  Menu, 
  Sprout, 
  Languages, 
  PlusCircle, 
  Stethoscope, 
  Compass, 
  Bell
} from 'lucide-react';
import { TabType, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  onOpenMobileMenu,
}) => {
  const t = getTranslation(language);

  const getTabTitle = (tab: TabType): { title: string; subtitle: string } => {
    switch (tab) {
      case 'dashboard':
        return {
          title: t.nav.dashboard,
          subtitle: language === 'en' ? 'Garden Overview & Metrics' : 'Bayanin Lambunka da Ƙididdiga'
        };
      case 'planner':
        return {
          title: t.nav.planner,
          subtitle: language === 'en' ? 'AI Vertical Garden System Designer' : 'Mai Shirya Noman Tsaye na AI'
        };
      case 'doctor':
        return {
          title: t.nav.doctor,
          subtitle: language === 'en' ? 'Photo & Symptom Health Analyzer' : 'Binciken Lafiyar Shuka ta Hoto'
        };
      case 'assistant':
        return {
          title: t.nav.assistant,
          subtitle: language === 'en' ? 'Bilingual Vertical Farming Q&A' : 'Tambayoyi da Amsoshi a Hausa'
        };
      case 'garden':
        return {
          title: t.nav.garden,
          subtitle: language === 'en' ? 'Active Crops, Observations & Care' : 'Kayan Lambu da Bibiyar Ban-ruwa'
        };
      case 'settings':
        return {
          title: t.nav.settings,
          subtitle: language === 'en' ? 'Language, Preferences & Open-Source AI' : 'Saituna da Bayanan AI'
        };
      case 'landing':
        return {
          title: language === 'en' ? 'Product Overview' : 'Bayanin Sauti Verti',
          subtitle: t.tagline
        };
      default:
        return { title: 'Sauti Verti AI', subtitle: t.tagline };
    }
  };

  const { title, subtitle } = getTabTitle(activeTab);

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-emerald-950/10 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger + Titles */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80 transition-colors"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5 text-[#14532D]" />
          </button>

          {/* Mobile brand badge */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 lg:hidden cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center text-white">
              <Sprout className="w-4 h-4" />
            </div>
          </div>

          {/* Current Page Titles */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-[#14532D] tracking-tight">
                {title}
              </h1>
              <span className="hidden sm:inline-flex text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] border border-emerald-200">
                MVP v1.0
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block truncate max-w-md">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Actions & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Doctor trigger if not on Doctor page */}
          {activeTab !== 'doctor' && (
            <button
              onClick={() => setActiveTab('doctor')}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-[#15803D] hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
            >
              <Stethoscope className="w-3.5 h-3.5 text-[#15803D]" />
              <span>{language === 'en' ? 'Check Plant' : 'Duba Shuka'}</span>
            </button>
          )}

          {/* Quick Plan trigger if on dashboard */}
          {activeTab === 'dashboard' && (
            <button
              onClick={() => setActiveTab('planner')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#15803D] text-white hover:bg-[#14532D] shadow-sm transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-[#DCFCE7]" />
              <span>{language === 'en' ? 'New Plan' : 'Sabuwar Tsara'}</span>
            </button>
          )}

          {/* Language Switch Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ha' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#DCFCE7] text-[#14532D] hover:bg-emerald-200/80 border border-emerald-300 transition-colors"
            title={language === 'en' ? 'Canza zuwa Hausa' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-[#15803D]" />
            <span className="font-bold">{language === 'en' ? 'HA' : 'EN'}</span>
            <span className="hidden xs:inline text-[11px] font-normal text-emerald-800">
              {language === 'en' ? 'Hausa' : 'English'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
