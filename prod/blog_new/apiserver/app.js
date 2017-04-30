const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

const routes = require("./routes/routes");
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/blog");

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:8080'}));

routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});    
});

module.exports = app;