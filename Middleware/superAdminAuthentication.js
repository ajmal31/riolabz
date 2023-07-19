module.exports={

    superAdminAuth:(req,res,next)=>{

      if(req.session.superAdmin)
      {
          next();
      }
      else
      {
          
          res.redirect('/admin//superAdminLogin')
      }
  }
}