var https = require('https');

function getAndPrintHTMLChunks (host, path) {
  // Setting host and filepath info
  var requestOptions = {
    host: host,
    path: path
  };


  // Callback function that receives output from request
  var callback = function(response) {

    // Defining an array to store the chunks
    var output = "";

    // Response handler function that pushes the chunks into buffer
    response.on('data', function(chunk) {
      var buffer = chunk.toString();
      output += buffer;
    });

    response.on('end', function() {
      console.log(output);
      console.log('Finished responding');
    });
  }


  // Makes the request, passing in the destination info and callback handler as arguments
  // end() method is very important!! I'm guessing it ends the request, like hanging up a telephone
  https.get(requestOptions, callback);


}

getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step3.html');