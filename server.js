require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
//Load routes
const users = require("./routes/users");
const courseRouter = require("./routes/courseRouter");
const catalogRouter = require("./routes/catalogRouter");
const wishlistRouter = require("./routes/wishlistRouter");

// Connect to MongoDB
// const url = 'mongodb://localhost:27017/tomoro'; 
const url = process.env.mongoURI
mongoose
.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex:true
})
.then(() => console.log('MongoDB successfully connected'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});
app.use(cors())
// upload file middlware -folder
// app.use('/images',express.static(path.join(__dirname,'images')));
// app.use('/videos',express.static(path.join(__dirname,'videos')));
// cors middleware
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*',);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/courses', courseRouter);
app.use('/catalog', catalogRouter);
app.use('/wishlist', wishlistRouter);
app.use("/users", users);

// Production set up
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  }
// port
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Server running on port : ${port}`));