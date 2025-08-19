import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
    const computer = useGLTF(import.meta.env.BASE_URL + '/desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={2} groundColor='black' />
            <pointLight intensity={3} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.5}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 1}
                position={isMobile ? [0, -2.7, -2.2] : [0, -3.25, -1]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // add listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)')

        // Set the initial state
        console.log('First Match ' + mediaQuery.matches)
        setIsMobile(mediaQuery.matches)

        // Add a listener function to update the state when the size changes
        const handleMediaQueryChanges = (event) => {
            console.log('Less than 500px')
            console.log(event.matches)
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChanges)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChanges)
        }
    }, [])

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas
