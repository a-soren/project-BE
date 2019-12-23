const db = require("../data/dbConfig.js");
module.exports = {
  insert,
  update,
  remove,
  getById,
  getAll
};

function insert(user) {
  return db("users")
    .insert(user)
    .then(id => {
      return getById(id[0]);
    });
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}
function getAll(users) {
  return db("users");
}
