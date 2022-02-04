import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Peccary from "../components/models/peccary/peccary";
import MenuBar from "../components/menuBar"
import { useGLTF } from "@react-three/drei";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>R3V Ver 0.2</title>
        <link rel="icon" href="/logo512.png" />
      </Head>
      <MenuBar/>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img className="h-24 w-auto" src="/logo512.png"></img>
        <div className="flex flex-row">
          <h1 className="text-2xl my-3 animate-fade-in-down">
            What would you like to do?
          </h1>
        </div>
        <div className="flex flex-col">
          <button className="transition bg-blue-400 rounded-full p-3 text-white animate-fade-in-up hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 my-1">
            <Link href="/viewer">Hoyo Negro</Link>
          </button>
          <button className="transition bg-blue-400 rounded-full p-3 text-white animate-fade-in-up hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 my-1">
            <Link href="/uploader">File Upload</Link>
          </button>
        </div>
      </div>
      <CookieConsent debug={true}>Cookies helps to deliver and develop this site. By clicking I agree, you agree to our use of cookies.</CookieConsent>
    </div>
  );
}
