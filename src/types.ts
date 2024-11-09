export type ActivityType = 'commit' | 'pull_request' | 'issue';
export type TimeRange = '1h' | '24h' | '7d';

export interface Activity {
  id: number;
  lat: number;
  lng: number;
  type: ActivityType;
  timestamp: string;
}

export interface ActivityMetrics {
  total: number;
  byType: Record<ActivityType, number>;
  byHour: number[];
  peakHour: number;
  avgPerHour: number;
}