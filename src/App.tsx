import { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Stator from './Stator'

export default class App extends Component {
  
  rotation=0;

  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage id={'mainStage'} width={window.innerWidth} height={window.innerHeight}>
        <Layer id={'mainCanvas'}>
          <Text text="graphotate." />
          <Stator id='mainStator' rotation={this.rotation}/>
        </Layer>
      </Stage>
    );
  } 
}
