import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRoutes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import SignUpPage from './pages/SignUpPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'

function App() {
  //This is how you can go from page to page
  let element = useRoutes([
    {
      path: '/', // this is the path 
      element: <WelcomePage />  // This is the the function inside the WelcomePage.jsx
    },
    {
      path:'/HomePage',
      element: <HomePage />
    },
    {
      path: '/signup',
      element: <SignUpPage />
    },
    {
      path:'/profile',
      element: <ProfilePage />
    },
    {
      path: '*',
      element:<NotFoundPage />
    }
  ])

  return element;
}

export default App
