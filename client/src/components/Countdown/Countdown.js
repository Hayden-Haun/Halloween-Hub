import React, { useEffect, useState } from "react";
import "./countdown.css";

function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  // const timerComponents = [];
  // timerComponents.push(
  //   timeLeft.days,
  //   timeLeft.hours,
  //   timeLeft.minutes,
  //   timeLeft.seconds
  // );

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <>
  //       <h3>
  //         {timeLeft[interval]} {interval}{" "}
  //     </>
  //   );
  // });
  return (
    <div className="is-flex is-align-items-center is-flex-direction-column">
      <h1 className="is-size-1 has-text-centered">Countdown to Halloween {year}</h1>
      {/* <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div> */}
      <div className="columns is-multiline has-text-centered">
        <div className="column is-3 is-flex is-flex-direction-column">
          <div className="is-size-1">{timeLeft.days}</div>
          <div className="is-size-3">Days</div>
        </div>
        <div className="column is-3 is-flex is-flex-direction-column">
          <div className="is-size-1">{timeLeft.hours}</div>
          <div className="is-size-3">Hours</div>
        </div>
        <div className="column is-3 is-flex is-flex-direction-column">
          <div className="is-size-1">{timeLeft.minutes}</div>
          <div className="is-size-3">Minutes</div>
        </div>
        <div className="column is-3 is-flex is-flex-direction-column">
          <div className="is-size-1">{timeLeft.seconds}</div>
          <div className="is-size-3">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
