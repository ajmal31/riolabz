const mongoose=require('mongoose')
const schema=mongoose.Schema

const superAdminSchema=new schema({

    email:{type:String, unique:true },
    password:{type:String,unique:true}

})

module.exports=mongoose.model('superAdmin',superAdminSchema)