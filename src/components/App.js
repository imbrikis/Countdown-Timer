import React, { useState } from 'react'
import NewTimer from './NewTimer'
import TimersLayout from './TimersLayout'

const App = () => {
  let data = [{
    title: "My birthday",
    dateTime: "2021-04-11T12:00:00Z",
    key: 0,
  },
  {
    title: "Album Release Party",
    dateTime: "2021-11-03T10:30:00Z",
    key: 1,
  },
  {
    title: "Inevitable Death",
    dateTime: "2074-08-12T21:37:04Z",
    key: 2,
  },
  {
    title: "The Apocalypse",
    dateTime: "2239-01-29T07:14:57Z",
    key: 3,
  }]

  data.map(item => {
    let result = (new Date(item.dateTime).getTime()) - (new Date().getTime())
    item.days = Math.floor(result / 86400000);
    item.hours = Math.floor(result / 3600000) % 60;
    item.minutes = Math.floor(result / 60000) % 60; 
    item.seconds = Math.floor(result / 1000) % 60;
  })

  return (
    <div className="container">
      <TimersLayout timers={data} />
    </div>
  )
}

export default App