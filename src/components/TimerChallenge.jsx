import React, { useState } from 'react'

const TimerChallenge = ({ title, targetTime }) => {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    // start timer
    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000); // targetTime * 1000: to get time in Milliseconds.
        setTimerStarted(true);
    }

    function handleStop() {
        //pending
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}

export default TimerChallenge;