 require("dotenv").config();
 const express = require("express");
 const connectToDb = require('./database/db');
//  const bookRoutes = require('./routes/book-routes');
 const bookRoutes = require('./routes/book-routes');
const app = express();
const PORT = process.env.PORT || 3002;
//connect to our database
    connectToDb();
    //middleware
    app.use(express.json());
    //routes here
    app.use('/api/books',bookRoutes);
    app.listen(PORT,()=>{
        console.log(`server is now listening to port ${PORT}`);
        
    })


