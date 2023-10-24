
export function createWeatherView(){
    const weatherBox = document.createElement('div');
    weatherBox.classList = 'weather-box';
    //current weather box 
     const currentWeatherBox = document.createElement("div");
     weatherBox.appendChild(currentWeatherBox);

    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = '';
    weatherIcon.alt = '';
    currentWeatherBox.appendChild(weatherIcon);
    const temp = document.createElement('h1');
    temp.id = 'temp';
    temp.textContent = "";
    currentWeatherBox.appendChild(temp);
    const city = document.createElement('h2');
    city.id = 'city'
    city.textContent = "";
    currentWeatherBox.appendChild(city);
    // min and max weather box
    const minMaxWeatherBox = document.createElement('div');
    weatherBox.appendChild(minMaxWeatherBox);
    minMaxWeatherBox.id = 'min-max-box';
    const maxBox = document.createElement("div");
    minMaxWeatherBox.appendChild(maxBox);
    maxBox.id = 'max-box';
    const maxImg = document.createElement('img');
    maxImg.id = 'max-img';
    maxImg.src = '../assets/img/up-arrow.png'
    maxImg.alt = 'up-arrow';
    maxBox.appendChild(maxImg);
    const max_p = document.createElement('p');
    max_p.textContent = '';
    maxBox.appendChild(max_p);

    const minBox = document.createElement("div");
    minMaxWeatherBox.appendChild(minBox);
    minBox.id = 'min-box';
    const min_p = document.createElement("p");
    min_p.textContent = "";
    minBox.appendChild(min_p);
    const minImg = document.createElement("img");
    minImg.id = "min-img";
    minImg.src = "../assets/img/down-arrow.png";
    minImg.alt = "down-arrow";
    minBox.appendChild(minImg);
    //3 next hour forecasting
     const todayForecast = document.createElement('div');
     weatherBox.appendChild(todayForecast);
     todayForecast.id = 'today-forecast-box';
     const h3element = document.createElement('h3');
     h3element.textContent = "Next 3-Hour Forecast";
    todayForecast.appendChild(h3element);
    const ul = document.createElement("ul");
    ul.id = "next-3-hours-ul";
    todayForecast.appendChild(ul);
    



   

    return weatherBox;
}

