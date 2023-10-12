const express = require('express');
const app = express();
const path = require('path');
const port = 3000; 

app.use(express.static(path.join(__dirname, '../client')))

app.get('/hi', hi);
app.listen(port, onListenStart);

function hi(req, res)
{
    res.sendFile(path.join(__dirname, '../client/week6.html'));
}

function onListenStart()
{
    console.log('서버시작( http://localhost:'+port+'/hello )');
}