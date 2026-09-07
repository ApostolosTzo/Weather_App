export default function WeatherCard({ data, units }) {
  const tempUnit = units === 'metric' ? '\u00B0C' : '\u00B0F'
  const speedUnit = units === 'metric' ? 'm/s' : 'mph'

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="h-20 w-20"
        />
      </div>

      <div className="mt-4">
        <p className="text-5xl font-bold text-gray-900 dark:text-white">
          {Math.round(data.main.temp)}
          {tempUnit}
        </p>
        <p className="text-gray-600 capitalize dark:text-gray-300">{data.weather[0].description}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Feels like</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {Math.round(data.main.feels_like)}
            {tempUnit}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
          <p className="font-semibold text-gray-900 dark:text-white">{data.main.humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {data.wind.speed} {speedUnit}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Pressure</p>
          <p className="font-semibold text-gray-900 dark:text-white">{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  )
}
