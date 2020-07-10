
var msec=0;
var sec=0;
var min=0;
var msech=document.getElementById("msec");
var sech=document.getElementById("sec");
var minh=document.getElementById("min");
var interval;
function time(){
    msec++;
    msech.innerHTML=msec;
    if (msec>=100)
    {
        sec++
        msec=0
        sech.innerHTML=sec;
    
    }
else if(sec>=60){
        min++;
        minh.innerHTML=min;
    sec=0;
    }
}


function start(){
   
interval= setInterval(time,10)
document.getElementById("startb").disabled=true;

}
function pause(){
   clearInterval(interval);
   document.getElementById("startb").disabled=false;
}

function reset(){
    document.getElementById("startb").disabled=false;
    clearInterval(interval)
  msec=0;
  sec=0;
     min=0;
    msech.innerHTML=msec;
    sech.innerHTML=sec;
    minh.innerHTML=min;
  
 }
