import React from 'react';

interface ChartBarProps {
  month: string;
  data: {
    london: number;
    spain: number;
    rome?: number;
  };
  maxHeight: number;
  maxRainfall: number;
  showRome: boolean;
}

export const ChartBar: React.FC<ChartBarProps> = ({
  month,
  data,
  maxHeight,
  maxRainfall,
  showRome,
}) => {
  return (
    <div
      className="relative flex flex-col items-center group"
      style={{ width: `${100 / 12}%` }}
    >
      <div className="relative w-12">
        <div
          className="w-12 bg-blue-500 transition-all duration-300 hover:bg-blue-600"
          style={{
            height: `${(data.london / maxRainfall) * maxHeight}px`,
          }}
        ></div>
        <div
          className="w-12 bg-blue-300 transition-all duration-300 hover:bg-blue-400"
          style={{
            height: `${(data.spain / maxRainfall) * maxHeight}px`,
          }}
        ></div>
        {showRome && (
          <div
            className="w-12 bg-blue-200 transition-all duration-300 hover:bg-blue-300"
            style={{
              height: `${(data.rome! / maxRainfall) * maxHeight}px`,
            }}
          ></div>
        )}
      </div>
      <span className="mt-2 text-sm text-gray-600">{month}</span>

      <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div>London: {data.london}mm</div>
        <div>Spain: {data.spain}mm</div>
        {showRome && <div>Rome: {data.rome}mm</div>}
      </div>
    </div>
  );
}