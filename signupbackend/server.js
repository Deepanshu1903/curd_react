const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()


mongoose.connect("mongodb://localhost:27017/deepanshu1",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log(err)
});
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))
