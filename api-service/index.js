const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("endpoint being called");
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
