const app = require('./app')

const dotenv = require('dotenv')

// db
const connectDatabase = require('./config/database')


// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server Due to Uncaught Exception.`);
    process.exit(1)
})

// console.log(Youtube);

// config 
dotenv.config({path:"backend/config/config.env"})

// connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on Port  http://localhost:${process.env.PORT}`);
}) 

// Wrong MongoDB ID Error 
// Error type = CastError
 

// unhandled promise rejection 

process.on('unhandledRejection',err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server Due to Unhandled Promise Rejection.`);
    server.close(()=>{
        process.exit(1);
    })
})