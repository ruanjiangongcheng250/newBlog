import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import My from './pages/my';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
          <Route path="/" exact component= {Home}></Route>
          <Route path="/home" exact component= {Home}></Route>
          <Route path="/my" exact component= {My}></Route>
          <Route path="/login" exact component= {Login}></Route>
          <Route path="/detail/:id" exact component= {Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
