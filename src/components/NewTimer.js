import React from 'react'

const newTimer = () => {
  const x = e => {
    e.preventDefault()
    console.log(document.getElementById('event-name').value)
    console.log(document.getElementById('event-date').value)
  }
  return (
    <div className="new-timer-container">
      <div className="new-timer">
        <form action="">
          <label>Title: </label><input id="event-name" type="text" placeholder="Name of the event" />
          <br/>
          <input id="event-date" className="datetime-selector" type="datetime-local" />
          <button onClick={x}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default newTimer
