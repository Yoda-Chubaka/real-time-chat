import React from 'react';
import logo from "../assets/logo-10.png";

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className="flex justify-center items-center py-3 h-25 shadow-md bg-white">
              <img
                src={logo}
                alt="logo"
                width={100}
                height={60}
              />
        </header>
          
          { children }
    </>
  )
}

export default AuthLayouts

// 1:41
