import React from 'react'
import Timer from './Timer'

const TimersLayout = props => {
  return (
    <div className="countdown-timers-container">
      {props.timers.map(item => {

        const formatDateTimeFields = d => {
          var x = d.toString().split("")
          x.unshift("0")
          var result = x.slice(x.length - 2, x.length)
          return result
        }
  
        let dateTime = new Date(item.dateTime)
        
        let key = item.key
        let title = item.title
        let year = dateTime.getFullYear()
        let month = formatDateTimeFields(dateTime.getMonth())
        let day = formatDateTimeFields(dateTime.getDay())
        let hours = formatDateTimeFields(dateTime.getHours())
        let minutes = formatDateTimeFields(dateTime.getMinutes())
        let seconds = formatDateTimeFields(dateTime.getSeconds())

        return (
          <Timer 
            dateTime={dateTime}
            title={title}
            year={year}
            month={month}
            day={day}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            key={key}
          />
        )
      })}
    </div>
  )
}

export default TimersLayout