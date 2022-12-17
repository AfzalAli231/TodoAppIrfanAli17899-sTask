import React, { useEffect, useState } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../redux/actions/userActions";
import { getTodosAction } from "../../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const Admin = ({isAdmin}) => {
  const [allUsers, setallUsers] = useState([]);
  const [allTodos, setallTodos] = useState([]);
  const dispatch = useDispatch();
  const gainData = () => {
    dispatch(fetchUsers());
    dispatch(getTodosAction());
  }
  const response = useSelector(state => state.users);
  const todo = useSelector((state) => state.todos);
  useEffect(() => {
    if(isAdmin === true) {
    gainData();} else{
      window.location.href = "/"
    }
  }, [])
  
  useEffect(() => {
    if (response.success) {
      setallUsers(response.users);
    }
    if (todo.success) {
      setallTodos(todo.todos);
    }
  }, [response, todo]);
  return (
    <>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="pt-4 bg-white shadow rounded">
            <div className="flex px-6 pb-4 border-b">
              <h3 className="text-xl font-bold">List Of Users</h3>
            </div>
            <div className="p-4">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-base bg-gray-600 text-gray-400 text-left">
                    <th className="pb-3 font-medium">First Name</th>
                    <th className="pb-3 font-medium">Last Name</th>
                    <th className="pb-3 font-medium">Email</th>
                    <th className="pb-3 font-medium">Created At</th>
                    <th className="pb-3 font-medium">Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers &&
                    allUsers.map((user) => (
                      <tr className="text-base hover:bg-gray-300 cursor-pointer bg-gray-50">
                        <td className="py-5 px-6 font-medium">
                          {user.firstName}
                        </td>
                        <td className="font-medium">{user.lastName}</td>
                        <td className="font-medium">{user.email}</td>
                        <td className="font-medium">{user.createdAt}</td>
                        <td className="font-medium">{user.updatedAt}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {allUsers.length === 0 && (
                <h1 style={{ textAlign: "center", fontSize: "1rem" }}>
                  No Users Yet!
                </h1>
              )}
            </div>
          </div>
        </div>
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
                    <th className="pb-3 font-medium">Remarks</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allTodos &&
                    allTodos.map((t) => (
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
                        <td className="font-medium">{t.remarks}</td>
                        <Link to={`/todo/${t._id}`}>
                          <td className="font-medium text-center">
                            <PencilAltIcon className="h-5 w-5 mt-5 text-blue-500" />
                          </td>
                        </Link>
                      </tr>
                    ))}
                </tbody>
              </table>
              {allTodos.length === 0 && (
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

export default Admin;
