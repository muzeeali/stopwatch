var snd;
var msec=0;
var sec=0;
var min=0;
var mins;
var secs;
var msecs;
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
function soundstart(){
    snd= new Audio ("images/sound.mp3")
    snd.loop=true;
    snd.play();
    snd.currentTime=0;
}
function soundpause(){
    snd.pause();
}

function start(){

interval= setInterval(time,10)
document.getElementById("startb").disabled=true;
soundstart();
}
function pause(){
   clearInterval(interval);
   document.getElementById("startb").disabled=false;
   soundpause()
}
function hist(){
  
  var histd=document.getElementById("histd")
   mins=min;
   secs=sec;
  msecs=msec;
   histd.innerHTML= mins + " : " + secs + " : " + msecs + "<br>"
   

}
function histc(){
   var histd=document.getElementById("histd")
   histd.innerHTML=""
   
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
   histc()
   soundpause()
 }
