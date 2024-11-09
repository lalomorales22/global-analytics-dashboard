import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Activity } from '../../types';

interface ActivityDistributionProps {
  activities: Activity[];
}

export const ActivityDistribution = ({ activities }: ActivityDistributionProps) => {
  const getDistributionData = () => {
    const counts = activities.reduce(
      (acc, curr) => {
        acc[curr.type]++;
        return acc;
      },
      { commit: 0, pull_request: 0, issue: 0 }
    );

    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const COLORS = ['#4CAF50', '#2196F3', '#FFC107'];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={getDistributionData()}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {getDistributionData().map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#fff',
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};