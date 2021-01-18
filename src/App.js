import Timer from './components/Timer'
import './App.css';
import Length from './components/Length'
import React, { useState, useRef } from 'react'



function App() {
  const [breakTime, setBreakTime] = useState(5 * 60)
  const [sessionTime, setSessionTime] = useState(25 * 60)
  const [displayTime, setDisplayTime] = useState(25 * 60)
  const [timerOn, setTimerOn] = useState(false)
  const audioElement = useRef();
  let onBreak = false;



  const changeTime = (amount, type) => {
    if (type == "break") {
      if (breakTime <= 60 && amount < 0) {
        return;
      }
      setBreakTime((prev) => prev + amount);
    } else {
      if (sessionTime <= 60 && amount < 0) {
        return;
      }
      setSessionTime((prev) => prev + amount)
      if (!timerOn) {
        setDisplayTime(sessionTime + amount)
      }
    }
  }


  const resetTime = () => {
    setDisplayTime(25 * 60)
    setBreakTime(5 * 60)
    setSessionTime(25 * 60)
  }


  const controllTime = () => {
    if (!timerOn) {
      let counter = displayTime;


      let interval = setInterval(() => {
        if (counter === 1) {
          audioElement.current.play()
          audioElement.current.currentTime = 0
        }
        if (counter === 0) {
          if (onBreak) {
            counter = displayTime;
            setDisplayTime(displayTime)
          } else {
            counter = breakTime;
            setDisplayTime(breakTime)
          }
          onBreak = !onBreak;
          console.log("dfghjk")
        } else {
          setDisplayTime(prev => prev - 1)
          counter--;
          console.log(counter)
        }

      }, 1000);
      localStorage.clear();
      localStorage.setItem('interval-id', interval)
    }

    if (timerOn) {
      clearInterval(localStorage.getItem('interval-id'))
    }

    setTimerOn(!timerOn)
  }



  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="dualContainer">
        <Length title={"Break Length"}
          changeTime={changeTime}
          type={"break"}
          time={breakTime}
          displayTime={displayTime}
          setDisplayTime={setDisplayTime}
        />

        <Length title={"Session Length"}
          changeTime={changeTime}
          type={"session"}
          time={sessionTime} />
      </div>

      <div className="sessionDiv">
        <h2>Session</h2> 
        <Timer
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
        controllTime={controllTime}
        resetTime={resetTime}
        displayTime={displayTime}
      />
      </div>    

      <audio
        src="https://www.myinstants.com/media/sounds/alarm_clock.mp3"
        ref={audioElement}
      ></audio>
      <p>Designed and Coded by <br></br>Tamar Gagniashvili</p>
    </div>
  );
}

export default App;
