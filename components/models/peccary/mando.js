import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


function LoadSect2() {
  let model2 =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DMANDO_3.GLTF";
  let { nodes, materials } = useGLTF(model2);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 10, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect1() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DMANDO_2.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 10, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect3() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/MANDODRACO.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 10, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
export default function Mando(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      {props.test && <LoadSect1 />}
      {props.test && <LoadSect2 />}
      <LoadSect3 />
    </group>
  );
}
