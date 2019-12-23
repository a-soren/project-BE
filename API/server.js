const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const restricted = require();
// const authWithRouter = require();
const usersRouter = require("../users/usersRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Yo, what up" });
});
server.use("/api/users", usersRouter);
// add in the routes for the auth and users router

module.exports = server;
