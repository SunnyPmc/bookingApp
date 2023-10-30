const express = require('express')
const router = express.Router()
const { updateUser, deleteUser, getUser, getAllUser} = require('../controllers/userController')
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

router.put('/:id',verifyUser, updateUser)


router.delete('/:id',verifyUser, deleteUser)


router.get('/:id',verifyUser, getUser)


router.get('/',verifyAdmin, getAllUser)



module.exports = router