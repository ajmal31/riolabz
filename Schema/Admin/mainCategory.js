const mongoose=require('mongoose')
const Schema=mongoose.Schema

const mainCategorySchema=new Schema({

    name:{type:String,required:true,unique:true},
    description:String
}) 

module.exports=mongoose.model('mainCategories',mainCategorySchema)