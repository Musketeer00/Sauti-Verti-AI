import React, { useState } from 'react';
import { 
  Stethoscope, 
  UploadCloud, 
  Camera, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Save, 
  RefreshCw,
  Info,
  Leaf
} from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';

interface DoctorViewProps {
  language: Language;
  onSaveObservationToGarden: (obs: any) => void;
}

export const DoctorView: React.FC<DoctorViewProps> = ({ language, onSaveObservationToGarden }) => {
  const t = getTranslation(language);

  const [selectedCrop, setSelectedCrop] = useState('Lettuce (Salak)');
  const [growingMethod, setGrowingMethod] = useState('Soil Containers');
  const [symptomText, setSymptomText] = useState('Lower leaves are turning pale yellow and drooping, but top leaves remain green.');
  const [wateringHistory, setWateringHistory] = useState('Watered once every afternoon in hot sun.');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<any | null>(null);

  const quickSymptoms = [
    { label: 'Yellowing leaves (Ganyen rawaya)', query: 'Lower leaves are turning pale yellow, veins are visible.' },
    { label: 'Curling leaves (Ganye mai karkacewa)', query: 'Leaves are rolling inward at edges with slight crinkling.' },
    { label: 'White powdery spots (Farin foda)', query: 'White flour-like powdery patches appearing on upper leaf surfaces.' },
    { label: 'Slow growth & stunted stems (Rashin girma)', query: 'Plant has barely grown in 2 weeks despite regular watering.' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate robust, cautious diagnosis response adhering strictly to PRD safety guidelines
    setTimeout(() => {
      const result = {
        crop: selectedCrop,
        symptomSummary: symptomText,
        hasImage: !!imagePreview,
        confidenceLevel: imagePreview ? 'Moderate (Assisted by Photograph)' : 'Preliminary (Based on text description)',
        plausibleCauses: [
          {
            cause: 'Nitrogen Deficiency (Chlorosis in older leaves)',
            likelihood: 'High',
            details: 'Vegetables in small vertical containers wash out soluble nitrogen quickly through frequent drainage holes.'
          },
          {
            cause: 'Overwatering / Poor root oxygenation',
            likelihood: 'Medium',
            details: 'Watering during peak heat or stagnant bottom runoff can suffocate container roots, leading to yellowing.'
          },
          {
            cause: 'Heat Stress & Container Root Baking',
            likelihood: 'Low to Medium',
            details: 'Dark plastic containers exposed to direct afternoon sun can heat soil above 35°C, impairing nutrient uptake.'
          }
        ],
        checksToPerform: [
          'Drainage Test: Check bottom holes of the vertical cup to ensure water does not pool longer than 5 minutes after pouring.',
          'Finger Moisture Check: Push finger 2 inches into container soil before morning watering. If it feels soggy and cool, skip watering.',
          'Underside Leaf Inspection: Use a magnifying glass or phone torch to check under yellow leaves for tiny moving specks (spider mites or aphids).'
        ],
        recommendedActions: [
          'Apply diluted organic liquid fertilizer (compost tea or diluted fermented animal manure) once every 7 days.',
          'Shift watering schedule strictly to early morning (6:30 - 8:00 AM) to prevent root scald.',
          'Shade container pots with burlap/jute sack or paint exterior white to reflect harsh heat in dry seasons.'
        ],
        limitationsAndDisclaimer: 'Important agricultural notice: This is an AI-assisted diagnostic assessment based on visual and descriptive indicators, not a definitive laboratory test. If symptoms persist or spread rapidly, consult your local agricultural extension officer (e.g. ADP Gombe).'
      };
      setDiagnosisResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-2">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'AI Plant Doctor' : 'Likitancin Shuka na AI'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
          {language === 'en' ? 'Plant Health & Symptom Diagnostic Assistant' : 'Binciken Lafiyar Shuka ta Hoto da Bayani'}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
          {language === 'en'
            ? 'Identify potential pests, watering imbalances, and nutrient deficiencies. Upload a photo or select symptoms for cautious, step-by-step guidance.'
            : 'Gano cututtukan tsirrai, rashin ruwa ko sinadaran takin zamani. Ɗora hoto ko bayyana halin da shukarka ke ciki don samun shawarwari.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input panel (Left 5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-5">
          <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
            <Leaf className="w-5 h-5 text-[#15803D]" />
            <span>{language === 'en' ? '1. Describe the Plant Problem' : '1. Bayyana Matsalar Shuka'}</span>
          </h3>

          {/* Photo Upload Area */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Upload Plant Photo (Optional but Recommended)' : 'Ɗora Hoton Shuka (Idan akwai)'}
            </label>
            <div className="relative border-2 border-dashed border-emerald-300 hover:border-[#15803D] rounded-2xl p-4 text-center bg-[#F8FAF7] transition-colors">
              {imagePreview ? (
                <div className="space-y-3">
                  <img 
                    src={imagePreview} 
                    alt="Uploaded plant" 
                    className="max-h-48 mx-auto rounded-xl object-cover shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="text-xs font-semibold text-red-600 hover:underline"
                  >
                    Remove Photo
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center justify-center space-y-2 py-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#15803D] block">
                      Click to choose or take a photo
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Supports JPG, PNG up to 10MB
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Crop & Growing Method */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'en' ? 'Crop Name' : 'Sunan Shuka'}
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="Lettuce (Salak)">Lettuce (Salak)</option>
                <option value="Spinach (Alayyaho)">Spinach (Alayyaho)</option>
                <option value="Tomatoes (Tumatir)">Tomatoes (Tumatir)</option>
                <option value="Hot Pepper (Attarugu)">Hot Pepper (Attarugu)</option>
                <option value="Fluted Pumpkin (Ugu)">Fluted Pumpkin (Ugu)</option>
                <option value="Other Herb / Vegetable">Other Vegetable</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'en' ? 'Growing Method' : 'Hanyar Noma'}
              </label>
              <select
                value={growingMethod}
                onChange={(e) => setGrowingMethod(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="Soil Containers">Soil Containers / Pots</option>
                <option value="Vertical PVC Pipe">Vertical PVC Pipe Tower</option>
                <option value="Wall Trellis">Wall Trellis / Mesh</option>
                <option value="Hydroponics">Hydroponics (NFT)</option>
              </select>
            </div>
          </div>

          {/* Quick Symptoms pills */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Common Symptoms (Click to fill)' : 'Alamomi na Yau da Kullum'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {quickSymptoms.map((qs, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSymptomText(qs.query)}
                  className="text-[11px] px-2.5 py-1 rounded-lg border border-slate-200 hover:border-emerald-400 bg-slate-50 text-slate-600 transition-colors"
                >
                  {qs.label}
                </button>
              ))}
            </div>
          </div>

          {/* Symptoms Description Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Detailed Symptom Description' : 'Cikakken Bayanin Alamomin'}
            </label>
            <textarea
              rows={3}
              value={symptomText}
              onChange={(e) => setSymptomText(e.target.value)}
              placeholder="Describe discoloration, wilting, curling or insects observed..."
              className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#15803D] bg-white text-slate-700"
            />
          </div>

          {/* Watering context */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {language === 'en' ? 'Recent Watering or Weather Condition' : 'Yanayin Ban-ruwa kwanan nan'}
            </label>
            <input
              type="text"
              value={wateringHistory}
              onChange={(e) => setWateringHistory(e.target.value)}
              placeholder="e.g. Daily morning watering, hot sun"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700"
            />
          </div>

          {/* Diagnose Button */}
          <button
            type="button"
            disabled={isAnalyzing}
            onClick={handleAnalyze}
            className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-white" />
                <span>{language === 'en' ? 'Examining Symptoms & Photo...' : 'Ana Binciken Shuka...'}</span>
              </>
            ) : (
              <>
                <Stethoscope className="w-4 h-4" />
                <span>{language === 'en' ? 'Run Plant Health Assessment' : 'Fara Binciken Lafiya'}</span>
              </>
            )}
          </button>
        </div>

        {/* Results Panel (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {diagnosisResult ? (
            <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-6 animate-fadeIn">
              {/* Result Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                      Plant Doctor Assessment
                    </span>
                    <span className="text-xs text-slate-400">
                      Confidence: {diagnosisResult.confidenceLevel}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#14532D] mt-1">
                    {diagnosisResult.crop} Health Report
                  </h3>
                </div>

                <button
                  onClick={() => {
                    onSaveObservationToGarden({
                      crop: diagnosisResult.crop,
                      symptoms: diagnosisResult.symptomSummary,
                      causes: diagnosisResult.plausibleCauses[0].cause,
                      date: new Date().toLocaleDateString()
                    });
                    alert(language === 'en' ? 'Observation recorded in My Garden!' : 'An yi rikodin a Lambuna!');
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#15803D] text-white font-bold text-xs hover:bg-[#14532D] shadow-xs transition-colors self-start sm:self-auto"
                >
                  <Save className="w-4 h-4" />
                  <span>{language === 'en' ? 'Save Observation' : 'Ajiye Bayani'}</span>
                </button>
              </div>

              {/* Plausible Causes */}
              <div>
                <h4 className="font-bold text-sm text-[#14532D] mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                  <span>Possible Causes (Ordered by Plausibility)</span>
                </h4>
                <div className="space-y-2.5">
                  {diagnosisResult.plausibleCauses.map((item: any, idx: number) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-[#F8FAF7] space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 text-sm">{item.cause}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          item.likelihood === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.likelihood} Likelihood
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[11px]">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Checks User Can Perform */}
              <div>
                <h4 className="font-bold text-sm text-[#14532D] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>What to Check (Physical Verification)</span>
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {diagnosisResult.checksToPerform.map((chk: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{chk}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Next Steps */}
              <div>
                <h4 className="font-bold text-sm text-[#14532D] mb-3">
                  Recommended Organic & Care Next Steps
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {diagnosisResult.recommendedActions.map((act: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#15803D] font-bold">•</span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  {diagnosisResult.limitationsAndDisclaimer}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-dashed border-red-200 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div className="max-w-md">
                <h3 className="font-bold text-lg text-[#14532D]">
                  {language === 'en' ? 'Check Your Crop\'s Health' : 'Duba Lafiyar Shukarka'}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Take a photo of any strange leaves or describe the symptoms on the left. The AI Plant Doctor will provide cautious diagnostics and immediate checks.'
                    : 'Ɗora hoton ganyen da ya canza launi ko bayyana matsalar a hagu domin samun bincike.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
