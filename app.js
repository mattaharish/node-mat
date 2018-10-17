const express = require('express');
const app = express();

const router = require('./components/index');

app.use('/', router);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000 :)');
})