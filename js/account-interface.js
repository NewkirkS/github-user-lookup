var Account = require("./../js/account.js").accountModule;

$(document).ready(function() {

  $('#account-form').submit(function(event) {
    event.preventDefault();
    var username = $("#u-name").val();
    $("#u-name").val("");
    var newAccount = new Account(username);
    console.log(newAccount.username);
    newAccount.getRepos(username);
  });

});
