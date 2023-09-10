const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;
  let date;

  if (!dateParam) {
      date = new Date(); 
  } else if (!isNaN(dateParam)) {
      date = new Date(parseInt(dateParam)); 
  } else {
      date = new Date(dateParam);
  }

  if (isNaN(date)) {
      res.json({ error: "Invalid Date" });
  } else {
      res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});



const listener = app.listen("3000", () => {
  console.log("Your app is listening on port " + listener.address().port);
});
