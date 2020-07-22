//前端逻辑

const socket = io("ws://localhost:3000");

//send 发射 定义的chatMessage 和对用的值client
// socket.emit("chatMessage", "client");

//1。获取输入信息框点击等
const sendBtn = document.querySelector("#sendBtn");
const msgInput = document.querySelector("#msg");

sendBtn.onclick = () => {
  console.log(msgInput.value);
  //2、把值发送给后端
  socket.emit("chatMessage", msgInput.value);
  msgInput.value = "";
  return false;
};

socket.on("message", (data) => {
  // render the data div
  const messageDiv = document.createElement("div");

  messageDiv.innerHTML = "<p>${data}</p>";

  const container = document.querySelector(".chat-container");
  container.appendChild(messageDiv);
});
