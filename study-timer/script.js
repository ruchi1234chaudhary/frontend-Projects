// script.js
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let timerDisplay = document.getElementById("timer");

let seconds = 0;
let timerInterval = null;

// Format time as HH:MM:SS
function formatTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  return (
    String(hrs).padStart(2, "0") +
    ":" +
    String(mins).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

// Start the timer
startButton.addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      timerDisplay.textContent = formatTime(seconds);
    }, 1000);
  }
});

// Pause the timer
pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset the timer
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  timerDisplay.textContent = "00:00:00";
});
