const BOARD = document.querySelector('.board')
const CELLS = document.querySelectorAll('.cell')
const GAMEOVER = document.querySelector('.gameover')
const WIN_MSG = document.querySelector('.gameover h2')
const REPLAY_BTN = document.querySelector('.gameover button')

const Player = function(sign) {
    this.sign = sign
    const getSign = function() {
        return sign
    }
    return { getSign }
}


const gameBoard = (function() {
    const board = ['', '', '', '', '', '', '', '', '']

    const getField = function(index) {
        return board[index]
    }

    const setField = function(index, sign) {
        board[index] = sign
        document.querySelector(`[data-attribute="${index}"]`).classList.add('filled')
    }

    const showBoard = function() {
        board.forEach((cell, index) => {
            document.querySelector(`[data-attribute="${index}"]`).innerHTML = board[index]
        })
    }

    return { getField, setField, showBoard }
    
})()


const gamePlay = (function() {
    // CREATE PLAYER 'X' AND 'O'
    const playerX = new Player('X')
    const playerO = new Player('O')
    let round = 1

    const getCurrentPlayer = function() {
        return round % 2 === 0 ? playerO.getSign() : playerX.getSign()
    }

    const playRound = function(index) {
        gameBoard.setField(index, getCurrentPlayer())
        gameBoard.showBoard()
        if(round === 9) {
            gameControllers.gameover('tie')
        }
        else if (checkWin()) {
            gameControllers.gameover(getCurrentPlayer())
        }
        round++
    }

    const checkWin = function() {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        
        return winCombinations.some(combination => {
            return combination.every(index => {
                return gameBoard.getField(index) === getCurrentPlayer()
            })
        })
    }

    return { getCurrentPlayer, playRound }
})()


const gameControllers = (function() {
    CELLS.forEach(cell => {
        cell.addEventListener('pointerdown', (e) => {
            gamePlay.playRound(e.target.getAttribute('data-attribute'))
        }, { once: true })
    })
    
    const gameover = function(winner) {
        // SHOW GAMEOVER DIV
        GAMEOVER.classList.remove('hidden')
        
        // SHOW WINNER
        if (winner === 'tie') {
            WIN_MSG.innerHTML = `It's a TIE!`
        }
        else {
            WIN_MSG.innerHTML = winner + "'s win!"
        }

        // FREEZE BOARD
        CELLS.forEach(cell => {
            cell.classList.add('filled')
        })
    }

    REPLAY_BTN.addEventListener('pointerdown', () => {
        location.reload()
    })

    return { gameover }
})()