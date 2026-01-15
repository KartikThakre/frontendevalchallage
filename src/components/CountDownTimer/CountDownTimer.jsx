import React, { useEffect } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [start, setStart] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(false);
  const [hours, setHours] = React.useState('00');
  const [minutes, setMinutes] = React.useState('00');
  const [seconds, setSeconds] = React.useState('00');


  useEffect(() => {
  if (!isRunning) return;

  const timer = setInterval(() => {
    if (seconds > 0) {
      setSeconds(prev => prev - 1);
    } else if (minutes > 0) {
      setMinutes(prev => prev - 1);
      setSeconds(59);
    } else if (hours > 0) {
      setHours(prev => prev - 1);
      setMinutes(59);
      setSeconds(59);
    } else {
      clearInterval(timer);
      setIsRunning(false);
      setStart(false);
      alert("The Timer has been Completed. Please Reset to Start Again.");
    }
  }, 1000);

  return () => clearInterval(timer);
}, [isRunning, hours, minutes, seconds]);


  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
         setIsRunning(true);
         setStart(true);
    }
    
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setStart(false);
  };

  return (
    <div>
      <h1>CountDownTimer</h1>
      <div className="timer-inputs">
        <input
          type="text"
          placeholder="HH"
          className="timer-input"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />:
        <input
          type="text"
          placeholder="MM"
          className="timer-input"
          value={minutes}   
          onChange={(e) => setMinutes(e.target.value)}
        />:
        <input
          type="text"
          placeholder="SS"
          className="timer-input"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        {!start ? (
          <button className="timer-button" onClick={handleStart}>
            Start
          </button>
        ) : (
          <>
            <button className="timer-button" onClick={isRunning ? handlePause : handleStart}>
              {isRunning ? "Pause" : "Start"}
            </button>
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CountDownTimer;
