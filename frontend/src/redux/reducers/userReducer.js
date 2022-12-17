export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {
        loading: true,
      };
    case "ADD_USER_SUCCESS":
      return {
        success: true,
        loading: false,
        user: action?.payload,
      };
    case "ADD_USER_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "ADD_USER_RESET":
      return {};
    default:
      return state;
  }
};
export const verifyUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "VERIFY_USER_REQUEST":
      return {
        loading: true,
      };
    case "VERIFY_USER_SUCCESS":
      return {
        success: true,
        loading: false,
        user: action?.payload,
      };
    case "VERIFY_USER_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "VERIFY_USER_RESET":
      return {};
    default:
      return state;
  }
};

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        success: true,
        loading: false,
        users: action?.payload,
      };
    case "FETCH_USERS_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "FETCH_USERS_RESET":
      return {};
    default:
      return state;
  }
};

export const getUserByEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_BY_EMAIL_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_USER_BY_EMAIL_SUCCESS":
      return {
        success: true,
        loading: false,
        user: action?.payload,
      };
    case "FETCH_USER_BY_EMAIL_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "FETCH_USER_BY_EMAIL_RESET":
      return {};
    default:
      return state;
  }
};


export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return {
        loading: true,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        success: true,
        loading: false,
        user: action?.payload,
      };
    case "UPDATE_USER_FAIL":
      return {
        loading: false,
        error: action?.payload,
      };
    case "UPDATE_USER_RESET":
      return {};
    default:
      return state;
  }
};
