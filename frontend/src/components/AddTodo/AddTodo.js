import React, { useEffect, useState } from 'react';
import todoSVG from '../../img/book.svg';
import {useDispatch, useSelector} from "react-redux";
import { AddTodoAction } from '../../redux/actions/todoActions';
import Select from "react-select"

const AddTodo = ({toast}) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const addTask = useSelector(state => state)
  const dispatch = useDispatch();
  const data = {
    title,
    description: desc,
    userId: user._id,
    priority: priority
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(title !== "" || desc !== "") {dispatch(AddTodoAction(data));} else{
      toast.error("Title & Description Can't be empty!")
    }
    setTitle("");
    setDesc("")
    setPriority("")
  }  
  useEffect(() => {
    if (addTask.todoAdded.success && addTask.todoAdded.todo.userId === user._id) {
      toast.success("Task has been Added Successfully");
    } else if (addTask.todoAdded.success && addTask.todoAdded.todo.name === "ValidationError") {
      toast.error(addTask.todoAdded.todo.message);
    }
  }, [addTask.todoAdded])
  
  return (
    <section className="relative min-h-screen py-20">
      <div className="absolute top-0 left-0 lg:bottom-0 h-112 lg:h-auto w-full lg:w-8/12 bg-gray-500"></div>
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md">
              <img
                class="mx-auto lg:mx-0 lg:ml-auto w-full h-80 lg:h-112 object-cover rounded-lg"
                src={todoSVG}
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
              <form onSubmit={handleSubmit}>
                <span className="text-sm text-gray-500 font-semibold uppercase">
                  Add New Task
                </span>
                {user === null && (
                  <h3 className="mb-8 text-2xl font-bold font-heading text-red-500">
                    Register Or Login First
                  </h3>
                )}

                <input
                  className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  className="w-full border-1 py-3 pl-3 mb-4 bg-white rounded-lg"
                  value={desc}
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Description"
                ></textarea>

                <Select
                  options={[
                    { value: "Low", label: "Low" },
                    { value: "Medium", label: "Medium" },
                    { value: "High", label: "High" },
                  ]}
                  placeholder="Select Task's Priority"
                  onChange={val => {
                    setPriority(val.value)
                  }}
                />

                <label className="inline-block mb-4">
                  <span className="text-sm text-gray-500">
                    Develped by
                    <a className="font-bold hover:underline" href="#">
                      Afzal Ali
                    </a>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={user === null}
                  className="w-full inline-block px-6 py-3 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
