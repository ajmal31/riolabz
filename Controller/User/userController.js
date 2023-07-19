const adminHelper = require('../../Helpers/Admin/adminHelper')
const userHelper=require('../../Helpers/User/userHelper')

module.exports={
     

    getLogin:(req,res)=>{
        
           res.render('user/login')
        
    },
    showProfile:(req,res)=>{
      
      let user=req.session.userDetails
     
        res.render('user/showProfile',{user})
    },
    getLogout:(req,res)=>{
        req.session.userDetails=false
        res.render('user/login')
     
   },
    getSignup:(req,res)=>{
        
           res.render('user/signup')
        
    },
    
    signup:(req,res)=>{

        const data=req.body
        userHelper.signup(data).then((response)=>{
         
           res.redirect('/login')
        })
    },
    login:(req,res)=>{
        
        const data=req.body
       
        userHelper.login(data).then((response)=>{
          
          if(response.status)
          {
            req.session.userDetails=response.response
            res.redirect('/',)
          }else
          {
            res.redirect('/login')
          }  

            
        })
    },
    getEditUser:(req,res)=>{
        
        // let user=req.session.userDetails
        console.log('reached');
        res.render('user/editProfile')
    },
    editUser:(req,res)=>{

       
        const data=req.body
       
        userHelper.editUser(data).then((response)=>{
         res.redirect('/')
           
        })
    },
    userProfile:(req,res)=>{

        const uid=req.params.id
        userHelper.userProfile(id).then((response)=>{

        })
    },
    categories:(req,res)=>{
        adminHelper.getCategories().then((response)=>{
             user=req.session.userDetails
             
            res.render('user/categories',{response,user})

        })
       
    },
    showSubCategories:(req,res)=>{
    console.log('helo contorller-1');
            const mainCatName=req.params.name
  console.log('helo coontroller');
            userHelper.showSubCategories(mainCatName).then((response)=>{

                res.render('user/subCategories',{response})
            })    
    }
   
}