import React, { useState } from 'react'
import Timer from './Timer'

const TimersLayout = ({ timers }) => {

  const [timersArray, setTimersArray] = useState(timers)

  // sets the hours, minutes, and seconds to 2 digits (prepends a zero if needed)
  const formatDateTimeFields = d => {
    var x = d.toString().split("")
    x.unshift("0")
    var result = x.slice(x.length - 2, x.length)
    return result
  }

  // updates the timers
  const countdown = arr => {
    let tempArray = arr
    tempArray.map(item => {
      let result = (new Date(item.dateTime).getTime()) - (new Date().getTime())
      item.days = Math.floor(result / 86400000);
      item.hours = formatDateTimeFields(Math.floor(result / 3600000) % 60);
      item.minutes = formatDateTimeFields(Math.floor(result / 60000) % 60); 
      item.seconds = formatDateTimeFields(Math.floor(result / 1000) % 60);
    })
    setTimersArray([...tempArray])
  }

  // runs the countdown function to update the timers every second
  setInterval(() => countdown(timersArray), 500)

  return (
    <div className="countdown-timers-container">
      {
        timersArray.map(item => {
          return (
            <Timer 
              dateTime={new Date(item.dateTime)}
              title={item.title}
              day={item.days}
              hours={item.hours}
              minutes={item.minutes}
              seconds={item.seconds}
              key={item.key}
            />
          )
        })
      }
    </div>
  )
}

export default TimersLayout