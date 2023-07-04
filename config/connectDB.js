// require mongoose 

const mongoose = require ('mongoose');

// connectDB

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("database connected")
    } catch (error) {
        console.log("database is not connected ")
    }
}
module.exports = connectDB
