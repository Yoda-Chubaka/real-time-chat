import React from 'react';
import logo from "../assets/logo-1.png";

const AuthLayouts = ({children}) => {
  return (
    <>
        <div className="flex justify-center items-center py-3 h-30 shadow-md bg-white">
          <header>
              <img className="flex items-center"
                src={logo}
                alt="logo"
                width={120}
                height={60}
              />
              <h2 className="text-green-800 text-lg font-bold text-center">Real Time Chat</h2>
        </header>
        </div>
          
          { children }
    </>
  )
}

export default AuthLayouts


