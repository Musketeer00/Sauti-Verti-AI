import React from 'react';
import { 
  Settings, 
  Languages, 
  ShieldCheck, 
  Info, 
  Github, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  Cpu,
  Heart
} from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';

interface SettingsViewProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onClearData: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  language,
  setLanguage,
  onClearData,
}) => {
  const t = getTranslation(language);

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
          <Settings className="w-3.5 h-3.5 text-slate-500" />
          <span>{language === 'en' ? 'Settings & Open Source Info' : 'Saituna da Bayanan AI'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
          {language === 'en' ? 'Application Preferences & AI Transparency' : 'Saitunan Manhaja da Bayanan AI'}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
          {language === 'en'
            ? 'Configure language, view open-source licenses, and learn about the responsible AI model used for Hack Day Gombe 2026.'
            : 'Zaɓi yare, duba lasisin buɗaɗɗiyar fasaha, da sanin yadda AI ke aiki a Hack Day Gombe 2026.'}
        </p>
      </div>

      {/* Language Preference Card */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
          <Languages className="w-5 h-5 text-[#15803D]" />
          <span>{language === 'en' ? 'Language & Localization' : 'Zaɓin Yare'}</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          {language === 'en'
            ? 'Select your preferred language. The AI assistant and Plant Doctor will deliver explanations tailored to your choice.'
            : 'Zaɓi yaren da kake so. Mataimakin AI zai bayyana shawarwari da wannan yaren.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`p-4 rounded-xl border text-left flex items-start justify-between transition-all ${
              language === 'en'
                ? 'border-[#15803D] bg-[#DCFCE7] shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-[#F8FAF7]'
            }`}
          >
            <div>
              <span className="font-bold text-sm text-slate-800 block">English (Standard)</span>
              <span className="text-xs text-slate-500 mt-0.5 block">Full UI navigation and agricultural prompts in English.</span>
            </div>
            {language === 'en' && <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" />}
          </button>

          <button
            type="button"
            onClick={() => setLanguage('ha')}
            className={`p-4 rounded-xl border text-left flex items-start justify-between transition-all ${
              language === 'ha'
                ? 'border-[#15803D] bg-[#DCFCE7] shadow-xs'
                : 'border-slate-200 hover:border-slate-300 bg-[#F8FAF7]'
            }`}
          >
            <div>
              <span className="font-bold text-sm text-slate-800 block">Harshen Hausa (🇳🇬)</span>
              <span className="text-xs text-slate-500 mt-0.5 block">Kayan aiki da amsoshin AI cikin harshen Hausa.</span>
            </div>
            {language === 'ha' && <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" />}
          </button>
        </div>
      </div>

      {/* Hackathon & Open-Source AI Disclosure */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#22C55E]" />
          <span>Hacktoberfest Hack Day Gombe 2026 Context</span>
        </h3>
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#14532D]">
            <Heart className="w-4 h-4 text-emerald-600" />
            <span>Theme: Women Build with Open-Source AI</span>
          </div>
          <p className="leading-relaxed">
            Sauti Verti AI is engineered as an open-source prototype tackling urban food resilience, home nutrition, and small-space vegetable production in northern Nigeria through transparent, accessible AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAF7] space-y-1">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>AI Engine & Vision Model</span>
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Google Gemini 3.8 Flash (Multimodal Text & Vision) running on secure server-side architecture. Designed for fast inference, image symptom analysis, and natural Hausa translations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAF7] space-y-1">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-emerald-600" />
              <span>License & Source Code</span>
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Open source under the MIT License. Prepared for public GitHub collaboration with complete README, architectural diagram, and reproducible setup guides.
            </p>
          </div>
        </div>
      </div>

      {/* Local Storage & Reset */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-slate-800">Local Browser Storage</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Garden records, custom plants, and reminders are saved locally in your browser.
          </p>
        </div>
        <button
          type="button"
          onClick={onClearData}
          className="px-3.5 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors self-start sm:self-auto"
        >
          Reset Demo Data
        </button>
      </div>
    </div>
  );
};
