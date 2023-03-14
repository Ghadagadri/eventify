console.clear();
const express = require('express');
const cors = require ('cors')

const connectDB = require('./config/dbConnect');

//initializing express
const app = express();

require('dotenv').config();

connectDB();
app.use(cors())
app.use(express.json());
app.use('/user',require ('./routes/user'));
app.use('/event',require ('./routes/event'));



PORT=process.env.PORT;
app.listen(PORT,(err)=>{ 
    (err)?console.log(err):
    console.log("Server is running on port ")
})