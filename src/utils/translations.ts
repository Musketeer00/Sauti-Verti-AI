import { Language } from '../types';

export const translations = {
  en: {
    appName: 'Sauti Verti AI',
    tagline: 'Grow Vertically. Grow Smarter.',
    hackathonTag: 'Hacktoberfest Hack Day Gombe 2026',
    hackathonSub: 'Women Build with Open-Source AI',
    
    // Navigation
    nav: {
      dashboard: 'Dashboard',
      planner: 'Garden Planner',
      doctor: 'Plant Doctor',
      assistant: 'AI Care Assistant',
      garden: 'My Garden',
      settings: 'Settings & Info',
      landing: 'Overview / Tour',
    },
    
    // Common
    language: 'Language',
    currentLang: 'English',
    switchLang: 'Switch to Hausa (Harshen Hausa)',
    quickActions: 'Quick Actions',
    welcomeBack: 'Barka da zuwa! Welcome to your Vertical Garden',
    welcomeSub: 'Empowering small-space vegetable growers across Nigeria with intelligent vertical farming guidance.',
    
    // Actions
    planGarden: 'Plan My Garden',
    planGardenDesc: 'Design a vertical setup based on space, sunlight & budget (₦)',
    askAi: 'Ask AI Assistant',
    askAiDesc: 'Agricultural guidance, watering tips & spacing in English or Hausa',
    checkHealth: 'Check Plant Health',
    checkHealthDesc: 'Upload a plant photo or describe symptoms for instant analysis',
    trackGarden: 'Track My Garden',
    trackGardenDesc: 'Log planting dates, daily watering, observations & harvests',

    // Stats
    activeCrops: 'Active Crops',
    verticalSetups: 'Vertical Systems',
    pendingReminders: 'Pending Tasks',
    gardenHealth: 'Average Health',
    
    // Tips
    nigeriaTipTitle: 'Gombe & Nigerian Climate Tip',
    nigeriaTipContent: 'During hot dry spells (harmattan or peak dry season), vertical containers lose water faster. Mulch topsoil with dried leaves or sawdust and water early morning (7:00 AM) to minimize evaporation.',
    
    // Status
    healthy: 'Healthy',
    needsWater: 'Needs Watering',
    inspected: 'Recently Inspected',
  },
  ha: {
    appName: 'Sauti Verti AI',
    tagline: 'Noman Tsaye. Noman Hikima.',
    hackathonTag: 'Hacktoberfest Hack Day Gombe 2026',
    hackathonSub: 'Mata Masu Gina Fasahar AI ta Buɗe',
    
    // Navigation
    nav: {
      dashboard: 'Babban Shafi',
      planner: 'Tsarin Lambu',
      doctor: 'Likitancin Shuka',
      assistant: 'Mataimakin AI',
      garden: 'Lambuna',
      settings: 'Saituna da Bayani',
      landing: 'Bayani / Farko',
    },
    
    // Common
    language: 'Yare',
    currentLang: 'Hausa',
    switchLang: 'Canza zuwa Turanci (English)',
    quickActions: 'Ayyuka Masu Sauri',
    welcomeBack: 'Barka da zuwa! Maraba da zuwa Lambunka na Tsaye',
    welcomeSub: 'Taimaka wa manoma masu ƙarancin fili a Najeriya da fasahar noman kayan lambu a tsaye.',
    
    // Actions
    planGarden: 'Shirya Lambuna',
    planGardenDesc: 'Tsarar noman tsaye bisa ga fili, hasken rana, da kuɗin shiga (₦)',
    askAi: 'Tambayi Mataimakin AI',
    askAiDesc: 'Shawarwarin noma, ban-ruwa, da kula da tsirrai a cikin Hausa',
    checkHealth: 'Duba Lafiyar Shuka',
    checkHealthDesc: 'Ɗora hoton shuka ko bayyana alamomin rashin lafiya',
    trackGarden: 'Bibiyi Lambuna',
    trackGardenDesc: 'Rubuta ranar shuka, ban-ruwa na yau da kullum, da girbi',

    // Stats
    activeCrops: 'Tsirrai Masu Rai',
    verticalSetups: 'Tsarukan Tsaye',
    pendingReminders: 'Ayyukan da ke Jira',
    gardenHealth: 'Matsakaicin Lafiya',
    
    // Tips
    nigeriaTipTitle: 'Shawarar Yanayi a Gombe & Najeriya',
    nigeriaTipContent: 'A lokacin rani ko zafi mai tsanani, kwantenonin noman tsaye na bushewa da sauri. Rufe saman ƙasa da busassun ganye ko ɓawon itace sannan a yi ban-ruwa da sassafe (ƙarfe 7:00 na safe).',
    
    // Status
    healthy: 'Lafiyayye',
    needsWater: 'Yana Bukatar Ruwa',
    inspected: 'An Duba Kwanan Nan',
  }
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}
