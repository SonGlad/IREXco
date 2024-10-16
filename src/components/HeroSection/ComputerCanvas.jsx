import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei';
import { CanvasLoader } from '../CustomLoaders/CustomLoaders';
import React from "react";
// import { Model } from "./Scene";



export const ComputerCanvas = React.memo(() => {
    const { scene } = useGLTF('/IREXco/pc/scene.gltf');
        

    return (
        <Suspense fallback={<CanvasLoader/>}>
            <Canvas
                frameloop="demand"
                shadows
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{preserveDrawingBuffer: true}}
            >
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <hemisphereLight
                    intensity={2.5}
                    groundColor="black"
                />
                <pointLight
                    intensity={2}
                    position={[-0.5, 2.1, 1.1]}
                />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={10}
                    castShadow
                    shadow-mapSize={1024}
                />
                {/* <Model
                    position={[0, -2.15, -1.5]}
                    rotation={[0, -0.25, -0.15]}
                    scene={scene}
                /> */}
                <primitive
                    object={scene}
                    scale={1}
                    position={[0, -2.15, -1.5]}
                    rotation={[0, -0.25, -0.15]}
                />
            </Canvas>
        </Suspense>
    );
});