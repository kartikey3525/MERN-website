const User = require('../models/user-models');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to MERN site home Page.');
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

const register = async (req, res) => {
    try {
        console.log('Register Request Body:', req.body);
 
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(409).json({ msg: 'User already exists' });
        }

        const userCreated = new User({ username, email, phone, password });

        await userCreated.save();

        const token = userCreated.generateToken();

        res.status(201).json({ data: userCreated, token: token });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};




const login = async (req, res) => {
    try {
        console.log('Login Request Body:', req.body);

        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            console.log("User does not exist");
            return res.status(400).json({ msg: 'Invalid email or password' });
        }
 
        // Verify the password
        const isPassValid = await bcrypt.compare(password, userExist.password);

        if (isPassValid) {
            const token = userExist.generateToken();
            res.status(200).json({ data: userExist, token: token });
            console.log("Login successful");
        } else {
            console.log("Password is invalid");
            return res.status(401).json({ msg: 'Invalid email or password' });
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};



module.exports = { home, register, login };
