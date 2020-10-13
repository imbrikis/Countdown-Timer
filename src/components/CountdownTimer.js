import React from 'react'

const TimerLayout = props => {
  return (
    <div className="countdown-timer-div">
      <div className="controls-left">
        <div className="control-button controls controls-top-left"><i className="big arrows alternate vertical icon"></i></div>
        <div className="control-button controls controls-bottom-left"><i className="big expand arrows alternate icon"></i></div>
      </div>
      
      <div className="countdown">
        <h3>{props.title ? props.title : "unnamed event"}</h3>
        <table>
          <tr className="countdown-digits">
            <th>{props.years ? props.years : "00"}</th>
            <th>:</th>
            <th>{props.months ? props.months : "00"}</th>
            <th>:</th>
            <th>{props.days ? props.days : "00"}</th>
            <th>:</th>
            <th>{props.hours ? props.hours : "00"}</th>
            <th>:</th>
            <th>{props.minutes ? props.minutes : "00"}</th>
            <th>:</th>
            <th>{props.seconds ? props.seconds : "00"}</th>
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

      <div className="controls-right">
        <div className="control-button controls controls-top-right"><i className="big pencil alternate icon"></i></div>
        <div className="control-button controls controls-bottom-right"><i className="big trash alternate outline icon"></i></div>
      </div>
    </div>
  )
}

export default TimerLayout