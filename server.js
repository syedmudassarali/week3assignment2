const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db');

// Load ENV vars
dotenv.config({path:'./config/config.env'});

//Connect Database
connectDB();

const app=express();

//Body parser

app.use(express.json());



//Route files
const player=require('./routes/player');

//Mount Routers
app.use('/api/v1/player',player);

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT=process.env.PORT || 5010;
app.listen(PORT, console.log('Server is running'));