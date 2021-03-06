var React = require('react');
var ReactDOM = require('react-dom')
var green = require('./style').colorGreen;
var center = require('./style').center;
var images = require('./style').images;
var NavLink = require('./NavLink')

var Pokemon = React.createClass({
  loadPokemonFromServer: function() {
    $.ajax({
      url: '/api/pokemon',
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
    this.loadPokemonFromServer();
  },

  render: function() {
    if (this.state.data) {
      var pokeNodes = this.state.data.map(function(poke){
           return ([ <h2 style={green}> {poke.name} </h2>,
                     <img style={images} src={poke.picture_url}/>,
                     <p> {poke.description}</p>
           ]);
      })
    }
    return (
      <div style={center}>
        <h1> Pokemon List </h1>
          {pokeNodes}
        <div>
          <NavLink to="/">back</NavLink>
        </div>
       </div>
    )
  }
})

module.exports = Pokemon;
