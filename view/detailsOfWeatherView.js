export function createDetailsWeatherView() {
  const detailsOfWeatherBox = document.createElement("div");
  detailsOfWeatherBox.classList = "details-box";

  const humidity = document.createElement("div");
  humidity.id = "humidity-box";
  detailsOfWeatherBox.appendChild(humidity);
  humidity.innerHTML =
    '<p> </p> <img src ="../assets/img/humidity.png" alt="humidity icon"/>';

  const wind = document.createElement("div");
  wind.id = "wind-box";
  detailsOfWeatherBox.appendChild(wind);
  wind.innerHTML =
    '<p> </p> <img src ="../assets/img/wind.png" alt="wind icon"/>';

  return detailsOfWeatherBox;
}
