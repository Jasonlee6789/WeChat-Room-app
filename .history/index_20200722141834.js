const moment = require("moment");
const http = require("http");

const server = http.createServer(app.callback());

function getDate() {
  return moment().format("LT");
}
