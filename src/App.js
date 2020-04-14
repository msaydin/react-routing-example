import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import UserList from './components/UserList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Header />
      <Component {...props} />
    </div>
  )} />
)

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <NavRoute exact component={UserList} path='/' />
            <NavRoute component={Contact} path='/contact' />
            <NavRoute component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;