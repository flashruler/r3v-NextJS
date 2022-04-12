import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
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
        }}
      >
        <Suspense fallback={<Loader />}>
          <Center alignBottom>
            {model === "mando" && <Mando test={minimize} />}
            {model === "peccary" && <Peccary test={minimize} />}
            {model === "tapir" && <Tapir />}
            {model === "gomp1" && <Gomp1 />}
            {model === "gomp2" && <Gomp2 />}

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
