import './App.css';

import React from 'react';

import Options from './components/Options'
import OutlineIcons from './components/OutlineIcons'
import FilledIcons from './components/FilledIcons'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: 24,
      strokeWidth: 1
    };

    this.changeSizeBind = this.changeSize.bind(this);
    this.changeStrokeWidthBind = this.changeStrokeWidth.bind(this);
  }

  changeSize(event) {
    console.log('p.changeSize', event, event.target.value)

    this.setState({size: event.target.value})
  }

  changeStrokeWidth(event) {
    this.setState({strokeWidth: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Options
          size={this.state.size} 
          strokeWidth={this.state.strokeWidth} 
          changeSize={this.changeSizeBind} 
          changeStrokeWidth={this.changeStrokeWidthBind} 
        />
        <div class="wrap">
          <OutlineIcons
            size={this.state.size}
            strokeWidth={this.state.strokeWidth}
          />
          <FilledIcons
            size={this.state.size}
            strokeWidth={this.state.strokeWidth}
          />
        </div>
      </div>
    )
  }
}

export default App;
