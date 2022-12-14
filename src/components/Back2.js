/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/back2.gltf')
  const group = useRef();

  return (
    <group ref={group} {...props} dispose={null}>
      <OrthographicCamera makeDefault={false} far={99441} near={-99977} position={[0, 0, 1]} />
      <directionalLight intensity={0.7} decay={2} position={[532, 349, 300]} rotation={[-0.86, 0.86, -0.58]} />
      <OrthographicCamera makeDefault={false} far={100000} near={-100000} position={[803.83, 154.45, 392.87]} rotation={[-0.39, 0.88, 0.31]} />
      <mesh geometry={nodes.Dodecahedron.geometry} material={materials['default']} position={[51.51, -25.3, -1942.87]} />
      <mesh geometry={nodes.Wide_Screen.geometry} material={materials['default']} />
      <mesh geometry={nodes.Avatar.geometry} material={materials['default']} position={[562.5, 305.5, 1]} />
      <mesh geometry={nodes.Banner.geometry} material={materials['default']} position={[40.26, 301.38, 1]} />
      <mesh geometry={nodes.Featured_Card_1.geometry} material={materials['default']} position={[-142.25, 9.38, 1]} />
      <mesh geometry={nodes.Featured_Card_2.geometry} material={materials['default']} position={[225.75, 9.38, 1]} />
      <mesh geometry={nodes.Popular_Card_1.geometry} material={materials['default']} position={[-142.25, -262.62, 1]} />
      <mesh geometry={nodes.Popular_Card_2.geometry} material={materials['default']} position={[225.75, -262.62, 1]} />
      <mesh geometry={nodes.Wilsão.geometry} material={materials['default']} position={[569, 37.77, 1]} />
      <mesh geometry={nodes.Mozão.geometry} material={materials['default']} position={[569, -29.23, 1]} />
      <mesh geometry={nodes.Lalá.geometry} material={materials['default']} position={[569, -96.23, 1]} />
      <mesh geometry={nodes.Xenilda.geometry} material={materials['default']} position={[569, -166.23, 1]} />
    </group>
  )
}

useGLTF.preload('/back2.gltf')
