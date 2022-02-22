import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function LoadSect2(props) {
  let model2 = props.sectName;
  let { nodes, materials } = useGLTF(model2);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 0, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect1() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DPECC_1.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 0, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect3() {
  let model = "poly.glb";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 0, 0]}
      rotation={[0, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
export default function Peccary(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      {props.test && <LoadSect1 />}
      {props.test && <LoadSect2 />}
      <LoadSect3 />
    </group>
  );
}
