var getHTML = require('../httpFunctions');

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.uppercase.html'
};

getHTML(requestOptions, printUpperCase);