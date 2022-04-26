import React, { useState } from "react";
export default function ViewerMenu(props) {
  const [Modmenu, setModmenu] = useState(false);
  return (
    <div className="flex flex-col h-6 w-full bg-black">
      <div className=" w-max">
        <h1
          className="font-light text-white cursor-pointer"
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
          model menu
        </h1>
      </div>
      {Modmenu && (
        <div className="absolute mt-16">
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("Peccary");
            }}
          >
            <h1>Peccary</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("Mando");
            }}
          >
            <h1>gompho mandible</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("Tapir");
            }}
          >
            <h1>tapir</h1>
          </div>
          <div
            className=" mb-2 cursor-pointer flex justify-center items-center 
          p-3 w-auto z-30 h-12 mx-2 rounded-lg bg-gray-200 opacity-75"
            onClick={() => {
              setModel("omp1");
            }}
          >
            <h1>gomphothere 1</h1>
          </div>
        </div>
      )}
    </div>
  );
}
