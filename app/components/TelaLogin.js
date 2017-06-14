var React = require('react');
var UserLogin = require('../services/UserLogin');

var TelaLogin = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    UserLogin.getByUsername(this.refs.username.value)
          .then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

    UserLogin.getByPassword(this.refs.password.value)
          .then(function(response) {
      this.props.updatePswd(response.data);
    }.bind(this));
  },
  render: function() {
    return (
      <div>

        <header>
          <div className="center">
            <img src="img/ole-logo.png" className="logo-ole" />
          </div>
        </header>

        <section className="box-login" id="login">
          <div className="center">
            <form method="" action="" className="form-login" id="form-login" onSubmit={this.handleSubmit} >
              <h6>LOGIN</h6>
              <div className="row row-input">
                <input type="text" ref='username' className="" id="" name="usuario" placeholder="USUÁRIO"/>
              </div>
              <div className="row row-input">
                <input type="password" ref='password' className="" id="" name="senha" placeholder="SENHA"/>
              </div>
              <div className="row">
                <a href="" className="esqueci-senha">Esqueci minha senha</a>
              </div>
              <div className="row row-input">
                <button id="">ENTRAR</button>
              </div>
            </form>
          </div>
        </section>

        <div className="ct-footer">
          <footer>
            <div className="center">
              <img src="img/santander-footer-1x.png" />
            </div>
          </footer>
        </div>

      </div>
          );
        }
       });

module.exports = TelaLogin;
