var express = require('express');
var router = express.Router();
const userController=require('../Controller/User/userController')


//GET LOGIN
router.get('/login',userController.getLogin)
//USER SIGNUP
router.post('/signup',userController.signup)

//POST LOGIN
router.post('/login',userController.login)

//show user Profile
router.get('/userProfile',userController.userProfile)

//edit user profile
router.post('/editUser',userController.editUser)

//GET HOME PAGE REPERESING CATEGORIES
router.get('/',userController.categories)

router.get('/showSubcategories/:name',userController.showSubCategories)







module.exports = router;
