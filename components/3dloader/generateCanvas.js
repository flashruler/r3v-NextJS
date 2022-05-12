import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import Peccary from "../models/peccary/testmodel";
import Mando from "../models/peccary/mando";
import Tapir from "../models/peccary/tapir";
import Gomp1 from "../models/peccary/gomp1";
import Gomp2 from "../models/peccary/gomp2";
function Loader() {
  const { progress } = useProgress();
  return <Html center> {Math.round(progress)}% loaded</Html>;
}
function Image() {
  const texture = useLoader(THREE.TextureLoader, "grid2.png");
  return (
    <mesh
      position={[-10, -10, 5]}
      rotation={[(3 * Math.PI) / 2, 0, 0]}
      scale={[75, 75, 1]}
    >
      {/*
The thing that gives the mesh its shape
In this case the shape is a flat plane
*/}
      <planeBufferGeometry />
      {/*
The material gives a mesh its texture or look.
In this case, it is just a uniform green
*/}
      <meshBasicMaterial
        attach="material"
        map={texture}
        opacity={0.3}
        transparent
      />
    </mesh>
  );
}

export default function GenerateCanvas(props) {
  let minimize = props.minimize;
  let model = props.model;
  let params = props.params;
  let cameraPos = params.cameraPos;
  let camRot = params.cameraRot;
  if (params) {
    return (
      <Canvas
        frameloop="demand"
        camera={{
          zoom: 15,
          position: cameraPos,
          rotation: camRot,
          fov: 100,
          minZoom: 10,
          maxZoom: 20,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Center alignBottom>
            {model === "Mando" && <Mando test={minimize} />}
            {model === "Peccary" && <Peccary test={minimize} />}
            {model === "Tapir" && <Tapir />}
            {model === "Gomp1" && <Gomp1 nodes={props.grompNodes} />}
            {model === "Gomp2" && <Gomp2 />}

            <>
              <OrbitControls />
            </>
            <mesh />
            <Image />
          </Center>
          <Environment files="file.hdr" />
        </Suspense>
      </Canvas>
    );
  } else return null;
}