const mongoose=require('mongoose')
const schema=mongoose.Schema

const superAdminSchema=new schema({

    email:{type:String, unique:true },
    password:{type:String}

})

module.exports=mongoose.model('masterAdmin',superAdminSchema)