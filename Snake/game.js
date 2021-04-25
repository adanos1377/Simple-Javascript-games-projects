import {snakeSpeed, update as updateSnake, render as renderSnake} from './snake.js'
import {update as updateFood, render as renderFood} from './food.js'

let lastRenderTime = 0;
const gameBoard=document.getElementById('game-board');

function main(currentTime){
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
}
function render(){
    gameBoard.innerHTML ='';
    renderSnake(gameBoard);
    renderFood(gameBoard);
}