import React, { useEffect, useState } from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { getMyTodosAction } from '../../redux/actions/todoActions';

const TodoList = () => {
  const [myTodos, setmyTodos] = useState([])
  const dispatch = useDispatch();
  const me = JSON.parse(localStorage.getItem("user"));
  const todoList = useSelector((state) => state.getMyTodos);

  useEffect(() => {
    dispatch(getMyTodosAction(me._id));
  }, []);
  
  useEffect(() => {
    if (todoList.success) {
      setmyTodos(todoList.todos);
    }
  }, [todoList]);
  return (
    <>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="pt-4 bg-white shadow rounded">
            <div className="flex px-6 pb-4 border-b">
              <h3 className="text-xl font-bold">List Of Tasks</h3>
            </div>
            <div className="p-4">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-base bg-gray-600 text-gray-400 text-left">
                    <th className="pb-3 font-medium">Title</th>
                    <th className="pb-3 font-medium">Description</th>
                    <th className="pb-3 font-medium">Created At</th>
                    <th className="pb-3 font-medium">Updated At</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myTodos.length !== 0 &&
                    myTodos.map((t) => (
                      <tr className="text-base hover:bg-gray-300 cursor-pointer bg-gray-50">
                        <td className="py-5 px-6 font-medium">{t.title}</td>
                        <td className="font-medium">{t.description}</td>
                        <td className="font-medium">{t.createdAt}</td>
                        <td className="font-medium">{t.updatedAt}</td>
                        <td>
                          <span className="inline-block py-1 px-2 text-white bg-red-500 rounded-full">
                            {t.status}
                          </span>
                        </td>
                        <Link to={`/todo/${t._id}`}>
                          <td className="font-medium">
                            <PencilAltIcon className="h-5 w-5 mt-5 text-blue-500" />
                          </td>
                        </Link>
                      </tr>
                    ))}
                </tbody>
              </table>
              {myTodos.length === 0 && (
                <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
                  No Tasks Yet!
                </h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
