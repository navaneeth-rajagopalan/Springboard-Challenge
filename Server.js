"use strict";
var  express = require("express"),
    server = express(),
    path = require("path"),
    cors = require("cors"),
    PORT = process.env.PORT || 1234;

server.use("/Assets", express.static(path.join(__dirname, "Public")));
server.use(cors());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.get("/*", function(req, res){
    res.sendFile(__dirname+"/public/LearningHub/Views/Index.html");
});

server.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
})
