const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/mern_admin'

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log('connection Successful')
    } catch (error) {
        console.error('connection failed')
        process.exit(0);
    }
}

module.exports = connectDb;