const timerElement = document.getElementById("timer");
export const alertBanner = document.getElementById("alert");

let startTime = 0;

// function getTimerTime() {
//     return Math.floor((new Date() - startTime) / 1000);
// }

export function startTimer() {
    startTime++;
    timerElement.innerText = startTime;
}

export function resetTimer() {
    startTime = 0;
    timerElement.innerText = 0;
}

export function timerCheck(wordCount) {
    alertBanner.innerText = (`${timerElement.innerText} seconds taken, ` + String(Math.floor((wordCount * 60) / Number(timerElement.innerText))) + " WPM");
    startTime = 0;
    timerElement.innerText = 0;
}

export function timerCheckKorean(charCount) {
    alertBanner.innerText = (`${timerElement.innerText} seconds taken, ` + String(Math.floor((charCount * 60) / Number(timerElement.innerText))) + " CPM");
    startTime = 0;
    timerElement.innerText = 0;
}

