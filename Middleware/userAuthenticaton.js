module.exports={

    userAuthentication:(req,res,next)=>{

      if(req.session.userDetails)
      {
          next();
      }
      else
      {
          
          res.redirect('/login')
      }
  }
}