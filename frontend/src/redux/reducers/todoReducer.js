export const addTodoReducer = (state = {}, action) => {
switch (action.type) {
  case "ADD_TODO_REQUEST":
    return {
      loading: true,
    };
  case "ADD_TODO_SUCCESS":
    return {
      success: true,
      loading: false,
      todo: action?.payload,
    };
    case "ADD_TODO_FAIL":
    return {
      loading: false,
      error: action?.payload,
    };
  case "ADD_TODO_RESET":
    return {};
  default:
    return state;
}
}

export const getMyTodosReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MY_TODO_REQUEST":
      return {
        loading: true,
      };
    case "GET_MY_TODO_SUCCESS":
      return {
        success: true,
        loading: false,
        todos: action?.payload,
      };
    case "GET_MY_TODO_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "GET_MY_TODO_RESET":
      return {};
    default:
      return state;
  }
};

export const getTodoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TODO_BY_ID_REQUEST":
      return {
        loading: true,
      };
    case "GET_TODO_BY_ID_SUCCESS":
      return {
        success: true,
        loading: false,
        todo: action?.payload,
      };
    case "GET_TODO_BY_ID_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "GET_TODO_BY_ID_RESET":
      return {};
    default:
      return state;
  }
};

export const getTodosReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TODOS_REQUEST":
      return {
        loading: true,
      };
    case "GET_TODOS_SUCCESS":
      return {
        success: true,
        loading: false,
        todos: action?.payload,
      };
    case "GET_TODOS_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "GET_TODOS_RESET":
      return {};
    default:
      return state;
  }
};

export const updateTodoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_TODO_BY_ID_REQUEST":
      return {
        loading: true,
      };
    case "UPDATE_TODO_BY_ID_SUCCESS":
      return {
        success: true,
        loading: false,
        todo: action?.payload,
      };
    case "UPDATE_TODO_BY_ID_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "UPDATE_TODO_BY_ID_RESET":
      return {};
    default:
      return state;
  }
};

export const deleteTodoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_TODO_BY_ID_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_TODO_BY_ID_SUCCESS":
      return {
        success: true,
        loading: false,
        message: action?.payload,
      };
    case "DELETE_TODO_BY_ID_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "DELETE_TODO_BY_ID_RESET":
      return {};
    default:
      return state;
  }
};