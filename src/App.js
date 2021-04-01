/*App.js*/
import React, { Component, lazy, Suspense } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom";

const Video = lazy(() => import('./video'));
const Main = lazy(() => import('./main'));

const renderLoader = () => <p>Loading</p>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense fallback={renderLoader()}>
            <Route exact path="/" component={Main} />
            <Route exact path="/made-in-abyss" component={Video} />
            <Redirect from="*" to='/' />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;