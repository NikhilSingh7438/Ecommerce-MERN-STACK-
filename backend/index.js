import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
 
const app = express();
mongoose.connect(
    "mongodb+srv://nikhilsing7438:NikhilSingh@cluster0.fmr33xs.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use("/ecommerce",ProductRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));
