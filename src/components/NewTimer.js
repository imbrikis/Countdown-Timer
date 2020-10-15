import React from 'react'

const newTimer = () => {
  return (
    <div className="countdown-timers-container">
      <div className="countdown-timer-div">
        <div className="controls-div">
          <div className="control-button controls control-left-middle"><i className="big add icon"></i></div>
        </div>
        
        <div className="countdown">
          <table>
            <thead>
              <tr className="countdown-digits">
                <th>{"----"}</th>
                <th>:</th>
                <th>{"--"}</th>
                <th>:</th>
                <th>{"--"}</th>
                <th>:</th>
                <th>{"--"}</th>
                <th>:</th>
                <th>{"--"}</th>
                <th>:</th>
                <th>{"--"}</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <h3>{"unnamed event"}</h3>
          <h2>SELECT DATE</h2>
        </div>

        <div className="controls-div">
          <div className="control-button controls controls-top-right"><i className="big save outline icon"></i></div>
          <div className="control-button controls controls-bottom-right"><i className="big x icon"></i></div>
        </div>
      </div>
    </div>
  )
}

export default newTimer
