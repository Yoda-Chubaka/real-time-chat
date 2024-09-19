import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";
import Loading from './Loading';

const SearchUser = () => {
  const [searchUser,setSearchUser] = useState([])
    const [loading,setLoading] = useState(true)
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2">
        <div className="w-full max-w-lg mx-auto mt-10">
              <div className="bg-white rounded h-14 overflow-hidden flex">
                  <input
                      type="text"
                      placeholder="Search user by name or email"
                      className="w-full outline-none py-1 h-full px-4"
                  />
                  <div className="h-14 w-14 flex justify-center items-center">
                    <MdSearch size={25}/>
                  </div>
            </div>

            <div className="bg-white mt-2 w-full p-4 rounded">

            {
                    searchUser.length === 0 && !loading && (
                        <p className='text-center text-slate-500'>no user found!</p>
                    )
                } 

                {
                    loading && (
                        <p><Loading/></p>
                    )
                }

            </div>
        </div>
    </div>
  )
}

export default SearchUser

