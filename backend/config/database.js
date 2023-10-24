const mongoose = require("mongoose");
// mongoose.connect("mongo://localhost:27017/Ecommerce", {

mongoose.set('strictQuery', true);

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI, {
      }).then((data)=>{
        //   console.log(`MongoDB connected with server: ${data.connection.host}`);
          console.log("MONGODB Connection Successful");
      })
      // .catch((err)=>{
      //     console.log("Error in Mongodb Connection ::",err);
      //     throw err.message
      // })
}

module.exports = connectDatabase