import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const App = () => {
    return (
        <>
         <Canvas
            camera={{position: [2,0,5]}}
         >
            <Experience />
         </Canvas>
        </>
    )
}
export default App;