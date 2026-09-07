export default function ForecastList({ data, units }) {
  const tempUnit = units === 'metric' ? '\u00B0C' : '\u00B0F'

  const dailyForecasts = data.list.filter((item) => item.dt_txt.includes('12:00:00')).slice(0, 5)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        {dailyForecasts.map((day) => (
          <div key={day.dt} className="text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="mx-auto h-12 w-12"
            />
            <p className="font-semibold text-gray-900 dark:text-white">
              {Math.round(day.main.temp)}
              {tempUnit}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {Math.round(day.main.temp_min)}
              {tempUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
