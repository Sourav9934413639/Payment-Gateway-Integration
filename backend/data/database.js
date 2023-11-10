import mongoose from 'mongoose';
export const db_connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database Connected Successfully to port ${mongoose.connection.host}`);
}).catch((error)=>{
    console.log(`Database not connected due to ${error}`);
})
};