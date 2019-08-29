import React, {Component} from 'react';
import './Die.css';


class Die extends Component {
  render(props) {
    return (
      <div>
        <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling ? "rolling" : ""}`}></i>
      </div>
    )
  }
}

export default Die;