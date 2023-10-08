import { useTexture } from "@react-three/drei";

const Floor = () => {
    const PATH = "/assets/textures/snow/"
    const propsTexture = useTexture({
            map: PATH + 'snow_diff.jpg',
        normalMap: PATH + 'snow_nor.jpg',
        roughnessMap: PATH + 'snow_rough.jpg',
        aoMap: PATH + 'snow_ao.jpg',

    })
    
    return(
        <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial { ... propsTexture} roughness={-2} metalness={-5} />
        </mesh>
    )
}

export default Floor;