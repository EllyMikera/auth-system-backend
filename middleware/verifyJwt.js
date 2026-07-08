const JWT = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization //get authorization header
    if(!authHeader || !authHeader.startsWith("Bearer ")) { //check if the token starts with the string "Bearer"
        return(
            res.status(403).json({
                message: 'invalid token'
            })
        )
    }
    const token = authHeader.split(" ")[1] //convert the authorzation header to an array using the split() method and access the 2nd item (the token)
    if(!token) { //check if the token exist
        return(
            res.status(404).json({
                message: 'Token not found'
            })
        )
    }
    JWT.verify(token, process.env.SECRET_TOKEN, (error, decoded) => { //verify the token and extract the payload
        if(error) {
            return(
                res.status(401).json({
                    message: 'Unauthorized access'
                })
            )
        }
        req.user = decoded; //populate the request object with the payload
        next()
    })
}

module.exports = verifyJWT