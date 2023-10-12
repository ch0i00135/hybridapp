const express = require('express');
const app = express();
const port = 3000; 


app.get('/hi', hi);
app.listen(port, onListenStart);

function hi(req, res)
{
    res.setHeader('Access-Control-Allow-origin', '*');
    res.send("서버의 데이터");
}

function onListenStart()
{
    console.log('서버시작( http://localhost:'+port+'/hi )');
}



