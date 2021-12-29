/*var count = 0;
var span = document.querySelector('counter');
   var increment = document.getElementById('add')
   var decrement = document.getElementById('subtract');

function counter() {
   let counterElement = document.getElementById('counter');
   let interval = setInterval(() => {
       counterElement.innerText = number++;
       if(number > 1000) {
        clearInterval(interval); 
       }
   }, 1000);


   increment.addEventListener('click', function (){
counter.textContent = count++;
   });
   decrement.addEventListener('click', function() {
counter.textContent = count--;
   });

} */
const timerText = document.getElementById("counter")

let count = 0;
let intervalId;
let startCount = 0;
const pauseButton = document.getElementById("btn-pause");
document.addEventListener("click", function() {
    intervalId = setInterval(function (){
        count += 1;
        timerText.textContent = count;
    }, 1000);
})

document.addEventListener('DOMContentLoaded', (event) => {
    intervalId = setInterval(startCount, 1000);
});

const pause = document.getElementById("pause");

pause.addEventListener("click", function(){
    clearInterval(intervalId);
})

const buttons = document.getElementsByTagName("button");
let buttonsArray = []

for(let i=0; i<buttons.length; i++){
    if(buttons[i].id != "pause") {
        buttonsArray.push(buttons[i])
    }
}
console.log(buttonsArray)

function disableButton(button) {
    button.setAttribute("disabled", true)
};
pause.addEventListener("click", function(){
    clearInterval(intervalId);
    buttonsArray.forEach(button => disableButton(button));
})

function replacePause(){
    pause.textContent = "resume"
};
pause.addEventListener("click", function(){
    clearInterval(intervalId);
    buttonsArray.forEach(button => disableButton(button));
    replacePause()
});

pause.addEventListener("click", function(){
    if(pause==false){
        clearInterval(intervalId);

        buttonsArray.forEach(button=> {
            disableButton(button)
        })
        replacePause()
    }
    if(pause)
    {
        console.log("You are resuming!")
        intervalId = setInterval(startCount, 1000);
        replacePause()
        buttonsArray.forEach(button => {
            enableButton(button)
        })

    }
});
function enableButton(button){
    button.removeAttribute("disabled");
};
function replacePause(){
    if(!pause){
        pause.textContent = "resume";}
    if(pause){
        pause.textContent= "pause";
    }
}