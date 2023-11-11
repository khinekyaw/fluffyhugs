'use client'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ImagePlane = () => {
  const colorMap = useLoader(TextureLoader, 'human.webp')

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
}

export default () => {
  return (
    <div className="w-screen h-screen left-0 top-0 absolute">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <ImagePlane />
      </Canvas>
    </div>
  )
}
