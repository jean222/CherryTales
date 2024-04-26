import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRoutes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'

function App() {
  //This is how you can go from page to page
  let element = useRoutes([
    {
      path: '/',
      element: <WelcomePage />  
    }
  ])

  return element;
}

export default App
