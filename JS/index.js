// DOM
const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.plus')
const buttonDecrease = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardOfRainForest = document.querySelector('#rainForest')
const cardOfRain = document.querySelector('#rain')
const cardOfCoffeeShop = document.querySelector('#coffeeShop')
const cardOfFireplace = document.querySelector('#fireplace')

// SOUNDS
const soundOfRainForest = new Audio('./assets/sounds/rainForest.wav')
const soundOfRain = new Audio('./assets/sounds/rain.wav')
const soundOfCoffeeShop = new Audio('./assets/sounds/coffeeShop.wav')
const soundOfFireplace = new Audio('./assets/sounds/fireplace.wav')

// VARIABLES
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

// FUNCTIONS
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

function updateMinutes(minutes){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function increaseFiveMinutes() {        
  minutes += 5
  updateMinutes(minutes)
  }

function decreaseFiveMinutes() {
  minutes -= 5 
  updateMinutes(minutes)
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
      seconds = 60

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
  
}

function togglePlay(myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

// EVENTS
buttonPlay.addEventListener('click', function() {
  buttonPause. classList.remove('hide')
  buttonPlay.classList.add('hide')
  countdown()
})

buttonPause.addEventListener('click', function() {
  resetControls()
  clearTimeout(timerTimeOut)
  sound.buttonPressAudio()
})

buttonStop.addEventListener('click', function() {
  resetControls()
  resetTimer()
})

buttonDecrease.addEventListener('click', function() {

  decreaseFiveMinutes()

  if (minutes < 0) {
    minutes = 0
  }

  if(minutes < 10) {
    updateTimerDisplay(minutes, 0)
  }
})

buttonIncrease.addEventListener('click', function() {
  increaseFiveMinutes()

  if(minutesDisplay.textContent < 10) {
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
  }
})

cardOfRainForest.addEventListener('click', function() {
  cardOfRainForest.classList.toggle('clicked')
  togglePlay(soundOfRainForest)
})

cardOfRain.addEventListener('click', function() {
  cardOfRain.classList.toggle('clicked')
  togglePlay(soundOfRain)
})

cardOfCoffeeShop.addEventListener('click', function() {
  cardOfCoffeeShop.classList.toggle('clicked')
  togglePlay(soundOfCoffeeShop)
})

cardOfFireplace.addEventListener('click', function() {
  cardOfFireplace.classList.toggle('clicked')
  togglePlay(soundOfFireplace)
})