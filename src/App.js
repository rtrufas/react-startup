import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Home from "./Pages/Home/Home";
import StudentInfo from "./Pages/StudentInfo/StudentInfo";
import Anunturi from "./Pages/Anunturi/Anunturi";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => <Redirect to="/acasa" />}
        />
        <Route path="/acasa" component={Home} />
        <Route path="/informatii-elevi" component={StudentInfo} />
        <Route path="/anunturi" component={Anunturi} />
        <Route path="/contact" component={Contacts} />
        <Route path="*" render={() => <div> 404 </div>} />
      </Switch>
    </>
  );
}

export default App;
