let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    gameTime = 0,
    score = 0,
    interval = 0;

let colors = ['red', 'green', 'black', 'blue', 'yellow', 'pink', 'purple', 'white', 'grey']
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('triangle')) {
        score++
        event.target.remove()
        createtriangle()
    }
})

function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => {
        decreaseTime()
    }, 1000);
    createtriangle()
    btn.disabled = true
}

function decreaseTime() {
    if(gameTime == 0) {
        endGame()
    }else {
        let currentTime = --gameTime
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = sizeBall()
    let coor = gameBlock.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    ball.style.background = randomColor()
    
    gameBlock.append(ball)
    
}

function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
    let size = sizeBall()
    let coor = gameBlock.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)

    square.style.width = size + 'px'
    square.style.height = size + 'px'
    square.style.top = y + 'px'
    square.style.left = x + 'px'
    square.style.background = randomColor()
    
    gameBlock.append(square)
}

function createtriangle() {
    let triangle = document.createElement('div')
    triangle.classList.add('triangle')
    let size = sizeBall()
    let coor = gameBlock.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)

    triangle.style.width = size + 'px'
    triangle.style.height = size + 'px'
    triangle.style.top = y + 'px'
    triangle.style.left = x + 'px'
    triangle.style.color = randomColor()
    
    gameBlock.append(triangle)
}



function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// Функция для рандомного цвета
function randomColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// Функия для рандомного цвета
function sizeBall(min = 20, max = 100) {
    let sizeBall =  Math.floor(Math.random() * (max + 1 - min) + min)
    return sizeBall
}

// Функия для рандомной фигуры
function formFigure() {
    let randomFigure = Math.floor(Math.random() * (createBall + createSquare))
    return randomFigure
}