import mongoose from 'mongoose'



const connectdb =async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/",{dbName:"signform"})

        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectdb;