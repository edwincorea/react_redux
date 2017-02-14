const express = require("express");
var argv = require('minimist')(process.argv.slice(2));
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/routes");
const app = express();
const subpath = express();

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});    
});

//Swagger
app.use("/v1", subpath);
app.use(express.static(__dirname + '/swagger-ui'));

const swagger = require('swagger-node-express').createNew(subpath);
swagger.setApiInfo({
    title: "Blog API",
    description: "Blog API",
    termsOfServiceUrl: "",
    contact: "user@domain.com",
    license: "",
    licenseUrl: ""
});

// Set api-doc path
swagger.configureSwaggerPaths('', 'api-docs', '');

// Configure the API domain
let domain = 'localhost';
if(argv.domain !== undefined)
    domain = argv.domain;
else
    console.log('No --domain=xxx specified, taking default hostname "localhost".')

// Configure the API port
let port = 3050;
if(argv.port !== undefined)
    port = argv.port;
else
    console.log('No --port=xxx specified, taking default port ' + port + '.')

// Set and display the application URL
let applicationUrl = 'http://' + domain + ':' + port;
console.log('Blog API running on ' + applicationUrl);

swagger.configure(applicationUrl, '1.0.0');

module.exports = app;
module.exports.port = port;