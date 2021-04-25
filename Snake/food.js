import {onSnake, expandSnake} from './snake.js'

let food ={x:10,y:1};
const expansionRate=1;

export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate);
        food={x:20,y:10};
    }
 }
export function render(gameBoard){
    const foodElement=document.createElement('div'); //create new html element, part of snake body
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
 }

 function getRandomFoodPosition(){
     let newFoodPosition=0;
 }