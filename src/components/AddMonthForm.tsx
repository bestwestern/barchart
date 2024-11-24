import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface AddMonthFormProps {
  onAdd: (data: { london: number; spain: number; rome: number }) => void;
  showRome: boolean;
}

export const AddMonthForm: React.FC<AddMonthFormProps> = ({ onAdd, showRome }) => {
  const [london, setLondon] = useState('');
  const [spain, setSpain] = useState('');
  const [rome, setRome] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!london || !spain || (showRome && !rome)) return;

    onAdd({
      london: Number(london),
      spain: Number(spain),
      rome: Number(rome),
    });

    setLondon('');
    setSpain('');
    setRome('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-blue-50 p-4 rounded-lg">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">London:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={london}
            onChange={(e) => setLondon(e.target.value)}
            className="w-20 px-2 py-1 rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="mm"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Spain:</label>
          <input
            type="number"
            min="0"
            max="200"
            value={spain}
            onChange={(e) => setSpain(e.target.value)}
            className="w-20 px-2 py-1 rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="mm"
          />
        </div>
        {showRome && (
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Rome:</label>
            <input
              type="number"
              min="0"
              max="200"
              value={rome}
              onChange={(e) => setRome(e.target.value)}
              className="w-20 px-2 py-1 rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="mm"
            />
          </div>
        )}
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add Month</span>
        </button>
      </div>
    </form>
  );
};