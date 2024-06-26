import { Login } from "../../service/Auth.service";

export const LoginAction = async (dispatch, formData) => {
  const res = await Login(formData);

  try {
    dispatch({ type: "process" });
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};
