import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import paymentRoute from './routes/paymentRoutes.js'
const app=express();
config({path:"./configuration/config.env"});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',paymentRoute);
app.get("/getKey",(req,res)=>{
    res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_KEY_ID
    })
})
export default app;