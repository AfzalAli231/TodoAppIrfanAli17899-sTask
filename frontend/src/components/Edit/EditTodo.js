import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {deleteTodoByIdAction, getTodoByIdAction, updateTodoByIdAction} from "../../redux/actions/todoActions"
import Select from "react-select";

const EditTodo = ({toast}) => {
  const [task, setTask] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const todo = useSelector(state => state.getTodoById)

  useEffect(() => {
    dispatch(getTodoByIdAction(params.id))
  }, []);

  useEffect(() => {
    if(todo.success === true) {
      setTask(todo.todo);
    }
  }, [todo]);

  const updatedTask = useSelector(state => state.updatedTodoById)
  
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    await dispatch(updateTodoByIdAction(task));
  }

  
  const handleDeleteTask = async (e) => {
    e.preventDefault();
    await dispatch(deleteTodoByIdAction(task));
    setTimeout(() => {
      toast.success("Task has been deleted successfully!")
    }, 1000);
    setTimeout(() => {
      window.location.href = "/todos"
    }, 2000);
  };

  useEffect(() => {
    if(updatedTask.success === true) {
      toast.success("Task has been Updated Successfully!")
      setTimeout(() => { window.location.href = `/todo/${task._id}`
        
      }, 2000);
    }
  }, [updatedTask])

  return (
    <section className="flex flex-col min-h-screen items-center justify-center  ml-3 mr-3 flex-row py-20">
      <form onSubmit={handleUpdateTask}>
        <span className="text-sm text-gray-500 font-semibold uppercase">
          Hey Buddy your editing
        </span>
        <h3 className="mb-8 text-2xl text-green-600 text-red-500 font-bold font-heading">
          Your Task
        </h3>

        <input
          className="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          className="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
          type="password"
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>
        <Select
          options={[
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
          ]}
          placeholder={task.priority}
          onChange={(selected) => {
            setTask({ ...task, priority: selected.value });
          }}
        />

        <br />

        <Select
          options={[
            { value: "Uncompleted", label: "Uncompleted" },
            { value: "Completed", label: "Completed" },
          ]}
          placeholder={task.status}
          onChange={(selected) => {
            setTask({ ...task, status: selected.value });
          }}
        />

        <br />

        {user.isAdmin && (<input
          className="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
          type="number"
          placeholder="Remarks"
          value={task.remarks}
          onChange={(e) => setTask({ ...task, remarks: e.target.value })}
        />)}

        <button
          type="submit"
          className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-green-500 hover:bg-gray-600 rounded transition duration-200"
        >
          Update
        </button>
      </form>
      <button
        onClick={handleDeleteTask}
        className="w-1/3 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-red-500 hover:bg-gray-600 rounded transition duration-200"
      >
        Delete
      </button>
    </section>
  );
};

export default EditTodo;
