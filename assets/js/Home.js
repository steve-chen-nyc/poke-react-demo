var React = require('react');
var ReactDOM = require('react-dom')
var Header = require('./Header')
var NavLink = require('./NavLink')

var Home = React.createClass({
  render: function() {
    return(
      <h1> This is home </h1>
      <Header/>
    )
  }
});

module.export = Home
