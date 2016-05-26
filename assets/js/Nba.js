var React = require('react');
var ReactDOM = require('react-dom')
var NavLink = require('./NavLink')
var green = require('./style').colorGreen;
var center = require('./style').center;
var images = require('./style').images;


var Nba = React.createClass({
  loadNbaFromServer: function() {
    $.ajax({
      url: '/api/nba',
      datatype: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    })
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadNbaFromServer();
  },

  render: function() {
    if (this.state.data) {
      var nbaNodes = this.state.data.map(function(player){
           return ([ <h2 style={green}> {player.name} </h2>,
                     <img style={images} src={player.picture_url}/>,
           ]);
      })
    }
    return (
      <div style={center}>
        <h1> NBA List </h1>
          {nbaNodes}
        <div>
          <NavLink to="/">back</NavLink>
        </div>
     </div>
    )
  }
})

module.exports = Nba;
