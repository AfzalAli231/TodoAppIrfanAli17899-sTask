import axios from "axios";

const register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_USER_REQUEST",
      });

      const config = {
        headers: {
          contentType: "application/json",
        },
      };
      const { data } = await axios.post(`/api/register`, user, config);
      dispatch({
        type: "ADD_USER_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "ADD_USER_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "ADD_USER_FAILED",
        payload: message,
      });
    }
  };
};

const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "VERIFY_USER_REQUEST",
      });

      const config = {
        headers: {
          contentType: "application/json",
        },
      };
      const { data } = await axios.post(`/api/login`, user, config);
      dispatch({
        type: "VERIFY_USER_SUCCESS",
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: "VERIFY_USER_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "VERIFY_USER_FAILED",
        payload: message,
      });
    }
  };
};

const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_USERS_REQUEST",
      });

      const { data } = await axios.get(`/api/users`);
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "FETCH_USERS_FAILED",
        payload: message,
      });
    }
  };
};

const fetchUserByEmail = (email) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_USER_BY_EMAIL_REQUEST",
      });

      const { data } = await axios.get(`/api/user/${email}`);
      dispatch({
        type: "FETCH_USER_BY_EMAIL_SUCCESS",
        payload: data,
      });
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "FETCH_USER_BY_EMAIL_FAILED",
        payload: message,
      });
    }
  };
};

const updateUser = (id, body) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });

      const { data } = await axios.put(`/api/user/${id}`, body, {
        headers: {
          contentType: "application/json",
        },
      });
      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data,
      });

      setTimeout(() => {
        dispatch({
          type: "UPDATE_USER_RESET",
        });
      }, 5000);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      dispatch({
        type: "UPDATE_USER_FAILED",
        payload: message,
      });
    }
  };
};

export { register, login, fetchUsers, updateUser, fetchUserByEmail };
