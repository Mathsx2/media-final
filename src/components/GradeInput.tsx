import React from 'react';

interface GradeInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
}

export function GradeInput({ label, value, onChange, min = 0, max = 10 }: GradeInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        step="0.1"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}