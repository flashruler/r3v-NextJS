import React, { Suspense, useState, useEffect } from "react";

export default function Info(props) {
  let modelName = "";
  let SciName = "";
  let desc = "";
  const [min, setMin] = useState(true);
  const data = fetch("http://localhost:1337/api/models", {
    method: "GET",
    headers: {
      Authorization: process.env.STRAPI_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((models) => {
      return models.data;
    });
  const getData = async () => {
    const a = await data;
    console.log(a);
  };
  getData().map((x) => {
    if (x.modelname === "peccary") {
      console.log(x);
    }
  });

  if (min === false) {
    return (
      <div
        className=" absolute bottom-0 right-0 w-96 h-1/4 z-30 mx-5 my-5 bg-gray-300 flex flex-col p-3 rounded-md opacity-75 z-0 cursor-pointer"
        onClick={() => setMin(true)}
      >
        <h1 className="text-3xl opacity-100 z-10">Animal Name</h1>
        <h1 className="text-xl opacity-100 z-10">Scientific Name</h1>
        <div className="overflow-auto">
          <p className="text-lg opacity-100 z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" absolute bottom-0 right-0 w-96 h-auto z-30 mx-5 my-5 bg-gray-300 flex flex-col p-3 rounded-md opacity-75 z-0 cursor-pointer"
        onClick={() => setMin(false)}
      >
        <h1 className="text-3xl opacity-100 z-10">Animal Name</h1>
        <h1 className="text-xl opacity-100 z-10">Scientific Name</h1>
      </div>
    );
  }
}
