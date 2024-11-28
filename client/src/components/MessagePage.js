import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from './Avatar';
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import uploadFile from '../helpers/uploadFile';
import { IoClose } from "react-icons/io5";

const MessagePage = () => {
  const params = useParams();
  const socketConnection = useSelector(state => state?.user?.socketConnection);
  const user = useSelector(state => state?.user)
  const [dataUser, setDatauser] = useState({
    name: "",
    email: "",
    profile_pic: "",
    online: false,
    _id: ""
  })
  const [openImageVideoUpload, setOpenImageVideoUpload] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
    videoUrl: ""
  })

  const [loading, setLoading] = useState(false);

  const handleUploadImageVideoOpen = (e) => {
    setOpenImageVideoUpload(previous => !previous)
  }

  const handleUploadImage = async(e) => {
    const file = e.target.files[0]

    setLoading(true)
    const uploadPhoto = await uploadFile(file)
    setLoading(false)

    setMessage(previous => {
      return {
        ...previous,
        imageUrl: uploadPhoto.url
      }
    })
  }

  const handleClearUploadImage = () => {
  
    setMessage(previous => {
      return {
        ...previous,
        imageUrl: ""
      }
    })
  }


  const handleUploadVideo = async(e)=>{
    const file = e.target.files[0]

    setLoading(true)
    const uploadPhoto = await uploadFile(file)
    setLoading(false)
    // setOpenImageVideoUpload(false)

    setMessage(previous => {
      return{
        ...previous,
        videoUrl : uploadPhoto.url
      }
    })
  }
  const handleClearUploadVideo = ()=>{
    setMessage(previous => {
      return{
        ...previous,
        videoUrl : ""
      }
    })
  }

    useEffect(() => {
      if (socketConnection) {
        socketConnection.emit("message-page", params.userId);

        socketConnection.on("message-user", (data) => {
          setDatauser(data);
        })
      }

    }, [socketConnection, params?.userId, user])
  
  return (
    <div>
      <header className = "sticky top-0 h-16 bg-white flex justify-between items-center px-4">
        <div className = "flex items-center gap-4">
            <Link to = {"/"} className = "lg:hidden">
              <FaAngleLeft size = {25}/>
            </Link>
            <div>
            <Avatar
              width={50}
              height={50}
              imageUrl={dataUser?.profile_pic}
              name={dataUser?.name}
              userId={dataUser?._id}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg my-0 text-ellipsis line-clamp-1">{dataUser?.name}</h3>
            <p className="-my-2 text-sm">
              {
                dataUser.online ? <span className="text-primary">online</span> : <span className="text-slate-400">offline</span>
              }
            </p>
          </div>
        </div>

        <diV>
          <button className="cursor-pointer hover:text-primary">
            <HiDotsVertical />
          </button>
        </diV>
      </header>

      {/* Show all messages */}
      <section className="h-[calc(100vh-128px)] overflow-x-hidden overflow-y-scroll scrollbar relative">

        {/* Upload Image Display */}
        {
          message.imageUrl && (
            <div className="w-full h-full bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden">
              <div className = "w-fit p-2 absolute top-0 right-0 cursor-pointer hover:text-red-600" onClick={handleClearUploadImage}>
                <IoClose size={30}/>
              </div>
              <div className="bg-white p-3">
                <img
                  src={message.imageUrl}
                  alt="uploadImage"
                  className="aspect-square w-full h-full max-w-sm m-2 object-scale-down"
                />
              </div>
        </div>
          )
        }

          {/**upload video display */}
          {
                    message.videoUrl && (
                      <div className='w-full h-full sticky bottom-0 bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden'>
                        <div className='w-fit p-2 absolute top-0 right-0 cursor-pointer hover:text-red-600' onClick={handleClearUploadVideo}>
                            <IoClose size={30}/>
                        </div>
                        <div className='bg-white p-3'>
                            <video 
                              src={message.videoUrl} 
                              className='aspect-square w-full h-full max-w-sm m-2 object-scale-down'
                              controls
                              muted
                              autoPlay
                            />
                        </div>
                      </div>
                    )
                  }

            {/* START FROM HERE!!!!!!! */}
                  {/* {
                    loading && (
                    
                    )
                  } */}
        
              Show all messages
      </section>

      <section className="h-16 bg-white flex items-center px-4">
        <div className="relative">
            <button onClick = {handleUploadImageVideoOpen} className="flex justify-center items-center w-11 h-11 rounded-full hover:bg-primary hover:text-white cursor-pointer">
              <FaPlus size={20}/>
            </button>

              {
                openImageVideoUpload && (
                  <div className="bg-white shadow rounded absolute bottom-14 w-36 p-2">
                    <form>
                      <label htmlFor="uploadImage" className="flex items-center p-2 px-3 gap-3 hover:bg-slate-200 cursor-pointer">
                        <div className="text-primary">
                          <FaImage size={18}/>
                       </div>
                      <p>Image</p>
                    </label>
                    <label htmlFor="uploadVideo" className="flex items-center p-2 px-3 gap-3 hover:bg-slate-200 cursor-pointer">
                      <div className="text-purple-500">
                        <FaVideo size={18}/>
                      </div>
                    <p>Video</p>
                  </label>

                  <input
                    type="file"
                    id="uploadImage"
                    onChange={handleUploadImage}
                  />

                  <input
                    type="file"
                    id="uploadVideo"
                    onChange={handleUploadVideo}
                  />
                </form>
                  </div>
                )
              }
            
        </div>
      </section>
    </div>
  )
}

export default MessagePage;

// 7:00
