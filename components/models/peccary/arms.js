import React, { useRef } from "react";
import { useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

function LoadSect1() {
  let model2 =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMPARMS_1.GLTF";
  let { nodes, materials } = useGLTF(model2);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 5, 0]}
      rotation={[30, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect2() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMPARMS_2.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 5, 0]}
      rotation={[30, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect3() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMPARMS_3.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 5, 0]}
      rotation={[30, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect4() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMPARMS_4.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 5, 0]}
      rotation={[30, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
export default function GompArms(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <LoadSect1 />
       <LoadSect2 />
       <LoadSect3 />
       <LoadSect4 />
    </group>
  );
}
