const refDate = '28 May 2021';

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown() {
    const dateToTimeOut = new Date(refDate);
    const currentDate = new Date();

    const remaining = dateToTimeOut - currentDate;

    const totalSeconds = remaining / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = timeFormater(days);
    hoursEl.innerHTML = timeFormater(hours);
    minutesEl.innerHTML = timeFormater(minutes);
    secondsEl.innerHTML = timeFormater(seconds);
}

function timeFormater(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);