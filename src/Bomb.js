// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props){
    super(props)
    this.state ={
      secondsLeft: this.props.initialCount
    }
  }

  decrement = () => {
    this.setState({secondsLeft: this.state.secondsLeft - 1})
  }

  render() {
    return (
      <div onClick={this.decrement}>
        {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` }
      </div>
    )
  }

}
