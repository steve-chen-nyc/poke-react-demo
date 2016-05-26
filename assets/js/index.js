var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var App = require('./App')
var Pokemon = require('./Pokemon')
var Nba = require('./Nba')
var Home = require('./Home')
var Header = require('./Header')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/pokemon" component={Pokemon}/>
      <Route path="/nba" component={Nba}/>
    </Route>
  </Router>
), document.getElementById('app'))
