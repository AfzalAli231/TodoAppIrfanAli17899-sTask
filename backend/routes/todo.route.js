const express = require("express");
const {
  createTodo,
  fetchTodos,
  fetchTodo,
  updateTodo,
  deleteTodo,
  fetchUserTodo,
} = require("../controllers/todo.controller");
const todoRouter = express.Router();

todoRouter.post("/todos", async (req, res) => {
  try {
    const data = await createTodo(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
todoRouter.get("/todos/user/:id", async (req, res) => {
  try {
    const data = await fetchUserTodo(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
todoRouter.get("/todos", async (req, res) => {
  try {
    const data = await fetchTodos();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
todoRouter.get("/todos/:id", async (req, res) => {
  try {
    const data = await fetchTodo(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
todoRouter.put("/todos/:id", async (req, res) => {
  try {
    const data = await updateTodo(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
todoRouter.delete("/todos/:id", async (req, res) => {
  try {
    const data = await deleteTodo(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = {todoRouter}