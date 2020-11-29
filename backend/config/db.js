const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log('Database connected...')
    } catch (err) {
        console.log(`Error:${err.message}`)
    }
}

module.exports = dbConnect;