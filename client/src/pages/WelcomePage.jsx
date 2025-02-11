import React from 'react'
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navi = useNavigate()

  const newPage = () => {
    navi('/signup');
  }

  return (
    <>
    <div class="relative">
      {/* <img class="absolute top-0 left-0 w-20 px-3 py-3" src='https://png.pngtree.com/png-vector/20220806/ourmid/pngtree-cherry-lineart-hand-drawn-png-image_6102020.png' alt="image description" /> */}
      {/* <img class="absolute top-0 left-0 w-20 px-3 py-3" src="https://cdn-icons-png.flaticon.com/512/4416/4416713.png" alt="image description" /> */}
      <img class="absolute top-0 left-0 w-20 px-3 py-3" src='https://cdn-icons-png.flaticon.com/512/193/193704.png' alt="image description" />
    </div>


    <div class="flex flex-col md:flex-row top-0">

      {/* left contianer */}
      <div class="w-full md:w-1/2 h-svh flex flex-col items-center justify-center ">

        <div class="pl-20 pr-10">
          <span class="font-bold text-4xl">CherryTales</span>
          <p class="pt-3 text-xl"> The more you read, the more things you will know. The more you learn, the more places you will go.</p>
        </div>

        <div class="flex flex-col md:flex-row  pt-5 space-x-8 ">
          <button onClick={() => newPage()}class="select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-s text-customPink py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">Sign up</button>
          <button class="select-none font-bold  text-center uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg border border-gray-900 py-3 px-6 align-middle text-s  text-gray-900 "type="button">Log in</button>
        </div>
      </div>   

      {/* right container */}
      <div class="w-full md:w-1/2 h-svh flex justify-center items-center">
        <img class="max-w-full" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image description"></img>
      </div>
    </div>
    </>
  
  )
}
