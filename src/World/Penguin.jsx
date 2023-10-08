import { useEffect, useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

const Penguin = () => {
    const penguinRef = useRef();
    const penguinModel = useGLTF('/assets/models/penguin/scene.gltf')
    const{animations} = penguinModel;
    const{actions} =useAnimations(animations, penguinRef);
    console.log(penguinModel);

    useEffect(() => {
        const action = actions["Run"]
        action.play()
    }, [])

    return (
        <mesh ref={penguinRef} position-x={2} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.004}>
            <primitive object = {penguinModel.scene} />
        </mesh>
    )

}
export default Penguin;
useGLTF.preload("/assets/models/penguin/scene.gltf");
