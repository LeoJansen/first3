
import './App.css';
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Canvas>
        <Box/>
      </Canvas>

 
    </div>
  );
}

export default App;
