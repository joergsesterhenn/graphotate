import React from 'react';
import { Circle, Group } from 'react-konva';

class Rotor extends React.Component {
  
    state = {
      color:  'black',
      width:  2,
      radius: 20,
      x:      270,
      y:      200
    };
    
    render(): JSX.Element {
      return (
        <Group>
          <Circle
          x={this.state.x}
          y={this.state.y}
          strokeWidth={this.state.width}
          stroke={this.state.color}
          radius={this.state.radius}
          />
        </Group>
      );
    }
  }

  export default Rotor
  