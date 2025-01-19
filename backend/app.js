const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path =require('path');
const cors =require('cors');
const connectdatabse = require('./config/connectdatabase')

dotenv.config({path: path.join(__dirname, 'config','config.env')})

const products = require('./routes/product');
const orders = require('./routes/order'); 

connectdatabse();

 
app.use(express.json())
app.use(cors());
app.use('/api/v1', products);
app.use('/api/v1',orders);


app.listen(process.env.PORT, () => {
    console.log (`server listening to part ${process.env.PORT}  in ${process.env.NODE_ENV}`)
})