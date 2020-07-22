const moment = require("moment");

function getDate() {
  return moment().format("LT");
}
