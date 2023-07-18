const mongoose=require('mongoose')
const Schema=mongoose.Schema

const subCategorySchema=new Schema({

    name:{type:String,required:true,unique:true},
    parentCategory:String
}) 

module.exports=mongoose.model('subCategories',subCategorySchema)