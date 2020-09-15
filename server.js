const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.send('hello from node ')
})

app.listen(process.env.port || 5000, ()=>{
    console.log('server listening on port 5000')
});