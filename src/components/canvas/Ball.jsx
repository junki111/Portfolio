import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import Loader from '../Loader'
import { useTheme } from '../../context/ThemeContext'

const Ball = (props) => {
  const { theme } = useTheme()
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={theme === "dark" ? 0.5 : 0.8}/>
      <directionalLight
        position={[3, 3, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
      <Canvas
          frameloop='demand'
          gl={{ preserveDrawingBuffer: true }}
      >
          <Suspense fallback={<Loader />}>
              <OrbitControls
                  enableZoom={false}
              />
              <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
      </Canvas>
  )
}

export default BallCanvas