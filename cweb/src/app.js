import express from 'express';
import { connect } from 'mongoose';
import dotenv from "dotenv"
import router from './routes/index.js';


const app = express();
dotenv.config()

const {PORT, URI_DB} = process.env;

connect(URI_DB);
app.use(express.json())
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});