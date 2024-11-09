import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ActivityType } from '../../types';

interface ActivityChartProps {
  activities: Activity[];
}

export const ActivityChart = ({ activities }: ActivityChartProps) => {
  const getActivityCounts = () => {
    const timeWindows = Array.from({ length: 10 }, (_, i) => {
      const time = Date.now() - (9 - i) * 1000;
      return {
        time: new Date(time).toLocaleTimeString(),
        commit: 0,
        pull_request: 0,
        issue: 0,
      };
    });

    activities.forEach((activity) => {
      const index = Math.floor((Date.now() - new Date(activity.timestamp).getTime()) / 1000);
      if (index >= 0 && index < 10) {
        timeWindows[9 - index][activity.type]++;
      }
    });

    return timeWindows;
  };

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={getActivityCounts()}>
          <XAxis dataKey="time" tick={{ fill: '#9CA3AF' }} />
          <YAxis tick={{ fill: '#9CA3AF' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#fff',
            }}
          />
          <Area
            type="monotone"
            dataKey="commit"
            stackId="1"
            stroke="#4CAF50"
            fill="#4CAF50"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="pull_request"
            stackId="1"
            stroke="#2196F3"
            fill="#2196F3"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="issue"
            stackId="1"
            stroke="#FFC107"
            fill="#FFC107"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};