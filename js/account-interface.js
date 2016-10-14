var Account = require("./../js/account.js").accountModule;

var displayResults = function(repos) {
  repos.forEach(function(repo){
    $('#results').append("<li><span class='repo-li'>" + repo.name + "</span></li>");
  });
};

$(document).ready(function() {

  $('#account-form').submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    var username = $("#u-name").val();
    $("#u-name").val("");
    var newAccount = new Account(username);
    newAccount.getRepos(newAccount.username, displayResults);
  });

});
