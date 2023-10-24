import { createDetailsWeatherView } from "../view/detailsOfWeatherView.js";
import { createSearchElement } from "../view/searchView.js";
import { createWeatherView } from "../view/weatherView.js";
import { createDailyForecastView } from "../view/dailyForecastView.js";
import { createAnimation } from "../view/animationView.js";

//API key
const apiKey = "c2af36fa3d99461ec68a99d23862a062";

// Function to create the forecast page
export function createForecastPage() {
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  mainContainer.appendChild(createSearchElement());
  mainContainer.appendChild(createWeatherView());
  mainContainer.appendChild(createDetailsWeatherView());
  mainContainer.appendChild(createDailyForecastView());
  mainContainer.appendChild(createAnimation());

  const searchBox = document.querySelector('#search-box');
  const searchBtn = document.querySelector('#search-button');
  const sunRotating = document.querySelector('#sun-rotating');
  const cloudMoving = document.querySelector('#cloud-moving');

  // Event listener - click
  searchBtn.addEventListener('click', () => {
    const city = searchBox.value;
    checkWeather(city);
    searchBox.value = "";
    cloudMoving.style.display = 'none';
    sunRotating.style.display = 'none';
  });

  // Event listener - Enter key
  searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      const city = searchBox.value;
      checkWeather(city);
      searchBox.value = "";
      cloudMoving.style.display = "none";
      sunRotating.style.display = "none";
    }
  });
}

// Function to fetch current weather and display it
async function checkWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      // The city in the API data doesn't match the searched city
      alert(`City ${city} is not found.`);
      throw new Error("Error!" + response.status);
    }

    const data = await response.json();

    if (data.city.name.toLowerCase() === city.toLowerCase()) {
      // Display the current weather information
      document.querySelector("#city").innerHTML = city;
      document.querySelector("#temp").innerHTML =
        Math.round(data.list[0].main.temp) + "°C";
      document.querySelector("#humidity-box p").innerHTML =
        data.list[0].main.humidity + "%";
      document.querySelector("#min-box p").innerHTML =
        Math.round(data.list[0].main.temp_min) + "°C";
      document.querySelector("#max-box p").innerHTML =
        Math.round(data.list[0].main.temp_max) + "°C";
      document.querySelector("#humidity-box img").style.display = "block";
      document.querySelector("#wind-box p").innerHTML =
        data.list[0].wind.speed + "km/h";
      document.querySelector("#wind-box img").style.display = "block";
      document.querySelector("#min-box img").style.display = "block";
      document.querySelector("#max-box img").style.display = "block";
      document.querySelector("#daily-forecast-container").style.display =
        "block";
      document.querySelector("#today-forecast-box").style.display = 'block';

      // Change the weather icons
      const weatherIcon = document.querySelector("#weather-icon");
      weatherIcon.style.display = "block";
      weatherIcon.src = `../assets/img/${data.list[0].weather[0].main}.png`;
      weatherIcon.alt = data.list[0].weather[0].main;

      // Call the functions to display daily and next 3-hour forecasts
      forecastDaily(data);
      forecastNext3Hours(data);
    }
  } catch (error) {
    console.log("Something is wrong in current weather: " + error);
  }
}

// Function to display daily weather forecast
function forecastDaily(data) {
  const ulElement = document.querySelector("#ul-container");
  ulElement.innerHTML = "";

  // Get today's date and calculate the next 5 days
  const today = new Date();
  const targetDates = [];

  for (let i = 0; i < 5; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    targetDates.push(nextDate.toISOString().split("T")[0]);
  }

  // Create an object to store temperature data for each date
  const dateTemperatures = {};

  data.list.forEach((weatherData) => {
    const dtTxt = weatherData.dt_txt.split(" ")[0];

    if (targetDates.includes(dtTxt)) {
      if (!dateTemperatures[dtTxt]) {
        dateTemperatures[dtTxt] = {
          min: Math.round(weatherData.main.temp_min),
          max: Math.round(weatherData.main.temp_max),
          icon: weatherData.weather[0].main,
        };
      } else {
        const currentMin = dateTemperatures[dtTxt].min;
        const currentMax = dateTemperatures[dtTxt].max;

        if (Math.round(weatherData.main.temp_min) < currentMin) {
          dateTemperatures[dtTxt].min = Math.round(
            weatherData.main.temp_min
          );
        }

        if (Math.round(weatherData.main.temp_max) > currentMax) {
          dateTemperatures[dtTxt].max = Math.round(
            weatherData.main.temp_max
          );
        }
      }
    }
  });

  for (const date in dateTemperatures) {
    const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    const weekDay = document.createElement('p');
    weekDay.id = 'week-day';
    weekDay.textContent = dayOfWeek;
    liElement.appendChild(weekDay);
    const maxTempDay = document.createElement("p");
    maxTempDay.textContent = dateTemperatures[date].max;
    maxTempDay.id = 'max-temp-daily';
    liElement.appendChild(maxTempDay);
    const dailyIconImg = document.createElement("img");
    dailyIconImg.src = `../assets/img/${dateTemperatures[date].icon}.png`;
    dailyIconImg.alt = dateTemperatures[date].icon;
    dailyIconImg.id = 'daily-icon';
    liElement.appendChild(dailyIconImg);
    const minTempDay = document.createElement("p");
    minTempDay.textContent = dateTemperatures[date].min;
    minTempDay.id = 'min-temp-daily';
    liElement.appendChild(minTempDay);
  }
}
// Function to display the next 3-hour forecast
function forecastNext3Hours(data) {
  const ulElement = document.querySelector("#next-3-hours-ul");
  ulElement.innerHTML = "";

  for (let i = 1; i < 4; i++) {
    const weatherData = data.list[i];
    const forecastTime = new Date(weatherData.dt_txt);
    const hour = forecastTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const temp = weatherData.main.temp;
    const imgSrc = weatherData.weather[0].main;

    const li = document.createElement("li");

    const hourSpan = document.createElement("span");
    hourSpan.textContent = `${hour}`;
    li.appendChild(hourSpan);

    // Create an <img> element for the weather icon
    const img = document.createElement("img");
    img.src = `../assets/img/${imgSrc}.png`;
    img.alt = imgSrc;
    li.appendChild(img);

    const tempSpan = document.createElement("span");
    tempSpan.textContent = `${Math.round(temp)}°C`;
    li.appendChild(tempSpan);

    ulElement.appendChild(li);
  }
}


