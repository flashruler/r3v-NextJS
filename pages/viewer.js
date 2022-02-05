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
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Peccary from "../components/models/peccary/testmodel";
import Info from "../components/info";
import Link from "next/link";
import Head from "next/head";

function Loader() {
  const { progress } = useProgress();
  return <Html center> {Math.round(progress)}% loaded</Html>;
}
function Scene(props) {
  const gltf = useLoader(
    GLTFLoader,
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/glbs/peccary.glb"
  );
  return (
    <Suspense fallback={Loader}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
export default function Viewer() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("model.json", {})
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [min, setMin] = useState(true);
  const [mod, setMod] = useState(true);
  return (
    <div className="">
      <Head>
        <title>Hoyo Negro - R3V</title>
        <link rel="icon" href="/logo512.png" />
      </Head>
      <div className="w-screen h-screen z-0 flex flex-col">
        {/* Top Bar */}
        <div className="w-screen h-10 z-20 bg-gray-300 flex flex-row items-center justify-between px-3">
          <div className="flex flex-row items-center">
            <Link href="/">
              <span className="flex flex-row items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
                <h1 className="mx-1 font-light">R3V</h1>
              </span>
            </Link>
          </div>
          <div className="flex flex-row px-3">
            <h1 className="mx-1 font-light justify-self-end italic">
              Version 0.2
            </h1>
          </div>
        </div>
        {/* Side Bar Directions and Hide */}
        
        <div
          className=" cursor-pointer flex justify-center items-center p-3 absolute mt-11 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
          onClick={() => {
            if (min===true) {
              setMin(false)
              console.log(min)
            }
            else{
              setMin(true);
              console.log(min)
            }
          }}
        >
          <h1>Camera Controls</h1>
        </div>
        {!min && (
          <div className="flex flex-col my-24 absolute">
            <div className="w-max h-max bg-gray-200 z-20 mx-2 rounded-md opacity-75 px-3 pb-4">
              <h1 className="text-center text-lg">Controls (PC/Mac)</h1>
              <h1>Left Click - Rotate</h1>
              <h1>Right Click - Pan Camera</h1>
              <h1>Scroll - Zoom</h1>
            </div>
          </div>
        )}
        <div
          className=" cursor-pointer flex justify-center items-center p-3 absolute w-40 mt-16 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
          onClick={() => {
            if (mod===true) {
              setMod(false)
              console.log(min)
            }
            else{
              setMod(true);
              console.log(min)
            }
          }}
        ><h1>Minimize Model Background</h1></div>

        <Info />
        {/* Canvas */}
        <Canvas
          camera={{
            zoom: 15,
            position: [-15, 80, 60],
            rotation: [30, 0, 0],
            fov: 100,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Center alignBottom>
              {/* <Scene /> */}
              <Peccary test={mod}/>
              <>
                <OrbitControls />
              </>
              <mesh />
            </Center>
            <Environment files="file.hdr" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
