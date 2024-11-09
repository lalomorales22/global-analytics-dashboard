export class GitLabService {
  private baseUrl: string;
  private token: string;

  constructor(token: string) {
    this.baseUrl = 'https://gitlab.com/api/v4';
    this.token = token;
  }

  async getEvents() {
    const response = await fetch(`${this.baseUrl}/events`, {
      headers: { 'PRIVATE-TOKEN': this.token }
    });
    const events = await response.json();
    return this.transformEvents(events);
  }
} 