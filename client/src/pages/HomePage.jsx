import React from 'react'

export default function HomePage() {
    const logOut = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    } 

  return (
    <div>
        <h1>HomePage</h1>
        <p>Welcome {localStorage.getItem('name')}</p>

        <button onClick={logOut} class='bg-slate-600'>Log Out</button>
    </div>
  )
}
