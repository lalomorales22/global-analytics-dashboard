import { Activity } from '../../types';

interface RegionHeatmapProps {
  activities: Activity[];
}

export const RegionHeatmap = ({ activities }: RegionHeatmapProps) => {
  const getRegionCounts = () => {
    const regions = Array.from({ length: 6 }, () =>
      Array.from({ length: 12 }, () => 0)
    );

    activities.forEach((activity) => {
      const latIndex = Math.floor((activity.lat + 90) / 30);
      const lngIndex = Math.floor((activity.lng + 180) / 30);
      if (latIndex >= 0 && latIndex < 6 && lngIndex >= 0 && lngIndex < 12) {
        regions[latIndex][lngIndex]++;
      }
    });

    return regions;
  };

  const getHeatmapColor = (value: number) => {
    const maxValue = Math.max(...getRegionCounts().flat());
    const intensity = value / maxValue;
    return `rgba(59, 130, 246, ${intensity})`;
  };

  return (
    <div className="grid grid-cols-12 gap-0.5 h-full">
      {getRegionCounts().flat().map((value, index) => (
        <div
          key={index}
          className="aspect-square rounded-sm"
          style={{ backgroundColor: getHeatmapColor(value) }}
          title={`Count: ${value}`}
        />
      ))}
    </div>
  );
};