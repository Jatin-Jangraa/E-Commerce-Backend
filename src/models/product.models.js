import mongoose from 'mongoose'



const productschima =new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    photo:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
       
    }

},{timestamps:true}) 


export const Product =mongoose.model('Product',productschima)