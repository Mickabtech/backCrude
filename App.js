const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Products.js');
const ProductRoutes = require('./controllers/product.controller.js')
const app = express();


app.use(express.json())
app.use(cors());



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('api/products', ProductRoutes)



//Server

app.listen(3000, ()=>{
  console.log(`Server is running on port 3000`)
})

mongoose.connect('').then(()=>{
  console.log("Connection Successful")
}).catch((error) => {
  console.error("Error connecting to MongoDB:");
});

const requestBlogger = (req, res, next)=>{
    console.log(`Incoming ${req.method} to ${req.originalURL}`)
    next()


};


app.use(requestBlogger);
