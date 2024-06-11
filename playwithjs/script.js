


const ball = document.getElementById("box1");


const magicBox = document.getElementById("box2");
const container = document.querySelector('.container');



let ballPosition = 20;
 let boxPosition = 0;
 const width = container.offsetWidth;
 const height = container.offsetHeight;



document.addEventListener("keydown",function(event){
var key = event.key;

if(key === "ArrowLeft"){
    console.log("left key was pressed");
    ballPosition -= 5;
    boxPosition -=10;
    if(boxPosition <0 && ballPosition<10){
        boxPosition = 0;
        ballPosition  = 10;
    }
    magicBox.style.left = boxPosition + "px";
    ball.style.left = boxPosition + "px";
    


 }
    else if(key === "ArrowRight"){
        console.log("right key was pressed");
        ballPosition += 10;
        boxPosition +=10;
        if(boxPosition>width-170 && ballPosition>width-170){
            boxPosition = width-170;
            ballPosition = width-170;
        }
        magicBox.style.left = boxPosition + "px";
        ball.style.left = boxPosition + "px";
    
}









});




