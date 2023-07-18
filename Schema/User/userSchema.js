const mongoose=require('mongoose')
const schema=mongoose.Schema

const userSchema= new schema({

    userName:{type:String},
    email:{type:String, unique:true},
    password:{type:String,},

})

module.exports=mongoose.model('users',userSchema)