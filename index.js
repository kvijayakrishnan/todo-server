
const express = require('express')
const db = require('./db/connect.js')
const userRoute = require('./router/userRoute.js')
const dotenv = require('dotenv');
const todo = require('./router/todoRoute.js');


dotenv.config();

const app= express()
app.use(express.json())
db();



app.use('/api', userRoute)


// using todo routes
app.use('/api/todoapp', todo)

const PORT = process.env.PORT || 3000


app.listen(PORT, () =>
  console.log(`server is running on the ${PORT}`)
);




