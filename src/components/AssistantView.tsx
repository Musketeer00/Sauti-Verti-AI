import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Languages, 
  Sparkles, 
  Bookmark, 
  HelpCircle,
  Copy,
  Check,
  RefreshCw,
  Sprout
} from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  language: Language;
  timestamp: string;
  saved?: boolean;
}

interface AssistantViewProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const AssistantView: React.FC<AssistantViewProps> = ({ language, setLanguage }) => {
  const t = getTranslation(language);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: language === 'en'
        ? 'Hello! I am Sauti Verti AI, your agricultural mentor for small-space vertical farming. You can ask me questions about vertical systems, watering schedules, organic compost, or crop spacing in English or Hausa. How can I assist your garden today?'
        : 'Sannu! Ni ne Sauti Verti AI, mai ba ku shawara kan dabarun noman kayan lambu a tsaye. Kuna iya tambayata game da bututun PVC, jadawalin ban-ruwa, takin gargajiya, ko nisan shuka a cikin Hausa ko Turanci. Me kuke son sani yau?',
      language,
      timestamp: '10:00 AM'
    }
  ]);

  const quickPrompts = language === 'en' ? [
    'How do I make organic compost tea for container spinach?',
    'What is the best spacing for lettuce in a 4-inch vertical PVC pipe?',
    'How do I protect vertical crops during hot harmattan winds in Gombe?',
    'Which vegetables grow well with only 4 hours of morning sunlight?'
  ] : [
    'Yaya ake haɗa ruwan takin gargajiya don shukar alayyaho?',
    'Wane tazara ya kamata a bayar tsakanin salak a bututun PVC?',
    'Yaya zan kare lambuna daga zafin rana da iskar harmattan a Gombe?',
    'Wadanne kayan lambu ne ke girma da awanni 4 na hasken rana?'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      language,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Realistic bilingual agricultural mentor responses
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('compost') || lower.includes('taki') || lower.includes('tea')) {
        reply = language === 'en'
          ? `**Organic Compost Tea Recipe for Vertical Plants:**\n\n1. **Ingredients:** 1 cup of cured poultry or cow manure, 5 liters of clean non-chlorinated water, 1 tablespoon of molasses or brown sugar (fuels beneficial microbes).\n2. **Brewing:** Soak the manure in a porous cloth or breathable bag inside a bucket for 24 to 48 hours, stirring occasionally.\n3. **Application:** Dilute with water until it looks like weak tea (1 part tea to 3 parts water). Pour 200ml around each root base once every 10 days. Avoid pouring directly on leafy greens before harvest.`
          : `**Yadda ake haɗa Ruwan Takin Gargajiya:**\n\n1. **Abubuwan Haɗawa:** Kofi ɗaya na kashin kaji ko taki da ya riga ya bushe, lita 5 na ruwa mai tsabta, cokali ɗaya na sukari ko zuma (don ciyar da ƙwayoyin cuta masu amfani).\n2. **Jiƙawa:** A jiƙa takin a cikin buhu ko raga a cikin guga na tsawon awanni 24 zuwa 48, ana gaurayawa.\n3. **Amfani:** A zuba ruwa a ciki har sai launinsa ya yi kamar shayi marar ƙarfi. A zuba kimanin mililita 200 a gindin kowace shuka duk bayan kwanaki 10. Kada a fesa a saman ganye daf da girbi.`;
      } else if (lower.includes('spacing') || lower.includes('tazara') || lower.includes('pvc')) {
        reply = language === 'en'
          ? `**Recommended Crop Spacing in Vertical 4-Inch Pipes:**\n\n- **Lettuce (Salak):** 15 cm to 20 cm apart. This prevents overcrowding and lets leaves expand.\n- **Spinach (Alayyaho):** 10 cm to 15 cm apart. Can be planted slightly denser for continuous picking.\n- **Tomatoes (Tumatir):** Requires minimum 30 cm spacing and sturdy support trellises. Prefer dwarf or bush varieties (determinate) for vertical containers.\n\n*Pro-tip:* Stagger cup holes diagonally around the pipe rather than in a straight line to maximize sunlight exposure!`
          : `**Tazara Tsakanin Shuke-shuke a Bututun PVC:**\n\n- **Salak (Lettuce):** Santimita 15 zuwa 20 tsakanin kowace kofa don ba wa ganye damar buɗewa.\n- **Alayyaho (Spinach):** Santimita 10 zuwa 15 tsakanin shuka domin a riƙa karyar ganye ana amfani.\n- **Tumatir:** Yana buƙatar aƙalla santimita 30 da ginshiƙin ɗaurewa. Ya fi dacewa a zaɓi irin tumatir marar tsawo (dwarf).\n\n*Hikima:* A riƙa huda kofofin a karkace (zig-zag) maimakon layi guda don kowace shuka ta sami isasshen hasken rana!`;
      } else if (lower.includes('harmattan') || lower.includes('zafi') || lower.includes('wind') || lower.includes('gombe')) {
        reply = language === 'en'
          ? `**Protecting Vertical Crops from Harmattan & Heat in Northern Nigeria:**\n\n1. **Mulch Topsoil:** Place dried lawn clippings or wood shavings on the exposed soil of each container to cut evaporation by 60%.\n2. **Wind Barrier:** Use green agricultural shade netting or palm fronds on the windward side to shield tender seedlings from dusty dry winds.\n3. **Early Morning Watering:** Water at 6:30 AM. Avoid midday watering which heats water in pipes and shocks roots.\n4. **Hydration Check:** Dip finger 2 inches into soil daily; vertical pipes dry twice as fast as flat ground.`
          : `**Kariyar Lambun Tsaye daga Zafin Rana da Iskar Harmattan a Arewa:**\n\n1. **Rufe Ƙasa (Mulching):** Zuba busassun ciyawa ko ɓawon itace a saman ƙasa don hana ruwa bushewa da sauri.\n2. **Kariyar Iska:** Yi amfani da raga mai kariya ko ganyen dabino a gefen da iska ke busowa don kare sabbin tsirrai daga ƙura da busasshen iska.\n3. **Ban-ruwa da Safe:** Yi ban-ruwa da ƙarfe 6:30 na safe. Kada a yi ban-ruwa a tsakiyar rana domin ruwan na zafi a bututu.\n4. **Duba Danshi:** Duba danshin ƙasa a kullum domin bututu na bushewa da sauri fiye da noman ƙasa.`;
      } else {
        reply = language === 'en'
          ? `Thank you for asking! For **${text}**, vertical farming allows close monitoring of both soil and moisture. Ensure your containers have adequate drainage holes, receive 5-6 hours of sunlight, and apply organic liquid feed every 10 days. Would you like a specific materials checklist or crop care schedule?`
          : `Na gode da wannan tambaya! Game da **${text}**, noman tsaye yana ba da damar kula da danshi da lafiyar shuka a sauƙaƙe. Tabbatar kwantenonka na da kofofin fitar da ruwa, shuka na samun hasken rana na awanni 5-6, kuma a ba da takin ruwa duk bayan kwanaki 10. Kuna son tsarin kayan aiki ko jadawalin ban-ruwa?`;
      }

      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        language,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSaveMessage = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, saved: !m.saved } : m));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header with Language selector */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#14532D] text-xs font-bold mb-2">
            <Bot className="w-3.5 h-3.5 text-[#15803D]" />
            <span>{language === 'en' ? 'Bilingual Care Assistant' : 'Mataimakin Noma da Hausa'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
            {language === 'en' ? 'Ask Sauti Verti AI' : 'Tambayi Sauti Verti AI'}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
            {language === 'en'
              ? 'Get instant agricultural answers for small-space vertical setups in English or Hausa. Ask about composting, watering, pests, and local Nigerian crops.'
              : 'Sami amsoshi nan take kan dabarun noman tsaye da Hausa ko Turanci. Tambayi kan haɗa taki, ban-ruwa, da kula da tsirrai.'}
          </p>
        </div>

        {/* Language selector toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-[#F8FAF7] p-1.5 rounded-xl border border-slate-200">
          <span className="text-xs font-medium text-slate-500 pl-2 flex items-center gap-1">
            <Languages className="w-3.5 h-3.5" />
            <span>Response:</span>
          </span>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('ha')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'ha'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Hausa (🇳🇬)
          </button>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-emerald-950/10 shadow-sm flex flex-col h-[600px] overflow-hidden">
        {/* Messages Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isUser 
                    ? 'bg-[#15803D] text-white' 
                    : 'bg-[#DCFCE7] text-[#14532D] border border-emerald-200'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className="space-y-1">
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#15803D] text-white rounded-tr-xs'
                        : 'bg-[#F8FAF7] border border-slate-200/90 text-slate-800 rounded-tl-xs shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {/* Message footer */}
                  <div className={`flex items-center gap-2 text-[10px] text-slate-400 px-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <>
                        <span>•</span>
                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="hover:text-slate-600 flex items-center gap-1"
                        >
                          {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>
                        <span>•</span>
                        <button
                          onClick={() => toggleSaveMessage(msg.id)}
                          className="hover:text-[#15803D] flex items-center gap-1"
                        >
                          <Bookmark className={`w-3 h-3 ${msg.saved ? 'fill-[#15803D] text-[#15803D]' : ''}`} />
                          <span>{msg.saved ? 'Saved' : 'Save'}</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 mr-auto items-center text-xs text-slate-500 animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#14532D] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 text-slate-600 rounded-tl-xs">
                {language === 'en' ? 'Sauti Verti is drafting advice...' : 'Sauti Verti na rubuta amsa...'}
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggested Prompts */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(qp)}
              className="whitespace-nowrap text-[11px] font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-[#15803D] transition-colors shadow-2xs"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === 'en' ? 'Ask a question in English or Hausa...' : 'Yi tambaya a Hausa ko Turanci...'}
            className="flex-1 text-xs sm:text-sm p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#15803D] bg-[#F8FAF7] text-slate-800"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-3 rounded-xl bg-[#15803D] hover:bg-[#14532D] text-white disabled:opacity-40 transition-colors shadow-sm"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
