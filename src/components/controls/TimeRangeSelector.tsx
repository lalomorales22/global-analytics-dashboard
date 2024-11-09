import { TimeRange } from '../../types';
import { useActivityStore } from '../../store/activityStore';

export const TimeRangeSelector = () => {
  const { timeRange, setTimeRange } = useActivityStore();

  const ranges: { value: TimeRange; label: string }[] = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
  ];

  return (
    <div className="flex space-x-2">
      {ranges.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setTimeRange(value)}
          className={`px-3 py-1 rounded-md text-sm ${
            timeRange === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};