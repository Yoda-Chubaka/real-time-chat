import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from './Avatar';

const MessagePage = () => {
  const params = useParams();
  const socketConnection = useSelector(state => state?.user?.socketConnection);
  const [dataUser, setDatauser] = useState({
    name: "",
    email: "",
    profile_pic: "",
    online: false
  })

    console.log("params:", params.userId);

    useEffect(() => {
      if (socketConnection) {
        socketConnection.emit("message-page", params.userId);

        socketConnection.on("message-user", (data) => {
          setDatauser(data);
        })
      }

    }, [socketConnection, params?.userId])
  
  return (
    <div>
      <header className = "sticky top-0 h-16 bg-white">
        <div>
          <div>
            <Avatar
              width={50}
              height={50}
              image={dataUser.profile_pic}
            />
          </div>
        </div>

      </header>
    </div>
  )
}

export default MessagePage
