#  Weather App

A dynamic and responsive web application that allows users to fetch and display the current weather and a 5-day forecast for any city.


## Problem Statement

Checking accurate and real-time weather information shouldn't be complicated. This application provides a quick, intuitive, and visually appealing way for users to check the current weather conditions and upcoming forecasts for any city around the world, helping them plan their days better.


## Project Goals

- Allow users to search for weather by city name
- Display accurate current weather data including temperature, condition, humidity, and wind speed
- Provide a reliable 5-day weather forecast
- Deliver a responsive and visually stunning user interface


## Tech Stack

**Frontend:**  
- HTML5  
- CSS3 (Custom properties, Flexbox, Animations)  
- JavaScript (ES6+, Fetch API)

**APIs:**  
- OpenWeatherMap API

**Other Tools:**  
- Git & GitHub  

##  Features

- **City Search:** Real-time weather fetching based on user input.
- **Current Weather:** Displays temperature in Celsius, weather description, humidity, and wind speed.
- **5-Day Forecast:** Shows a daily summary with average temperatures and conditions.
- **Responsive Design:** Fluid layout that adapts seamlessly to desktop, tablet, and mobile screens.
- **Error Handling:** Friendly alerts if a city is not found or the API request fails.
- **Modern UI:** Glassmorphism aesthetics with dynamic hover effects.


## Installation & Setup

Clone the repository:

```bash
git clone git@github.com:ndang11/weather-map.git
cd weather-map

Run the project:
Simply open `index.html` in your favorite web browser, or use a local development server like Live Server in VS Code.


## Challenges Faced

- Handling asynchronous data fetching and chaining multiple API requests (Current Weather and Forecast).
- Processing and aggregating the 3-hour interval forecast data from OpenWeatherMap into a concise daily summary.
- Designing a responsive glassmorphism UI that maintains legibility and aesthetics across all device sizes.


## What I Learned

- Deepened understanding of the Fetch API and Promises in JavaScript.
- Improved skills in DOM manipulation and dynamically rendering HTML elements based on external API data.
- Mastered advanced CSS techniques including CSS variables, linear gradients, and backdrop filters.


## Future Improvements

- Save the last searched city using `localStorage` to load it automatically on app startup.
- Add a toggle feature to switch between Celsius and Fahrenheit.
- Implement dynamic background changes corresponding to the current weather condition (e.g., rainy, sunny, snowy).
- Add geolocation support to automatically fetch the weather for the user's current location.


## 👨🏽Author

NDANG-KAH A 
Frontend Developer 
📩 Email: ndangkahambei@gmail.com  
🌍 Open to remote opportunities
