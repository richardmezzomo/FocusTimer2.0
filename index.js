const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut
let minutes = minutesDisplay.textContent

function resetControls() {
  buttonPause. classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      resetControls()
      return
    }

    if(seconds <= 0 ) {
      seconds = 3

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
  
}


buttonPlay.addEventListener('click', function() {
  buttonPause. classList.remove('hide')
  buttonPlay.classList.add('hide')
  countdown()
})

buttonPause.addEventListener('click', function() {
  resetControls()
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
  resetControls()
  resetTimer()
})

buttonMinus.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
  if (minutesDisplay.textContent < 0) {
    minutesDisplay.textContent = 0
  }

  if(minutesDisplay.textContent < 10) {
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
  }
})

buttonPlus.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5

  if(minutesDisplay.textContent < 10) {
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
  }
})
