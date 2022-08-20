const btn = document.getElementById('icon')
const nav = document.getElementById('links')
const Hunbal = document.getElementById('hunbal')
const moon = document.getElementById(".moon")

btn.onclick = function() {
    nav.style.width = "400px"
    nav.style.display = "block"
    this.style.display = "none"
    Hunbal.style.display = "block"
}
Hunbal.onclick = function () {
    nav.style.width = "0px"
    this.style.display = "none"
    this.style.display = "none"
    btn.style.display = "block"
}
document.querySelector(".moon").onclick = function () {
    document.querySelector("body").classList.toggle("is-back");
}


//clock
setInterval(setClock, 1000)

const handHour = document.querySelector('[data-hand-hour]')
const handMinute = document.querySelector('[data-hand-minute]')
const handSecond = document.querySelector('[data-hand-second]')

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(handSecond, secondRatio)
    setRotation(handMinute, minuteRatio)
    setRotation(handHour, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();