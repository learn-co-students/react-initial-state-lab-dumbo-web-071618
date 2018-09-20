// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component {

  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let bombText
    if(this.state.secondsLeft === 0){
      bombText = 'Boom!'
    }else{
      bombText = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return(
      <div>
        {bombText}
        </div>
    )
  }
}
