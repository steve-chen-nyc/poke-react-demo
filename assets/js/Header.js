var React = require('react');
var ReactDOM = require('react-dom')

var Header = React.createClass({
  render: function() {
    return (
          <h3> This is another component nested inside a bigger component </h3>
      )
  }
});


module.exports = Header;
