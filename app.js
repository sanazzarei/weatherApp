import { createStartPage } from "./pages/startPage.js";

function loadApp(){
    createStartPage();
}
document.addEventListener('DOMContentLoaded', loadApp);