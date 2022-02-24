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
import MenuBar from "../components/menuBar";
import GenerateCanvas from "../components/3dloader/generateCanvas";
import Info from "../components/info";
import Link from "next/link";
import Head from "next/head";

export default function Viewer() {
  const [data, setData] = useState([]);
  const [model, setModel] = useState("");
  // fetches json of models (test for future implementation)
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
  let params = { cameraPos: data.cameraPos, cameraRot: data.cameraRot };
  return (
    <div className="">
      <Head>
        <title>Hoyo Negro - R3V</title>
        <link rel="icon" href="/logo512.png" />
      </Head>
      <div className="w-screen h-screen z-0 flex flex-col">
        {/* Top Bar */}
        <MenuBar />
        {/* Side Bar Directions and Hide */}
        <div className="absolute z-30 mt-12 flex flex-col">
          <div
            className=" cursor-pointer flex justify-center items-center p-3 my-3 w-auto z-30 
          h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              if (mod === true) {
                setMod(false);
                console.log(mod);
              } else {
                setMod(true);
                console.log(mod);
              }
            }}
          >
            <h1>Minimize Model Background</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("peccary");
            }}
          >
            <h1>Peccary</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("mando");
            }}
          >
            <h1>gompho mandible</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("tapir");
            }}
          >
            <h1>tapir</h1>
          </div>

          {/* Camera Control Minimize */}
          <div
            className=" cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              if (min === true) {
                setMin(false);
                console.log(min);
              } else {
                setMin(true);
                console.log(min);
              }
            }}
          >
            <h1>Camera Controls</h1>
          </div>

          {!min && (
            <div className="flex flex-col mt-3">
              <div className="w-max h-max bg-gray-200 z-20 mx-2 rounded-md opacity-75 px-3 pb-4">
                <h1 className="text-center text-lg">Controls (PC/Mac)</h1>
                <h1>Left Click - Rotate</h1>
                <h1>Right Click - Pan Camera</h1>
                <h1>Scroll - Zoom</h1>
              </div>
            </div>
          )}
        </div>

        <Info />
        <GenerateCanvas params={params} minimize={mod} model={model} />
      </div>
    </div>
  );
}
