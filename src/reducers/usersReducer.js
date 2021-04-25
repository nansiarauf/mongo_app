const usersReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
        isPending: false,
      };
    case "REGISTER_USER":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    //DESTROY USER DATA AND LOGOUT
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        userInfo: "",
      };
    default:
      return state;
  }
};
export default usersReducer;
