import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { responseGoogle } from '../utils'

function Login() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className="relative w-full h-full">
        <video src={shareVideo}
        typeof='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover' />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay ">
          <div className="p-5">
            <img src={logo} alt="shareme" width="130px" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
            onSuccess={(response) => responseGoogle(response, navigate)}
            onError={() => console.log('Login Failed')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login