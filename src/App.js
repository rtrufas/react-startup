import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />{" "}
        <Route path="/home" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="*" render={() => <div> 404 </div>} />
      </Switch>{" "}
    </>
  );
}

export default App;
