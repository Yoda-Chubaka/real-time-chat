import React from 'react';
import logo from "../assets/logo.jpg";

const AuthLayouts = ({children}) => {
  return (
    <>
        <div>
              <img
                src={logo}
                alt="logo"
                width={100}
                height={60}
              />
        </div>
          
          { children }
    </>
  )
}

export default AuthLayouts
