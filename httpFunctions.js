var https = require('https');

module.exports = function getHTML (options, echo) {
  // Importing the https Node module

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
      console.log('Finished responding');
      echo(output);
    });
  }

  // Makes the request, passing in the destination info and callback handler as arguments
  https.get(options, callback);
};