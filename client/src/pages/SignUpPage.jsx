import React, { useEffect, useRef, useState } from 'react'
import '../App.css';
import HomePage from './HomePage';

export default function SignUpPage() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [show, setShow] = useState(false);

  const name = useRef(); // useRef is like a permament storage box for single value withing a React component that does noe cause the component to show changes on the screen when the value inside it is updated
  const email = useRef();
  const password = useRef();

  const lsSignUp = localStorage.getItem("signUp");
  const lsName = localStorage.getItem("name");
  const lsEmail = localStorage.getItem("email");
  const lsPassword = localStorage.getItem("password");

  useEffect(() => {
    if (lsSignUp) {
      setShowHomePage(true)
    }
    if (lsEmail) {
      setShow(true)
    }
  })

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);

      alert("success!")

      window.location.reload();
      console.log(name.current.value, email.current.value, password.current.value, email.current.value )
    }
  }

  const handleSignIn = () => {
    if (email.current.value == lsEmail && password.current.value == lsPassword){
      localStorage.setItem("signUp", email.current.value)
      window.location.reload()
    } else {
      alert("enter again wrong")
    }
  }

  return (
    <div>
      {showHomePage ? <HomePage />: 
      (show ?
        <div class='min-h-screen flex flex-col'>
          <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <img class="bg-white mx-auto w-10 py-3" src='https://cdn-icons-png.flaticon.com/512/193/193704.png' alt="image description" />

          {/* <h1 class='bg-white mb-8 text-3xl text-center text-bold'>Hi {lsName}</h1>
          <input */}
          <h1 class='bg-white mb-8 text-3xl text-center text-bold'>Hi!</h1>
          <input
              ref = {email}
              type='text'
              class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              placeholder='Email' />

          <input
              ref = {password}
              type='text'
              class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
              name='password'
              placeholder='Password' />

          <button type="button" onClick={handleSignIn} class="w-full select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-s text-customPink py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" >Submit</button>

          </div>
          </div>
          {/* <h1>Hello {lsName} </h1>
          <input placeholder="Email" type="text" ref={email} />
          <input placeholder="Password" type="text" ref={password} />
          <button onClick={handleSignIn}>SIgn in</button> */}
        </div>

        :

        <div class='min-h-screen flex flex-col'>
        <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <img class="bg-white mx-auto w-10 py-3" src='https://cdn-icons-png.flaticon.com/512/193/193704.png' alt="image description" />

            <h1 class='bg-white mb-8 text-3xl text-center text-bold'>Create a new account</h1>
            <input
              ref = {name}
              type="text"
              class="bg-white block border vorder-grey-light w-full p-3 rounded mb-4"
              name='username'
              placeholder='Username' />

            <input
              ref = {email}
              type='text'
              class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              placeholder='Email' />

            <input
              ref = {password}
              type='text'
              class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
              name='password'
              placeholder='Password' />

            {/* <button type="submit" class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button> */}
            <button type="button" onClick={handleClick} class="w-full select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-s text-customPink py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" >Submit</button>


            <div class=" bg-white text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
              <a class="bg-white no-underline border-b border-grey-dark text-grey-dark" href="#"> Terms of Service </a> 
                and 
              <a class="bg-white no-underline border-b border-grey-dark text-grey-dark" href="#"> Privacy Policy</a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account? 
            <a class="no-underline border-b border-blue text-blue" href="../login/"> Log in</a>.
          </div>
        </div>
      </div>

      )
      
      }
    </div>
  )
}


// <div class='min-h-screen flex flex-col'>
    //   <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
    //     <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
    //     <img class="bg-white mx-auto w-10 py-3" src='https://cdn-icons-png.flaticon.com/512/193/193704.png' alt="image description" />

    //       <h1 class='bg-white mb-8 text-3xl text-center text-bold'>Create a new account</h1>
    //       <input
    //         type="text"
    //         class="bg-white block border vorder-grey-light w-full p-3 rounded mb-4"
    //         name='username'
    //         placeholder='Username' />

    //       <input
    //         type='text'
    //         class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
    //         name='email'
    //         ref={email}
    //         placeholder='Email' />

    //       <input
    //         type='text'
    //         class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
    //         name='password'
    //         placeholder='Password' />

    //       <input  
    //         type='password'
    //         class='bg-white block border border-grey-light w-full p-3 rounded mb-4'
    //         name='confirm_password'
    //         placeholder='Confirm Password' />

    //       {/* <button type="submit" class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button> */}
    //       <button type="button" onClick={handleClick} class="w-full select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-s text-customPink py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" >Submit</button>


    //       <div class=" bg-white text-center text-sm text-grey-dark mt-4">
    //         By signing up, you agree to the 
    //          <a class="bg-white no-underline border-b border-grey-dark text-grey-dark" href="#"> Terms of Service </a> 
    //           and 
    //         <a class="bg-white no-underline border-b border-grey-dark text-grey-dark" href="#"> Privacy Policy</a>
    //        </div>
    //     </div>

    //     <div class="text-grey-dark mt-6">
    //       Already have an account? 
    //       <a class="no-underline border-b border-blue text-blue" href="../login/"> Log in</a>.
    //     </div>
    //   </div>
    // </div>






    // <div class='min-h-screen flex flex-col'>
    //       <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
    //       <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          
    //           <input placeholder="Name" type="text" ref={name} />
    //           <input placeholder="Email" type="text" ref={email} />
    //           <input placeholder="Password" type="text" ref={password} />

    //           <button onClick={handleClick}>Sign Up</button>
    //         </div>
    //        </div>
    //     </div>