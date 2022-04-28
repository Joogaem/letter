const express = require('express');
const app = express();
const test = require('./test');
const bodyParser = require('body-parser');

app.use('/', test);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port=8080; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});