var http = require('http');
var fs = require('fs');

//Listening on port 1234
const PORT=1234; 

//We need a function which handles requests and send response
function handleRequest(request, response){

	var filePath = "./file.zip";
	
	fs.readFile(filePath, function(err, stream) {
		if (err) {
			console.log(err);
			return response.end('This is an error!');
		}

		return response.end(stream);
	});
}

var server = http.createServer(handleRequest);


server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});