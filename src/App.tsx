import { Canvas } from "@react-three/fiber"
import { SimpleMesh } from './componenets/simpleMesh'
import { Physics } from "@react-three/rapier"
import { Suspense } from "react"

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics>
            <SimpleMesh />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
