import React from 'react'

const TimerLayout = props => {
  function x() {
    return(
      <div>
        <p style={{display: "inline"}}>Title: </p><input type="text"/>
      </div>
    )
  }
  return (
    <div className="timer-layout">
      <h3>{props.title ? props.title : x()}</h3>
      <table>
        <tr className="countdown-digits">
          <th>{props.years ? props.years : "00"}</th>
          <th>:</th>
          <th>{props.months ? props.months : "01"}</th>
          <th>:</th>
          <th>{props.days ? props.days : "22"}</th>
          <th>:</th>
          <th>{props.hours ? props.hours : "03"}</th>
          <th>:</th>
          <th>{props.minutes ? props.minutes : "56"}</th>
          <th>:</th>
          <th>{props.seconds ? props.seconds : "58"}</th>
        </tr>
        <tr className="digit-descriptors">
          <td>YEARS</td>
          <td></td>
          <td>MONTHS</td>
          <td></td>
          <td>DAYS</td>
          <td></td>
          <td>HOURS</td>
          <td></td>
          <td>MINUTES</td>
          <td></td>
          <td>SECONDS</td>
        </tr>
      </table>
    </div>
  )
}

export default TimerLayout