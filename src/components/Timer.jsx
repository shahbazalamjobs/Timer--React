import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer">Timer: {seconds}s</h1>
      <button className={`button ${isActive ? 'pause-button' : 'start-button'}`} onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button reset-button" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
