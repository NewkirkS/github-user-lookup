var apiKey = require("./../.env").apiKey;

function Account(username) {
  this.username = username;
}



Account.prototype.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.accountModule = Account;
