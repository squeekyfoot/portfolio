'use strict';

var app = app || {};

(function(module){
  module.initProjectList = function () {
    $.ajax({
      url: 'https://api.github.com/users/squeekyfoot/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      //DO STUFF HERE
    })
  }
})(app);
