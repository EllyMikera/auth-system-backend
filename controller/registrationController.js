const pool = require('../config/connectDb')
const  bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    const {username, email, password, confirmation} = req.body
    try {
        if(!username || !email || !password || !confirmation) {
            return(
                res.status(400).json({
                    message: 'input fields cannot be empty'
                })
            )
        }
        const [existingUser] = await pool.query(
            'SELECT id, username, email FROM users WHERE email = ?',
            [email]
        )
        if(existingUser.length > 0) {
            return(
                res.status(409).json({
                    message: 'This account already exists, Log in'
                })
            )
        }

        if(password !== confirmation) {
            return(
                res.status(400).json({
                    message: 'Passwords do not match'
                })
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const [users] = await pool.query(
            'INSERT INTO users(username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        )

        res.status(201).json({
            message: 'Account created successfully'
        })

    } catch (error) {
        console.log(error?.message)
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}

module.exports = {
    createUser
}