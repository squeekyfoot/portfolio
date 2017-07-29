'use strict';

var app = app || {};

(function(module) {
  
  const projectController = {};

  projectController.initProjectView = () => {
    $('.tab-content').hide();
    $('#projectList').show();
  }

  projectController.findWhere = function (field, value, callback) {
    $.get('/projects/find', {field: field, val: value})
      .then(callback)
  }

  projectController.loadByName = (ctx, next) => {
    let projectData = projectByName => {
      ctx.projects = projectByName
      next()
    }

    projectController.findWhere('name', ctx.params.projectName.replace('+', ' '), projectData)
  }

  module.projectController = projectController;
})(app);
