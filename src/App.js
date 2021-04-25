import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddClient from "./screens/AddClient";
import Clients from "./screens/Clients";
import Home from "./screens/Home";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/clients" component={Clients} />
        <Route path="/addClient" component={AddClient} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterUserScreen} />
      </Switch>
    </main>
  );
}

export default App;
