import React from 'react'

const TimerChallenge = ({ title, targetTime }) => {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    start challenge
                </button>
            </p>
            <p>
                Timer is running... / Timer is inactive
            </p>
        </section>
    )
}

export default TimerChallenge;