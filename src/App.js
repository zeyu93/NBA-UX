import React , {useState} from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, setUser] = useState(null)
  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
      </Switch>
    </div>
  );
}

export default App;
