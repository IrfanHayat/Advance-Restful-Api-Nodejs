
const express = require("express")

const router = express.Router();
const checkAuth = require("../middleware/auth-file")

const userController = require("../Controller/data-model")

router.get('/getUser', checkAuth, userController.getAllUser)


router.post('/postUser', userController.postUserData)

router.patch('/updateUser/:id', userController.updateUserData)

router.delete('/deleteUser/:id', userController.deleteUserData)

module.exports = router;