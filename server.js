'use strict';

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

let conString = process.env.CONNECTION_STRING;
if(!conString)
  conString = `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/kilovolt`


app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

app.listen(PORT, function() {
  console.log(`Server has started. Listening to port ${PORT}`);
})

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
