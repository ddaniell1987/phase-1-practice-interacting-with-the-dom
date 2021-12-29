var count = 0;
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

}

pauseButton.addEventListener("click", clickPause)
function clickPause() {
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pauseButton.innerText = "resume"
    }else{
        interval = setInterval
        pause.innerText = "pause"
    }
}