import { useEffect, useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

const Penguin = () => {
    const penguinRef = useRef();
    const penguinModel = useGLTF('/assets/models/penguin/scene.gltf')
    const{animations} = penguinModel;
    const{actions} =useAnimations(animations, penguinRef);
    console.log(penguinModel);

    useEffect(() => {
        const action = actions["Run"];
        action.play();
    
        if (penguinModel.scenes.length) {
            const scene = penguinModel.scenes[0];
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }
    }, []);
    

    return (
        <mesh ref={penguinRef} position-x={1.5} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.004} castShadow={true}>
            <primitive object = {penguinModel.scene} />
        </mesh>
    )

}
export default Penguin;
useGLTF.preload("/assets/models/penguin/scene.gltf");
