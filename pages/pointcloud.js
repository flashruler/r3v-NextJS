import { useLoader } from "@react-three/fiber";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
  const gltf = useLoader(
    PCDLoader,
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/PCTEST.PCD"
  );
  return (
    <Suspense fallback={null}>
      <primitive object={gltf} />
    </Suspense>
  );
}
export default function pointcloud() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Center alignBottom>
            <Scene />
            <PerspectiveCamera />
            <OrbitControls />
          </Center>
          <Environment files="file.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
}
