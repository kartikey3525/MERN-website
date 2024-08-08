const express = require('express');
const app = express();
const authRoute = require('./router/auth-route');
const contactRoute = require('./router/contact-route');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require("cors");
const serviceRoute = require('./router/service-router');

require("dotenv").config();     

// const bcrypt = require("bcryptjs");
const PORT = 5000;
connectDb();
// 127.0.0.1 localhost
const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

// to get the json data in express app.
app.use(express.json()); 
app.use(errorMiddleware)

app.use('/api/auth', authRoute)
app.use('/api/form', contactRoute)
app.use('/api/data', serviceRoute)

 

connectDb().then(() => {
    
app.listen(PORT,()=> {
    console.log(`Server is running at port : ${PORT}`)
})
    
})