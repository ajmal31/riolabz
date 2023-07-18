const mongoose=require('mongoose')
const schema=mongoose.Schema

const AdminSchema=new schema({

    email:{type:String, unique:true },
    password:{type:String,unique:true}

})

module.exports=mongoose.model('Admin',AdminSchema)