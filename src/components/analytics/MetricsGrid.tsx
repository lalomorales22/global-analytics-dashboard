import { Activity, ActivityType, ActivityMetrics } from '../../types';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, Activity as ActivityIcon } from 'lucide-react';

interface MetricsGridProps {
  activities: Activity[];
}

export const MetricsGrid = ({ activities }: MetricsGridProps) => {
  const calculateMetrics = (): ActivityMetrics => {
    const now = new Date();
    const hourlyData = new Array(24).fill(0);
    const typeCount: Record<ActivityType, number> = {
      commit: 0,
      pull_request: 0,
      issue: 0
    };

    activities.forEach(activity => {
      const date = new Date(activity.timestamp);
      hourlyData[date.getHours()]++;
      typeCount[activity.type]++;
    });

    const total = activities.length;
    const peakHour = hourlyData.indexOf(Math.max(...hourlyData));
    const avgPerHour = total / 24;

    return {
      total,
      byType: typeCount,
      byHour: hourlyData,
      peakHour,
      avgPerHour
    };
  };

  const metrics = calculateMetrics();
  const hourlyData = metrics.byHour.map((value, hour) => ({ hour, value }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Activities */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Total Activities</p>
            <h3 className="text-2xl font-bold text-white mt-1">
              {metrics.total.toLocaleString()}
            </h3>
          </div>
          <ActivityIcon className="text-blue-400" />
        </div>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={60}>
            <BarChart data={hourlyData}>
              <Bar dataKey="value" fill="#3B82F6" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Peak Hour */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Peak Activity Hour</p>
            <h3 className="text-2xl font-bold text-white mt-1">
              {metrics.peakHour}:00
            </h3>
          </div>
          <TrendingUp className="text-emerald-400" />
        </div>
        <p className="mt-2 text-gray-400 text-sm">
          {metrics.byHour[metrics.peakHour]} activities
        </p>
      </div>

      {/* Average Per Hour */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Avg Activities/Hour</p>
            <h3 className="text-2xl font-bold text-white mt-1">
              {metrics.avgPerHour.toFixed(1)}
            </h3>
          </div>
          <TrendingDown className="text-amber-400" />
        </div>
        <div className="mt-4 space-y-2">
          {Object.entries(metrics.byType).map(([type, count]) => (
            <div key={type} className="flex justify-between text-sm">
              <span className="text-gray-400">{type}</span>
              <span className="text-white">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Distribution */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4">
        <p className="text-gray-400 text-sm">Distribution by Type</p>
        <div className="mt-4 space-y-4">
          {Object.entries(metrics.byType).map(([type, count]) => {
            const percentage = (count / metrics.total) * 100;
            return (
              <div key={type} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{type}</span>
                  <span className="text-white">{percentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor:
                        type === 'commit' ? '#4CAF50' :
                        type === 'pull_request' ? '#2196F3' :
                        '#FFC107'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};