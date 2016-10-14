var apiKey = require("./../.env").apiKey;

function Account() {
  this.username = "";
}

Account.prototype.getRepos = function(username){
  $.get('https://api.github.com/users' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJson.message);
  });
};

exports.accountModule = Account;