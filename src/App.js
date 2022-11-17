import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';
import {OrbitControls} from '@react-three/drei'
import AnimateSphere from './components/AnimateSphere';
import Back2 from './components/Back2'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[-2,5,2,0.5]} />
        <Suspense fallback={null}>
        <Box/>
        </Suspense>

      
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[-2,5,2,0.5]} />
        <Suspense fallback={null}>
        <AnimateSphere/>
        </Suspense>

      
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[-2,5,2,0.5]} />
        <Suspense fallback={null}>
        <Back2/>
        </Suspense>

      
      </Canvas>


 
    </div>
  );
}

export default App;
