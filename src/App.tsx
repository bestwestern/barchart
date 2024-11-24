import React, { useState } from 'react';
import { BarChart, CloudRain } from 'lucide-react';
import { ChartBar } from './components/ChartBar';
import { Legend } from './components/Legend';
import { rainfallData as initialData, months } from './components/RainfallData';
import { AddMonthForm } from './components/AddMonthForm';

const maxHeight = 300;
const getMaxRainfall = (data: typeof initialData, showRome: boolean) => {
  return Math.max(
    ...data.map((d) =>
      showRome ? d.london + d.spain + d.rome : d.london + d.spain
    )
  );
};

function App() {
  const [showRome, setShowRome] = useState(false);
  const [data, setData] = useState(initialData);
  const maxRainfall = getMaxRainfall(data, showRome);

  const handleAddMonth = (newData: { london: number; spain: number; rome: number }) => {
    if (data.length >= months.length) {
      alert('Maximum number of months reached!');
      return;
    }
    
    const nextMonth = months[data.length];
    setData([...data, { month: nextMonth, ...newData }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BarChart className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Rainfall Comparison
            </h1>
          </div>
          <button
            onClick={() => setShowRome(!showRome)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {showRome ? 'Hide Rome' : 'Show Rome'}
          </button>
        </div>

        <Legend showRome={showRome} />

        <div className="relative h-[400px]">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-[300px] flex flex-col justify-between">
            {[0, 25, 50, 75, 100, 125, 150].map((value) => (
              <div key={value} className="flex items-center h-0">
                <span className="text-xs text-gray-600 w-8 text-right mr-2">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="ml-12 h-[300px] flex items-end">
            <div className="flex-1 flex justify-between items-end relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 25, 50, 75, 100, 125, 150].map((value) => (
                  <div
                    key={value}
                    className="border-b border-gray-200 w-full"
                  ></div>
                ))}
              </div>

              {/* Bars */}
              {data.map((monthData) => (
                <ChartBar
                  key={monthData.month}
                  month={monthData.month}
                  data={monthData}
                  maxHeight={maxHeight}
                  maxRainfall={maxRainfall}
                  showRome={showRome}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
          <CloudRain className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">About this data</h3>
            <p className="text-sm text-gray-600">
              This chart shows the average monthly rainfall in {showRome ? 'London, Spain, and Rome' : 'London and Spain'}.
              The data is measured in millimeters (mm) and represents typical
              precipitation patterns throughout the year. London generally
              experiences more consistent rainfall, while {showRome ? 'Mediterranean cities like Rome and parts of Spain' : 'Spain'} show{showRome ? '' : 's'} more seasonal
              variation with drier summers.
            </p>
          </div>
        </div>

        {data.length < months.length && (
          <AddMonthForm onAdd={handleAddMonth} showRome={showRome} />
        )}
      </div>
    </div>
  );
}

export default App;