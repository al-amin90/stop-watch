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
            if (seconds < 10) {
                secondsDisplay.innerText = "0" + seconds++;
            }
            else {
                secondsDisplay.innerText = seconds++;
            }
            if (seconds > 60) {
                seconds = 1;
                if (minutes < 10) {
                    minutesDisplay.innerText = "0" + minutes++;
                }
                else {
                    minutesDisplay.innerText = minutes++;
                }
                if (minutes == 60) {
                    clearInterval(interval);
                }
            }
        }
    }, 10);
    e.target.setAttribute("disabled", true);
})

document.getElementById("stopBtn").addEventListener("click", function (e) {
    clearInterval(interval)
    e.target.parentNode.querySelector("#startBtn").removeAttribute("disabled");
})

document.getElementById("resetBtn").addEventListener("click", function (e) {
    clearInterval(interval);
    [miliSeconds, seconds, minutes] = [0, 0, 0];
    minutesDisplay.innerText = "00";
    secondsDisplay.innerText = "00";
    millisecondsDisplay.innerText = "00";
    e.target.parentNode.querySelector("#startBtn").removeAttribute("disabled");
})