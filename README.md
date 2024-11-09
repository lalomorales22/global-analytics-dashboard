# Activity Globe Visualization

<img width="1370" alt="Screenshot 2024-11-08 at 11 23 42 PM" src="https://github.com/user-attachments/assets/c3ccdb93-3719-4ac4-99dd-d25de8ed6bbf">


A real-time 3D visualization dashboard that displays Real-Time activities (commits, pull requests, and issues) on an interactive globe with comprehensive analytics.  This is all sample data, nothing is live.  Feel free to download and add your own data.



## Features

- **Interactive 3D Globe**
  - Real-time activity visualization
  - Animated arcs and pulses for activity representation
  - Particle system for enhanced visual effects
  - Textured Earth with clouds and atmosphere
  - Orbital controls for navigation

- **Comprehensive Analytics**
  - Activity distribution charts
  - Regional heatmap
  - Real-time metrics grid
  - Activity timeline
  - Type-based filtering
  - Time range selection (1h, 24h, 7d)

- **Real-time Updates**
  - Simulated activity generation
  - Live updating metrics
  - Smooth animations and transitions

## Tech Stack

- React 18
- TypeScript
- Three.js with React Three Fiber
- Recharts for analytics
- Zustand for state management
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

- git clone https://github.com/lalomorales22/global-analytics-dashboard.git
- cd global-analytics-dashboard

- npm install

3. Start the development server

- npm run dev

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

The application can be configured through various parameters:

- Activity generation rate: Modify the interval in `App.tsx`
- Visual settings: Adjust parameters in Globe, Arc, and Pulse components
- Time ranges: Configure in `types.ts` and `TimeRangeSelector.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Three.js for 3D rendering capabilities
- React Three Fiber for React integration
- Earth textures from Three.js examples
