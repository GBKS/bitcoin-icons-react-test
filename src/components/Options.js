import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="Options">
        <label htmlFor="size">Size: {this.props.size}px</label>
        <input
          name="size"
          type="range"
          min="10"
          max="100"
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
      </div>
    )
  }
}

export default Options;
