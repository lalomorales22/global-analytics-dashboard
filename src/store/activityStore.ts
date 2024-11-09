import { create } from 'zustand';
import { Activity, ActivityType, TimeRange } from '../types';

interface ActivityState {
  activities: Activity[];
  selectedTypes: ActivityType[];
  timeRange: TimeRange;
  counter: number;
  addActivity: (activity: Activity) => void;
  toggleActivityType: (type: ActivityType) => void;
  setTimeRange: (range: TimeRange) => void;
  getFilteredActivities: () => Activity[];
  addCustomActivity: (activity: ExtendedActivity) => void;
}

interface ExtendedActivity extends Activity {
  source: string;
  metadata?: any;
}

export const useActivityStore = create<ActivityState>((set, get) => ({
  activities: [],
  selectedTypes: ['commit', 'pull_request', 'issue'],
  timeRange: '1h',
  counter: 0,

  addActivity: (activity) => set((state) => ({
    activities: [...state.activities.slice(-500), activity],
    counter: state.counter + 1,
  })),

  toggleActivityType: (type) => set((state) => ({
    selectedTypes: state.selectedTypes.includes(type)
      ? state.selectedTypes.filter(t => t !== type)
      : [...state.selectedTypes, type]
  })),

  setTimeRange: (range) => set({ timeRange: range }),

  getFilteredActivities: () => {
    const state = get();
    const now = Date.now();
    const timeRangeMs = {
      '1h': 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
    }[state.timeRange];

    return state.activities.filter(activity => 
      state.selectedTypes.includes(activity.type) &&
      now - new Date(activity.timestamp).getTime() < timeRangeMs
    );
  },

  addCustomActivity: (activity) => {
    set(state => ({
      activities: [...state.activities, activity],
      counter: state.counter + 1
    }));
  },
}));