'use strict';

var app = app || {};

(function(module){
  module.initProjectList = function (callback) {
    $.get({
      url: 'https://api.github.com/users/squeekyfoot/repos'
    }).then(data => {
      let mappedData = data.map({
        name: this.name,
        html_url: this.html_url,
        updated_at: this.updated_at
      })
      callback(mappedData);
    })
  }
})(app);
