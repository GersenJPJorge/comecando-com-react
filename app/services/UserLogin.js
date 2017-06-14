var axios = require('axios');

var UserLogin = {
  getByUsername: function (username) {
    return
    axios.get('https://api.github.com/users/' + username)
      .then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
    };

    getByPassword: function (password) {
      return
      axios.get('https://api.github.com/users/' + password)
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
      };
module.exports = UserLogin;
