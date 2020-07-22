//前端逻辑

const socket = io("ws://localhost:3000");

//send 发射 定义的chatMessage 和对用的值client
// socket.emit("chatMessage", "client");

const sendBtn = document.querySelector("#sendBtn");
const msgInput = document.querySelector("#msg");

sendBtn.onClick = () => {
  console.log(msgInput.value);

  return false;
};
