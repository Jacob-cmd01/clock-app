const hoursHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minute-hand]')
const secondsHand = document.querySelector('[data-second-hand]') 

const setClock = () => {
    const date = new Date()
    const seconds = date.getSeconds() / 60
    const minutes = (seconds + date.getMinutes()) / 60
    const hours = (minutes + date.getHours()) / 12
    setRotation(secondsHand, seconds)
    setRotation(minutesHand, minutes)
    setRotation(hoursHand, hours)
}

const setRotation = (element, rotationRatio) => {
    element?.style?.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000)

setClock()