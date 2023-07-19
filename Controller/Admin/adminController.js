const adminHelper=require('../../Helpers/Admin/adminHelper')


module.exports={

    superpostLogin:(req,res)=>{
        console.log('heloajmal')
   
        const data=req.body
        console.log(data)
        adminHelper.superAdminLogin(data).then((response)=>{
            if(response.status==true)
            {
                req.session.superAdmin=true
                req.session.Admin=false
                res.redirect('/admin')
            }else
            {
               res.redirect('/admin/superAdminLogin')
            }
        })

       
    },
    listUsers:(req,res)=>{

        adminHelper.listUsers().then((Response)=>{

            
            res.render('admin/listUsers',{Response})


        })
    },
    makeAdmin:(req,res)=>{

        const uid=req.params.id
        adminHelper.makeAdmin(uid).then((response)=>{
            if(response.status)
            {
                res.redirect('/admin')
            }


        })
        
    },
    removeAdmin:(req,res)=>{

        const id=req.params.id
        console.log('done ');
        adminHelper.removeAdmin(id).then((response)=>{
          if(response.status)
          {
            res.redirect('/admin')
          }else
          {
            console.log('admin not removed')
          }
        })
    },
    home:(req,res)=>{
    console.log('helo admin')
        superAdmin=req.session.superAdmin
        admin=req.session.Admin
        res.render('admin/home',{superAdmin,admin})
    },

    /////
    getSuperAdminLogin:(req,res)=>{
        console.log('helo super ')
      res.render('superAdmin/login')
    },
    getLogin:(req,res)=>{
        res.render('admin/login')
    },
    postLogin:(req,res)=>{

        const data=req.body
       
        adminHelper.postLogin(data).then((response)=>{
          
          if(response.status)
          {
            req.session.superAdmin=false
            req.session.Admin=true 
            res.redirect('/admin')
          }else
          {
            res.redirect('/admin/login')
          }  

            
        })
    },
    getAddCategory:(req,res)=>{

        res.render('admin/add_category')
    },
    createCategory:(req,res)=>{

        const data=req.body
        adminHelper.createCategory(data).then((response)=>{
        
            res.redirect('/admin/getMainCategory')

        })
    },
    getMainCategory:(req,res)=>{
        

        adminHelper.getCategories().then((Response)=>{
   
            res.render('admin/listCategories',{Response})
        
        })
    },
    getAddSubCategory:(req,res)=>{

    console.log('sabuuuuu');
        
       adminHelper.getCategories().then((response1)=>{

        adminHelper.getSubcategories().then((response2)=>{

        console.log('done');
        
        res.render('admin/add_subcategory',{response1,response2})
    })
       })

       
    },
    postAddSubCategory:(req,res)=>{

        const data=req.body      
       
        adminHelper.addSubCategory(data).then((response)=>{

            res.redirect('/admin/getMainCategory')
            
        })
    },
    superAdminLogout:(req,res)=>{
        console.log('super admin logout')
        req.session.superAdmin=false
        
        res.redirect('/admin/login')
    }


}