const adminHelper=require('../../Helpers/Admin/adminHelper')


module.exports={

    superpostLogin:(req,res)=>{

        const data=req.body
        adminHelper.superAdminLogin(data).then((response)=>{
          

        })
    },
    listUsers:(req,res)=>{

        adminHelper.listUsers().then((Response)=>{


        })
    },
    makeAdmin:(req,res)=>{

        const uid=req.params.id
        adminHelper.makeAdmin(uid).then((response)=>{


        })
        
    },
    removeAdmin:(req,res)=>{

        const id=req.params.id
        adminHelper.removeAdmin(id).then((response)=>{

        })
    },
    home:(req,res)=>{
    console.log('helo admin')
        res.render('admin/home')
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
    }


}