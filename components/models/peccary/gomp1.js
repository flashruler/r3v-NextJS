import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


function LoadSect2() {
  let model2 =
    "gomp1/HN3DGOMP1_2-TEST.GLB";
  let { nodes, materials } = useGLTF(model2);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect1() {
  let model =
    "gomp1/HN3DGOMP1_1-TEST.GLB";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect3() {
  let model =
    "gomp1/HN3DGOMP1_3-TEST.GLB";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect4() {
  let model =
    "gomp1/HN3DGOMP1_4-TEST.GLB";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect5() {
  let model =
    "gomp1/HN3DGOMP1_5-TEST.GLB";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect6() {
  let model =
    "gomp1/HN3DGOMP1_6-TEST.GLB";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 15, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
export default function Gomp1(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <LoadSect1 />
      <LoadSect2 />
      <LoadSect3 />
      <LoadSect4 />
      <LoadSect5 />
      <LoadSect6 />
    </group>
  );
}
