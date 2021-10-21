import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61689f43e6d006b2ca91cc39",
    username: "john",
    email: "john@gmail.com",
    password: "$2b$10$W5IZ6q5xfzNJpe2/tWFkien6C1rOjC.C26aK1nHxmi2teXIBSEQq6",
    profilePicture: "person/2.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: {
      $date: {
        $numberLong: "1634246467788",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1634770388417",
      },
    },
    __v: {
      $numberInt: "0",
    },
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
