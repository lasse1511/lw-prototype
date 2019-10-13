const http = require('http');
var express = require("express");
var bodyparser = require("body-parser");

// var session = require("express-session");

const app = express();

var port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());

app.use(express.static("public/css"));
app.use(express.static("public/img"));
app.use(express.static("public/scripts"));

require("./routes/start")(app);

// http.createServer(function(req,res){
//   res.writeHead(200,{
//     "Content-Type" : "text/html"
//   });
//   res.end("Hello World");
// }).listen(port);
 
app.listen(port);

console.log('Server is running at port: ' + port );