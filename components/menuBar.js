import Link from "next/link";
export default function MenuBar() {
  return (
    <div className="w-screen h-8 z-20 bg-gray-300 flex flex-row items-center px-3">
      <div className="flex flex-row items-center mx-3">
        <Link href="/">
          <span className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            <h1 className="mx-1 font-light">R3V</h1>
          </span>
        </Link>
      </div>
      <h1 className="font-extralight">About</h1>
    </div>
  );
}
