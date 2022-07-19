import React, { Suspense, useState, useEffect } from "react";

export default function Info(props) {
  let modelName = "";
  let sciName = "";
  let desc = "";
  const [min, setMin] = useState(true);
  const [option,setOption] = useState("modelinfo");
  const [info, setInfo] = useState(true);
  const [metadata, setMetadata] = useState(false);
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
  useEffect(()=>{if(metadata){setInfo(false)}},[metadata])
  useEffect(()=>{if(info){setMetadata(false)}},[info])
  if (min === false) {
    return (
      <div
        className=" absolute inset-y-0 right-0 w-96 h-3/5 z-20 mx-5 my-auto bg-[#55697B] flex flex-col rounded-md z-0 cursor-pointer rounded-xl"
      >
        <div className="grid grid-cols-4 grid-row-1">
          {info && <button className="bg-[#55697B] h-10 text-white w-25 z-30"  onClick={() => setInfo(!info)}> Model Info</button>}
          {!info && <button className="bg-[#363D43] h-10 text-white w-25 z-30"  onClick={() => setInfo(!info)}> Model Info</button>}
          {metadata && <button className="bg-[#55697B] h-10 text-white w-25 z-30"  onClick={() =>setMetadata(!metadata)}> Metadata</button>}
          {!metadata && <button className="bg-[#363D43] h-10 text-white w-25 z-30"  onClick={() =>setMetadata(!metadata)}> Metadata</button>}
          <button className="bg-[#363D43] h-10 text-white w-25 z-30"  onClick={() => setMin(true)}> Controls</button>
          <button className="bg-[#363D43] h-10 text-white w-25 z-30"  onClick={() => setMin(true)}> Minimize</button>
          </div>
          {info &&  <div className="flex flex-col w-full h-full items-center">
            <div className="w-3/4 h-1/4 bg-gray-300 my-10 rounded-xl"><img className="rounded-xl"src="https://media.istockphoto.com/vectors/vector-wild-pig-peccary-vector-id625939034?k=20&m=625939034&s=170667a&w=0&h=Qvth8FM4qUbPrVNhVU7Q-5MaX6LqJMoiKD_-yhdbm4A="></img></div>        
            <h1 className="text-3xl opacity-100 my-4 z-10">{modelName}</h1>
            <h1 className="text-xl opacity-100 z-10">{sciName}</h1>
            <div className="overflow-auto">
            <p className="text-lg opacity-100 z-10">{desc}</p></div>
          </div>}
          {metadata && <div>        
            <h1 className="text-3xl opacity-100 z-10">this be the metadata</h1>
            <h1 className="text-xl opacity-100 z-10">{sciName}</h1>
            <div className="overflow-auto">
            <p className="text-lg opacity-100 z-10">{desc}</p></div>
          </div>}

      </div>
    );
  } else {
    return (
      <div
        className=" absolute inset-y-0 right-0 w-10 h-1/4 z-30 mx-5 my-auto bg-[#55697B] flex flex-col p-3 rounded-md z-0 cursor-pointer items-center justify-center"
        onClick={() => setMin(false)}
      >
        <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
      </div>
    );
  }
}
