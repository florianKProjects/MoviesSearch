//
// to run "npm run dev"
//
var express = require("express"),
  http = require("http"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser"),
  fs = require("fs");
const { red } = require("@mui/material/colors");
const axios = require("axios");

var port = parseInt(process.argv[2] || "3001", 10);
if (port < 1000) {
  console.log("Operating on Port " + port + " requires priveledge");
}

app.set("port", port);

//////////////////////////////////////////////////////////////
// needed for when a form posts a JSON encoded body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
var server = http.createServer(app);
server.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
var jsend = function (res, json) {
  var data = JSON.stringify(json);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
};

var jresp = function (res, err, results) {
  if (err) jsend(res, err);
  else jsend(res, results);
};
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

////////////////////////////  API URLS //////////////////////////////
const API_KEY = "e8fe9535";
const BASE_API = `http://www.omdbapi.com/?apikey=${API_KEY}`;

///////////////////////////   API  ///////////////////////////////////
//GET MOVIES
app.get("/api/movies/:name", function (req, res) {
  axios
    .get(`${BASE_API}&s=${req.params.name}`)
    .then((data) => {
      return jresp(res, null, JSON.stringify(data.data, getCircularReplacer()));
    })
    .catch((error) => {
      console.error(error);
    });
});
//GET MOVIE DETAILS
app.get("/api/movie/:moveId", function (req, res) {
  axios
    .get(`${BASE_API}&i=${req.params.moveId}`)
    .then((data) => {
      return jresp(res, null, JSON.stringify(data.data, getCircularReplacer()));
    })
    .catch((error) => {
      console.error(error);
    });
});
//GET SEARCH suggest
app.get("/api/tools/:keyWord", function (req, res) {
  axios
    .get(`${BASE_API}&s=${req.params.keyWord}`)
    .then((data) => {
      let resJson = JSON.stringify(data.data, getCircularReplacer());
      resJson = JSON.parse(resJson);
      let suggestTitle = [];
      if (resJson["Response"] == "False") return jresp(res, null, []);
      resJson["Search"].forEach((movie) => {
        suggestTitle.push(movie["Title"]);
      });
      return jresp(res, null, suggestTitle);
    })
    .catch((error) => {
      console.error(error);
    });
});
