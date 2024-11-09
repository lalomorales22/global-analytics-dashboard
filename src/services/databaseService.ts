import { createClient } from '@supabase/supabase-js';
// or import { PrismaClient } from '@prisma/client';

export class DatabaseService {
  private client;

  constructor(url: string, key: string) {
    this.client = createClient(url, key);
  }

  async streamEvents() {
    return this.client
      .from('events')
      .on('INSERT', payload => {
        useActivityStore.getState().addActivity({
          id: payload.new.id,
          type: payload.new.type,
          lat: payload.new.latitude,
          lng: payload.new.longitude,
          timestamp: payload.new.created_at
        });
      })
      .subscribe();
  }
} 