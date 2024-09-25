const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

const app = express();

// socket connection
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin : process.env.FRONTEND_URL,
        credentials : true
    }
})

// server running at http://localhost:8080/

// online user
const onlineUser = new Set();

io.on("connection", async (socket) => {
    console.log("connect user:", socket.id);

    const token = socket.handshake.auth.token;

    // current user details
    const user = await getUserDetailsFromToken(token);

    // create a room
    socket.join(user?._id);
    onlineUser.add(user?._id);

    io.emit("onlineUser", Array.from(onlineUser));

    console.log("user:", user)

    // disconnect
    io.on("disconnect", () => {
        console.log("disconnect user:", socket.id);
    })
})

module.exports= {
    app,
    server
}

// 5:52