import React, {Component} from 'react';
import {levelData} from './data';
import {sensorData} from './data';
import './reset.css';
import './App.css';

class App extends Component {
  state = {
    levelItems: levelData,
    sensorItems: sensorData
  }
  render() {
    const {levelItems} = this.state
    const {sensorItems} = this.state
    return (
      <div className="main">
        <h2>Levels of Autonomous Driving</h2>
        <ol>
          {levelItems.map((levelItem, i) => <LevelItem key={i} levelItem={levelItem} />)}
        </ol>
        <h2>Sensor Packages</h2>
        <ol>
          {sensorItems.map((sensorItem, i) => <SensorItem key={i} sensorItem={sensorItem} />)}
        </ol>
      </div>
    )
  }
}

class LevelItem extends Component {
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

class SensorItem extends Component {
  render() {
    const {sensorItem} = this.props
    return (
      <li className="sensor-item">
        <h3>{sensorItem.name}</h3>
        <p>{sensorItem.description}</p>
        <img alt={sensorItem.imgLabel} src={sensorItem.imgSrc}/>
      </li>
    )
  }
}
export default App;