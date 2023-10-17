import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    //useHelper(directionalLightRef, DirectionalLightHelper);
    const pointLightRef = useRef();
    //useHelper(pointLightRef, PointLightHelper, 1, "hotpink");
    return <>
        <ambientLight intensity={0.5} />
        <directionalLight 
            castShadow={true}
            ref = {directionalLightRef}
            position={[10, 10, 5]}
            intensity={10} 
            shadow-mapSize={[256, 256]}
            shadow-camera-far={20}
            shadow-camera-left={-4}
            shadow-camera-right={4}
            shadow-camera-top={4}
            shadow-camera-bottom={-4}
        />
        <pointLight position={[-4, 3, -5]} intensity={100} color={"purple"} />
    </>
    }
    export default Lights;