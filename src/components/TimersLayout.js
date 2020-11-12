import React from 'react'
import Timer from './Timer'

const TimersLayout = props => {

  const formatDateTimeFields = d => {
    var x = d.toString().split("")
    x.unshift("0")
    var result = x.slice(x.length - 2, x.length)
    return result
  }

  const countdown = (futureDate) => {
    let result = (new Date(futureDate).getTime()) - (new Date().getTime())
    let timerItems = {
      days: Math.floor(result / 86400000), 
      hours: Math.floor(result / 3600000) % 60, 
      minutes: Math.floor(result / 60000) % 60, 
      seconds: Math.floor(result / 1000) % 60}
      return timerItems
  }

  return (
    <div className="countdown-timers-container">
      {
        props.timers.map(item => {
          let diff = countdown(item.dateTime)
          console.log(diff)
    
          let dateTime = new Date(item.dateTime)
          let key = item.key
          let title = item.title
          let day = diff.days
          let hours = formatDateTimeFields(diff.hours)
          let minutes = formatDateTimeFields(diff.minutes)
          let seconds = formatDateTimeFields(diff.seconds)
    
          return (
            <Timer 
              dateTime={dateTime}
              title={title}
              day={day}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              key={key}
            />
          )
        })
      }
    </div>
  )
}

export default TimersLayout