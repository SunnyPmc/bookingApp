const express = require('express')
const router = express.Router()
const {createRoom, updateRoom, deleteRoom, getRoom, getAllRoom} = require('../controllers/roomController')
const {verifyAdmin} = require('../utils/verifyToken')

router.post('/:hotelid',verifyAdmin, createRoom)


router.put('/:id',verifyAdmin, updateRoom)


router.delete('/:id/:hotelid',verifyAdmin, deleteRoom)


router.get('/:id', getRoom)


router.get('/', getAllRoom)



module.exports = router