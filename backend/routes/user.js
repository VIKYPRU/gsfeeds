const express=require('express')
const {signup,activate,signin}=require('../controllers/auth-controllers')
// const bodyparse=require('body-parser')
const bodyParser = require('body-parser')

const router=express.Router()
router.use(bodyParser.json())
router.post('/signup',signup)
router.get('/activate/:actiavtioncode',activate)
router.post('/signin',signin)
module.exports=router