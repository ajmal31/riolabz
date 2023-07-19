const superAdmin=require('../../Schema/Admin/superAdminSchema')
const User=require('../../Schema/User/userSchema')
const admin=require('../../Schema/Admin/admin')
const bcrypt=require('bcrypt') 
const mainCategory = require('../../Schema/Admin/mainCategory')
const { default: mongoose } = require('mongoose')
const subCategory = require('../../Schema/Admin/subCategory')
const collection='masterAdmin'
module.exports={

    superAdminLogin:(data)=>{

    
         return new Promise((resolve,reject)=>{


            superAdmin.findOne({email:data.email}).then((response)=>{
                if(!response)
                {
                   resolve({status:false})
                }else
                {
                    if(response.password===data.password)
                {
                    console.log('corerct password')
                    resolve({status:true})
                }else
                {
                    resolve({status:false})
                    console.log('incorrent password')
                }
                }
                
            })
            
         }).catch((err)=>{
            console.log('super admin error found',err)
         })
        
    },
    postLogin:(data)=>{
        return new Promise((resolve, reject) => {
        let password;

        admin.findOne({ email: data.email }).then((response) => {

            if (response) {
                console.log('email done');

                bcrypt.compare(data.password, response.password, function (err, result) {

                    if (result) {
                        console.log('authentiaction success')
                        resolve({status:true});
                    } else if (err) {

                        console.log('authentiaction failed error found')
                    }

                });


            }else
            {
                console.log('user not found')
                resolve({status:false})
            }


        })
    })

    },
    listUsers:()=>{
        return new Promise((resolve,reject)=>{

            User.find().then((response)=>{

                if(response)
                {
                    
                    resolve(response)
                }else
                {
                    console.log("didn'tget users list");
                }
            })
        })
    },
    makeAdmin:(uid)=>{
        return new Promise((resolve,reject)=>{
            console.log(uid,'userid')
           User.findByIdAndUpdate({_id:uid},{$set:{position:'admin'}}).then((response)=>{
            console.log('user details',response.userName)
               
            const data=new admin({
                name:response.userName,
                user_id:response._id,
                email:response.email,
                password:response.password
            })
            console.log(data)

            data.save().then((response)=>{
                console.log('user is a admin')
                resolve({status:true})
                
            })
           })   

              
        })
    },
    removeAdmin:(id)=>{
        return new Promise((resolve,reject)=>{
           
           admin.deleteOne({_id:id}).then((response)=>{
            if(response)
            {
                User.updateOne({_id:id},{$set:{position:'user'}}).then((response)=>{
                    
                    console.log('admin delted successfully');
                    resolve({status:true})
                })
                

            }else
            {
                console.log('some error found when removing admin')
            }
           })
        })
    },
    adminLogin:(data)=>{
        return new Promise((Resolve,reject)=>{

            admin.findOne({email:data.email}).then((response)=>{

                if(response){
                    console.log('email done');

                bcrypt.compare(data.password, response.password, function(err, result) {

                    if(result)
                    {
                        console.log(' admin authentiaction success')
                        console.log(result);
                    }else if(err)
                    {
                       console.log(' admin authentiaction failed error found' )
                    }
                        
                    });

                    
                }


            })

            


        })
    },
    createCategory:(data)=>{
        return new Promise((resolve,reject)=>{

            
            const category=new mainCategory({
                name:data.name

            })

            category.save().then((Response)=>{
               resolve(Response)
            }).catch((err)=>{
                console.log('error found',err.message)
            })
        })
    },
    getCategories:()=>{
        return new Promise((resolve,reject)=>{

            mainCategory.find().then((response)=>{

                resolve(response)
            })
        })
    },
    // getIndivitualMainCategory:(uid)=>{
    //     return new Promise((resolve,reject)=>{
    //     console.log('helo');
    //   console.log(uid)
    //        mainCategory.findOne({_id:uid})
    //        .then((response)=>{
    //         console.log('response',response)
    //         resolve(response)
    //        }).catch((err)=>{
    //         console.log(err.message)
    //        })
    //     })
    // },
    addSubCategory:(data)=>{
        return new Promise((resolve,reject)=>{

            
            const cat=new subCategory({
                name:data.name,
                parentCategory:data.parentCategory
            })
            cat.save().then((response)=>{
                resolve(response)
            })

            
        })
    },
    getSubcategories:(req,res)=>{

        return new Promise((resolve,reject)=>{

            subCategory.find().then((response)=>{

                resolve(response)
            })
        })
        
    }

    

}
