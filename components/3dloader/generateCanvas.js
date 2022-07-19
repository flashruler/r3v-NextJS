import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

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
import Puma from "../models/peccary/puma";
import GompArms from "../models/peccary/arms";
import Sloth from "../models/peccary/sloth";
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

const Controls = (props) => {
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current.addEventListener("change", function () {
      if (this.target.y < -50) {
        this.target.y = -50;
        camera.position.y = -50;
      } else if (this.target.y > 50) {
        this.target.y = 50;
        camera.position.y = 50;
      } else if (this.target.x < -50) {
        this.target.x = -50;
        camera.position.x = -50;
      } else if (this.target.x > 50) {
        this.target.x = 50;
        camera.position.x = 50;
      } else if (this.target.z < -50) {
        this.target.z = -50;
        camera.position.z = -50;
      } else if (this.target.z > 50) {
        this.target.z = 50;
        camera.position.z = 50;
      }
      // if (props.home === true) {
      //   console.log("You hit this function");
      //   this.target.x = 15;
      //   camera.position.x = 15;
      //   this.target.y = 80;
      //   camera.position.y = 80;
      //   this.target.z = 60;
      //   camera.position.z = 60;
      // }
      // console.log("X = " + this.target.x);
      // console.log("Y = " + this.target.y);
      // console.log("Z = " + this.target.z);
    });
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={10}
      maxDistance={200}
      maxPolarAngle={Math.PI / 2}
    />
  );
};
export default function GenerateCanvas(props) {
  let minimize = props.minimize;
  let model = props.model;
  let params = props.params;
  let cameraPos = params.cameraPos;
  let camRot = params.cameraRot;
  let home = props.home;
  if (params) {
    return (
      <Canvas
        frameloop="demand"
        camera={{
          zoom: 15,
          position: cameraPos,
          rotation: camRot,
          fov: 100,
          minDistance: 10,
          maxDistance: 20,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Center alignBottom>
            {model === "Mando" && <Mando test={minimize} />}
            {model === "Peccary" && <Peccary test={minimize} />}
            {model === "Tapir" && <Tapir />}
            {model === "Gomp1" && <Gomp1 />}
            {model === "Gomp2" && <Gomp2 />}
            {model === "Puma" && <Puma />}
            {model === "GompArms" && <GompArms />}
            {model === "Sloth" && <Sloth />}

            <>
              <Controls home={home} />
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
