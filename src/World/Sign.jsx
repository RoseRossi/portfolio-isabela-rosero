import { useEffect, useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

const Sign = (props) => {
    const signRef = useRef();
    const signModel = useGLTF('/assets/models/sign/scene.gltf')
    console.log(signModel);

    useEffect(() => {
        if (signModel.scenes.length) {
            const scene = signModel.scenes[0];
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }
    }, []);
    

    return (
      <group {...props} dispose={null}>
        <mesh ref={signRef} position-x={3.5} position-y={0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.1} castShadow={true} receiveShadow={true} >
            <primitive object = {signModel.scene} />
        </mesh>
        {props.children}
      </group>
    );
}
export default Sign;
useGLTF.preload("/assets/models/sign/sign.glb");
