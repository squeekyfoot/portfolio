'use strict';
var app = app || {};


(function(module){

  Project.projects = [];

  function Project(data) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.projectUrl = data.projectUrl;
  }

  Project.prototype.toHtml = function() {
    let template = $('#entry-template').html();
    let compiled = Handlebars.compile(template);
    return compiled(this);
  };

  $.getJSON('../data/projectData.json').then(data => {
    let retrievedData = data;
    Project.projects = retrievedData.map(project => {return new Project(project)});
    Project.projects.map(project => {$('#projectTiles').append(project.toHtml())});
  }, function(error) {
    console.log(error);
  });

  module.Project = Project;
})(app);
