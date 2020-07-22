const moment = require("moment");
const http = require("http");
const Koa = require("koa");
const serve = require("koa-static");

const app = new Koa();
app.use(serve(__dirname + "./static"));
const server = http.createServer(app.callback());

const io = require("socket.io")(server);

io.on("connection", (client) => {
  console.log("hi");
});

function getDate() {
  return moment().format("LT");
}
server.listen(3000);
