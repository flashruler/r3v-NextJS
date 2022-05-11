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
        {/* Side Bar Directions and Hide */}
        <div className="absolute top-0 right-0 z-30 mt-16 flex flex-col">
          {/* <div
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
          </div> */}

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

        {/* <Info modelInfo={props.modelInfo} model={model} /> */}
        <GenerateCanvas params={params} minimize={mod} model={model} />
        <div className=" absolute mb-8 z-10 flex flex-row justify-center items-center inset-x-0 bottom-0 h-16">
          <div className="flex flex-row items-center justify-center opacity-75 bg-gray-300 rounded-md h-16 w-2/4">
            <div
              className="flex flex-row items-center cursor-pointer mx-4"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {Modmenu && (
            <div className="absolute mb-60 z-30 flex flex-col h-40 w-auto overflow-y-auto overflow-hidden">
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
              <div
                className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
                onClick={() => {
                  setModel("Gomp1");
                  setModmenu(false);
                }}
              >
                <h1>gomphothere 1</h1>
              </div>
              <div
                className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
                onClick={() => {
                  setModel("Gomp2");
                  setModmenu(false);
                }}
              >
                <h1>gomphothere 2</h1>
              </div>
            </div>
          )}
            </div>
            <div
              className="flex flex-row items-center cursor-pointer mx-4"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
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
