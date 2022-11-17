import "./styles.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber"; 


export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas>
        
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
