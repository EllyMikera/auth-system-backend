const express = require('express')
const dotenv  = require('dotenv')
const cors = require('cors')
const loginUser = require('./routes/handleRoutes')
const verifyJWT = require('./middleware/verifyJwt')
const loadUserProfile = require('./routes/handleRoutes')
const createUser = require('./routes/handleRoutes')

dotenv.config();
const PORT = process.env.PORT

const server = express();

server.use(express.json())
server.use(cors({
    origin: process.env.CLIENT_URL
}))

server.use('/', loginUser)
server.use('/', loadUserProfile)
server.use('/', createUser)


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})