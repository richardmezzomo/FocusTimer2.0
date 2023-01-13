const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function countdown() {
  setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)

    if(seconds <= 0 ) {
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1

    countdown()
  }, 1000)
  
}


buttonPlay.addEventListener('click', function() {
  buttonPause. classList.remove('hide')
  buttonPlay.classList.add('hide')
  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause. classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonMinus.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
})

buttonPlus.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})