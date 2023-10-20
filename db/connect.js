
const mongoose = require('mongoose')
const colors = require('colors')


const connDB = async() =>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}`)

        console.log(`MongoDB is connected ${conn.connection.host}`.bgBlack.green)

    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgBlack.red)
    }
}


module.exports = connDB;



