import React from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { useState } from 'react';
import EditUserDetails from "./EditUserDetails";
import Divider from "./Divider";

const Sidebar = () => {
  const user = useSelector(state => state?.user);
  const [editUserOpen, setEditUserOpen] = useState(false);

  return (
    <div className="w-full h-full grid grid-cols-[48px,1fr] bg-white">
          <div className="bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between">
              <div>
                  <NavLink className={({ isActive })=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title="chat">
                    <IoChatbubbleEllipses 
                      size = {20}
                    />
                </NavLink>

                <NavLink title="Add friend" className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                  <FaUserPlus 
                      size = {20}
                  />
                </NavLink>
              </div>

              <div className="flex flex-col items-center">
          <button className="mx-auto" title={user?.name} onClick = {() => setEditUserOpen(true)}>
                  <Avatar
                    width={40}
                    height={40}
                    name={user?.name}
                    imageUrl = {user?.profile_pic}
                  />
                </button>
                <button title="Logout" className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                      <span className="-ml-2">
                        <BiLogOut 
                          size = {20}
                        />
                      </span>
                </button>
              </div>
        </div>

      <div className="w-full">
        <div className="h-16 flex items-center">
          <h2 className="text-xl font-bold p-4 text-slate-800">Message</h2>
        </div>
        <div className="bg-slate-200 p-[0.5px]"></div>

        <div className="bg-red-500 h-[calc(100vh-65px)] overflow-x-hidden overflow-y-scroll scrollbar"></div>
      </div>
      {/* Edit User Details */}
      {
        editUserOpen && (
          <EditUserDetails onClose={() => setEditUserOpen(false)} user={user} />
        )
      }
    </div>
  )
}

export default Sidebar


// 4:49