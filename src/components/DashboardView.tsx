import React from 'react';
import { 
  Compass, 
  Stethoscope, 
  Bot, 
  Sprout, 
  ArrowRight, 
  Droplets, 
  Sun, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Leaf, 
  TrendingUp,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { TabType, Language, Crop, Reminder } from '../types';
import { getTranslation } from '../utils/translations';

interface DashboardViewProps {
  setActiveTab: (tab: TabType) => void;
  language: Language;
  crops: Crop[];
  reminders: Reminder[];
  onToggleReminder: (id: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  setActiveTab,
  language,
  crops,
  reminders,
  onToggleReminder,
}) => {
  const t = getTranslation(language);

  const pendingReminders = reminders.filter(r => !r.completed);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#14532D] via-[#15803D] to-emerald-800 p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>{t.hackathonTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {t.welcomeBack}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            {t.welcomeSub}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('planner')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#14532D] font-bold text-xs sm:text-sm hover:bg-emerald-50 shadow-md transition-all active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#15803D]" />
              <span>{t.planGarden}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveTab('doctor')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-900/60 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-900/80 border border-emerald-400/30 transition-all active:scale-95"
            >
              <Stethoscope className="w-4 h-4 text-[#22C55E]" />
              <span>{t.checkHealth}</span>
            </button>
          </div>
        </div>

        {/* Decorative Nature Icon Backdrop */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <Sprout className="w-64 h-64 text-white" />
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-950/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-medium text-slate-500">{t.activeCrops}</span>
            <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#15803D]">
              <Sprout className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">{crops.length}</span>
            <span className="text-xs font-medium text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> 100% active
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Lettuce, Spinach, Tomatoes</p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-950/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-medium text-slate-500">{t.verticalSetups}</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Compass className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">2</span>
            <span className="text-xs font-medium text-blue-600">Pipes & Containers</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Space saving: ~75% vs flat ground</p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-950/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-medium text-slate-500">{t.pendingReminders}</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[#F59E0B]">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">{pendingReminders.length}</span>
            <span className="text-xs font-medium text-[#F59E0B]">Tasks due today</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Morning watering & sunlight check</p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-950/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-medium text-slate-500">{t.gardenHealth}</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-[#22C55E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">94%</span>
            <span className="text-xs font-semibold text-[#15803D] bg-[#DCFCE7] px-1.5 py-0.5 rounded">Optimal</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">0 critical pest reports</p>
        </div>
      </div>

      {/* Quick Action Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold text-[#14532D]">
            {t.quickActions}
          </h3>
          <span className="text-xs text-slate-500">
            {language === 'en' ? 'Core MVP Workflows' : 'Ayyukan Noma na Musamman'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Plan Garden */}
          <div 
            onClick={() => setActiveTab('planner')}
            className="group cursor-pointer rounded-2xl p-5 bg-white border border-emerald-900/10 hover:border-[#15803D] shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1F2937] group-hover:text-[#15803D] transition-colors">
                {t.planGarden}
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                {t.planGardenDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#15803D]">
              <span>{language === 'en' ? 'Start Planning' : 'Fara Shiryawa'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Plant Doctor */}
          <div 
            onClick={() => setActiveTab('doctor')}
            className="group cursor-pointer rounded-2xl p-5 bg-white border border-emerald-900/10 hover:border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1F2937] group-hover:text-red-700 transition-colors">
                {t.checkHealth}
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                {t.checkHealthDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-600">
              <span>{language === 'en' ? 'Diagnose Crop' : 'Duba Shuka'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Ask AI Assistant */}
          <div 
            onClick={() => setActiveTab('assistant')}
            className="group cursor-pointer rounded-2xl p-5 bg-white border border-emerald-900/10 hover:border-[#15803D] shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#14532D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1F2937] group-hover:text-[#15803D] transition-colors">
                {t.askAi}
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                {t.askAiDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#14532D]">
              <span>{language === 'en' ? 'Chat in Hausa/EN' : 'Yi Magana'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Track My Garden */}
          <div 
            onClick={() => setActiveTab('garden')}
            className="group cursor-pointer rounded-2xl p-5 bg-white border border-emerald-900/10 hover:border-emerald-600 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#1F2937] group-hover:text-[#15803D] transition-colors">
                {t.trackGarden}
              </h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                {t.trackGardenDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#15803D]">
              <span>{language === 'en' ? 'View My Crops' : 'Duba Shuke-shuke'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Split: Active Crops & Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Active Crops */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-emerald-950/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#14532D] flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[#22C55E]" />
                <span>{language === 'en' ? 'Active Vertical Crops' : 'Tsirran Lambunka na Yanzu'}</span>
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Currently growing in containers & vertical pipes' : 'Tsirrai a cikin bututu da kwantena'}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('garden')}
              className="text-xs font-semibold text-[#15803D] hover:underline flex items-center gap-1"
            >
              <span>{language === 'en' ? 'Manage All' : 'Duba Duka'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {crops.slice(0, 3).map((crop) => (
              <div 
                key={crop.id}
                className="p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-emerald-300 bg-[#F8FAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-[#15803D] shadow-xs">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#1F2937]">{crop.name}</h4>
                      {crop.localName && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#DCFCE7] text-[#14532D]">
                          {crop.localName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {crop.variety} • {crop.growingMethod.replace('-', ' ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                  <div className="text-left sm:text-right">
                    <span className="block text-slate-400 text-[10px] uppercase font-semibold">Status</span>
                    <span className="font-semibold text-emerald-700 capitalize">{crop.status.replace('-', ' ')}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 font-bold text-[#15803D]">
                    {crop.healthScore}% health
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Climate Advisory Card */}
          <div className="mt-4 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#DCFCE7] text-[#15803D] shrink-0 mt-0.5">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-[#14532D] text-xs">
                {t.nigeriaTipTitle}
              </h5>
              <p className="mt-1 text-slate-600 leading-relaxed text-[11px]">
                {t.nigeriaTipContent}
              </p>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Upcoming Reminders */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-950/10 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-[#14532D] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                <span>{language === 'en' ? 'Today\'s Care Tasks' : 'Ayyukan Kula na Yau'}</span>
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200">
                {pendingReminders.length} due
              </span>
            </div>

            <div className="space-y-2.5">
              {reminders.slice(0, 4).map((reminder) => (
                <div 
                  key={reminder.id}
                  onClick={() => onToggleReminder(reminder.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                    reminder.completed 
                      ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-60' 
                      : 'bg-[#F8FAF7] border-slate-200 hover:border-emerald-300 text-slate-700'
                  }`}
                >
                  <div className="mt-0.5">
                    <CheckCircle2 className={`w-4 h-4 ${reminder.completed ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-xs truncate ${reminder.completed ? 'line-through text-slate-400' : 'text-[#1F2937]'}`}>
                      {reminder.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span>{reminder.cropName}</span>
                      <span>•</span>
                      <span>{reminder.scheduledAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('garden')}
              className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-[#15803D] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Add Care Reminder' : 'Ƙara Tunatarwa'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
