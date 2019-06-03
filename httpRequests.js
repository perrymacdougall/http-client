var https = require('https');

function getAndPrintHTMLChunks () {
  // Setting host and filepath info
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // Callback function that receives output from request
  var callback = function(response) {
    // Response handler function that modifies output
    response.on('data', function(chunk) {
      // Prints the output as a string
      console.log(chunk.toString() + '\n');
    })
  }

  // Makes the request, passing in the destination info and callback handler as arguments
  // end() method is very important!! I'm guessing it ends the request, like hanging up a telephone
  https.get(requestOptions, callback).end();

}

getAndPrintHTMLChunks();