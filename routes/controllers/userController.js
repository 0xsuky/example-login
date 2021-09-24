const bcrypt = require('bcrypt');

const { User } = require('../../models/index.js');

async function makeUser(userInfo) {
  const { id, pw } = userInfo;
  const hashedPw = await bcrypt.hash(pw, 10);
  try {
    await User.create({ userid: id, userpw: hashedPw });
    return true;
  } catch (err) {
    return false;
  }
}

async function findUser(userInfo) {
  const { id } = userInfo;
  try {
    const user = await User.findOne({
      where: { userid: id },
      raw: true,
    });
    return user;
  } catch (err) {
    return null;
  }
}

module.exports = { makeUser, findUser };
