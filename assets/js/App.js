var React = require('react');
var NavLink = require('./NavLink')

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Pokemon in React</h1>
        <ul role="nav">
          <li><NavLink to="/Pokemon">Pokemon</NavLink></li>
          <li><NavLink to="/Nba">Nba</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App;
