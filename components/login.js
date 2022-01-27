import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "../consts.js"

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col h-screen w-auto justify-center items-center"><div className="w-1/3 max-w-sm mx-auto">
    <form>
      <label className="block">
        <span className="text-gray-700">Enter Password</span>
        <input
          type="text"
          className="form-input mt-1 block w-full bg-gray-50 text-sm"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button
        type="submit"
        className="transition bg-blue-400 rounded-full p-3 text-white animate-fade-in-up hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 my-3"
        onClick={(e) => {
          e.preventDefault()
          const cookies = new Cookies()
          cookies.set(consts.SiteReadCookie, password, {
            path: "/",
          })
          window.location.href = redirectPath ?? "/"
        }}
      >
        Login
      </button>
    </form>
  </div></div>
    
  )
}

export default Login