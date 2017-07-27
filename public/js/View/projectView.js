'use strict';

var app = app || {};

(function(module) {

  const projectView = {};

  projectView.initIndexPage = () => {
    app.Project.projects.map(project => {$('#projectList').append(project.toHtml())});

    let repoTemplate = Handlebars.compile($('#repo-template').html());

    app.initProjectList(mappedData => {
      mappedData.forEach(function (repo) {
        $('#projectIndex').append(repoTemplate(repo))
      })
    })
  }

  module.projectView = projectView;
})(app);
