const {Todo} = require("../models/todo.model")

const createTodo = async (body) => {
        const data = await Todo.create(body);
        return data;
}

const fetchTodos = async() => {
     const data = await Todo.find();
      return data
}

const fetchTodo = async (id) => {
    const data = await Todo.findById(id);
    return data
};

const updateTodo = async (id, body) => {
    const data = await Todo.findByIdAndUpdate(req.params.id, req.body);
    return data
};

const deleteTodo = async (id) => {
    const data = await Todo.findByIdAndDelete(id);
    return data
};


const fetchUserTodo = async (id) => {
    const data = await Todo.find({ userId: id });
    return data
};

module.exports = {
  createTodo,
  fetchTodos,
  fetchTodo,
  updateTodo,
  fetchUserTodo,
  deleteTodo,
};