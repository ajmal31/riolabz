var express = require('express');
var router = express.Router();
const adminController=require('../Controller/Admin/adminController')


router.get('/',adminController.home)
//ADMIN LOGIN
router.post('/login',adminController.superpostLogin)

//  LIST ALL USERS
router.get('/listUsers',adminController.listUsers)

//MAKE ADMIN BY SUPER ADMIN
router.get('/makeAdmin/:id',adminController.makeAdmin)

//GET ADD CATEGORY
router.get('/getAddCategory',adminController.getAddCategory)

//CREATE CATEGORY
router.post('/createCategory',adminController.createCategory)

//GET CATEGORY LIST
router.get('/getMainCategory',adminController.getMainCategory)

//GET ADD SUBCATEGORY
// router.get('/addSubCategories/:id',adminController.getAddSubCategory)

//POST ADD SUBCATEGORY
router.post('/addSubcategory',adminController.postAddSubCategory)

//GET ADD SUBCATEGORY
router.get('/getAddSubcategory',adminController.getAddSubCategory)

module.exports = router;
