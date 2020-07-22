const moment = require("moment");
const http = require("http");
const Koa = require("koa");
const serve = require("koa-static");

const app = new Koa();
app.use(serve("./static"));
const server = http.createServer(app.callback());

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("hi你已经触发了我这个新手服务器哦");

  socket.on("joinChatRoom", (data) => {});

  socket.on("chatMessage", (data) => {
    console.log(data);
    //通知广播所有的连接用户
    io.emit("message", data);
  });
});

function getDate() {
  return moment().format("LT");
}
server.listen(3000);
