import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const RegisterPage = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: ""
    })
    const [uploadPhoto, setUploadPhoto] = useState("");

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setData((previousValue) => {
            return {
                ...previousValue,
                [name]: value

            }
        }) 
    }

    const handleUploadPhoto = (event) => {
        const file = event.target.files[0];

        setUploadPhoto(file);
    }

    const handleClearUploadPhoto = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setUploadPhoto(null);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        console.log("data", data);
    }

    return (
        <div className="mt-5">
            <div className="bg-white w-full max-w-sm rounded overflow-hidden p-4 mx-auto">
                <h3>Welcome to Real Time Chat!</h3>

                <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="bg-slate-100 px-2 py-1 focus:outline-primary"
                            value={data.name}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="bg-slate-100 px-2 py-1 focus:outline-primary"
                            value={data.email}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="bg-slate-100 px-2 py-1 focus:outline-primary"
                            value={data.password}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="profile_pic">Photo: 

                            <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer">
                                <p className="text-base max-w-[300px] text-ellipsis line-clamp-1">
                                    {
                                        uploadPhoto?.name? uploadPhoto?.name: "Upload profile photo"
                                    }
                                </p>
                                {
                                    uploadPhoto?.name && (
                                        <button className="text-lg ml-2 hover:text-red-600" onClick={handleClearUploadPhoto}>
                                            <IoClose/>
                                        </button>
                                    )
                                }
                                

                            </div>

                            {/* <button type="button" className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary w-full text-sm">
                                Upload profile photo
                            </button> */}

                        </label>

                        <input
                            type="file"
                            id="profile_pic"
                            name="profile_pic"
                            className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
                            onChange={handleUploadPhoto}
                        />
                    </div>

                    <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
                        Register
                    </button>
                </form>

                <p className="my-3 text-center">
                    Already have account ? <Link to={"/email"} className="hover:text-primary font-semibold">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage;

// 2:03