const minutesDisplay = document.getElementById("minutesDisplay");
const secondsDisplay = document.getElementById("secondsDisplay");
const millisecondsDisplay = document.getElementById("millisecondsDisplay");

let interval;
let [miliSeconds, seconds, minutes] = [1, 1, 1];

document.getElementById("startBtn").addEventListener("click", function (e) {
    interval = setInterval(function () {
        millisecondsDisplay.innerText = miliSeconds++;
        if (miliSeconds > 100) {
            miliSeconds = 1;
            secondsDisplay.innerText = seconds++;
            if (seconds > 60) {
                minutesDisplay.innerText = minutes++;
                seconds = 1;
                if (minutes == 60) {
                    clearInterval(interval);
                }
            }
                
        }
    }, 1);
    e.target.setAttribute("disabled", true);
})

document.getElementById("stopBtn").addEventListener("click", function (e) {
    clearInterval(interval)
    e.target.parentNode.querySelector("#startBtn").removeAttribute("disabled");
})

document.getElementById("resetBtn").addEventListener("click", function (e) {
    clearInterval(interval);
    [miliSeconds, seconds, minutes] = [0, 0, 0];
    minutesDisplay.innerText = 0;
    secondsDisplay.innerText = 0;
    millisecondsDisplay.innerText = 0;
    e.target.parentNode.querySelector("#startBtn").removeAttribute("disabled");
})