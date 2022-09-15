# basic-server-express

## In this repo, I'm going to show you how to create a basic Express.js server for your web applications. We will go over starting the server, setting up simple routes, and outputting various types of data.


1. What is Express.js?
   - Express.js is a framework for Node.js to provide developers with robust tools for building a back-end for a website or web application. It includes routing, simple setup for templating, and many more benefits. Because of it's maturity and ease of use, Express.js has been the most popular Node.js framework for years. 


2. Requirement
   - Add Express as a dependency in your project, to add it use the following command in the Node.js command prompt:
   * npm install express


3. Example of express Server
   - To create your first http server with express, create a js file with the name server.js and add the following code on it:

>// Require express and create an instance of it
#### var express = require('express');
#### var app = express();

>// on the request to root (localhost:3000/)
#### app.get('/', function (req, res) {
####     res.send('<b>My</b> first express http server');
#### });

>// On localhost:3000/welcome
#### app.get('/welcome', function (req, res) {
####     res.send('<b>Hello</b> welcome to my http server made with express');
#### });

>// start the server in the port 3000 !
#### app.listen(3000, function () {
####     console.log('Example app listening on port 3000.');
#### });
4. Now save the content and execute the server using the following command in your Node.js command prompt:
   * node server.js
