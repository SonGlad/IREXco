import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
// import { Preload } from "@react-three/drei";
import { useGLTF } from '@react-three/drei';
// import { Model } from "./Scene";
import { Loading } from '../CustomLoaders/CustomLoaders';



export const ComputerCanvas = () => {
    const computer = useGLTF('/IREXco/pc/scene.gltf');
    

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<Loading/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <mesh>
                    <hemisphereLight
                        intensity={1}
                        groundColor="black"
                    />
                    <pointLight
                        intensity={2}
                        position={[-0.5, 2.1, 1.1]}
                    />
                    <primitive
                        object={computer.scene}
                        scale={1}
                        position={[0, -2.15, -1.5]}
                        rotation={[0, -0.2, -0.15]}
                    />
                </mesh>
            </Suspense>
        </Canvas>
    );
}