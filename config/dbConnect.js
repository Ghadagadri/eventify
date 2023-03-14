const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const connectDB= async () => {
    try {
        await mongoose.connect(process.env.DB_URI) 
        console.log('data base is connected')
    } catch (error) {
        console.log(error)
    }
    
    
    }
    module.exports = connectDB;