import React from 'react';
import { Circle, KonvaNodeComponent, StageProps } from 'react-konva';
import Konva from 'konva';

export default class Tracer extends React.Component {

  state = {
    color:  'red',
    width:  2,
    radius: 1,
    startAngle: 0,
    x:100,
    y:100
  };
  
  drawLine(){
    var width = window.innerWidth;
    var height = window.innerHeight - 25;

    // first we need Konva core things: stage and layer
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
    });
    
    var layer = new Konva.Layer();
    stage.add(layer);

    var canvas = document.createElement('canvas');
    
    canvas.width = stage!.width();
    canvas.height = stage!.height();
    
    // created canvas we can add to layer as "Konva.Image" element
    var image = new Konva.Image({
      image: canvas,
      x: 0,
      y: 0,
    });
    layer.add(image);

      // Good. Now we need to get access to context element
      var context = canvas.getContext('2d');
      context!.strokeStyle = '#df4b26';
      context!.lineJoin = 'round';
      context!.lineWidth = 5;

      var isPaint = false;
      var lastPointerPosition;
      var mode = 'brush';

      if (!isPaint) {
      return;
    }

    if (mode === 'brush') {
      context!.globalCompositeOperation = 'source-over';
    }
    if (mode === 'eraser') {
      context!.globalCompositeOperation = 'destination-out';
    }
    context!.beginPath();

    var localPos = {
      x: this.state.x - image.x(),
      y: this.state.y - image.y(),
    };
    context!.moveTo(localPos.x, localPos.y);
    var pos = stage.getPointerPosition();
    localPos = {
      x: pos!.x - image.x(),
      y: pos!.y - image.y(),
    };
    context!.lineTo(localPos.x, localPos.y);
    context!.closePath();
    context!.stroke();

    lastPointerPosition = pos;
    // redraw manually
    layer.batchDraw();
  }

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
  