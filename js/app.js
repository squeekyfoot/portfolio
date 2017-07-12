'use strict';

var projects = [];

function Project(data) {
  this.name = data.name;
  this.description = data.description;
  this.image = data.image;
  this.projectUrl = data.projectUrl;
};

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.css('background-image', this.image);
  $newProject.find('h1').text(this.name);
  $newProject.find('p').text(this.description);
  return $newProject;
};

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projectList').append(project.toHtml());
});
