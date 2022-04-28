const express = require('express');
const router = express.Router();

router.get('/1', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index.html');
});

router.get('/2', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index2.html');
});

router.get('/3', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index3.html');
});

router.get('/4', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index4.html');
});

router.get('/5', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index5.html');
});

router.get('/6', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index6.html');
});

router.get('/7', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index7.html');
});

router.get('/8', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index8.html');
});

router.get('/9', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index9.html');
});

router.get('/10', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index10.html');
});

router.get('/11', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index11.html');
});

router.get('/12', (req, res)=>{
  res.sendFile(__dirname + '/myapp/public/index12.html');
});

module.exports = router;