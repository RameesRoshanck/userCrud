const express = require('express')
const { addUser, singleUser, updateUser, deleteUser, getUser } = require('../Controllers.js/userControllers')
const router=express.Router()


router.get('/users',getUser)
router.post('/users',addUser)
router.get('/users:id',singleUser)
router.put('/users:id',updateUser)
router.delete('/users:id',deleteUser)



module.exports=router