const superAdmin=require('../../Schema/Admin/superAdminSchema')
const User=require('../../Schema/User/userSchema')
const admin=require('../../Schema/Admin/admin')
const bcrypt=require('bcrypt') 
const mainCategory = require('../../Schema/Admin/mainCategory')
const { default: mongoose } = require('mongoose')
const subCategory = require('../../Schema/Admin/subCategory')

module.exports={

    superAdminLogin:(data)=>{



        return Promise((resolve,reject)=>{

                  superAdmin.findOne({email:data.email,password:data.password}).then((response)=>{

                    if(response)
                    {
                        console.log('login success super admin');
                        resolve(response)
                    }else
                    {
                        console.log('login failed');
                    }
                  })

        })
        
    },
    listUsers:()=>{
        return new Promise((Resolve,reject)=>{

            User.find().then((response)=>{

                if(response)
                {
                    console.log('got all users',response);
                }else
                {
                    console.log("didn'tget users list");
                }
            })
        })
    },
    makeAdmin:(uid)=>{
        return new Promise((resolve,reject)=>{

            User.aggregate([
                { $match: { _id: uid } }, // Match the user by their ID
                {
                  $project: {
                    _id: 0, // Exclude the "_id" field from the projection
                    userId: '$_id',
                    userName: '$userName',
                    email: '$email',
                    password:'$password'
                    // Add any other relevant fields
                  }
                },
                { $out: admin } // Save the aggregated data to the "admin" collection
              ]).then((response)=>{

                if(response)
                {
                    console.log('user will be a admin')
                }else{
                    console.log('some error found when super admin make to admin from users')
                }

               
              })
        })
    },
    removeAdmin:(id)=>{
        return new Promise((resolve,reject)=>{
           
           admin.deleteOne({_id:id}).then((response)=>{
            if(response)
            {
                console.log('admin delted successfully');
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
