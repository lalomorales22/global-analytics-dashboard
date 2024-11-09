// Cloud Infrastructure Events
interface CloudEvent {
  id: string;
  type: 'deployment' | 'scaling' | 'incident' | 'maintenance';
  region: string; // AWS/Azure/GCP region
  coordinates: { lat: number; lng: number };
  timestamp: string;
}

// Social Media Activity
interface SocialEvent {
  id: string;
  type: 'post' | 'share' | 'comment' | 'like';
  location: { lat: number; lng: number };
  platform: 'twitter' | 'facebook' | 'instagram';
  timestamp: string;
}

// IoT Device Data
interface IoTEvent {
  deviceId: string;
  type: 'sensor_reading' | 'alert' | 'status_update';
  location: { lat: number; lng: number };
  reading: number;
  timestamp: string;
} 