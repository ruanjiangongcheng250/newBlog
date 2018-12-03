import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import My from './pages/my';
import MyFavouriteArticles from './pages/myFavouriteArticles';
import MyArticles from './pages/myArticles';
import Publish from './pages/publish';
import Private from './pages/private';
import Setting from './pages/setting';
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
          <Route path="/myArticles" exact component= {MyArticles}></Route>
          <Route path="/publish" exact component= {Publish}></Route>
          <Route path="/myFavouriteArticles" exact component= {MyFavouriteArticles}></Route>
          <Route path="/private" exact component= {Private}></Route>
          <Route path="/setting" exact component= {Setting}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
