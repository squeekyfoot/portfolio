'use strict';

var projects = [];

function Project(data) {
  this.name = data.name;
  this.description = data.description;
  this.image = data.image;
  this.projectUrl = data.projectUrl;
};

Project.prototype.toHtml = function() {
  var template = $('#entry-template').html();
  var compiled = Handlebars.compile(template);
  return compiled(this);
};

$.getJSON('../data/projectData.json').then(function(data) {
  var retrievedData = data;
  retrievedData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  projects.forEach(function(project) {
    $('#projectList').append(project.toHtml());
  });
}, function(error) {
  console.log(error);
});


$(document).ready(function() {
  $('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });
  $('.tab:first').click();
});
