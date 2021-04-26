import {snakeSpeed, update as updateSnake, render as renderSnake, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, render as renderFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard=document.getElementById('game-board');

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press Ok to restart')){
            window.location='/Snake'
        }
        return
    }
    window.requestAnimationFrame(main);
    const timeSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(timeSinceLastRender<1/snakeSpeed) return;

    lastRenderTime = currentTime;
    

    //logika gry, z reguły jest zawsze taka: uaktualnij logikę gry a potem renderuj
    update();
    render();
}

window.requestAnimationFrame(main);


function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function render(){
    gameBoard.innerHTML ='';
    renderSnake(gameBoard);
    renderFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}