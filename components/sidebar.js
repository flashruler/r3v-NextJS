import React, { Suspense, useState, useEffect } from 'react'
export default function Sidebar() {
  return (
    <div>
      {/* Side Bar Directions */}
      <div className="flex flex-col my-20 absolute">
        <div className="w-max h-max bg-gray-200 z-20 mx-2 rounded-md opacity-75 px-3 pb-4">
          <h1 className="text-center text-lg">Controls (PC/Mac)</h1>
          <h1>Left Click - Rotate</h1>
          <h1>Right Click - Pan Camera</h1>
          <h1>Scroll - Zoom</h1>
        </div>
        <div className="w-max h-max  z-20 mx-2  my-2 rounded-md opacity-75 px-3 pb-4 ">
          <div
            className="my-2 bg-gray-200 px-3 py-3 rounded-md cursor-pointer"
            onClick={() => {
              setMod(
                "https://hn3dmodels.s3.us-west-1.amazonaws.com/glbs/peccary.glb"
              );
              // console.log(mod)
            }}
          >
            <h1>Peccary</h1>
          </div>
          <div
            className="my-2 bg-gray-200 px-3 py-3 rounded-md cursor-pointer"
            onClick={() => {
              setMod(
                "https://hn3dmodels.s3.us-west-1.amazonaws.com/glbs/peccary_lower.glb"
              );
              // console.log(mod)
            }}
          >
            <h1>Peccary Lower</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
