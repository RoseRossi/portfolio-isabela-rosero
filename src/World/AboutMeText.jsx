import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const AboutMeText = () => {
    return (
        <><Html position={[3.45, 0.56, 2]} center distanceFactor={5}>
            <h2 onClick={() => alert("Hola! soy Isa, tengo 20 años y me gusta mucho dormir y leer :D")} 
                className="aboutme-text">About me</h2>
        </Html>
        <Html position={[4.1, 0.56, 2]} center distanceFactor={5}>
            <h2 className="simple-text">Click the ball</h2>
        </Html>
                <Text
                    font="/assets/fonts/Bangers-Regular.ttf"
                    fontSize={0.1}
                    color={new Color(0xFF6E09)}
                    position-y={2}
                    maxWidth={1}
                    textAlign="center"
                >
                </Text>
        </>
        )
    }
    
    export default AboutMeText;