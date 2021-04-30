import { createContext, useReducer } from "react";
import axios from "axios";
import usersReducer from "../reducers/usersReducer";

const initialData = {
  isPending: true,
  user: [],
  error: null,
};

export const UsersContext = createContext();
const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialData);
  // const [token, setToken] = useState("");

  //LOGIN USER
  async function LoginUser(user) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("userInfo"),
        },
      };
      const res = await axios.post(
        "https://fast-fjord-17057.herokuapp.com/api/client/login",
        user,
        config
      );
      dispatch({
        type: "LOGIN_USER",
        payload: res.data,
      });
      //STORING USER DATA IN LOCAL STORAGE OF THE BROWSER
      localStorage.setItem("userInfo", res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  //REGISTER USER
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://fast-fjord-17057.herokuapp.com/api/client/register",
        newuser,
        config
      );
      // console.log(res);
      dispatch({
        type: "REGISTER_USER",
        payload: res,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  //LOGOUT
  // const LogOut = () => {
  //   dispatch({
  //     type: "LOGOUT",
  //   });
  // };
  return (
    <UsersContext.Provider
      value={{
        LoginUser,
        user: state.user,
        isPending: state.isPending,
        registerUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UserContextProvider;
