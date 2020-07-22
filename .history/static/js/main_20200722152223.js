//前端逻辑

const socket = io("ws://localhost:3000");

//send 发射
socket.emit("chatMessage", "client");
