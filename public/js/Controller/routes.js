'use strict';

var app = app || {};

page('/', app.projectView.initIndexPage);
page('/projects', app.projectController.initProjectView);
page('/about', app.aboutController.initAboutView);
page('/projects/:name', app.projectController.loadByName, app.projectController.initProjectView);

page();
