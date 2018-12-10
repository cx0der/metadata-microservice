'use strict';

const express = require('express');
const cors = require('cors');

// require and use "multer"...
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type : req.file.mimetype,
    size : req.file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
