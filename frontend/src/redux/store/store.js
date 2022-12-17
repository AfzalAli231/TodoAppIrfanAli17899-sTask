import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addTodoReducer, deleteTodoByIdReducer, getMyTodosReducer, getTodoByIdReducer, getTodosReducer, updateTodoByIdReducer } from "../reducers/todoReducer";
import { addUserReducer, updateUserReducer, getUsersReducer, verifyUserReducer, getUserByEmailReducer } from "../reducers/userReducer";
import thunk from "redux-thunk"

const reducer = combineReducers({
  todoAdded: addTodoReducer,
  getMyTodos: getMyTodosReducer,
  getTodoById: getTodoByIdReducer,
  deleteTodoById: deleteTodoByIdReducer,
  updatedTodoById: updateTodoByIdReducer,
  userRegistered: addUserReducer,
  userLogged: verifyUserReducer,
  users: getUsersReducer,
  updatedUser: updateUserReducer,
  todos: getTodosReducer,
  emailUser: getUserByEmailReducer
});

const middleware = [thunk]

const store = createStore(reducer, {todos: [],todo: {},users: [], user: {}}, composeWithDevTools(applyMiddleware(...middleware)))

export default store;