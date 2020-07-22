//前端逻辑

const socket = io("ws://localhost:3000");

//send 发射 定义的chatMessage 和对用的值client
socket.emit("chatMessage", "client");

//1。获取输入信息框点击等
// const sendBtn = document.querySelector("#sendBtn");
// const msgInput = document.querySelector("#msg");

// sendBtn.onClick = () => {
//   console.log(msgInput.value);
//   //2、把值发送给后端
//   socket.emit("chatMessage", msgInput.value);
//   msgInput.value = "";
//   return false;
// };
