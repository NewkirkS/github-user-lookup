var Account = require("./../js/account.js").accountModule;

var displayResults = function(repos) {
  repos.forEach(function(repo){
    $('#results').append("<li>" + repo.name + "test</li>");
  });
};

$(document).ready(function() {

  $('#account-form').submit(function(event) {
    event.preventDefault();
    var username = $("#u-name").val();
    $("#u-name").val("");
    var newAccount = new Account(username);
    newAccount.getRepos(newAccount.username, displayResults);
  });

});
