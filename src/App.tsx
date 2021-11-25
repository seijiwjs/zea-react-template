import React from 'react'
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'

import { Viewport3D } from './Viewport3D'

import 'react-reflex/styles.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <ReflexContainer orientation="horizontal">
        <ReflexElement size={50}>Header</ReflexElement>
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement size={200}>Left Pane</ReflexElement>
            <ReflexSplitter />
            <ReflexElement>
              <Viewport3D></Viewport3D>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    )
  }
}

export default App
