'use strict';

var app = app || {};

page('/', app.projectController.initProjectView);
page('/projects', app.projectController.initProjectView);
page('/about', app.aboutController.initAboutView);

page();
