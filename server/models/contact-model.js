
const { model, Schema, } = require('mongoose')

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    }, 
});

const Contact = new model('Contact', contactSchema);

module.exports = Contact;
