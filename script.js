const start = 1
var time = start
var interval

const timer = document.getElementById("timer")
const button = document.getElementById("start")
const conter = document.getElementById("serie")

const stopBtn = document.getElementById("stop")
const restartBtn = document.getElementById("restart")

function startTimer() {
	timer.innerHTML = "00:00"
	nb = parseInt(conter.textContent) + 1
	conter.textContent = nb
	button.textContent = "New Timer"
	time = start
	stopBtn.style.display = "inline-block"
	restartBtn.style.display = "none"
	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(updateTimmer, 1000);
}

function restartTimer() {
	interval = setInterval(updateTimmer, 1000);
	restartBtn.style.display = "none"
	stopBtn.style.display = "inline-block"
}

function stopTimer() {
	clearInterval(interval)
	stopBtn.style.display = "none"
	restartBtn.style.display = "inline-block"
}

function updateTimmer() {
	let min = String(Math.floor(time / 60)).padStart(2, '0');
	let sec = String(time % 60).padStart(2, '0');

	timer.innerHTML = min + ":" + sec
	time++
}

function flush() {
	conter.textContent = 0
}