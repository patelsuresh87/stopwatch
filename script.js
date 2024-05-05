//get button elements based on ids
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const resetBtn=document.getElementById('resetBtn');

//get span elements based on ids
const minSpan=document.getElementById('minute');
const secSpan=document.getElementById('second');

//initialize minute,second and timer variables
let min=0;
let sec=0;
let timer=false;     

//start button click event
startBtn.addEventListener('click', function(){
    timer=true;               
    startTimer();
   
});

//stop button click event
stopBtn.addEventListener('click',function(){
    timer=false;
});

//reset button click event
resetBtn.addEventListener('click',function(){
    timer=false;
    min=0;
    sec=0;
    minSpan.innerHTML='00';
    secSpan.innerHTML='00';
});

//define function for timer in 1 second interval
function startTimer(){
    if(timer){
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        let strMin=min;
        let strSec=sec;
        if(min<10){
            strMin="0"+strMin;
        }
        if(sec<10){
            strSec="0"+strSec;
        }
        
        minSpan.innerHTML=strMin;
        secSpan.innerHTML=strSec;
        setTimeout(startTimer, 1000);
    }
}