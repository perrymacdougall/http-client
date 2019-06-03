var https = require('https');

function getHTML (options, echo) {
  // Setting host and filepath info


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
  // end() method is very important!! I'm guessing it ends the request, like hanging up a telephone
  https.get(requestOptions, callback);


}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);