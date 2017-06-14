var React = require('react');
var TelaLogin = require('./TelaLogin');

var TelaCadastro = React.createClass({
  getInitialState: function() {
    return {
      user: null,
      pswd: null,
    };
  },
  updateUser: function(user) {
    this.setState({user: user});
  },
  updatePswd: function(pswd) {
    this.setState({pswd: pswd});
  },
      render: function(){
        return (
            <TelaLogin
              updateUser={this.updateUser}
              updatePswd={this.updatePswd}/>
        );
      }
    });

  module.exports = TelaCadastro;
