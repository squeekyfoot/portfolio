'use strict';

var app = app || {};

(function(module){

  module.initProjectList = function (callback) {
    $.ajax({
      url: 'https://api.github.com/users/squeekyfoot/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      let mappedData = data.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        updated_at: repo.updated_at
      }))
      callback(mappedData);
    })
  }
})(app);
