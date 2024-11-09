import { Octokit } from '@octokit/rest';

export class GitHubService {
  private octokit: Octokit;

  constructor(authToken: string) {
    this.octokit = new Octokit({ auth: authToken });
  }

  async getRealtimeEvents() {
    const events = await this.octokit.activity.listPublicEvents();
    return events.data.map(event => ({
      id: event.id,
      type: this.mapEventType(event.type),
      lat: event.payload?.location?.lat || (Math.random() * 180) - 90, // GitHub doesn't provide location
      lng: event.payload?.location?.lng || (Math.random() * 360) - 180,
      timestamp: event.created_at
    }));
  }
} 