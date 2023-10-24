
export function createDailyForecastView(){
    const dailyForecastContainer = document.createElement('div');
    dailyForecastContainer.id = "daily-forecast-container";

     const header = document.createElement("h3");
     dailyForecastContainer.appendChild(header);
     header.textContent = "5-DAY FORECAST";

    const ul = document.createElement('ul');
    dailyForecastContainer.appendChild(ul);
    ul.id = 'ul-container';

    return dailyForecastContainer;
}