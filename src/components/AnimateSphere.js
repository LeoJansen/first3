import React from 'react';
import {Sphere, MeshDistortMaterial} from '@react-three/drei'

const AnimateSphere = () => {
  return (
    <Sphere visible args={[1,100,200]} scale={1.5} >
        <MeshDistortMaterial color="rgba(100,200,0,1.5)"  attach="material" distort={0.3} speed={2} />
    </Sphere>
        
  )
}

export default AnimateSphere