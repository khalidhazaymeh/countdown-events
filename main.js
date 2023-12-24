


//Start CountDown for Date

let countDownDate=new Date("Jan 1,2024 00:00:01").getTime();

let counter=setInterval(()=>{

    //Get Date Now
    let dateNow = new Date().getTime();
    let dateDiff=countDownDate - dateNow;
    //Git Time Units (days month )
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    
  let hours =Math.floor(dateDiff % ( 1000 * 60 * 60 * 24) /1000 /60 /60);
  let minutes =Math.floor( dateDiff %( 1000 * 60 * 60)/(1000 *60));
  let seconds =Math.floor( dateDiff %( 1000 * 60)/(1000));
  



  document.querySelector(".days").innerHTML =days <10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML=hours <10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML=minutes <10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML=seconds <10 ? `0${seconds}` : seconds;
  if(dateDiff<= 0){
    clearInterval(counter);
}
},1000);



