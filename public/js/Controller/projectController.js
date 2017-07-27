'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.initProjectView = () => {
    $('.tab-content').hide();
    $('#projectList').show();
  }

  module.projectController = projectController;
})(app);
