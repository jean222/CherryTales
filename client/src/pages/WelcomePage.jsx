import React from 'react'

export default function WelcomePage() {
  return (
    <div class="flex ">
      <div class="w-1/2 h-svh flex items-center ">
        {/* <h1 class='flex items-center '>Welcome PAGE!</h1> */}
        <h1>Welcome page</h1>
        
      </div>   

      <div class="w-1/2 h-svh">
        <img class="absolute inset-y-0 right-0 w-1/2" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image description"></img>
      </div>
    </div>
  
  )
}
