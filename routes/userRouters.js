var express = require('express');
var router = express.Router();
const userController=require('../Controller/User/userController')
const userAuth=require('../Middleware/userAuthenticaton')


//GET LOGIN
router.get('/login',userController.getLogin)

router.get('/showProfile/:id',userAuth.userAuthentication ,userController.showProfile)

//GET LOGOUT
router.get('/logout',userController.getLogout)

//GET SIGNUP  
router.get('/signup',userController.getSignup)
  
//USER SIGNUP
router.post('/signup',userController.signup)

//POST LOGIN
router.post('/login',userController.login)

//show user Profile
router.get('/userProfile',userController.userProfile)

//edit user profile
router.post('/editUser/:id',userAuth.userAuthentication, userController.editUser)

router.get('/editUserProfile',userController.getEditUser)

//GET HOME PAGE REPERESING CATEGORIES
router.get('/',userController.categories)

router.get('/showSubcategories/:name',userController.showSubCategories)







module.exports = router;
