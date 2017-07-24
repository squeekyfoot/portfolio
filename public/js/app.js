'use strict';

let projects = [];

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
  projects = retrievedData.map(project => {return new Project(project)});
  projects.map(project => {$('#projectList').append(project.toHtml())});
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
