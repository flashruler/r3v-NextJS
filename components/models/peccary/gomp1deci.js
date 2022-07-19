import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function LoadSect1() {
  let model2 =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMP1DECI_1.GLTF";
  let { nodes, materials } = useGLTF(model2);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 18, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}
function LoadSect2() {
  let model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HN3DGOMP1DECI_2.GLTF";
  let { nodes, materials } = useGLTF(model);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-10, 18, 0]}
      rotation={[30, 0, 0]}
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
    />
  );
}

export default function Deci(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <LoadSect1 />
       <LoadSect2 />
    </group>
  );
}