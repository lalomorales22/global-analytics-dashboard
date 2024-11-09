import { ActivityType } from '../../types';
import { useActivityStore } from '../../store/activityStore';
import { Activity, GitPullRequest, CircleDot } from 'lucide-react';

export const ActivityTypeFilter = () => {
  const { selectedTypes, toggleActivityType } = useActivityStore();

  const types: { value: ActivityType; icon: JSX.Element; color: string }[] = [
    { value: 'commit', icon: <Activity className="w-4 h-4" />, color: '#4CAF50' },
    { value: 'pull_request', icon: <GitPullRequest className="w-4 h-4" />, color: '#2196F3' },
    { value: 'issue', icon: <CircleDot className="w-4 h-4" />, color: '#FFC107' },
  ];

  return (
    <div className="flex space-x-2">
      {types.map(({ value, icon, color }) => (
        <button
          key={value}
          onClick={() => toggleActivityType(value)}
          className={`px-3 py-1 rounded-md text-sm flex items-center space-x-2 ${
            selectedTypes.includes(value)
              ? 'bg-gray-700 text-white'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
          style={{
            borderLeft: `3px solid ${color}`
          }}
        >
          {icon}
          <span>{value}</span>
        </button>
      ))}
    </div>
  );
};