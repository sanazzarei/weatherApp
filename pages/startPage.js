import { createWelcomeView } from "../view/welcomeView.js";
import { createForecastPage } from "./forecastPage.js";
export function createStartPage() {
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML='';
  mainContainer.appendChild(createWelcomeView());

  document.getElementById("start-button").addEventListener("click", () => {
    goToForecastPage();
  });

  function goToForecastPage() {
    createForecastPage();
  }
}
