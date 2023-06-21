const express = require('express')
const app = express()
const port = 3010

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const items = require('../items.json')
app.get('/src/items', (req, res) => {
   res.json({data: items})
})

app.listen(port, ()=>{
    console.log('Server start'+port)
})