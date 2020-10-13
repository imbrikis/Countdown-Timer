import React from 'react'

const newTimer = () => {
  return (
    <div className="new-timer-container">
      <div className="new-timer">
        <form>
          <label>Title: </label><input type="text" placeholder="Name of the event" name="event-name" />
          <br/>
          <input className="datetime-selector" type="datetime-local" name="event-date" />
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default newTimer
