import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Globe } from './components/Globe';
import { ActivityChart } from './components/analytics/ActivityChart';
import { ActivityDistribution } from './components/analytics/ActivityDistribution';
import { RegionHeatmap } from './components/analytics/RegionHeatmap';
import { MetricsGrid } from './components/analytics/MetricsGrid';
import { TimeRangeSelector } from './components/controls/TimeRangeSelector';
import { ActivityTypeFilter } from './components/controls/ActivityTypeFilter';
import { useActivityStore } from './store/activityStore';
import { Activity as ActivityIcon, GitPullRequest, CircleDot } from 'lucide-react';

function App() {
  const { activities, addActivity, getFilteredActivities, counter } = useActivityStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        lat: (Math.random() * 180) - 90,
        lng: (Math.random() * 360) - 180,
        type: ['commit', 'pull_request', 'issue'][Math.floor(Math.random() * 3)] as any,
        timestamp: new Date().toISOString()
      };
      
      addActivity(newActivity);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredActivities = getFilteredActivities();

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'commit':
        return <ActivityIcon className="w-4 h-4 text-emerald-500" />;
      case 'pull_request':
        return <GitPullRequest className="w-4 h-4 text-blue-500" />;
      case 'issue':
        return <CircleDot className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="app-container bg-black text-white">
      {/* Top Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <TimeRangeSelector />
          <ActivityTypeFilter />
        </div>
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 text-blue-400 font-mono">
          <div className="text-sm text-gray-400">Total Activities</div>
          <div className="text-2xl">{counter.toLocaleString()}</div>
        </div>
      </div>

      {/* Metrics Grid */}
      <MetricsGrid activities={filteredActivities} />

      <div className="flex-1 flex gap-4">
        {/* Left Analytics */}
        <div className="w-72 space-y-4">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 h-1/2">
            <h3 className="text-gray-400 font-mono mb-2">Activity Distribution</h3>
            <ActivityDistribution activities={filteredActivities} />
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 h-1/2">
            <h3 className="text-gray-400 font-mono mb-2">Region Heatmap</h3>
            <RegionHeatmap activities={filteredActivities} />
          </div>
        </div>

        {/* Center Globe */}
        <div className="flex-1 bg-gray-800/40 backdrop-blur-sm rounded-lg relative">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls
              enablePan={false}
              minDistance={1.5}
              maxDistance={4}
              enableDamping
              dampingFactor={0.05}
            />
            <Globe activities={filteredActivities} />
          </Canvas>
        </div>

        {/* Right Analytics */}
        <div className="w-80 space-y-4">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 h-1/2">
            <h3 className="text-gray-400 font-mono mb-2">Recent Activities</h3>
            <div className="space-y-3">
              {activities.slice(-5).reverse().map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 text-gray-300">
                  {getActivityIcon(activity.type)}
                  <div className="flex-1">
                    <div className="text-sm">{activity.type}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {activity.lat.toFixed(1)}°, {activity.lng.toFixed(1)}°
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 h-1/2">
            <h3 className="text-gray-400 font-mono mb-2">Activity Timeline</h3>
            <ActivityChart activities={filteredActivities} />
          </div>
        </div>
      </div>

      {/* Bottom Analytics */}
      <div className="h-48 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
        <h3 className="text-gray-400 font-mono mb-2">Activity Trends</h3>
        <ActivityChart activities={filteredActivities} />
      </div>
    </div>
  );
}

export default App;