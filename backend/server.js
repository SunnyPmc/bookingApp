const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const connectDB = require('./config/db')
const authRoute = require('./routes/authRoutes')
const userRoute = require('./routes/userRoutes')
const hotelRoute = require('./routes/hotelRoutes')
const roomRoute = require('./routes/roomRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

connectDB()

const app = express()

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/hotels', hotelRoute)
app.use('/api/rooms', roomRoute)


app.use((err, req, res, next) => {
    const errorStatus= err.status || 500
    const errorMessage= err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})



app.listen(port,() => console.log(`Server running on port: ${port}`))