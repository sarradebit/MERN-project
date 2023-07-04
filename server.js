// 1 require express 
const express = require('express');
 
// 2 create instance 

const app = express();


// 4 require detenv and config

require ("dotenv").config();

app.use(express.json());

// 6 connectDB 

const connectDB = require ("./config/connectDB") ;
connectDB()

//   7 create routes 

app.use("/api/contact" , require('./routes/contact') )

app.use("/api/user" , require("./routes/user"))

 


// 3 port 

const PORT = process.env.PORT

// 5 create server

app.listen(PORT , error =>{
    error ? console.log(error) :
    console.log(`Server is running on ${PORT}`)
})


