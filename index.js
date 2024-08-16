const start=document.getElementById("start");
const stop=document.getElementById("stop");

function generateRandomColor(){
    let color="#";
    const hex="0123456789ABCDEF";
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log("Generating random color",generateRandomColor());
let intervalId;
function startInterval(){
    intervalId=setInterval(toBody,1000);
    function toBody(){
        document.body.style.backgroundColor=generateRandomColor();
    }
}

function stopInterval(){
    clearInterval(intervalId);
    intervalId=null;
}

start.addEventListener("click",startInterval);
stop.addEventListener("click",stopInterval);