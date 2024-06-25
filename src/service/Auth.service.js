import { api } from "./Api";

export const Register = async (data) => {
  try {
    const res = await api.post("/register", data);
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const Login = async (d) => {
  try {
    const {data} = await api.post("/login", d);

    if(data.token) {
      localStorage.setItem("auth",JSON.stringify(data.token))
    }
    return {data};
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
