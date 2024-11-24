import React from 'react';

interface LegendProps {
  showRome: boolean;
}

export const Legend: React.FC<LegendProps> = ({ showRome }) => {
  return (
    <div className="flex items-center gap-6 mb-6">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
        <span className="text-sm font-medium">London</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-300 rounded"></div>
        <span className="text-sm font-medium">Spain</span>
      </div>
      {showRome && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-200 rounded"></div>
          <span className="text-sm font-medium">Rome</span>
        </div>
      )}
    </div>
  );
}