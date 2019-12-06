import React, {Component} from 'react';
import {levelData} from './data';
import './reset.css';
import './App.css';

class App extends Component {
  state = {
    levelItems: levelData
  }
  render() {
    const {levelItems} = this.state
    return (
      <div className="main">
        <h2>Levels of Autonomous Driving</h2>
        <ol>
          {levelItems.map((levelItem, i) => <AppItem key={i} levelItem={levelItem} />)}
        </ol>
        <h2>Sensor Packages</h2>
      </div>
    )
  }
}

class AppItem extends Component {
  render() {
    const {levelItem} = this.props
    return (
      <li className="level-item">
        <h3>Level {levelItem.num}</h3>
        <p>{levelItem.description}</p>
        <img alt={levelItem.imgLabel} src={levelItem.imgSrc}/>
      </li>
    )
  }
}
export default App;