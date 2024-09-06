import React from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-full h-full">
          <div className="bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between">
              <div>
                  <NavLink className={({ isActive })=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title="chat">
                    <IoChatbubbleEllipses 
                      size = {20}
                    />
                </NavLink>

                <NavLink className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                  <FaUserPlus 
                      size = {20}
                  />
                </NavLink>
              </div>

              <div>
                <button className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                      <span clasName="-ml-2">
                        <BiLogOut 
                          size = {20}
                        />
                      </span>
                </button>
              </div>
        </div>
    </div>
  )
}

export default Sidebar
