// requires
var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

// Don't forget to install multer using: 'npm install multer'

let multer = require('multer')

// POST Route for form using multer's single file upload from HTML input name

app.post('/api/fileanalyse', multer().single("upfile"), (req, res) => {
  // response
  // console.log(req.file)
  let resObject = {}
  // Accessing object of the file and getting the name, type, and size once the file has been uploaded by the user
  resObject['name'] = req.file.originalname
  resObject["type"] = req.file.mimetype
  resObject["size"] = req.file.size

  res.json(resObject)
})