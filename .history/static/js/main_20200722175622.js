//前端逻辑

const socket = io("ws://localhost:3000");

//send 发射 定义的chatMessage 和对用的值client
// socket.emit("chatMessage", "client");

const sendBtn = document.querySelector("#sendBtn");

sendBtn.onClick = () => {
  console.log("11111");
  return false;
};
