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
        <h2>Levels of Autonomous Vehicles</h2>
        <p className="overview">Vehicles such as cars, vans, buses, and trucks can be designed with different amounts of autonomy. 
          The level of autonomy depends the sensors and software installed in the vehicle. Read below to 
          learn how each level operates.</p>
        <ol className="levels">
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
      <li id="level-item" className={levelItem.num}>
        <div className="text">
          <h3>Level {levelItem.num}</h3>
          <p className="label">{levelItem.description}</p>
          <ul class="notes">
            <li>{levelItem.note1}</li>
            <li>{levelItem.note2}</li>
            <li>{levelItem.note3}</li>
          </ul>
        </div>
        <div className="car">
          <img alt={levelItem.imgLabel} src={levelItem.imgSrc}/>
          <p className="carNote">{levelItem.imgDesc}</p>
          <p className="carNote">{levelItem.imgCitation}</p>
        </div>
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