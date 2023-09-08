const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.css");
});

/* app.get('/main.css', (req, res) => {
  res.sendFile(__dirname + '/main.css')
}) */

app.get("/api/converter", (req, res, next) => {
  if (!req.query.date) {
    return res.json({
      unix: new Date(),
      utc: new Date(),
    });
  }

  if (req.query.date.length < 9) {
    res.json({
      unix: new Date(req.query.date),
      utc: new Date(req.query.date),
    });
  } else {
    const dateTimeMiliseconds = parseInt(req.query.date) * 1000;
    res.json({
      unix: new Date(req.query.date),
      utc: new Date(dateTimeMiliseconds),
    });
  }

  next();
});

app.listen("3000");
