const express = require("express");
const router = express.Router();
const Users = require("./usersModel.js");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.getById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({
        error: "there was an error retrieving the users"
      });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(id, changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({
        error: "Failed to update the user."
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({
        error: "failed to delete the user"
      });
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;

  Users.insert(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        error: "failed to add a new user"
      });
    });
});

module.exports = router;
