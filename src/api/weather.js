const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function fetchCurrentWeather(city, units = 'metric') {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`,
  )
  if (!res.ok) {
    if (res.status === 404) throw new Error('City not found')
    if (res.status === 401) throw new Error('Invalid API key')
    throw new Error('Failed to fetch weather data')
  }
  return res.json()
}

export async function fetchForecast(city, units = 'metric') {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`,
  )
  if (!res.ok) {
    if (res.status === 404) throw new Error('City not found')
    if (res.status === 401) throw new Error('Invalid API key')
    throw new Error('Failed to fetch forecast data')
  }
  return res.json()
}
