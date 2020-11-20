import React from 'react'

const Timer = ({ dateTime, title, day, hours, minutes, seconds }) => {
  return (
    <div className="countdown-timer-div">
      <div className="controls-div">
        <div className="control-button controls controls-top-left"><i className="big arrows alternate vertical icon"></i></div>
        <div className="control-button controls controls-bottom-left"><i className="big expand arrows alternate icon"></i></div>
      </div>
      
      <div className="countdown">
        <table>
          <thead>
            <tr className="countdown-digits">
              <th>{day ? day : "00"}</th>
              <th>:</th>
              <th>{hours ? hours : "00"}</th>
              <th>:</th>
              <th>{minutes ? minutes : "00"}</th>
              <th>:</th>
              <th>{seconds ? seconds : "00"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="digit-descriptors">
              <td>DAYS</td>
              <td></td>
              <td>HOURS</td>
              <td></td>
              <td>MINUTES</td>
              <td></td>
              <td>SECONDS</td>
            </tr>
          </tbody>
        </table>
        <h3>{title ? title : "unnamed event"}</h3>
        <h2>{dateTime.toLocaleString()}</h2>
      </div>

      <div className="controls-div">
        <div className="control-button controls controls-top-right"><i className="big pencil alternate icon"></i></div>
        <div className="control-button controls controls-bottom-right"><i className="big trash alternate outline icon"></i></div>
      </div>
    </div>
  )
}

export default Timer