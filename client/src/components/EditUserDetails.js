import React, { useState, useEffect, useRef } from 'react';
import Avatar from "./Avatar";
import uploadFile from '../helpers/uploadFile';
import Divider from "./Divider";
import axios from "axios";
import toast from "react-hot-toast";


const EditUserDetails = ({ onClose, user }) => {
    const [data, setData] = useState({
        name: user?.user,
        profile_pic: user?.profile_pic
    })

    const uploadPhotoRef = useRef();

    useEffect(() => {
        setData((previous) => {
            return {
                ...previous,
                ...user
            }
        })
    }, [user])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }

    const handleOpenUploadPhoto = () => {
        uploadPhotoRef.current.click();
    }

    const handleUploadPhoto = async (event) => {
        const file = event.target.files[0]

    const uploadPhoto = await uploadFile(file)

    setData((preve)=>{
      return{
        ...preve,
        profile_pic : uploadPhoto?.url
      }
    })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const URL = `${process.env.REACT_APP_BACKEND_URL}/api/update-user`;

            const response = await axios.post(URL, data);

            toast.success(response.data.message);
            

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-40 flex justify-center items-center">
        <div className = "bg-white p-4 m-1 py-6 rounded w-full max-w-sm ">
            <h2 className="font-semibold">
                Profile details
            </h2>
              <p className="text-sm">
                  Edit user details
              </p>
              
              <form className="grid gap-3 mt-3" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                          name="name"
                          id="name"
                          value={data.name}
                          onChange={handleChange}
                          className="w-full py-1 px-2 focus:outline-primary border rounded"
                      />
                  </div>

                  <div>
                      <div>Photo:</div>
                      <div className="my-1 flex items-center gap-4">
                          <Avatar
                              width={40}
                              height={40}
                              imageUrl={data?.profile_pic}
                              name={data?.name}
                        />
                              <label htmlFor="profile_pic">
                          <button className="font-semibold" onClick={handleOpenUploadPhoto}>Change Photo</button>
                          <input
                              type="file"
                              id="profile_pic"
                              className="hidden"
                                  onChange={handleUploadPhoto}
                                  ref={uploadPhotoRef}
                              />
                              </label>
                          </div>
                  </div>
                
                  <Divider />
                  
                  <div className="flex gap-2 w-fit ml-auto">
                      <button onClick={onClose} className="border-primary border text-primary px-4 py-1 rounded hover:bg-primary hover:text-white">Cancel</button>
                      <button onClick={handleSubmit} className="border-primary bg-primary text-white border px-4 py-1 rounded hover:bg-secondary">Save</button>
                  </div>
              </form>
        </div>
    </div>
  )
}

export default React.memo(EditUserDetails)


// 4:23
