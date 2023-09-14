import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./Info/Info";

const App = () => {
    return (
        <>
        <Info 
            nombre={"Isabela Rosero"}
            biografia={"Student"}
         />
         <Canvas
            camera={{position: [2,0,5]}}
         >
            <Experience />
         </Canvas>
        </>
    )
}
export default App;