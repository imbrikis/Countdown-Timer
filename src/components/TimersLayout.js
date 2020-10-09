import React from 'react'
import CountdownTimer from './CountdownTimer'

const countdownTimers = () => {
  return (
    <div className="countdown-timers-container">
      <CountdownTimer title="My Birthday" years="00" months="06" days="09" hours="11" minutes="55" seconds="34" />
      <CountdownTimer title="Album Release Party" years="00" months="07" days="08" hours="19" minutes="08" seconds="55" />
      <CountdownTimer title="Inevitable Death" years="27" months="11" days="20" hours="09" minutes="23" seconds="17" />
      <CountdownTimer title="The Apocalypse" years="79" months="04" days="23" hours="04" minutes="37" seconds="09" />
    </div>
  )
}

export default countdownTimers