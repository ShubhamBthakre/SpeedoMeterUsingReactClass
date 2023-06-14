// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previousState => ({speed: previousState.speed + 10}))
    }
  }

  onClickApplyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(previousState => ({speed: previousState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="speedometer-img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h2 className="heading-2">
          Speed is <span className="speedometer">{speed}mph</span>
        </h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btn-container">
          <button
            type="submit"
            className="button btn-accelerate"
            onClick={this.onClickAccelerate}
          >
            Accelerate
          </button>
          <button
            type="submit"
            className="button btn-applyBrake"
            onClick={this.onClickApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
