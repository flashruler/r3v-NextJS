import React, { Suspense, useState, useEffect } from "react";
import { useS3Upload } from "next-s3-upload";
import { useRouter } from "next/router";
import Link from "next/link";
// import {gltfToGlb} from "gltf-pipeline";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
    const { progress } = useProgress();
    return <Html center> {Math.round(progress)}% loaded</Html>;
  }
//   function Scene(model) {
//     const gltf = useLoader(
//       GLTFLoader,
//       props.model
//     );
//     return (
//       <Suspense fallback={Loader}>
//         <primitive object={gltf.scene} />
//       </Suspense>
//     );
//   }
const Scene = (e) => {
    let uploadedFile = document.getElementById("selectedModel").files[0]
    let url = URL.createObjectURL(uploadedFile)
    .then(()=>{
        const gltf = useLoader(
            GLTFLoader,
            url
          );
          return (
            <Suspense fallback={Loader}>
              <primitive object={gltf.scene} />
            </Suspense>
          )
    })
}
    

  
export default function preview(){
    const [Url, setUrl] = useState("");
    
    return(<div>
        <input type="file" id="selectedModel" name="model" onChange={Scene}></input>
        {/* <Canvas
          camera={{
            zoom: 15,
            position: [-15, 80, 60],
            rotation: [30, 0, 0],
            fov: 100,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Center alignBottom>
              <Scene />
              <>
                <OrbitControls />
              </>
              <mesh />
            </Center>
            <Environment files="file.hdr" />
          </Suspense>
        </Canvas> */}
    </div>)
}