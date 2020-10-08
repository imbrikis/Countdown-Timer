import React from 'react'
import NewTimer from './components/NewTimer'
import CountdownTimers from './components/CountdownTimers'

const App = () => {
  return (
    <div className="container">
      <NewTimer />
      <CountdownTimers />
    </div>
    
  )
}

export default App