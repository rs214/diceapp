import React, {Component} from 'react';
import './Die.css';


class Die extends Component {
  render(props) {
    return (
      <div>
        <i className='Die fas fa-dice-two'></i>
        <i className='Die fas fa-dice-six'></i>
      </div>
    )
  }
}

export default Die;