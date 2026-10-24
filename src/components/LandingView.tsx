import React from 'react';
import { 
  Sprout, 
  Compass, 
  Stethoscope, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Maximize2,
  Droplets,
  Sun
} from 'lucide-react';
import { TabType, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface LandingViewProps {
  setActiveTab: (tab: TabType) => void;
  language: Language;
}

export const LandingView: React.FC<LandingViewProps> = ({ setActiveTab, language }) => {
  const t = getTranslation(language);

  return (
    <div className="space-y-12 py-4 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14532D] via-[#15803D] to-emerald-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-[#22C55E]" />
            <span>Hacktoberfest Hack Day Gombe 2026 • Women Build with Open-Source AI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {language === 'en' 
              ? 'Your Intelligent Companion for Vertical Farming.' 
              : 'Abokin Tafiyarku na Fasahar Noman Tsaye.'}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-emerald-100 font-light leading-relaxed max-w-2xl">
            {language === 'en'
              ? 'Plan your garden, get AI-powered advice, track your plants, and grow fresh vegetables in small spaces.'
              : 'Shirya lambunka, sami shawarar AI, bibiyi ci gaban tsirrai, kuma ka noma kayan lambu masu inganci a cikin matsakaicin fili.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#14532D] font-extrabold text-sm sm:text-base hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>{language === 'en' ? 'Start Growing' : 'Fara Noma Yanzu'}</span>
              <ArrowRight className="w-5 h-5 text-[#15803D]" />
            </button>

            <button
              onClick={() => setActiveTab('planner')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-white font-semibold text-sm sm:text-base border border-emerald-400/30 transition-all active:scale-95"
            >
              <Compass className="w-5 h-5 text-[#22C55E]" />
              <span>{language === 'en' ? 'AI Garden Planner' : 'Tsara Lambu da AI'}</span>
            </button>
          </div>

          {/* Value Props Pills */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>{language === 'en' ? 'Budgeted in Naira (₦)' : 'Lissafin Kuɗi a Naira (₦)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>{language === 'en' ? 'English & Hausa Support' : 'Tallafi da Harshen Hausa'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>{language === 'en' ? 'Vision AI Plant Doctor' : 'Binciken Shuka da Hoto'}</span>
            </div>
          </div>
        </div>

        {/* Decorative Graphic Element */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-15 pointer-events-none">
          <Sprout className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* Why Vertical Farming in Nigeria? */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-950/10 shadow-sm">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#15803D]">
            {language === 'en' ? 'The Urban Gardening Challenge' : 'Kalubalen Noman Birane'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14532D] mt-1">
            {language === 'en' ? 'Produce Fresh Vegetables Anywhere' : 'Noma Kayan Lambu a Ko\'ina'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {language === 'en'
              ? 'Urban land is scarce, backyard soils may be sandy or cemented, and food prices are climbing. Sauti Verti AI turns walls, balconies, verandahs, and small corridors into productive vegetable systems.'
              : 'Ƙasar noma na da wuya a birane, kuma farashin kayan lambu na ƙaruwa. Sauti Verti AI na taimaka maka wajen mayar da bangon gidanka, baranda, ko ɗan ƙaramin fili ya zama lambun lambu mai fa\'ida.'}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#F8FAF7] border border-emerald-900/10">
            <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-3">
              <Maximize2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#1F2937]">
              {language === 'en' ? 'Up to 80% Space Savings' : 'Ajiye 80% na Fili'}
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              {language === 'en'
                ? 'Grow upwards using tiered PVC pipes, wall pockets, stacked drums, and hanging containers.'
                : 'Noma a tsaye ta amfani da bututun PVC, kwantenoni, ko jeri a bango ba tare da buƙatar babban fili ba.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAF7] border border-emerald-900/10">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#1F2937]">
              {language === 'en' ? 'Water Conservation' : 'Tattalin Ruwa'}
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              {language === 'en'
                ? 'Gravity-fed drip systems and recycled container reservoirs cut water use by half in dry zones.'
                : 'Tsarukan digar ruwa da kwashe ruwan kwantena na rage asarar ruwa a yankunan rani da zafi.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAF7] border border-emerald-900/10">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#1F2937]">
              {language === 'en' ? 'Nutritious Local Crops' : 'Abinci Mai Gina Jiki'}
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              {language === 'en'
                ? 'Fresh spinach (alayyaho), tomatoes, peppers (attarugu), lettuce, and mint right at your kitchen door.'
                : 'Samun sabbin kayan miya kamar alayyaho, tumatir, attarugu, da salak a ƙofar gidanka.'}
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Preview */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14532D]">
            {language === 'en' ? 'Designed for Hack Day Gombe 2026' : 'An Ƙera Domin Hack Day Gombe 2026'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            {language === 'en' 
              ? 'Four integrated modules built with open-source AI principles to empower home growers.' 
              : 'Manhajoji huɗu da aka haɗa da dabarun buɗaɗɗiyar fasahar AI domin taimakawa al\'umma.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#15803D] transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#1F2937]">
                  {language === 'en' ? '1. AI Vertical Garden Planner' : '1. Mai Shirya Noman Tsaye na AI'}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Enter your available space (e.g. 2x1m wall), budget (e.g. ₦15,000), sunlight hours, and preferred vegetables. The AI generates a tailored materials list, cost estimate, and step-by-step assembly guide.'
                    : 'Shigar da girman fili, kuɗin da kake da shi a Naira, hasken rana, da kayan lambun da kake so. AI za ta ba ka tsarin bututu, kudin kayan aiki, da yadda zaka kafa lambun.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#15803D] transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#1F2937]">
                  {language === 'en' ? '2. Multimodal AI Plant Doctor' : '2. Likitancin Shuka da Hoto'}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Spot yellowing leaves, pests, or curling? Take a photo or describe the symptom. Our vision-capable AI provides cautious diagnoses, what physical checks to perform, and organic next steps.'
                    : 'Ganyen shukarka yana rawaya ko yana naɗewa? Ɗora hoto ko rubuta alamomin. Likitan shuka na AI zai duba ya kuma ba da shawara cikin kariya.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#15803D] transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#14532D] flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#1F2937]">
                  {language === 'en' ? '3. Bilingual Agricultural Assistant' : '3. Mataimakin AI da Harshen Hausa'}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Ask questions naturally in English or Hausa. Receive practical guidance on compost preparation, watering routines, spacing, and organic pest repellents.'
                    : 'Yi tambayoyi a sauƙaƙe da Hausa ko Turanci. Sami amsoshi kan haɗa takin gargajiya, tsarin shayarwa, da maganin ƙwari na gida.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#15803D] transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#1F2937]">
                  {language === 'en' ? '4. Persistent Garden Tracker & Reminders' : '4. Bibiyar Lambu da Tunatarwa'}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Track your planting dates, daily watering logs, growth stages, and harvest days. Saved securely on your device with zero cloud latency.'
                    : 'Rubuta ranakun shuka, jadawalin ban-ruwa, ci gaban shuka, da ranar girbi. Ana adana bayananka a kan na\'urarka cikin aminci.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#15803D] text-white font-bold text-sm hover:bg-[#14532D] shadow-md transition-colors"
          >
            <span>{language === 'en' ? 'Open Dashboard & Start' : 'Buɗe Babban Shafi'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
