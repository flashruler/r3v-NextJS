import { useState } from "react";
import { useS3Upload } from "next-s3-upload";
import { useRouter } from "next/router";
import Link from "next/link";
import Login from "../components/login";
// import {gltfToGlb} from "gltf-pipeline";

export default function Uploader({ hasReadPermission }) {
  const router = useRouter();
  let [fileUrl, setFileUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  let handleFileChange = async (file) => {
    let { url } = await uploadToS3(file);
    setFileUrl(url);
  };

  if (!hasReadPermission) {
    if (!hasReadPermission) {
      return <Login redirectPath={router.asPath} />;
    }
  }

  return (
    <div>
      <div className="flex flex-col h-screen w-full items-center justify-center">
      <button className="transition bg-blue-400 rounded-full p-3 text-white animate-fade-in-up hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 my-1">
            <Link href="/">Return to Homepage</Link>
          </button>
        <FileInput onChange={handleFileChange} />

        <button
          className="transition bg-blue-400 rounded-full p-3 text-white animate-fade-in-up hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 my-1"
          onClick={openFileDialog}
        >
          Upload file
        </button>
        {fileUrl && <h1>File Sucessfully Uploaded!</h1>}

      </div>
    </div>
  );
}
