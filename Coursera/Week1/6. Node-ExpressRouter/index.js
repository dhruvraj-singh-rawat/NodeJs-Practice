const express = require('express');
const http= require('http');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = '3000';

const app = express();

// Express Router
const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);



const server= http.createServer(app);
server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${port}');
});
