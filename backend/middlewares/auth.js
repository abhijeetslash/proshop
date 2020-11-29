const User = require('../modals/userModal')
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
   

    try {

        if(!bearerToken){
            return res.status(401).json({msg:'unauthorized access, no token'});
        }

        const token = bearerToken.split(' ')[1];
        
        const payload = jwt.decode(token, process.env.JWT_SECRET)

        if(!payload){
            return res.status(401).json({msg:'unauthorized access'});
        }

        const user = await User.findById(payload.id)

        if(!user){
            return res.status(401).json({msg:'unauthorized access'});
        }

        req.user = user;

        next();

    } catch (err) {
        console.log(err,'from /api/users/profile')
        res.status(500).json({msg:'server error'})
    }
    
}

module.exports = auth;