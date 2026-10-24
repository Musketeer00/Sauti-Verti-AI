export type TabType = 
  | 'dashboard' 
  | 'planner' 
  | 'doctor' 
  | 'assistant' 
  | 'garden' 
  | 'settings' 
  | 'landing';

export type Language = 'en' | 'ha';

export interface UserPreferences {
  name: string;
  language: Language;
  location: string;
  experienceLevel: 'beginner' | 'intermediate' | 'experienced';
}

export interface Crop {
  id: string;
  name: string;
  localName?: string;
  variety: string;
  growingMethod: 'soil-containers' | 'vertical-pipe' | 'trellis-tower' | 'hydroponics';
  plantingDate: string;
  status: 'germinating' | 'vegetative' | 'flowering' | 'harvest-ready' | 'needs-attention';
  healthScore: number; // 0 - 100
  harvestEstimate: string;
  notes: string;
  waterSchedule: string;
}

export interface Reminder {
  id: string;
  title: string;
  cropName: string;
  scheduledAt: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  type: 'watering' | 'fertilizer' | 'sunlight' | 'inspection' | 'harvest';
}

export interface Activity {
  id: string;
  cropName: string;
  type: 'watered' | 'inspected' | 'fertilized' | 'planted' | 'harvested';
  timestamp: string;
  note: string;
}

export interface GardenPlan {
  id: string;
  title: string;
  spaceType: string;
  dimensions: string;
  budgetNaira: number;
  sunlightHours: number;
  waterAccess: string;
  growingMethod: string;
  recommendedCrops: string[];
  materials: { name: string; estimatedNaira: number; notes: string }[];
  totalEstimatedCost: number;
  setupInstructions: string[];
  maintenanceTips: string[];
  safetyAndLimitations: string[];
  createdAt: string;
}
