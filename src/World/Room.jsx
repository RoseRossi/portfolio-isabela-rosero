import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

const Room = () => {
    const roomRef = useRef();
    const roomModel = useGLTF('/assets/models/room/scene.gltf')
    console.log(roomModel);

    useEffect(() => {
        if (roomModel.scenes.length) {
            const scene = roomModel.scenes[0];
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }
    }, []);
    

    return <>
        <mesh ref={roomRef} position-x={4} position-y={-0.1} position-z={-5} scale={0.15} castShadow={true}>
            <primitive object = {roomModel.scene} />
        </mesh>
    </>

}
export default Room;
useGLTF.preload("/assets/models/room/scene.gltf");
