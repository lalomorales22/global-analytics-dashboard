# 🌍 Global Analytics Dashboard

<img width="1370" alt="Screenshot 2024-11-08 at 11 23 42 PM" src="https://github.com/user-attachments/assets/c3ccdb93-3719-4ac4-99dd-d25de8ed6bbf">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.162-black)](https://threejs.org/)

> **A stunning real-time 3D visualization dashboard that brings global activity data to life on an interactive globe with comprehensive analytics.**

Currently displaying sample data for demonstration purposes. Perfect for visualizing commits, pull requests, issues, and any global activity data. Easily customizable to integrate with your own data sources.

---

## ✨ What's New - Major Upgrade in Progress!

🚀 **We're giving this project the complete Claude Sonnet 4.5 treatment!** Check out our comprehensive [TASKS.md](TASKS.md) for the full 5-phase upgrade plan that will transform this dashboard into an enterprise-grade visualization platform.

### 🎯 Upcoming Enhancements

#### Phase 1: Foundation & Infrastructure
- 🔒 Enterprise-grade security hardening
- 🧪 Comprehensive testing framework (Vitest, Playwright)
- 📦 Dependency modernization
- ⚡ Build optimization and PWA support

#### Phase 2: UI/UX Modernization
- 🎨 Complete design system with Radix UI
- 🌙 Dark mode and custom themes
- ♿ WCAG 2.1 AAA accessibility compliance
- 📱 Mobile-first responsive design
- ✨ Advanced animations with Framer Motion

#### Phase 3: Enhanced Functionality
- 🌐 Real-time data integration (GitHub, GitLab, Custom APIs)
- 📊 Advanced analytics and statistical analysis
- 🔍 Smart filtering and full-text search
- 💾 Export capabilities (PDF, CSV, Excel)
- 🎯 User personalization and preferences

#### Phase 4: Advanced Features
- 🤖 AI-powered insights and pattern recognition
- 👥 Team collaboration features
- 🔔 Smart notifications and alerts
- 🗺️ Interactive region drill-down
- 🔗 API and webhook support

#### Phase 5: Polish & Production
- 🚀 CI/CD pipeline with GitHub Actions
- 📈 Performance monitoring and analytics
- 📚 Comprehensive documentation
- 🌐 CDN and edge caching
- 🏆 Lighthouse score 95+

👉 **See [TASKS.md](TASKS.md) for the complete 10-week roadmap with detailed tasks!**

---

## 🎯 Current Features

### Interactive 3D Globe
- 🌎 Real-time activity visualization
- ✨ Animated arcs and pulses for activity representation
- 🎨 Particle system for enhanced visual effects
- 🗺️ Textured Earth with clouds and atmosphere
- 🎮 Orbital controls for smooth navigation
- 🌟 Dynamic camera movements

### Comprehensive Analytics
- 📊 Activity distribution charts
- 🗺️ Regional heatmap visualization
- 📈 Real-time metrics grid
- ⏱️ Activity timeline with historical data
- 🎯 Type-based filtering (commits, PRs, issues)
- 📅 Time range selection (1h, 24h, 7d)
- 📉 Trend analysis and patterns

### Real-time Updates
- 🔄 Simulated activity generation
- 📊 Live updating metrics
- 🎬 Smooth animations and transitions
- ⚡ Optimized rendering performance

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics and WebGL
- **React Three Fiber** - React renderer for Three.js
- **Vite** - Next-generation build tooling

### Visualization & UI
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icons
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Zustand** - Lightweight state management

### Planned Additions (see TASKS.md)
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Production-ready animations
- **Vitest** - Blazing fast unit testing
- **Playwright** - E2E testing framework
- **Zod** - TypeScript-first schema validation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lalomorales22/global-analytics-dashboard.git
   cd global-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration

The application can be customized through various parameters:

### Activity Settings
- **Generation Rate**: Modify the interval in `src/App.tsx`
- **Activity Types**: Configure in `src/types.ts`
- **Time Ranges**: Adjust in `src/components/controls/TimeRangeSelector.tsx`

### Visual Settings
- **Globe Appearance**: Customize in `src/components/Globe.tsx`
- **Arc Styles**: Modify `src/components/Arc.tsx`
- **Pulse Effects**: Adjust `src/components/Pulse.tsx`
- **Particle System**: Configure `src/components/ParticleSystem.tsx`

### Analytics
- **Chart Configuration**: Customize in `src/components/analytics/`
- **Metrics Display**: Modify `src/components/analytics/MetricsGrid.tsx`

---

## 📁 Project Structure

```
global-analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── analytics/          # Analytics and charts
│   │   ├── controls/           # UI controls
│   │   ├── Arc.tsx             # Activity arc visualization
│   │   ├── Globe.tsx           # Main globe component
│   │   ├── ParticleSystem.tsx  # Particle effects
│   │   └── Pulse.tsx           # Pulse animations
│   ├── services/
│   │   ├── githubService.ts    # GitHub integration
│   │   ├── gitlabService.ts    # GitLab integration
│   │   ├── websocketService.ts # Real-time updates
│   │   └── databaseService.ts  # Data management
│   ├── types/                  # TypeScript definitions
│   ├── App.tsx                 # Main application
│   └── main.tsx               # Application entry point
├── public/                     # Static assets
├── TASKS.md                   # Comprehensive upgrade plan
└── README.md                  # This file
```

---

## 🎨 Customization Guide

### Adding Your Own Data

1. **Replace Sample Data**: Modify the data generation in `src/App.tsx`
2. **Connect to APIs**: Use services in `src/services/` to integrate real data
3. **Custom Activity Types**: Add new types in `src/types.ts`

### Styling

The project uses **Tailwind CSS** for styling. Customize the theme in `tailwind.config.js`:

- Colors
- Spacing
- Typography
- Breakpoints
- Animations

### Globe Textures

Replace textures in the public directory to customize the globe appearance:
- Earth texture
- Cloud layer
- Bump maps
- Night lights

---

## 🧪 Testing (Coming Soon - Phase 1)

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

---

## 📊 Performance

### Current Metrics
- Smooth 60 FPS globe rendering
- Efficient particle system
- Optimized re-renders with React

### Upcoming Optimizations (Phase 5)
- Lighthouse score target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Keep PRs focused and atomic

---

## 📚 Documentation

- **[TASKS.md](TASKS.md)** - Comprehensive 5-phase upgrade plan
- **Architecture Guide** - Coming soon
- **API Documentation** - Coming soon
- **Component Library** - Coming soon

---

## 🗺️ Roadmap

### ✅ Current Version (v0.0.0)
- Basic globe visualization
- Sample data display
- Analytics panel
- Time range filtering

### 🚧 Version 1.0 (Upcoming - see TASKS.md)
- Complete UI/UX overhaul
- Real data integration
- Advanced analytics
- Mobile optimization
- Comprehensive testing

### 🔮 Future Versions
- Mobile native apps
- Desktop application
- Browser extension
- Public API
- Plugin system
- Enterprise features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Three.js** - For incredible 3D rendering capabilities
- **React Three Fiber** - For seamless React integration with Three.js
- **Earth Textures** - From Three.js examples
- **Community** - For inspiration and feedback

---

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/lalomorales22/global-analytics-dashboard/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/lalomorales22/global-analytics-dashboard/discussions)
- 📧 **Email**: Contact via GitHub profile

---

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

---

## 📸 Screenshots & Demos

Coming soon with the Phase 2 upgrade!

---

**Built with ❤️ using React, Three.js, and TypeScript**

**Ready for the Claude Sonnet 4.5 treatment - transforming into an enterprise-grade analytics platform!**
