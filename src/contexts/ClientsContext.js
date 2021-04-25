import { createContext, useReducer } from "react";
import clientsReducer from "../reducers/clientsReducer";
import axios from "axios";
//CREATE INITIAL STATE
const initialData = {
  loading: true,
  clients: [],
  error: null,
};

//CREATING AN INSTANCE OF CREATECONTEXT
export const ClientsContext = createContext();

//CREATING CONTEXT PROVIDER

const ClientsContextProvider = ({ children }) => {
  //CREATING THE REDUCER
  const [state, dispatch] = useReducer(clientsReducer, initialData);
  //FUNCTION TO FETCH DATA FROM MONGODB
  async function getClients() {
    const Allclients = await axios.get(
      "https://fast-fjord-17057.herokuapp.com/api/client/info"
    );
    try {
      dispatch({ type: "GET_ALL_CLIENTS", payload: Allclients.data });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ClientsContext.Provider
      value={{ getClients, clients: state.clients, loading: state.loading }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
export default ClientsContextProvider;
