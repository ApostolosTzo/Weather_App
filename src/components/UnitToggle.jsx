export default function UnitToggle({ units, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      {units === 'metric' ? '\u00B0C' : '\u00B0F'}
    </button>
  )
}
