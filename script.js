console.log('Welcome to TIC TAC TOE')

let music = new Audio('music.mp3')
let ting = new Audio('ting.mp3')
let gameOver = new Audio('gameover.mp3')

let turn = 'X'
let game = false

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

// Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerHTML = boxTexts[e[0]].innerText + ' Won'
            game = true
            document.querySelector('.imgBox').getElementsByTagName('IMG')[0].style.width = '350px'

            document.querySelector('.line').style.display = 'block'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn
            turn = changeTurn()
            ting.play()
            checkWin()
            if (!game) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
            }
        }
    })
})


// Reset button
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxtext')
    Array.from(boxText).forEach(element => {
        element.innerText = ''
    })

    game = false
    turn = 'X'
    document.getElementsByClassName('info')[0].innerText = 'Turn for X'
    document.querySelector('.imgBox').getElementsByTagName('IMG')[0].style.width = '0px'
    document.querySelector('.line').style.display = 'none'

})