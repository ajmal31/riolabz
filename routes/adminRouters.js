var express = require('express');
var router = express.Router();
const adminController=require('../Controller/Admin/adminController');
const userController = require('../Controller/User/userController');
const superAdminAuthentication = require('../Middleware/superAdminAuthentication');
const superOradmin=require('../Middleware/superAdminAndAdmin');
const admin = require('../Schema/Admin/admin');


router.get('/',adminController.home)

//GET ADMIN LOGIN
router.get('/login',adminController.getLogin)

router.post('/login',adminController.postLogin)

// //GET SUPER ADMIN LOGIN
router.get('/superAdminLogin',adminController.getSuperAdminLogin)
//super admin login
router.post('/superPostLogin',adminController.superpostLogin)

router.get('/adminLogout',adminController.adminLogout)

router.use(superOradmin.twotypeAuth)


//GET ADD CATEGORY
router.get('/getAddCategory',adminController.getAddCategory)

//CREATE CATEGORY
router.post('/createCategory',adminController.createCategory)

//GET CATEGORY LIST
router.get('/getMainCategory',adminController.getMainCategory)

//POST ADD SUBCATEGORY
router.post('/addSubcategory',adminController.postAddSubCategory)

//GET ADD SUBCATEGORY
router.get('/getAddSubcategory',adminController.getAddSubCategory)



//MIDDLE WARE//CEHCK SUPER ADMIN LOGGED OR NOT 
router.use(superAdminAuthentication.superAdminAuth)

//  LIST ALL USERS
router.get('/listUsers',adminController.listUsers)

//MAKE ADMIN BY SUPER ADMIN
router.get('/makeAdmin/:id',adminController.makeAdmin)

//GET EDIT USER
router.get('/editUser/:id',adminController.editUser)

//SUPER ADMIN LOGOUT
router.get('/superAdminLogout',adminController.superAdminLogout)

router.get('/removeAdmin/:id',adminController.removeAdmin)

module.exports = router;
