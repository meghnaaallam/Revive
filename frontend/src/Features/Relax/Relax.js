//importing react components and styles
import React from "react";
import { useState } from "react";
import '../Relax/Relax.scss';

//creating functional component Relax 
const Relax = () => {

  //using state to set the timer id and text
   const [timerId, setTimerId]= useState(null);
   const [timerText, setTimerText] = useState('00:00');
   
   //starting the countdown, when the handlers pass mins, secs as parameters
    const startcountDown= (time)=> {
      let timerInterval;
      console.log(time)
      if(timerId) {
        console.log(timerId)
        clearInterval(timerId)
        setTimerId(null)
        setTimerText("00:00");
         }
      timerInterval = setInterval(() => {
        time=time-1;
        setTimerText(convertTime(time));
      }, 1000); 
      console.log(timerInterval) 
    setTimerId(timerInterval)
    }

//function to convert time to mins and secs with help of Math function
    const convertTime = (time)=> {
      if(time ===0) {
        clearInterval(timerId);
        return "00:00";
      }
      //converting mins and secs to milliseconds
     const mins= Math.floor(time/60);
     const seconds = time-(mins*60);
     return mins+":"+seconds
    }

    //function to handle timer of 2mins
    const handleTwoMins = (props) => {
      startcountDown(2*60);
    }
    //function to handle timer of 3mins
    const handleThreeMins = (props) => {
      startcountDown(3*60);
    }
    //function to handle timer of 5mins
    const handleFiveMins = () => {
       startcountDown(5*60);
    }

//updating the state to change the timer text and give user an alert message
  function handleMouseMove(ev) { 
   if(timerId) {
   alert("Oops! Try Again")
   clearInterval(timerId)
   setTimerId(null)
   setTimerText("00:00");
   }
  }
  
    return(
<div className="relaxBody">
  <img src="https://img.freepik.com/free-vector/sport-summer-camp-abstract-concept-vector-illustration_335657-5662.jpg?w=740&t=st=1670352878~exp=1670353478~hmac=94367b8def9546b1268a53856ffb456b12910373c7edba09ecbe91137dee3c48"></img>
        {/* returns back on mouse move */}
    <div className="class-relax" onMouseMove={handleMouseMove}>
      <h2>Don't move your cursor. Sit back, breathe and relax</h2>
          {/* adding buttons for timers */}
          <button className="btn-start" onClick={handleTwoMins}>2 Mins</button>
          <button className="btn-start" onClick={handleThreeMins}> 3 Mins</button>
          <button className="btn-start" onClick={handleFiveMins}>5 Mins</button>
      <div className="timer">
        <h3> Time : {timerText} </h3>

      </div>
    </div>
</div>
  );
}

export default Relax;