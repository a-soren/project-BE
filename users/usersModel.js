const db = require("../data/dbConfig.js");

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
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

module.exports = {
  insert,
  update,
  remove,
  getById,
  getAll
};
