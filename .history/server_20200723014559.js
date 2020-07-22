const moment = require("moment");
const http = require("http");
const Koa = require("koa");
const serve = require("koa-static");
const users = require("./users");

const app = new Koa();
app.use(serve("./static"));
const server = http.createServer(app.callback());

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("hi你已经触发了我这个新手服务器哦");

  socket.on("joinChatRoom", (data) => {
    console.log(socket.id);
    //存储了加入聊天的用户
    users.addUser(socket.id, data);
    //当用户进来的时候 ，当前的用户收到  欢迎加入聊天室
    socket.emit("message", {
      username: "李靖",
      msg: "Welcome to WeChat Room",
    });
    //其他的用户收到  XX 加入聊天室
    const { username } = data;
    socket.broadcast.emit("message", {
      username: "李靖",
      msg: `${username} has stepped into WeChat Room`,
    });
  });
  //当用户进来的时候 ,其他的用户收到  XX 加入聊天室
  socket.on("disconnect", () => {
    const { username } = data;
    const userInfo = users.findUser(socket.id);
    if (userInfo) {
      socket.broadcast.emit("message", {
        username: "李靖",
        msg: `${username} has stepped out WeChat Room`,
      });
    }
  });
  socket.on("chatMessage", (data) => {
    console.log(data);

    //通过id找到是谁登录的
    const userInfo = users.findUser(socket.id);
    data.timer = getDate();
    if (userInfo) {
      const { username } = userInfo;
      //通知广播所有的连接用户
      io.emit("message", {
        username,
        msg: data.msgInput,
        time: data.timer,
      });
    }
  });
});

function getDate() {
  return moment().format("LT");
}
server.listen(3000);
