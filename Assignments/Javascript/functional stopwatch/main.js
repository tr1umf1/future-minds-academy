const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const lapBtn = document.querySelector("#lapBtn");
const lapInfo = document.querySelector("#lapInfo");
const lapCount = document.querySelector("#lapCount");
const splitCount = document.querySelector("#splitCount");
const totalCount = document.querySelector("#totalCount");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;
let milisec = 0;
let lapEnd;
let lapElapsedTime;
let previousLapEndTime = 0;

lapBtn.classList.add('pointer-none');

function displayTime() {
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    secs = Math.floor((elapsedTime / 1000) % 60);
    milisec = Math.floor((elapsedTime % 1000)/ 10);
   
    mins = pad(mins);
    secs = pad(secs);
    milisec = pad(milisec);
    
    timeDisplay.textContent = `${mins}:${secs}:${milisec}`;
    pad();
}
function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}

function startTimer() {
    if (paused) {
        paused = false;
        intervalId = setInterval(() => {
            elapsedTime += 10;
            displayTime();
        }, 10);
    }
}

startBtn.addEventListener("click", () => {
    startTimer();
    startBtn.classList.add('hide');
    stopBtn.classList.add('show');
    resetBtn.classList.remove('show');
    lapBtn.classList.remove('hide');
    lapBtn.classList.remove('pointer-none');
})

function stopTimer() {
    if(!paused) {
        paused = true;
        clearInterval(intervalId);
    }
}

stopBtn.addEventListener("click", () => {
    stopTimer();
    startBtn.classList.remove('hide');
    stopBtn.classList.remove('show');
    resetBtn.classList.add('show');
    lapBtn.classList.add('hide');
})
resetBtn.addEventListener("click", () => {
    location.reload();
})

let lapsArray = [];
let lap = 0;


function lapAdd() {
    lapEnd = elapsedTime;
    lapElapsedTime = lapEnd - previousLapEndTime;

    let lapMins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let lapSecs = Math.floor((elapsedTime / 1000) % 60);
    let lapMilisec = Math.floor((elapsedTime % 1000)/ 10);

    lapMins = pad(lapMins);
    lapSecs = pad(lapSecs);
    lapMilisec = pad(lapMilisec);
    pad();

    lapsArray.unshift({
        lapNumber: lap,
        lapTime: `${lapMins}:${lapSecs},${lapMilisec}`,
        totalTime: timeDisplay.textContent // Corrected property name
    });

    let laptext = "";
    lapsArray.forEach((lapData) => {
        laptext += `<span>Lap ${lapData.lapNumber}</span><span class="split">${lapData.lapTime}</span><span class="total">${lapData.totalTime}</span>`;
    });
    lapInfo.innerHTML = laptext;
    
    previousLapEndTime = lapEnd;
}


lapBtn.addEventListener("click", () => {
    lap++;
    lapAdd();
})