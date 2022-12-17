import axios from "axios";

const AddTodoAction = (todo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_TODO_REQUEST",
      });

      const config = {
        headers: {
          contentType: "application/json",
        },
      };
      const { data } = await axios.post(`/api/todos`, todo, config);
      dispatch({
        type: "ADD_TODO_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "ADD_TODO_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "ADD_TODO_FAIL",
        payload: message,
      });
    }
  };
};

const getMyTodosAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MY_TODO_REQUEST",
      });

      const { data } = await axios.get(`/api/todos/user/${id}`);
      dispatch({
        type: "GET_MY_TODO_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "GET_MY_TODO_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "GET_MY_TODO_FAIL",
        payload: message,
      });
    }
  };
};

const getTodoByIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_TODO_BY_ID_REQUEST",
      });

      const { data } = await axios.get(`/api/todos/${id}`);
      dispatch({
        type: "GET_TODO_BY_ID_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "GET_TODO_BY_ID_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "GET_TODO_BY_ID_FAIL",
        payload: message,
      });
    }
  };
};

const getTodosAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_TODOS_REQUEST",
      });

      const { data } = await axios.get(`/api/todos`);
      dispatch({
        type: "GET_TODOS_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "GET_TODOS_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "GET_TODOS_FAIL",
        payload: message,
      });
    }
  };
};

const updateTodoByIdAction = (body) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_TODO_BY_ID_REQUEST",
      });

      const { data } = await axios.put(`/api/todos/${body._id}`, body);
      dispatch({
        type: "UPDATE_TODO_BY_ID_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "UPDATE_TODO_BY_ID_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "UPDATE_TODO_BY_ID_FAIL",
        payload: message,
      });
    }
  };
};

const deleteTodoByIdAction = (body) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_TODO_BY_ID_REQUEST",
      });

      const { data } = await axios.delete(`/api/todos/${body._id}`);
      dispatch({
        type: "DELETE_TODO_BY_ID_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "DELETE_TODO_BY_ID_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "DELETE_TODO_BY_ID_FAIL",
        payload: message,
      });
    }
  };
};
export {
  AddTodoAction,
  getMyTodosAction,
  getTodoByIdAction,
  updateTodoByIdAction,
  deleteTodoByIdAction,
  getTodosAction,
};
