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
  const [info, viewInfo] = useState(false);
  // fetches json of models (test for future implementation)
  // console.log(props.modelInfo);
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
  const [home, setHome] = useState(false);
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
        {/* <div className="absolute top-0 left-0 z-30 mx-1 mt-12 bg-gray-300 w-1/5 h-1/4">
          <h1 className="text-xl">Gomphothere</h1>
          
          <h1 className="text-xl">Peccary</h1>
          <div className="flex flex-col h-auto w-12 items-center mx-2 cursor-pointer" onClick={() => {
                      setModel("Peccary");
                      setModmenu(false);
                    }}>
                      <div className="bg-black w-10 h-10">Pecc</div><h1 className="text-sm">Peccary</h1></div>
          <h1 className="text-xl">Puma</h1>
          <h1 className="text-xl">Tapir</h1>
          <h1 className="text-xl">Sloths</h1>
        </div> */}
        <div className="absolute top-0 right-0 z-30 mt-16 flex flex-col">
        
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
        {info && <Info modelInfo={props.modelInfo} model={model} />}

        <GenerateCanvas
          params={params}
          minimize={mod}
          model={model}
          home={home}
        />
        <div className=" absolute mb-8 z-10 flex flex-row justify-center items-center inset-x-0 bottom-0 h-16">
          <div className="flex flex-row items-center justify-center opacity-75 bg-gray-300 rounded-md h-16 w-fill">
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
            <div
              className="mx-4"
              onClick={() => {
                if (home === false) {
                  setHome(true);
                  console.log(home);
                } else {
                  setHome(false);
                  console.log(home);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div
              className="mx-4 cursor-pointer"
              onClick={() => {
                if (info === false) {
                  viewInfo(true);
                } else {
                  viewInfo(false);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
  // console.log(modelInfo);
  return {
    props: {
      modelInfo,
    },
  };
}
