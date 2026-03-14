'use client'

export default function IOSToggle({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`w-12 h-6 rounded-full relative transition-colors duration-200 cursor-pointer outline-none ${
        value ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 shadow-sm ${
          value ? 'left-6' : 'left-1'
        }`}
      />
    </button>
  );
}