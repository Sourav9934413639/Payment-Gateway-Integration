import app from './app.js';
import { db_connect } from './data/database.js';
import Razorpay from 'razorpay';
db_connect();
export const instance = new Razorpay({
   key_id:process.env.RAZORPAY_KEY_ID,
   key_secret:process.env.RAZORPAY_KEY_SECRET
 });
app.listen(process.env.PORT,()=>{
   console.log(`App is listening to port number- ${process.env.PORT}`);
})
