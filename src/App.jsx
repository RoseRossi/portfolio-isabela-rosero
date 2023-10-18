import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./Info/Info";

const App = () => {
    return (
        <>
        <Info 
            nombre={"Isabela Rosero"}
            biografia={"Systems Engineering student"}
         />
         <Canvas
            shadows = {true}
            camera={{position: [2,1,7]}}
         >
            <Experience />
         </Canvas>
        </>
    )
}
export default App;