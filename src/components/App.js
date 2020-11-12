import React from 'react'
import NewTimer from './NewTimer'
import TimersLayout from './TimersLayout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timers : 
        [{
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
    }
  }

  changeTheValue = (e) => {
    e.preventDefault()
    this.setState({
      timers: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert("it worked!")
  }

  render() {
    return (
      <div className="container">
        <NewTimer timers={this.state.timers} handleSubmit={this.handleSubmit} changeMe={this.changeTheValue} />
        <TimersLayout timers={this.state.timers} />
      </div>
    )
  }
}

export default App