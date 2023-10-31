import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Penguin from "./World/Penguin";
import { useTexture } from "@react-three/drei";
import Floor from "./World/Floor";
import Lights from "./World/Lights";
import Table from "./World/Table";
import Environments from "./World/Environments";
import Sign from "./World/Sign";
import WelcomeText from "./World/WelcomeText";
import AboutMeText from "./World/AboutMeText";
import Room from "./World/Room";
import { Physics, RigidBody } from "@react-three/rapier";
import { Snowman } from "./World/Snowman";

const Experience = ({title, info}) => {
    const boxRef = useRef();
    const coneRef = useRef();
    const sphereRef = useRef();
    const torusRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime())+2;
        torusRef.current.position.x = Math.sin(state.clock.getElapsedTime())-1;
    });
    
    return (
        <>
        <OrbitControls makeDefault />
        <Lights/>
        <Penguin/>
        <Table/>
        <Environments/>
        <Floor/>
        <Sign>
            <WelcomeText/>
            <AboutMeText/>
        </Sign>
        <Physics debug>
            <Room/>
        </Physics>
        <Snowman position-x={-3} position-y={0.5} position-z={1} rotation-y={-Math.PI * -0.03} scale={1}/>
        <mesh ref={boxRef} position={[-5.5,1,-5]} castShadow>
            <boxGeometry args={[0.5,0.5,0.5]} />
            <meshStandardMaterial color="#54C1EF"  />
        </mesh>
        <mesh ref={coneRef} position={[-4.5,1,-5]} castShadow>
            <coneGeometry args={[0.5, 1, 6.5]} />
            <meshPhongMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={sphereRef} position={[-3.5,1,-5]} castShadow>
            <sphereGeometry args={[0.5, 30, 10]} />
            <meshToonMaterial color="#54C1EF"/>
        </mesh>
        <mesh ref={torusRef} position={[0,1.2,-5]} castShadow>
            <torusGeometry args={[0.5, -0.2, 50, 500]} />
            <meshLambertMaterial color="#54C1EF"/>
        </mesh>
        </>
    );
}
export default Experience;
