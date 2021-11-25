import React from "react";
import { Scene, GLRenderer } from "@zeainc/zea-engine";

import { setupAnimation } from "./setupAnimation";

import "./App.css";

class App extends React.Component {
  private canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: any) {
    super(props);

    this.canvas = React.createRef();
  }

  componentDidMount() {
    const scene = new Scene();

    const renderer = new GLRenderer(this.canvas.current);

    renderer.setScene(scene);

    scene.setupGrid(10, 10);

    setupAnimation(scene);
  }

  render() {
    return (
      <div className="App">
        <canvas ref={this.canvas} />
      </div>
    );
  }
}

export default App;
