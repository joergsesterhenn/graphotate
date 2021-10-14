import { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Stator from './Stator'

class App extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="graphotate." />
          <Stator />
        </Layer>
      </Stage>
    );
  }
}

export default App
