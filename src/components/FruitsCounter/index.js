// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  eatMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span">{key1}</span> mangoes{' '}
            <span className="span">{key2}</span>
            bananas
          </h1>
          <div className="card-conatiner">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="Mango"
              />
              <button className="btn" onClick={this.eatMango} type="button">
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="Banana"
              />
              <button className="btn" onClick={this.eatBanana} type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
