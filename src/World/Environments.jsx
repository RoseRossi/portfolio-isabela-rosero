import { Cloud, Environment, Sparkles, Stars} from "@react-three/drei";

const Environments = () => {
    return(
        <>
            <Environment files="/assets/environments/kloppenheim_07_puresky_2k.hdr"
                background={true} 
            />
            <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={1000} // Amount of stars (default=5000)
            factor={2} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            /> 
            <Sparkles 
            color="white"
            count={100}
            size={3}
            fade={false}
            speed={0.5}
            scale={6}
            position-y={2}
            position-z={0}
            />
            <Cloud
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={50} // Width of the full cloud
            depth={5} // Z-dir depth
            segments={20} // Number of particles
            position-y={20}
            />
        </>
    )
}

export default Environments;