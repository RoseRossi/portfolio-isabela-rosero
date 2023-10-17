import { useEffect, useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

const Table = () => {
    const tableRef = useRef();
    const tableModel = useGLTF('/assets/models/table/scene.gltf')
    const{animations} = tableModel;
    const{actions} =useAnimations(animations, tableRef);
    console.log(tableModel);

    useEffect(() => {
        if (tableModel.scenes.length) {
            const scene = tableModel.scenes[0];
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }
    }, []);
    

    return (
        <mesh ref={tableRef} position-x={-3.5} position-y={0} position-z={-5} rotation-y={-Math.PI * -0.03} scale={2} castShadow={true}>
            <primitive object = {tableModel.scene} />
        </mesh>
    )

}
export default Table;
useGLTF.preload("/assets/models/table/scene.gltf");
