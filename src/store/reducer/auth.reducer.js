const initialState = {
  data: null,
  auth: false,
  loading: false,
  error: null,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process":
      return (store = { loading: true, ...store });
      break;

    case "error":
      return (store = { loading: false, error: action.payload, ...store });

    case "login":
      return (store = {
        loading: true,
        auth: true,
        data: action.payload,
        error: null,
      });
      break;

    case "logout":
      return (store = { auth: false, data: null });

    default:
      return store;
      break;
  }
};
