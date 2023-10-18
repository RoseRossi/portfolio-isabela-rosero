import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = () => {
    const text = `Welcome!`

    return (
        <Center
            position-y={2.1}
            position-x={1.1}
            position-z={4}
        >
            <Float
             speed={2} // Animation speed
             rotationIntensity={1.5} // XYZ rotation intensity
             floatIntensity={1.5} // Up/down float intensity
            >
            <Text3D
                font={"/assets/fonts/Archivo Black_Regular.json"}
                bevelEnabled
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={0.25}
            >
                {text}
                <meshStandardMaterial color={'navy'}/>
            </Text3D>
            </Float>
           
       
        </Center>

    )
}

export default WelcomeText;