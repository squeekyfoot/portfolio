'use strict';

var app = app || {};

(function(module) {

  const aboutController = {};

  aboutController.initAboutView = () => {
    $('.tab-content').hide();
    $('#aboutSection').show();
  }

  module.aboutController = aboutController;
})(app);
