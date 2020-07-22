//管理多有的user信息
const users = [];
module.exports = {
  addUser(id, userInfo) {
    users.push({
      id,
      ...userInfo,
    });
  },
};
