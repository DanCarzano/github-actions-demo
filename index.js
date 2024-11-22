const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World');
});

module.exports = app.listen(8080, () => {
});

// Test 5
echo('Hello World');

// Test for reusable workflow
echo('Please work!!!!');
