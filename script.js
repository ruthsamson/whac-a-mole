const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const restartGame = document.querySelector('#restart-btn')
const startGame = document.querySelector('#start')

let result = 0;
let hitPosition
let currentTime = 60;
let timerId = null

//Getting each square and removing the mole that exists on any of the squares to have a fresh slate to start with
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    //Now we can make it add a mole randomly
    //We only need index 0 to 8. This will give us anything from 0 to less than 9 with that Math.random

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
    }

    //Get a point in score for everytime you hit the mole
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                result++
                score.innerHTML = result
                hitPosition = null
            }
        });
    })


    //Writing this in another function so we could attach this to a button if we wish
    //Don't need to write the timerId to make the mole move, but its there b/c that's what we can use to stop our mole on our button if we wish
    function moveMole() {
        timerId = setInterval(randomSquare, 600)
    }
    moveMole()

    //Time-Left Timer

function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)


startGame.addEventListener('click', () => {
    location.reload();
})

//FIX start game to not refresh page but only timer and score
// Timer and score not starting new game properly
// startGame.addEventListener('click', () => {
//     if (currentTime == 0) {
//         clearInterval(countDownTimerId)
//         clearInterval(timerId)
//         alert('GAME OVER! Your final score is ' + result)
//     }
//     let countDownTimerId = setInterval(countDown, 1000)
//     result = 0
// });
