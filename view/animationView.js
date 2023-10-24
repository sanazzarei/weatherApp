export function createAnimation(){
    const animationBox = document.createElement('div');
    animationBox.id = 'animation-box';
    const imgSun = document.createElement('img');
    imgSun.src = './assets/img/sun.png';
    imgSun.alt = 'sun';
    imgSun.id = 'sun-rotating';
    animationBox.appendChild(imgSun);

    const imgCloud = document.createElement("img");
    imgCloud.src = "./assets/img/cloud.png";
    imgCloud.alt = "sun";
    imgCloud.id = "cloud-moving";
    animationBox.appendChild(imgCloud);

    return animationBox;
}