import React from 'react'
import CountdownTimer from './CountdownTimer'

const TimersLayout = (props) => {
  return (
    <div className="countdown-timers-container">
      {props.timers.map(item => {
        return (
          <CountdownTimer 
            title={item.title} 
            years={item.years} 
            months={item.months} 
            days={item.days} 
            hours={item.hours} 
            minutes={item.minutes} 
            seconds={item.seconds} 
          />
        )
      })}
    </div>
  )
}

export default TimersLayout