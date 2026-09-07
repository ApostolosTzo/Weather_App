# Weather App

A clean, responsive weather application built with React and powered by the OpenWeatherMap API. Get current weather conditions and a 5-day forecast for any city in the world.

## Features

- **Current Weather** — temperature, feels-like, humidity, wind, pressure
- **5-Day Forecast** — daily forecasts with icons and temperature ranges
- **Unit Toggle** — switch between °C (metric) and °F (imperial)
- **Responsive Design** — works on desktop and mobile
- **Dark Mode** — automatic based on system preference
- **Error Handling** — graceful messages for invalid cities or API issues

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A free OpenWeatherMap API key — [sign up here](https://openweathermap.org/api)

### Installation

```bash
git clone https://github.com/your-username/Weather_App.git
cd Weather_App
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

> You can copy `.env.example` as a starting point. Your API key may take 10-15 minutes to activate after signing up.

### Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
Weather_App/
├── public/
├── src/
│   ├── api/
│   │   └── weather.js          # API fetch functions
│   ├── components/
│   │   ├── SearchBar.jsx       # City search input
│   │   ├── WeatherCard.jsx     # Current weather display
│   │   ├── ForecastList.jsx    # 5-day forecast grid
│   │   ├── UnitToggle.jsx      # °C/°F switch
│   │   ├── Loader.jsx          # Loading spinner
│   │   └── ErrorMessage.jsx    # Error display
│   ├── App.jsx                 # Main app logic
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind directives
├── .env.example
├── .prettierrc
├── eslint.config.js
├── vite.config.js
└── package.json
```

