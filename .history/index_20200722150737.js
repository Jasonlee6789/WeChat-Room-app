const moment = require("moment");
const http = require("http");
const Koa = require("koa");

const app = new Koa();
const server = http.createServer(app.callback());

const io = require("socket.io")(server);

io.on("connection", (client) => {
  console.log("hi");
});

function getDate() {
  return moment().format("LT");
}
server.listen(3000);
