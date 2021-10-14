import React from 'react';
import { Circle, Group } from 'react-konva';
import Rotor from './Rotor';

interface IProps_Stator {
  id: string,
  rotation:number,
}

export default class Stator extends React.Component<IProps_Stator> {

  constructor(props:any) {
    super(props);
    this.state.rotation = props.rotation;
    this.state.id = props.id;
  }

  state = {
    color:  'black',
    width:  2,
    radius: 50,
    x:      200,
    y:      200,
    rotation: 0,
    id : 'mainStator'
  };
  
  rotate(currentRotation:number){
    let newRotation=currentRotation+5;
    if (newRotation > 360) newRotation = newRotation-360;
    this.setState({rotation:newRotation});
  }
  

  render(): JSX.Element {
    return (
      <Group 
        x={this.state.x}
        y={this.state.y} 
        rotation={this.state.rotation} 
        offsetX={this.state.x} 
        offsetY= {this.state.y}>
        <Circle
          onClick={() => this.rotate(this.state.rotation)}
          x={this.state.x}
          y={this.state.y} 
          strokeWidth={this.state.width}
          stroke={this.state.color}
          fill={this.state.color}
          radius={this.state.radius}
        />
        <Rotor/>
      </Group>
    );
  }
}


  