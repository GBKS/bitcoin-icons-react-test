import './App.css';

import React from 'react';

import Options from './components/Options'
import OutlineIcons from './components/OutlineIcons'
import FilledIcons from './components/FilledIcons'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '#000000',
      size: 48,
      strokeWidth: 1
    };

    this.changeSizeBind = this.changeSize.bind(this);
    this.changeStrokeWidthBind = this.changeStrokeWidth.bind(this);
    this.changeColorBind = this.changeColor.bind(this);
  }

  changeSize(event) {
    this.setState({size: event.target.value})
  }

  changeStrokeWidth(event) {
    this.setState({strokeWidth: event.target.value})
  }

  changeColor(event) {
    this.setState({color: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Options
          size={this.state.size} 
          strokeWidth={this.state.strokeWidth} 
          changeSize={this.changeSizeBind} 
          changeStrokeWidth={this.changeStrokeWidthBind} 
          changeColor={this.changeColorBind} 
        />
        <div class="wrap">
          <OutlineIcons
            size={this.state.size}
            strokeWidth={this.state.strokeWidth}
            color={this.state.color}
          />
          <FilledIcons
            size={this.state.size}
            strokeWidth={this.state.strokeWidth}
            color={this.state.color}
          />
        </div>
      </div>
    )
  }
}

export default App;
