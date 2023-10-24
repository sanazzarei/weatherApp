export function createWelcomeView(){
    const startBox = document.createElement('div');
    startBox.classList = 'start-box'
    const startImage = document.createElement("img");
    startBox.appendChild(startImage);
    startImage.id= 'start-page-img'
    startImage.src = '../assets/img/weathercock.gif'
    startImage.alt = 'weather cock';
    const h3 = document.createElement('h3');
    h3.textContent =' Weather Forecast';
    startBox.appendChild(h3);
    const startButton = document.createElement('button');
    startButton.textContent = " LET'S START"
    startButton.id = 'start-button'
    startBox.appendChild(startButton);


    return startBox;
}