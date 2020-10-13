import React from 'react'
import NewTimer from './components/NewTimer'
import TimersLayout from './components/TimersLayout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timers : 
        [{
          title: "My Birthday",
          years: "00",
          months: "06",
          days: "09",
          hours: "11",
          minutes: "55",
          seconds: "34",
        },
        {
          title: "Album Release Party",
          years: "02",
          months: "04",
          days: "01",
          hours: "20",
          minutes: "18",
          seconds: "09",
        },
        {
          title: "Inevitable Death",
          years: "0027",
          months: "00",
          days: "20",
          hours: "09",
          minutes: "23",
          seconds: "07",
        },
        {
          title: "The Apocalypse",
          years: "79",
          months: "04",
          days: "23",
          hours: "04",
          minutes: "37",
          seconds: "09",
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