
const Contact = require('../models/contact-model')
 
const contact = async (req, res) => {
    try {
        console.log('contact Request Body:', req.body);

        const response = req.body;
        await Contact.create(response);

      return  res.status(201).json({msg :'message send successfully'});

    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Message not sent');
    }
};

module.exports = contact ;
