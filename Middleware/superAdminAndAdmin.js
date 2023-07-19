module.exports={

    twotypeAuth:(req,res,next)=>{

      if(req.session.superAdmin||req.session.Admin)
      {
          next();
      }
      else
      {  
          res.redirect('/admin/superAdminLogin')
      }
  }
}   