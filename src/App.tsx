/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { PlannerView } from './components/PlannerView';
import { DoctorView } from './components/DoctorView';
import { AssistantView } from './components/AssistantView';
import { GardenView } from './components/GardenView';
import { SettingsView } from './components/SettingsView';
import { LandingView } from './components/LandingView';
import { TabType, Language, Crop, Reminder, Activity, GardenPlan } from './types';

const INITIAL_CROPS: Crop[] = [
  {
    id: 'crop-1',
    name: 'Lettuce',
    localName: 'Salak',
    variety: 'Great Lakes (Crisphead)',
    growingMethod: 'vertical-pipe',
    plantingDate: '2026-10-02',
    status: 'vegetative',
    healthScore: 96,
    harvestEstimate: '12 days',
    notes: 'Growing in 4-inch PVC tiered pipe. Morning sunlight 6 hours.',
    waterSchedule: 'Daily 7:00 AM (250ml per cup)'
  },
  {
    id: 'crop-2',
    name: 'Spinach',
    localName: 'Alayyaho',
    variety: 'Local Broadleaf',
    growingMethod: 'soil-containers',
    plantingDate: '2026-10-08',
    status: 'vegetative',
    healthScore: 92,
    harvestEstimate: '8 days',
    notes: 'Planted with 30% organic compost mix. Vigorous leaf expansion.',
    waterSchedule: 'Daily 7:00 AM'
  },
  {
    id: 'crop-3',
    name: 'Tomatoes',
    localName: 'Tumatir',
    variety: 'Roma VF (Determinate)',
    growingMethod: 'trellis-tower',
    plantingDate: '2026-09-18',
    status: 'flowering',
    healthScore: 90,
    harvestEstimate: '22 days',
    notes: 'Tied to vertical bamboo stakes. First yellow flower clusters appearing.',
    waterSchedule: 'Every 2 days (deep root soak)'
  }
];

const INITIAL_REMINDERS: Reminder[] = [
  {
    id: 'rem-1',
    title: 'Morning Root Watering (Alayyaho & Salak)',
    cropName: 'Spinach (Alayyaho)',
    scheduledAt: '07:00 AM',
    completed: false,
    priority: 'high',
    type: 'watering'
  },
  {
    id: 'rem-2',
    title: 'Inspect PVC Pipe Drainage Runoff',
    cropName: 'Lettuce (Salak)',
    scheduledAt: '12:30 PM',
    completed: false,
    priority: 'medium',
    type: 'inspection'
  },
  {
    id: 'rem-3',
    title: 'Apply Diluted Organic Compost Tea',
    cropName: 'Tomatoes (Tumatir)',
    scheduledAt: '05:30 PM',
    completed: false,
    priority: 'medium',
    type: 'fertilizer'
  }
];

const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    cropName: 'Spinach (Alayyaho)',
    type: 'watered',
    timestamp: 'Today, 7:15 AM',
    note: 'Applied 250ml rainwater to container cups.'
  },
  {
    id: 'act-2',
    cropName: 'Tomatoes (Tumatir)',
    type: 'inspected',
    timestamp: 'Yesterday, 5:00 PM',
    note: 'Staked stems to trellis. No pest or aphid activity found.'
  },
  {
    id: 'act-3',
    cropName: 'Lettuce (Salak)',
    type: 'planted',
    timestamp: 'Oct 2, 2026',
    note: 'Transplanted seedlings into drilled vertical PVC holes.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Persistent Language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sauti_verti_lang');
    return (saved === 'ha' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sauti_verti_lang', lang);
  };

  // Persistent Crops
  const [crops, setCrops] = useState<Crop[]>(() => {
    try {
      const saved = localStorage.getItem('sauti_verti_crops');
      return saved ? JSON.parse(saved) : INITIAL_CROPS;
    } catch {
      return INITIAL_CROPS;
    }
  });

  useEffect(() => {
    localStorage.setItem('sauti_verti_crops', JSON.stringify(crops));
  }, [crops]);

  // Persistent Reminders
  const [reminders, setReminders] = useState<Reminder[]>(() => {
    try {
      const saved = localStorage.getItem('sauti_verti_reminders');
      return saved ? JSON.parse(saved) : INITIAL_REMINDERS;
    } catch {
      return INITIAL_REMINDERS;
    }
  });

  useEffect(() => {
    localStorage.setItem('sauti_verti_reminders', JSON.stringify(reminders));
  }, [reminders]);

  // Persistent Activities
  const [activities, setActivities] = useState<Activity[]>(() => {
    try {
      const saved = localStorage.getItem('sauti_verti_activities');
      return saved ? JSON.parse(saved) : INITIAL_ACTIVITIES;
    } catch {
      return INITIAL_ACTIVITIES;
    }
  });

  useEffect(() => {
    localStorage.setItem('sauti_verti_activities', JSON.stringify(activities));
  }, [activities]);

  // Handlers
  const handleToggleReminder = (id: string) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  const handleDeleteReminder = (id: string) => {
    setReminders(prev => prev.filter(r => r.id !== id));
  };

  const handleAddReminder = (reminder: Reminder) => {
    setReminders(prev => [reminder, ...prev]);
  };

  const handleAddCrop = (crop: Crop) => {
    setCrops(prev => [crop, ...prev]);
    setActivities(prev => [
      {
        id: `act-${Date.now()}`,
        cropName: crop.name,
        type: 'planted',
        timestamp: 'Just now',
        note: `Added ${crop.name} to garden tracking.`
      },
      ...prev
    ]);
  };

  const handleDeleteCrop = (id: string) => {
    setCrops(prev => prev.filter(c => c.id !== id));
  };

  const handleRecordWatering = (cropName: string) => {
    setActivities(prev => [
      {
        id: `act-${Date.now()}`,
        cropName,
        type: 'watered',
        timestamp: 'Just now',
        note: 'Completed manual watering routine.'
      },
      ...prev
    ]);
    alert(language === 'en' ? `Logged watering for ${cropName}!` : `An rubuta ban-ruwan ${cropName}!`);
  };

  const handleSavePlanToGarden = (plan: GardenPlan) => {
    plan.recommendedCrops.forEach((cropName, idx) => {
      const newCrop: Crop = {
        id: `crop-${Date.now()}-${idx}`,
        name: cropName,
        variety: 'Local selection',
        growingMethod: plan.growingMethod as any,
        plantingDate: new Date().toISOString().split('T')[0],
        status: 'germinating',
        healthScore: 100,
        harvestEstimate: '3-5 weeks',
        notes: `Designed via AI Planner: ${plan.title}`,
        waterSchedule: 'Daily morning watering'
      };
      setCrops(prev => [newCrop, ...prev]);
    });

    setActivities(prev => [
      {
        id: `act-${Date.now()}`,
        cropName: plan.title,
        type: 'planted',
        timestamp: 'Just now',
        note: `Adopted AI Garden Plan with budget ₦${plan.budgetNaira.toLocaleString()}`
      },
      ...prev
    ]);

    setActiveTab('garden');
  };

  const handleSaveObservationToGarden = (obs: any) => {
    setActivities(prev => [
      {
        id: `act-${Date.now()}`,
        cropName: obs.crop,
        type: 'inspected',
        timestamp: 'Just now',
        note: `Plant Doctor check: ${obs.causes}`
      },
      ...prev
    ]);
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to reset all garden records to initial demo defaults?')) {
      setCrops(INITIAL_CROPS);
      setReminders(INITIAL_REMINDERS);
      setActivities(INITIAL_ACTIVITIES);
      localStorage.removeItem('sauti_verti_crops');
      localStorage.removeItem('sauti_verti_reminders');
      localStorage.removeItem('sauti_verti_activities');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#1F2937] font-sans antialiased selection:bg-[#DCFCE7] selection:text-[#14532D]">
      {/* Responsive Sidebar (Desktop Fixed, Mobile Drawer) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Sticky Header with navigation title & quick controls */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          language={language}
          setLanguage={setLanguage}
          onOpenMobileMenu={() => setMobileOpen(true)}
        />

        {/* Dynamic Main Body */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {activeTab === 'dashboard' && (
            <DashboardView
              setActiveTab={setActiveTab}
              language={language}
              crops={crops}
              reminders={reminders}
              onToggleReminder={handleToggleReminder}
            />
          )}

          {activeTab === 'planner' && (
            <PlannerView
              language={language}
              onSavePlanToGarden={handleSavePlanToGarden}
            />
          )}

          {activeTab === 'doctor' && (
            <DoctorView
              language={language}
              onSaveObservationToGarden={handleSaveObservationToGarden}
            />
          )}

          {activeTab === 'assistant' && (
            <AssistantView
              language={language}
              setLanguage={setLanguage}
            />
          )}

          {activeTab === 'garden' && (
            <GardenView
              language={language}
              crops={crops}
              reminders={reminders}
              activities={activities}
              onAddCrop={handleAddCrop}
              onDeleteCrop={handleDeleteCrop}
              onAddReminder={handleAddReminder}
              onToggleReminder={handleToggleReminder}
              onDeleteReminder={handleDeleteReminder}
              onRecordWatering={handleRecordWatering}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              language={language}
              setLanguage={setLanguage}
              onClearData={handleClearData}
            />
          )}

          {activeTab === 'landing' && (
            <LandingView
              setActiveTab={setActiveTab}
              language={language}
            />
          )}
        </main>

        {/* Professional Footer */}
        <footer className="border-t border-slate-200/80 bg-white/70 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#14532D]">Sauti Verti AI</span>
              <span>•</span>
              <span>Hacktoberfest Hack Day Gombe 2026</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Women Build with Open-Source AI • "Grow Vertically. Grow Smarter."
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
