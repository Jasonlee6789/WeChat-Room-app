// // 前端逻辑
// const socket = io("ws://localhost:3000");

// // send
// // message -> chatMessage
// // socket.emit("chatMessage","client")

// // 1. 获取到点击的按钮
// const sendBtn = document.querySelector("#sendBtn");
// const msgInput = document.querySelector("#msg");

// const urlSearchParams = new URLSearchParams(location.search);
// const username = urlSearchParams.get("username");

// // 登录
// socket.emit("joinChatRoom", {
//   username,
// });

// sendBtn.onclick = () => {
//   console.log(msgInput.value);
//   // 把值发送给后端
//   socket.emit("chatMessage", msgInput.value);
//   msgInput.value = "";
//   return false;
// };

// socket.on("message", (data) => {
//   // div
//   // 渲染data
//   const { msg, username } = data;
//   const messageDiv = document.createElement("div");

//   messageDiv.classList.add("message");
//   messageDiv.innerHTML = `<p class="meta">${username}</p><p>${msg}</p>`;

//   const container = document.querySelector(".chat-messages");
//   container.appendChild(messageDiv);
// });
