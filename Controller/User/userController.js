const adminHelper = require('../../Helpers/Admin/adminHelper')
const userHelper=require('../../Helpers/User/userHelper')

module.exports={
     

    getLogin:(req,res)=>{
        return new Promise((resolve,reject)=>{
           res.render('user/login')
        })
    },
    signup:(req,res)=>{

        const data=req.body
        userHelper.signup(data).then((response)=>{

        })
    },
    login:(req,res)=>{
        
        const data=req.body
        userHelper.login(data).then((response)=>{

            
        })
    },
    editUser:(req,res)=>{

        const data=req.body
        const uid=req.params.id

        userHelper.editUser(data,uid).then((response)=>{

           
        })
    },
    userProfile:(req,res)=>{

        const uid=req.params.id
        userHelper.userProfile(id).then((response)=>{

        })
    },
    categories:(req,res)=>{
        adminHelper.getCategories().then((response)=>{

            res.render('user/categories',{response})

        })
       
    },
    showSubCategories:(req,res)=>{
    console.log('helo contorller-1');
            const mainCatName=req.params.name
  console.log('helo coontroller');
            userHelper.showSubCategories(mainCatName).then((response)=>{

                res.render('user/response',{response})
            })    
    }
   
}