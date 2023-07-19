const mongoose = require('mongoose')
const User = require('../../Schema/User/userSchema')
const bcrypt = require('bcrypt');
const mainCategory = require('../../Schema/Admin/mainCategory');
const subCategory = require('../../Schema/Admin/subCategory');
const saltRounds = 10;
module.exports = {

    signup: (data) => {
        return new Promise((resolve, reject) => {

            let hashedPassword;
            bcrypt.hash(data.password, saltRounds, (err, hash) => {

                if (err) {
                    console.log('error found when creating hash password');

                }
                console.log('hrffe',hash)
                hashedPassword = hash;
                const user = new User({

                    userName: data.userName,
                    email: data.email,
                    password: hashedPassword,
                    position:'user'
    
    
                })
                user.save().then((response) => {

                    if (response) {
                        

                        resolve(data)
                    } else {
                        console.log('user signup failed');
                    }
                }).catch((error) => {
                    console.log('error founded1!!!', error.message)
                })
    
            })

            });



           

            
    },
    login: (data) => {
        return new Promise((resolve, reject) => {

            let password;

            User.findOne({ email: data.email }).then((response) => {

                if (response) {
                    console.log('email done');

                    bcrypt.compare(data.password, response.password, function (err, result) {

                        if (result) {
                        
                            resolve({status:true,response});
                        } else if (err) {

                            console.log('authentiaction failed error found')
                        }

                    });


                }else
                {
                    console.log('user not found')
                    resolve({status:false})
                }


            })
        })
    },
    userProfile: (uid) => {
        return new Promise((Resolve, reject) => {

            User.findOne({ _id: uid }).then((response) => {
                if (response) {
                    console.log('succesfully got user profile');
                } else {
                    console.log("didn'tget the use Profile")
                }
            })
        })
    },
    
   

    editUser: (data) => {
        return new Promise((resolve, reject) => {
            console.log('updating data',data)
            User.updateOne({ _id: data._id },{ $set:{userName: data.userName, email: data.email } }).then((response) => {

                if (response) {
                  
                    resolve({status:true})
                } else {
                    console.log('user not updated some issues existing')
                }
            })
        })
    },
    showSubCategories: (parentCatName) => {
        return new Promise((resolve, reject) => {



            subCategory.find({ parentCategory: parentCatName }).then((response) => {


                console.log(response)
                resolve(response)
            })


        })
    }





}
