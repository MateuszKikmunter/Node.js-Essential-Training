const delay = 5000;
const waitingTime = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitingTime;
    const p = Math.floor((currentTime / delay) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
};

console.log(`setting a ${delay / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
};

const interval = setInterval(incTime, waitingTime);
setTimeout(timerFinished, delay);