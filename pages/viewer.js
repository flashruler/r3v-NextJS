import React, { Suspense, useState, useEffect } from "react";
import MenuBar from "../components/menuBar";
import GenerateCanvas from "../components/3dloader/generateCanvas";
import Info from "../components/info";
import Head from "next/head";
import { applyProps } from "@react-three/fiber";

export default function Viewer(props) {
  const [Modmenu, setModmenu] = useState(false);
  const [data, setData] = useState([]);
  const [model, setModel] = useState("Peccary");
  // fetches json of models (test for future implementation)
  console.log(props.modelInfo);
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
        <div className="flex flex-col h-6 w-full bg-black">
          <div className=" w-max">
            <h1
              className="font-light text-white cursor-pointer mx-3"
              onClick={() => {
                if (!Modmenu) {
                  setModmenu(true);
                  console.log(Modmenu);
                } else if (Modmenu) {
                  setModmenu(false);
                  console.log(Modmenu);
                }
              }}
            >
              Model Menu
            </h1>
          </div>
          {/* model menu drop down */}
          {Modmenu && (
            <div className="absolute mt-7 z-30">
              <div
                className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
                onClick={() => {
                  setModel("Peccary");
                  setModmenu(false);
                }}
              >
                <h1>Peccary</h1>
              </div>
              <div
                className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
                onClick={() => {
                  setModel("Mando");
                  setModmenu(false);
                }}
              >
                <h1>gompho mandible</h1>
              </div>
              <div
                className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
                onClick={() => {
                  setModel("Tapir");
                  setModmenu(false);
                }}
              >
                <h1>tapir</h1>
              </div>
            </div>
          )}
        </div>
        {/* Side Bar Directions and Hide */}
        <div className="absolute top-0 right-0 z-30 mt-16 flex flex-col">
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

        <Info modelInfo={props.modelInfo} model={model} />
        <GenerateCanvas params={params} minimize={mod} model={model} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://hn3d-cms.herokuapp.com/api/models", {
    method: "GET",
    Authorization: process.env.STRAPI_API_KEY,
  });
  const modelInfo = await data.json();
  console.log(modelInfo);
  return {
    props: {
      modelInfo,
    },
  };
}
