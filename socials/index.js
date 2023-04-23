const express = require("express");
const app = express();
const port = 8000;

//setting up[ the view engine - EJS
app.set("view engine", "ejs");
app.set("views", "./views");

//Setting up router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
    return;
  }
  console.log(`Server is running in the port : ${port}`);
});
