import MenuBar from "../components/menuBar";
export default function about() {
  return (
    <div className="w-full h-screen">
      <MenuBar />
      <div className="flex justify-center text-4xl uppercase font-extralight my-3">
        <h1>About This Viewer</h1>
      </div>
      {/* Flavor Text */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-3/4 bg-blue-300 items-center">
          <div className=" flex items-center justify-center"><img src="http://chei.ucsd.edu/wp-content/uploads/2019/01/logo-hoyonegro.png"></img></div>
          <div className="flex flex-col items-center p-3">
            <h1 className="text-3xl font-extralight">R3V</h1>
            <p>R3V (or React 3D Viewer) is a project by Jay Buensuceso and Audrey Liang meant to visualize meshes
                 and point cloud data for the Hoyo Negro project at the CHEI lab at the University of California, San Diego</p>
          </div>
        </div>
      </div>
    </div>
  );
}
