const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit:"50mb", extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Mongodb connection
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", ()=>{
  console.error.bind(console, 'MongoDB connection error:')
})

db.on("open", ()=>{
  console.log("database running successfully");
})

const indexRouter = require("./routes/index")

app.use(express.static(path.join(__dirname,"frontend/build")));
app.use("/contact", indexRouter);

app.use("*", (req, res) => {
  res.redirect("/")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log("App running on port: "+PORT);
})
