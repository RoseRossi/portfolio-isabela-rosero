import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

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
        <mesh ref={boxRef} position={[-5.5,0,0]}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color="#54C1EF"  />
        </mesh>
        <mesh ref={coneRef} position={[-3,0,0]}>
            <coneGeometry args={[1, 2, 8]} />
            <meshPhongMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={sphereRef} position={[0,0,0]}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshToonMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={torusRef} position={[3,0,0]}>
            <torusGeometry args={[1, -0.4, 50, 500]} />
            <meshLambertMaterial color="#54C1EF"/>
        </mesh>
        </>
    );
}
export default Experience;
