import React from 'react';
import './css/App.css';
import './css/main.css';
import './css/materialize.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from './components/NotFound';
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import rootStore from "./store"
import { Provider } from "react-redux";

function App() {
  window.rootStore = rootStore;
  window.test = process.env.PUBLIC_URL;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={rootStore}>
        <Route path="/">

          <Switch>

            <Route path="/" exact={true} render={() => (<Redirect to={"/students"} />)} />
            <Route path="/students" exact={true} component={Students} />
            <Route path="/teachers" exact={true} component={Teachers} />

            <Route component={NotFound} />
          </Switch>

        </Route>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
