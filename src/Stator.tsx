import React from 'react';
import { Circle } from 'react-konva';

class Stator extends React.Component {
  
    state = {
      color:  'black',
      width:  2,
      radius: 50,
      x:      200,
      y:      200
    };
    
    render(): JSX.Element {
      return (
        <Circle
          x={this.state.x}
          y={this.state.y}
          strokeWidth={this.state.width}
          stroke={this.state.color}
          radius={this.state.radius}
        />
      );
    }
  }

  export default Stator
  