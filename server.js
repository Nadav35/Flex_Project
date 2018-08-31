const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");

require('./config/passport')(passport);

const app = express();

// Connect the database
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
})
  .then(() => console.log("Connected to mongo"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));