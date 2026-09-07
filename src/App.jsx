import { useState, useEffect } from 'react'
import { fetchCurrentWeather, fetchForecast } from './api/weather'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'
import UnitToggle from './components/UnitToggle'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [city, setCity] = useState('London')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const [weatherData, forecastData] = await Promise.all([
          fetchCurrentWeather(city, units),
          fetchForecast(city, units),
        ])
        if (!cancelled) {
          setWeather(weatherData)
          setForecast(forecastData)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [city, units])

  const handleSearch = (newCity) => {
    setCity(newCity)
  }

  const handleToggleUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Weather App</h1>
          <UnitToggle units={units} onToggle={handleToggleUnits} />
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {weather && !loading && <WeatherCard data={weather} units={units} />}
        {forecast && !loading && <ForecastList data={forecast} units={units} />}
      </div>
    </div>
  )
}

export default App
