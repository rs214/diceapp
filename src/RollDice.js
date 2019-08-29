import React, {Component} from 'react';
import Die from './Die';


class RollDice extends Component {
  render () {
    return(
      <div>
        <h1>FROM ROLL DIE COMPONENT</h1>
        <Die />
      </div>
    )
  }
}

export default RollDice;