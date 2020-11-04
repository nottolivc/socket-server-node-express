import React from "react";
import { Switch, Route } from "react-router-dom";
import App from './App';
import Header from "./Header";
import ChatApp from "./ChatApp";

const AppRouter = () => {
  return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/chat" component={ChatApp} />
        <Route exact path="/login" component={App} />
      </Switch>
      </>
)
};

export default AppRouter;