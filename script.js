import { CONFIG } from './config.js'

document.addEventListener('DOMContentLoaded', () => {
  const apiKey = CONFIG.API_KEY

  const getWeatherBtn = document.getElementById('get-weather')
  const resetBtn = document.getElementById('reset-weather')

  getWeatherBtn.addEventListener('click', () => {
    const city = document.getElementById('city').value.trim()
    if (!city) {
      alert('Please enter a city name.')
      return
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`

    fetch(currentWeatherUrl)
      .then(res => {
        if (!res.ok) throw new Error('City not found.')
        return res.json()
      })
      .then(data => {
        displayCurrentWeather(data)

        return fetch(forecastUrl)
      })
      .then(res => res.json())
      .then(data => {
        displayForecast(data)
      })
      .catch(error => alert(error.message))
  })

  resetBtn.addEventListener('click', () => {
    document.getElementById('city').value = ''
    document.getElementById('temprature').textContent = ''
    document.getElementById('weather-info').textContent = ''
    document.getElementById('weather-icon').src = ''
    document.getElementById('five-day-forecast').innerHTML = ''
  })

  function displayCurrentWeather (data) {
    const temp = Math.round(data.main.temp)
    const description = data.weather[0].description
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    const iconCode = data.weather[0].icon

    document.getElementById('temprature').innerHTML = `${temp}&deg;C`
    document.getElementById('weather-info').innerHTML = `
      <div class="info-item">
        <span class="info-label">Condition</span>
        <span class="info-value" style="text-transform: capitalize;">${description}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Humidity</span>
        <span class="info-value">${humidity}%</span>
      </div>
      <div class="info-item">
        <span class="info-label">Wind</span>
        <span class="info-value">${windSpeed} m/s</span>
      </div>
    `
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`
  }

  function displayForecast (data) {
    const dailyForecasts = {}

    data.list.forEach(forecast => {
      const date = new Date(forecast.dt * 1000)
      const day = date.toLocaleDateString('en-US', { weekday: 'long' })

      if (!dailyForecasts[day]) {
        dailyForecasts[day] = {
          temps: [],
          descriptions: [],
          icons: [],
          humidity: [],
          wind: []
        }
      }

      dailyForecasts[day].temps.push(forecast.main.temp)
      dailyForecasts[day].descriptions.push(forecast.weather[0].description)
      dailyForecasts[day].icons.push(forecast.weather[0].icon)
      dailyForecasts[day].humidity.push(forecast.main.humidity)
      dailyForecasts[day].wind.push(forecast.wind.speed)
    })

    const forecastContainer = document.getElementById('five-day-forecast')
    forecastContainer.innerHTML = ''

    Object.keys(dailyForecasts).slice(0, 5).forEach(day => {
      const dayData = dailyForecasts[day]
      const avgTemp = (dayData.temps.reduce((a, b) => a + b, 0) / dayData.temps.length).toFixed(1)
      const mostCommonDescription = [...new Set(dayData.descriptions)].sort((a, b) =>
        dayData.descriptions.filter(d => d === b).length - dayData.descriptions.filter(d => d === a).length
      )[0]
      const mostCommonIcon = [...new Set(dayData.icons)].sort((a, b) =>
        dayData.icons.filter(i => i === b).length - dayData.icons.filter(i => i === a).length
      )[0]
      const avgHumidity = Math.round(dayData.humidity.reduce((a, b) => a + b, 0) / dayData.humidity.length)
      const avgWind = (dayData.wind.reduce((a, b) => a + b, 0) / dayData.wind.length).toFixed(1)

      const dayElement = document.createElement('div')
      dayElement.className = 'forecast-day'
      dayElement.innerHTML = `
        <h3>${day.substring(0, 3)}</h3>
        <img src="https://openweathermap.org/img/wn/${mostCommonIcon}@2x.png" alt="${mostCommonDescription}">
        <p class="temp">${Math.round(avgTemp)}&deg;C</p>
        <p class="desc">${mostCommonDescription}</p>
        <div class="forecast-details">
          <span>💧 ${avgHumidity}%</span>
          <span>💨 ${avgWind}m/s</span>
        </div>
      `
      forecastContainer.appendChild(dayElement)
    })
  }
})
