import React , {Component } from 'react'
import './App.css';

class Counter extends Component{

  constructor(){
    super()
    this.state ={
      count: 0
    }
  }

  increment(){
    this.setState ({
      count: this.state.count + 1
    },() => { console.log(this.state.count) })

  }
  reset(){
    this.setState ({
      count: 0
    },() => { console.log(this.state.count) })
  }

  render(){
    return(

      <div className="containerCounter">
          <h2>This is counter {this.state.count}</h2>
          <button className="counter-increment" onClick={() => this.increment()}>Increment</button>
          <button className="counter-reset" onClick={() => this.reset()}>Reset</button>

      </div>



    )
  }

}

export default Counter