const express = require('express')
const app = express();
const port = 3000

//routes

app.get('/',(req,res)=>{
    res.send('Hello Node API')
})

app.listen(port,()=>{
    console.log('Server Running on ' + port)
})