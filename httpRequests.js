var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

  function getAndPrintHTMLChunks () {


    // Callback function that receives output from request
    var callback = function(response) {
      // Response handler function that modifies output
      response.on('data', function(chunk) {
        console.log(chunk.toString() + '\n');
      })
    }

    https.request(requestOptions, callback).end();

  }

getAndPrintHTMLChunks();