export const userService = {
  getUser,
  signup,
  addMove,
  getLoggedinUser,
};

const user = {
  _id: "u101",
  name: "Ochoa Hyde",
  coins: 100,
  moves: [],
};

function getUser() {
  const loggedinUser = getLoggedinUser();
  return loggedinUser ? loggedinUser : user;
}

function signup(name) {
  user.name = name;
  return _saveLocalUser(user);
}

function addMove(contact, amount) {
  const user = getUser();
  user.moves.unshift({
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  });
  user.coins -= amount;
  return _saveLocalUser(user);
}

function getLoggedinUser() {
  return JSON.parse(localStorage.getItem("loggedinUser"));
}

function _saveLocalUser(user) {
  localStorage.setItem("loggedinUser", JSON.stringify(user));
  return user;
}
