const express = require('express');
const User = require('../modals/userModal');
const {generateToken} = require('../utils/generateToken');
const auth = require('../middlewares/auth');

const Router = express.Router();

// get the user for authorization
Router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user);

    } catch (err) {
        res.status(500).json({msg:'server error'})
    }
})

// Auth the user and get a token
Router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({email})

        if(!user){
            res.status(404).json({msg:'invalid credentials'})
        }

        if(user && user.matchPassword(password)){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }

    }catch(err) {
        console.log(err,'from /api/users/login')
        res.status(500).json({msg:'server error'})
    }
})

module.exports = Router;