import React from 'react';

class Options extends React.Component {
  render() {
    return (
      <div className="Options">
        <label htmlFor="size">Size: {this.props.size}px</label>
        <input
          name="size"
          type="range"
          min="10"
          max="1000"
          step="1"
          onChange={this.props.changeSize}
        />

        <label htmlFor="strokeWidth">Stroke width: {this.props.strokeWidth}px</label>
        <input
          name="strokeWidth"
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          onChange={this.props.changeStrokeWidth}
        />

        <label htmlFor="color">Color: {this.props.color}</label>
        <input
          type="color" 
          value="#F7931A" 
          onChange={this.props.changeColor}
        />
        
      </div>
    )
  }
}

export default Options;
