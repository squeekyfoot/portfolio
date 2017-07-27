'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log(`Server has started. Listening to port ${PORT}`);
})
