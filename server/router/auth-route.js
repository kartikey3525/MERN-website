const express = require('express');
const router = express.Router()
const authPage = require('../controllers/auth-controllers'); 
const validate = require('../middlewares/validate-middleware')
const signupSchema = require('../validations/auth.validators')

router.route('/').get(authPage.home)

router.route('/register').post(validate(signupSchema), authPage.register)

router.route('/login').post(validate(signupSchema), authPage.login)
 

module.exports=router