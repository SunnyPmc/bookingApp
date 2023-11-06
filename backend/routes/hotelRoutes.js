const express = require('express')
const router = express.Router()
const {createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType, getHotelRooms} = require('../controllers/hotelController')
const {verifyAdmin} = require('../utils/verifyToken')

router.post('/',verifyAdmin, createHotel)


router.put('/:id',verifyAdmin, updateHotel)


router.delete('/:id',verifyAdmin, deleteHotel)


router.get('/find/:id', getHotel)


router.get('/', getAllHotel)

router.get('/countByCity', countByCity)

router.get('/countByType', countByType)

router.get('/room/:id', getHotelRooms )



module.exports = router