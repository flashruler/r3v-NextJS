import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Peccary(props) {
  const group = useRef();
  const model =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/glbs/modelDraco.gltf";
  const model2 =
    "https://hn3dmodels.s3.us-west-1.amazonaws.com/my/uploads/path/HALFDRACO.GLTF";
  const { nodes, materials } = useGLTF(model);
  // console.log(model)
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <Html position={[0,0,0]}
                as="div"
                center
                transform
                sprite
                distanceFactor={5}
                zIndexRange={[100, 0]}
            >
                <button
                    type="button"
                    className=" flex bg-gray-400 opacity-75 rounded-sm"
                    // onClick={() => console.log("test")
                    // }
                >
                    Peccary Lower
          </button></Html> */}
      <mesh
        castShadow
        receiveShadow
        position={[-10, 0, 0]}
        rotation={[30, 0, 0]}
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}
