import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Coins, 
  Sun, 
  Droplets, 
  Maximize2, 
  Save, 
  ArrowRight,
  Layers,
  Info
} from 'lucide-react';
import { Language, GardenPlan } from '../types';
import { getTranslation } from '../utils/translations';

interface PlannerViewProps {
  language: Language;
  onSavePlanToGarden: (plan: GardenPlan) => void;
}

export const PlannerView: React.FC<PlannerViewProps> = ({ language, onSavePlanToGarden }) => {
  const t = getTranslation(language);

  // Form inputs
  const [spaceType, setSpaceType] = useState('balcony');
  const [spaceDimensions, setSpaceDimensions] = useState('2m x 1m');
  const [budgetNaira, setBudgetNaira] = useState(25000);
  const [sunlightHours, setSunlightHours] = useState(6);
  const [waterAccess, setWaterAccess] = useState('tap-daily');
  const [growingMethod, setGrowingMethod] = useState('vertical-pipe');
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [selectedCrops, setSelectedCrops] = useState<string[]>(['Lettuce', 'Spinach (Alayyaho)']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<GardenPlan | null>(null);

  const availableCropOptions = [
    { id: 'lettuce', name: 'Lettuce', local: 'Salak', icon: '🥬', duration: '30-45 days' },
    { id: 'spinach', name: 'Spinach', local: 'Alayyaho', icon: '🍃', duration: '25-40 days' },
    { id: 'tomatoes', name: 'Tomatoes', local: 'Tumatir', icon: '🍅', duration: '60-80 days' },
    { id: 'pepper', name: 'Hot Pepper', local: 'Attarugu', icon: '🌶️', duration: '70-90 days' },
    { id: 'fluted-pumpkin', name: 'Fluted Pumpkin', local: 'Ugu', icon: '🌿', duration: '30-50 days' },
    { id: 'mint', name: 'Mint & Herbs', local: 'Na\'a-na\'a', icon: '🌱', duration: '20-30 days' },
  ];

  const handleToggleCrop = (cropName: string) => {
    if (selectedCrops.includes(cropName)) {
      if (selectedCrops.length > 1) {
        setSelectedCrops(selectedCrops.filter(c => c !== cropName));
      }
    } else {
      setSelectedCrops([...selectedCrops, cropName]);
    }
  };

  const handleGeneratePlan = async () => {
    setIsGenerating(true);
    // Simulate smart plan calculation based on Nigerian vertical farming constraints
    setTimeout(() => {
      const plan: GardenPlan = {
        id: `plan-${Date.now()}`,
        title: `${spaceType === 'balcony' ? 'Balcony' : 'Backyard Wall'} Vertical Farm System`,
        spaceType,
        dimensions: spaceDimensions,
        budgetNaira,
        sunlightHours,
        waterAccess,
        growingMethod,
        recommendedCrops: selectedCrops,
        materials: [
          { name: '4-inch PVC Pipes (4 meters, drilled with cup holes)', estimatedNaira: 8500, notes: 'Available in local building material markets' },
          { name: 'End Caps & L-Joint connectors', estimatedNaira: 2500, notes: 'To seal and link pipe tiers' },
          { name: 'Wooden wall brackets or metal support hooks', estimatedNaira: 3500, notes: 'Mount securely against concrete/block wall' },
          { name: 'Potting mix (Topsoil + aged poultry manure + rice husk)', estimatedNaira: 3000, notes: 'Lightweight aerated mixture essential for vertical pipes' },
          { name: 'Certified local vegetable seeds & nursery trays', estimatedNaira: 2000, notes: 'High germination rate seeds for chosen crops' },
          { name: '5-litre gravity drip reservoir + tube & drippers', estimatedNaira: 4000, notes: 'Saves water and ensures uniform root hydration' }
        ],
        totalEstimatedCost: 23500,
        setupInstructions: [
          'Step 1: Mount the wooden or metal brackets vertically on your selected wall space (ensure it receives at least 5-6 hours of sunlight).',
          'Step 2: Position the drilled 4-inch PVC pipes horizontally across the brackets with a slight 3-degree slope for drainage.',
          'Step 3: Mix 50% clean garden loam with 30% dried compost/poultry manure and 20% rice husk or coarse sand for aeration.',
          'Step 4: Fill net cups or pipe pockets with the potting mix, leaving 1 cm below the rim.',
          'Step 5: Pre-soak seeds in room-temperature water for 4 hours, plant 2 seeds per hole, and water gently with a fine mist.'
        ],
        maintenanceTips: [
          'Watering: Check soil moisture by pressing your finger into the top cup. In hot Gombe afternoons, inspect soil at 1:00 PM.',
          'Nutrient feeding: Add liquid compost tea or mild organic fertilizer every 10 days.',
          'Pest inspection: Look under leaves twice a week for aphids or spider mites. Spray neem oil solution if spotted.'
        ],
        safetyAndLimitations: [
          'Estimate Notice: Cost of PVC and brackets may vary by ±15% depending on local market vendor.',
          'Wall Anchor Safety: Ensure wall plugs and hooks can support the wet weight of soil (~25kg when fully watered).',
          'Sunlight Requirement: Leafy vegetables (spinach/lettuce) thrive on 4-5 hours; fruiting crops (tomatoes/peppers) require 6+ hours direct sunlight.'
        ],
        createdAt: new Date().toLocaleDateString()
      };
      setGeneratedPlan(plan);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Interactive AI Planner' : 'Mai Shirya Lambu'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
              {language === 'en' ? 'AI Vertical Garden System Planner' : 'Tsara Lambunka na Tsaye'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              {language === 'en'
                ? 'Input your space dimensions, budget in Nigerian Naira (₦), and preferred crops. Our system generates an optimized vertical layout, materials checklist, and cost breakdown.'
                : 'Shigar da girman fili, kuɗin da kake da shi a Naira (₦), da kayan lambun da kake so. Tsarin zai lissafa kayan aiki da matakan kafa lambun.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs (Left 5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-5">
          <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#15803D]" />
            <span>{language === 'en' ? '1. Garden Specifications' : '1. Bayanan Filin Lambu'}</span>
          </h3>

          {/* Space Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Space Location / Type' : 'Wurin Lambun'}
            </label>
            <select
              value={spaceType}
              onChange={(e) => setSpaceType(e.target.value)}
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#15803D] bg-white font-medium text-slate-700"
            >
              <option value="balcony">Balcony / Verandah Wall</option>
              <option value="backyard-wall">Backyard Concrete Wall</option>
              <option value="corridor">Narrow Corridor / Courtyard</option>
              <option value="rooftop">Rooftop / Terrace Edge</option>
              <option value="indoor-window">Indoor Sunny Window Sill</option>
            </select>
          </div>

          {/* Dimensions & Budget Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'en' ? 'Approx. Space' : 'Fadin Wuri'}
              </label>
              <input
                type="text"
                value={spaceDimensions}
                onChange={(e) => setSpaceDimensions(e.target.value)}
                placeholder="e.g. 2m x 1m"
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#15803D] bg-white text-slate-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'en' ? 'Budget (₦ Naira)' : 'Kuɗin da Ake da Shi (₦)'}
              </label>
              <input
                type="number"
                step="1000"
                min="5000"
                max="500000"
                value={budgetNaira}
                onChange={(e) => setBudgetNaira(Number(e.target.value))}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#15803D] bg-white text-slate-700 font-semibold"
              />
            </div>
          </div>

          {/* Growing Method */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Vertical Growing Method' : 'Hanyar Noman Tsaye'}
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setGrowingMethod('vertical-pipe')}
                className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                  growingMethod === 'vertical-pipe'
                    ? 'border-[#15803D] bg-[#DCFCE7] text-[#14532D]'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                }`}
              >
                <div className="font-bold">PVC Pipe Tower</div>
                <span className="text-[10px] text-slate-500">Tiered horizontal or upright tubes</span>
              </button>

              <button
                type="button"
                onClick={() => setGrowingMethod('soil-containers')}
                className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                  growingMethod === 'soil-containers'
                    ? 'border-[#15803D] bg-[#DCFCE7] text-[#14532D]'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                }`}
              >
                <div className="font-bold">Stacked Containers</div>
                <span className="text-[10px] text-slate-500">Recycled drums & pots on rack</span>
              </button>

              <button
                type="button"
                onClick={() => setGrowingMethod('trellis-tower')}
                className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                  growingMethod === 'trellis-tower'
                    ? 'border-[#15803D] bg-[#DCFCE7] text-[#14532D]'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                }`}
              >
                <div className="font-bold">Wall Trellis / Mesh</div>
                <span className="text-[10px] text-slate-500">For climbing vines (Ugu, tomatoes)</span>
              </button>

              <button
                type="button"
                onClick={() => setGrowingMethod('hydroponics')}
                className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                  growingMethod === 'hydroponics'
                    ? 'border-[#15803D] bg-[#DCFCE7] text-[#14532D]'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                }`}
              >
                <div className="font-bold">NFT Hydroponics</div>
                <span className="text-[10px] text-slate-500">Soil-less nutrient solution</span>
              </button>
            </div>
          </div>

          {/* Sunlight & Water Access */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>{language === 'en' ? 'Daily Sunlight' : 'Hasken Rana'}</span>
              </label>
              <select
                value={sunlightHours}
                onChange={(e) => setSunlightHours(Number(e.target.value))}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value={4}>3 - 4 hours (Partial shade)</option>
                <option value={6}>5 - 6 hours (Moderate sun)</option>
                <option value={8}>7+ hours (Full direct sun)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                <span>{language === 'en' ? 'Water Access' : 'Ruwa'}</span>
              </label>
              <select
                value={waterAccess}
                onChange={(e) => setWaterAccess(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="tap-daily">Daily Tap / Borehole</option>
                <option value="rain-stored">Stored Rainwater</option>
                <option value="well-water">Well Water / Hand Carried</option>
              </select>
            </div>
          </div>

          {/* Select Preferred Crops */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Select Preferred Vegetables' : 'Zabi Kayan Lambu'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availableCropOptions.map((crop) => {
                const isSelected = selectedCrops.includes(crop.name);
                return (
                  <button
                    key={crop.id}
                    type="button"
                    onClick={() => handleToggleCrop(crop.name)}
                    className={`p-2 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#15803D] bg-[#DCFCE7] text-[#14532D] shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">{crop.icon}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />}
                    </div>
                    <div className="mt-1">
                      <span className="font-bold text-[11px] block">{crop.name}</span>
                      <span className="text-[10px] text-slate-400">({crop.local})</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="button"
            disabled={isGenerating}
            onClick={handleGeneratePlan}
            className="w-full py-3 px-4 rounded-xl bg-[#15803D] hover:bg-[#14532D] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-[#22C55E]" />
                <span>{language === 'en' ? 'Designing Vertical Farm...' : 'Ana Shirya Lambu...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#22C55E]" />
                <span>{language === 'en' ? 'Generate Garden Plan' : 'Ƙirƙiri Tsarin Lambu'}</span>
              </>
            )}
          </button>
        </div>

        {/* Results / Plan Display (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {generatedPlan ? (
            <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-6 animate-fadeIn">
              {/* Plan Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">
                      Generated Plan
                    </span>
                    <span className="text-xs text-slate-400">{generatedPlan.createdAt}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#14532D] mt-1">
                    {generatedPlan.title}
                  </h3>
                </div>

                <button
                  onClick={() => onSavePlanToGarden(generatedPlan)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15803D] text-white font-bold text-xs hover:bg-[#14532D] shadow-xs transition-colors self-start sm:self-auto"
                >
                  <Save className="w-4 h-4 text-[#22C55E]" />
                  <span>{language === 'en' ? 'Save Plan to My Garden' : 'Ajiye a Lambuna'}</span>
                </button>
              </div>

              {/* Cost Summary Box */}
              <div className="p-4 rounded-xl bg-[#F8FAF7] border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase">Estimated Setup Cost</span>
                  <div className="text-2xl font-black text-[#15803D]">
                    ₦{generatedPlan.totalEstimatedCost.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Your Budget: ₦{generatedPlan.budgetNaira.toLocaleString()} ({budgetNaira >= generatedPlan.totalEstimatedCost ? '✅ Within Budget' : '⚠️ Requires adjustment'})
                  </span>
                </div>
                <div className="text-xs text-slate-600 sm:text-right">
                  <div className="font-semibold text-[#14532D]">Selected Crops:</div>
                  <div>{generatedPlan.recommendedCrops.join(', ')}</div>
                </div>
              </div>

              {/* Materials Checklist */}
              <div>
                <h4 className="font-bold text-sm text-[#14532D] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>Materials & Estimated Costs (Nigerian Market Reference)</span>
                </h4>
                <div className="space-y-2">
                  {generatedPlan.materials.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-slate-200/80 bg-white flex items-start justify-between gap-3 text-xs">
                      <div>
                        <span className="font-bold text-slate-800">{m.name}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{m.notes}</p>
                      </div>
                      <span className="font-bold text-[#15803D] whitespace-nowrap">
                        ~₦{m.estimatedNaira.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h4 className="font-bold text-sm text-[#14532D] mb-3">
                  Step-by-Step Assembly Instructions
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {generatedPlan.setupInstructions.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Safety & Assumptions */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>Assumptions, Estimates & Safety Notice</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-800">
                  {generatedPlan.safetyAndLimitations.map((lim, idx) => (
                    <li key={idx}>{lim}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Empty state placeholder before generating */
            <div className="bg-white rounded-2xl p-10 border border-dashed border-emerald-300 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                <Compass className="w-8 h-8" />
              </div>
              <div className="max-w-md">
                <h3 className="font-bold text-lg text-[#14532D]">
                  {language === 'en' ? 'Ready to Plan Your Vertical Garden?' : 'A Shirye Domin Tsara Lambu?'}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Configure your space details and budget on the left, then click "Generate Garden Plan" to calculate materials, planting tiers, and cost estimates.'
                    : 'Zaɓi bayanai a hagu sannan ka danna "Ƙirƙiri Tsarin Lambu" don samun lissafin kayan aiki.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAF7] border border-slate-200/80 text-left text-xs text-slate-600 space-y-2 max-w-sm">
                <span className="font-bold text-[#14532D] block">Sample Quick Setup:</span>
                <div>• Space: 2m x 1m balcony wall</div>
                <div>• Target: Fresh spinach & lettuce for home use</div>
                <div>• Estimated starter cost: ₦18,000 - ₦25,000</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
