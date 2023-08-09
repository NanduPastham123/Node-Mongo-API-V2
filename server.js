const config = require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express() ;
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
// If you want to connect front end to back end you need to allow specific 
// IP address or domain name to access your back end application 
const cors = require('cors')

const Mongo_URL = process.env.MONGO_URL;
const port = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;
//how to connect multiple domains or IP 
var corsOptions = {
    origin: FRONTEND,// to place multiple domain name use ['http://abc.com','http://xyz.com']
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    //throw new Error('fake error');
    res.send("Welcome Error Middleware checking")
})
//routes
app.use('/api/products',productRoute)

app.use(errorMiddleware)
mongoose.set('strictQuery',false)
mongoose.connect(Mongo_URL)
.then(()=>{
    console.log("connected to mongodb")
    app.listen(port,()=>{
        console.log('Server Running on: ' + port)
    })
}).catch((error)=>{
    console.log(error)
})