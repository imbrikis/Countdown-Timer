import React from 'react'
import TimerLayout from './TimerLayout'

const countdownTimers = () => {
  return (
    <div className="countdown-timer-container">
      <TimerLayout title="The Apocalypse" />
      <TimerLayout title="My Birthday" />
      <TimerLayout title="Inevitable Death" />
      <TimerLayout title="Album Release Party" />
    </div>
  )
}

export default countdownTimers