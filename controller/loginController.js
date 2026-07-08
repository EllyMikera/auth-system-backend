const pool = require('../config/connectDb')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        if(!email || !password) {
            console.log('Input fields cannot be empty')
            return(
                res.status(400).json({
                    message: 'Input fields cannot be empty'
                })
            )
        }
        const [users] = await pool.query(
            'SELECT id, username, email, password, role FROM users WHERE email = ?',
            [email]
        )
        if(users.length === 0) {
            console.log('Account does not exist')
            return(
                res.status(404).json({
                    message: 'Account does not exist, please register'
                })
            )
        }

        const isValid = await bcrypt.compare(password, users[0].password)
        if(!isValid) {
            console.log('Invalid email or password')
            return(
                res.status(400).json({
                    message: 'Invalid email or password, please try again'
                })
            )
        }
        const token = JWT.sign(
            {
                id: users[0].id,
                username: users[0].username,
                email: users[0].email,
                role: users[0].role
            }, process.env.SECRET_TOKEN,
            {
                expiresIn: process.env.TOKEN_EXPIRY
            }
        )
        console.log('login successful')
        return res.status(200).json({
            token: token,
            message: 'login successful'
        })

    } catch (error) {
        console.log(error?.message)
        return(
            res.status(500).json({
                message: 'Internal server error'
            })
        )
    }
}

module.exports = loginUser