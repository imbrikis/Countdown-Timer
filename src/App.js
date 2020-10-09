import React from 'react'
import NewTimer from './components/NewTimer'
import TimersLayout from './components/TimersLayout'

const App = () => {
  return (
    <div className="container">
      <NewTimer />
      <TimersLayout />
    </div>
    
  )
}

export default App