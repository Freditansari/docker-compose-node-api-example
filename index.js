var express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo_1234:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




app.get('/', (req, res)=>{
    res.json({"message":"success"})
})


app.listen(5000, () => {
 console.log("Server running on port 5000");
});