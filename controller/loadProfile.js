const pool = require('../config/connectDb')

const loadUserProfile = async (req, res) => {
    const id = req.user.id;
    try {
        const [profile] = await pool.query(
            'SELECT username, email, role FROM users WHERE id = ?',
            [id]
        )
        console.log(profile)
        res.status(200).json(profile[0])
        
    } catch (error) {
        console.log(error?.message)
        return(
            res.status(500).json({
                message: 'internal server error'
            })
        )
    }
}

module.exports = loadUserProfile