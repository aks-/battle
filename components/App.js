import React from 'react'
import Popular from './popular'
import Nav from './Nav'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/popular' component={Popular} />
          <Route path='/' component={Nav} />
        </div>
      </Router>
    )
  }
}
