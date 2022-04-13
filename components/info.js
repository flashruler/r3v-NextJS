import React, { Suspense, useState, useEffect } from "react";

export default function Info(props) {
  let modelName = "";
  let sciName = "";
  let desc = "";
  const [min, setMin] = useState(true);
  const data = props.modelInfo.data;
  console.log(data[0].attributes);
  if (data[0].attributes) {
    for (let x = 0; x < data.length; x++) {
      if (data[x].attributes.modelName === props.model) {
        modelName = data[x].attributes.modelName;
        sciName = data[x].attributes.sciName;
        desc = data[x].attributes.description;
      }
    }
  }

  if (min === false) {
    return (
      <div
        className=" absolute bottom-0 right-0 w-96 h-1/4 z-30 mx-5 my-5 bg-gray-300 flex flex-col p-3 rounded-md opacity-75 z-0 cursor-pointer"
        onClick={() => setMin(true)}
      >
        <h1 className="text-3xl opacity-100 z-10">{modelName}</h1>
        <h1 className="text-xl opacity-100 z-10">{sciName}</h1>
        <div className="overflow-auto">
          <p className="text-lg opacity-100 z-10">{desc}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" absolute bottom-0 right-0 w-96 h-auto z-30 mx-5 my-5 bg-gray-300 flex flex-col p-3 rounded-md opacity-75 z-0 cursor-pointer"
        onClick={() => setMin(false)}
      >
        <h1 className="text-3xl opacity-100 z-10">{modelName}</h1>
        <h1 className="text-xl opacity-100 z-10">{sciName}</h1>
      </div>
    );
  }
}
