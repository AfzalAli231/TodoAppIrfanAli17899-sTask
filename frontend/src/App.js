import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from './components/Edit/EditTodo';
import Navbar from './components/Navbar/Navbar';
import TodoList from "./components/TodoList/TodoList";
import Register from "./components/Register/Register";
import HomePage from './components/HomePage';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';
import { Toaster, toast } from "react-hot-toast"; 


function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage toast={toast} />} />
          <Route exact path="/add" element={<AddTodo toast={toast} />} />
          <Route exact path="/todos" element={<TodoList toast={toast} />} />
          <Route
            exact
            path="/register-login"
            element={<Register toast={toast} />}
          />
          <Route exact path="/todo/:id" element={<EditTodo toast={toast} />} />
          <Route exact path="/profile" element={<Profile toast={toast} />} />
          <Route
            exact
            path="/admin"
            element={
              <Admin toast={toast} isAdmin={user ? user.isAdmin : false} />
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
