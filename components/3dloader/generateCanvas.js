import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import Peccary from "../models/peccary/testmodel";
import { useGLTF } from "@react-three/drei";
import { indexOf, filter } from "lodash";

function LoadSection(props) {
  if (props) {
    let model2 = section.sectName;
    let sectPos = section.sectPos;
    let sectRot = section.sectRot;
    let { nodes, materials } = useGLTF(model2);
    return (
      <mesh
        castShadow
        receiveShadow
        position={[sectPos.x, sectPos.y, sectPos.z]}
        rotation={[sectRot.x, sectRot.y, sectRot.z]}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    );
  } else return null;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center> {Math.round(progress)}% loaded</Html>;
}

function getModel(models, modelName) {
  if (models) {
    const index2 = filter(models, { modelName: modelName });
    console.log("modelName", index2[0].modelName);
    console.log("test", index2);
    return index2[0];
  }
}
export default function GenerateCanvas(props) {
  let [data, setData] = useState([]);
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
  if (data.description) {
    console.log(data);
  }
  console.log(data);
  let models = data.models;
  let modelName = props.modelName;
  // let minimize = props.minimize;
  // let params = props.params;
  let cameraPos = data.cameraPos;
  let camRot = data.cameraRot;

  let lst = getModel(models, modelName);
  console.log("lst", lst);

  let modelData = getModel(models, modelName);
  console.log(modelData);
  if (modelData) {
    let sections = modelData.sections;
    console.log(sections);

    if (data) {
      return (
        <Canvas
          frameloop="demand"
          camera={{
            zoom: 15,
            position: cameraPos,
            rotation: camRot,
            fov: 100,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Center alignBottom>
              <>
                {sections.map((section) => {
                  let model2 = section.sectName;
                  console.log(model2);
                  let sectPos = section.sectPos;
                  console.log(sectPos.x);
                  let sectRot = section.sectRot;
                  console.log(sectRot.x);
                  let { nodes, materials } = useGLTF(model2);
                  return (
                    <mesh
                      castShadow
                      receiveShadow
                      position={[sectPos.x, sectPos.y, sectPos.z]}
                      rotation={[sectRot.x, sectRot.y, sectRot.z]}
                      geometry={nodes.mesh_0.geometry}
                      material={nodes.mesh_0.material}
                    />
                  );
                })}
                <OrbitControls />
              </>
              <mesh />
            </Center>
            <Environment files="file.hdr" />
          </Suspense>
        </Canvas>
      );
    }
  } else return null;
}
