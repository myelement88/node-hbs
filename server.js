var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var routes = require("./routes/index");

var app = express();

//view engine setup
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts"
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", routes);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
