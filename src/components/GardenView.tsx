import React, { useState } from 'react';
import { 
  Sprout, 
  Plus, 
  Droplets, 
  Calendar, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FileText,
  Sparkles,
  Download,
  Upload
} from 'lucide-react';
import { Language, Crop, Reminder, Activity } from '../types';
import { getTranslation } from '../utils/translations';

interface GardenViewProps {
  language: Language;
  crops: Crop[];
  reminders: Reminder[];
  activities: Activity[];
  onAddCrop: (crop: Crop) => void;
  onDeleteCrop: (id: string) => void;
  onAddReminder: (reminder: Reminder) => void;
  onToggleReminder: (id: string) => void;
  onDeleteReminder: (id: string) => void;
  onRecordWatering: (cropName: string) => void;
}

export const GardenView: React.FC<GardenViewProps> = ({
  language,
  crops,
  reminders,
  activities,
  onAddCrop,
  onDeleteCrop,
  onAddReminder,
  onToggleReminder,
  onDeleteReminder,
  onRecordWatering
}) => {
  const t = getTranslation(language);

  // New crop modal state
  const [showAddCropModal, setShowAddCropModal] = useState(false);
  const [newCropName, setNewCropName] = useState('Spinach');
  const [newCropLocal, setNewCropLocal] = useState('Alayyaho');
  const [newCropVariety, setNewCropVariety] = useState('Local Broadleaf');
  const [newCropMethod, setNewCropMethod] = useState<'soil-containers' | 'vertical-pipe' | 'trellis-tower' | 'hydroponics'>('vertical-pipe');
  const [newCropDate, setNewCropDate] = useState(new Date().toISOString().split('T')[0]);

  // New reminder modal state
  const [showAddReminderModal, setShowAddReminderModal] = useState(false);
  const [reminderTitle, setReminderTitle] = useState('Morning Root Watering');
  const [reminderCrop, setReminderCrop] = useState(crops[0]?.name || 'Lettuce');
  const [reminderTime, setReminderTime] = useState('07:00 AM');
  const [reminderType, setReminderType] = useState<'watering' | 'fertilizer' | 'sunlight' | 'inspection' | 'harvest'>('watering');

  const handleCreateCrop = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Crop = {
      id: `crop-${Date.now()}`,
      name: newCropName,
      localName: newCropLocal,
      variety: newCropVariety,
      growingMethod: newCropMethod,
      plantingDate: newCropDate,
      status: 'vegetative',
      healthScore: 95,
      harvestEstimate: '3-4 weeks',
      notes: 'Planted with 30% organic poultry compost mix.',
      waterSchedule: 'Daily early morning'
    };
    onAddCrop(created);
    setShowAddCropModal(false);
  };

  const handleCreateReminder = (e: React.FormEvent) => {
    e.preventDefault();
    const reminder: Reminder = {
      id: `rem-${Date.now()}`,
      title: reminderTitle,
      cropName: reminderCrop,
      scheduledAt: reminderTime,
      completed: false,
      priority: 'medium',
      type: reminderType
    };
    onAddReminder(reminder);
    setShowAddReminderModal(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold mb-2">
            <Sprout className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Persistent Garden Tracker' : 'Bibiyar Lambu'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#14532D]">
            {language === 'en' ? 'My Vertical Garden & Plants' : 'Lambuna da Shuke-shukena'}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
            {language === 'en'
              ? 'Manage all active crops, record daily watering routines, log physical observations, and track harvest milestones.'
              : 'Gudanar da dukkan tsirran lambunka, rubuta shayarwa ta kullum, da kiyaye kwanakin girbi.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowAddReminderModal(true)}
            className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{language === 'en' ? 'New Task' : 'Aikin Kula'}</span>
          </button>

          <button
            onClick={() => setShowAddCropModal(true)}
            className="px-4 py-2 rounded-xl bg-[#15803D] hover:bg-[#14532D] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4 text-[#22C55E]" />
            <span>{language === 'en' ? 'Add Plant' : 'Ƙara Shuka'}</span>
          </button>
        </div>
      </div>

      {/* Crops Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#22C55E]" />
            <span>{language === 'en' ? `Active Plants (${crops.length})` : `Shuke-shuke Masu Rai (${crops.length})`}</span>
          </h3>
          <span className="text-xs text-slate-400">
            {language === 'en' ? 'Stored locally in browser' : 'An ajiye a na\'ura'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1F2937]">{crop.name}</h4>
                      {crop.localName && (
                        <span className="text-[11px] font-semibold text-[#15803D]">
                          ({crop.localName})
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onDeleteCrop(crop.id)}
                    className="p-1.5 text-slate-300 hover:text-red-500 rounded-lg transition-colors"
                    title="Delete plant"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Method</span>
                    <span className="font-medium text-slate-700 capitalize">{crop.growingMethod.replace('-', ' ')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Planted</span>
                    <span className="font-medium text-slate-700">{crop.plantingDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Health</span>
                    <span className="font-bold text-[#15803D]">{crop.healthScore}% Optimal</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Harvest Est.</span>
                    <span className="font-medium text-slate-700">{crop.harvestEstimate}</span>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-[#F8FAF7] border border-slate-100 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700 block">Care note:</span>
                  <p className="mt-0.5">{crop.notes}</p>
                </div>
              </div>

              {/* Action Buttons for Crop */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onRecordWatering(crop.name)}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Droplets className="w-3.5 h-3.5 text-blue-600" />
                  <span>Log Watered</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two columns: Care Reminders & Garden Activity Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reminders list */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F59E0B]" />
              <span>{language === 'en' ? 'Scheduled Care Tasks' : 'Jadawalin Kula'}</span>
            </h3>
            <button
              onClick={() => setShowAddReminderModal(true)}
              className="text-xs font-bold text-[#15803D] hover:underline"
            >
              + Add
            </button>
          </div>

          <div className="space-y-2.5">
            {reminders.map((r) => (
              <div
                key={r.id}
                className={`p-3.5 rounded-xl border text-xs flex items-start justify-between gap-3 transition-all ${
                  r.completed 
                    ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-60' 
                    : 'bg-[#F8FAF7] border-slate-200 text-slate-700'
                }`}
              >
                <div 
                  onClick={() => onToggleReminder(r.id)}
                  className="flex items-start gap-2.5 cursor-pointer flex-1"
                >
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 ${r.completed ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <div>
                    <span className={`font-bold block ${r.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {r.title}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {r.cropName} • Scheduled: {r.scheduledAt}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onDeleteReminder(r.id)}
                  className="p-1 text-slate-300 hover:text-red-500"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Activity History */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-[#14532D] flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? 'Recent Activity Log' : 'Tarihin Ayyuka'}</span>
            </h3>
            <span className="text-xs text-slate-400">{activities.length} entries</span>
          </div>

          <div className="space-y-2.5 max-h-[300px] overflow-y-auto">
            {activities.map((act) => (
              <div key={act.id} className="p-3 rounded-xl bg-[#F8FAF7] border border-slate-100 flex items-start gap-3 text-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#15803D] flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <Droplets className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 capitalize">{act.type}: {act.cropName}</span>
                    <span className="text-[10px] text-slate-400">{act.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{act.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Crop Modal */}
      {showAddCropModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-[#14532D]">Add New Crop to Garden</h3>
              <button onClick={() => setShowAddCropModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <form onSubmit={handleCreateCrop} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Crop English Name</label>
                <input
                  type="text"
                  required
                  value={newCropName}
                  onChange={(e) => setNewCropName(e.target.value)}
                  placeholder="e.g. Fluted Pumpkin"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Local / Hausa Name</label>
                <input
                  type="text"
                  value={newCropLocal}
                  onChange={(e) => setNewCropLocal(e.target.value)}
                  placeholder="e.g. Ugu / Kabewa"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Variety</label>
                  <input
                    type="text"
                    value={newCropVariety}
                    onChange={(e) => setNewCropVariety(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Growing Method</label>
                  <select
                    value={newCropMethod}
                    onChange={(e) => setNewCropMethod(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                  >
                    <option value="vertical-pipe">PVC Pipe Tower</option>
                    <option value="soil-containers">Soil Containers</option>
                    <option value="trellis-tower">Wall Trellis</option>
                    <option value="hydroponics">Hydroponics</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Planting Date</label>
                <input
                  type="date"
                  value={newCropDate}
                  onChange={(e) => setNewCropDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddCropModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#15803D] hover:bg-[#14532D] text-white font-bold"
                >
                  Save Plant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Reminder Modal */}
      {showAddReminderModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-[#14532D]">Schedule Care Reminder</h3>
              <button onClick={() => setShowAddReminderModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <form onSubmit={handleCreateReminder} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Reminder Title</label>
                <input
                  type="text"
                  required
                  value={reminderTitle}
                  onChange={(e) => setReminderTitle(e.target.value)}
                  placeholder="e.g. Afternoon Misting"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Crop</label>
                  <select
                    value={reminderCrop}
                    onChange={(e) => setReminderCrop(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                  >
                    {crops.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Scheduled Time</label>
                  <input
                    type="text"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    placeholder="e.g. 07:00 AM"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddReminderModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#15803D] hover:bg-[#14532D] text-white font-bold"
                >
                  Save Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
