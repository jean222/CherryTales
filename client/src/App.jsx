import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRoutes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import SignUpPage from './pages/SignUpPage'

function App() {
  //This is how you can go from page to page
  let element = useRoutes([
    {
      path: '/',
      element: <WelcomePage />  
    },
    {
      path: '/signup',
      element: <SignUpPage />
    }
  ])

  return element;
}

export default App
