export class WebSocketService {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.setupListeners();
  }

  private setupListeners() {
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Transform and add to activity store
      useActivityStore.getState().addActivity({
        id: data.id,
        type: data.type,
        lat: data.latitude,
        lng: data.longitude,
        timestamp: data.timestamp
      });
    };
  }
} 