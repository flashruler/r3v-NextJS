import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import Peccary from "../models/peccary/testmodel";
import Mando from "../models/peccary/mando";

function Loader() {
  const { progress } = useProgress();
  return <Html center> {Math.round(progress)}% loaded</Html>;
}

export default function GenerateCanvas(props) {
  let minimize = props.minimize;
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
        }}
      >
        <Suspense fallback={<Loader />}>
          <Center alignBottom>
            <Mando test={minimize} />
            <>
              <OrbitControls />
            </>
            <mesh />
          </Center>
          <Environment files="file.hdr" />
        </Suspense>
      </Canvas>
    );
  } else return null;
}
