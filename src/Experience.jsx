import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Penguin from "./World/Penguin";
import { useTexture } from "@react-three/drei";
import Floor from "./World/Floor";

const Experience = ({title, info}) => {
    const boxRef = useRef();
    const coneRef = useRef();
    const sphereRef = useRef();
    const torusRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
        coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        sphereRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
        torusRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 5;
    });
    
    return (
        <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Penguin/>
        <Floor/>
        <mesh ref={boxRef} position={[-5.5,0,-5]}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color="#54C1EF"  />
        </mesh>
        <mesh ref={coneRef} position={[-3,0,-5]}>
            <coneGeometry args={[1, 2, 8]} />
            <meshPhongMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={sphereRef} position={[0,0,-5]}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshToonMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={torusRef} position={[3,0,-5]}>
            <torusGeometry args={[1, -0.4, 50, 500]} />
            <meshLambertMaterial color="#54C1EF"/>
        </mesh>
        </>
    );
}
export default Experience;
