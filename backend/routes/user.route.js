const express = require("express");
const {
  createuser,
  fetchusers,
  update,
  login,
  fetchuserbyemail,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const data = await createuser(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const data = await login(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
userRouter.get("/users", async (req, res) => {
  try {
    const data = await fetchusers();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
userRouter.get("/user/:email", async (req, res) => {
  try {
    const data = await fetchuserbyemail(req.params.email);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
userRouter.put("/user/:id", async (req, res) => {
  try {
    const data = await update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { userRouter };
