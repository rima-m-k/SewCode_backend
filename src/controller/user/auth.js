const ErrorResponses = require('../../error/errorResponses');
const USERDATA = require('../../model/userSchema')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function userLogin(req, res, next) {
    try {
        let email = req.body.email
        let password = req.body.password
        if (email && password) {
            const user = await USERDATA.findOne({ email: email });
            if (user) {
                const checkPassword = await bcrypt.compare(password, user.password);
                if (checkPassword) {
                    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
                    res.json({ token: token })
                } else {
                    throw new ErrorResponses(400, 'Invalid Password')
                }
            } else {
                throw new ErrorResponses(400, 'Invalid Email')
            }
        } else {
            throw new ErrorResponses(400, 'Invalid Email or Password')
        }
    }
    catch (error) {
        next(error)
    }
}


async function userRegister(req, res, next) {
    try {
        let user_name = req.body.user_name;
        let email = req.body.email;
        let password = req.body.password;
        let confirm_password = req.body.cpassword;

        if (!user_name || !email || !password || !confirm_password) {
            throw new ErrorResponses(400, 'Invalid Data');
        }

        let checkUser = await USERDATA.findOne({ email: email });
        if (checkUser) {
            throw new ErrorResponses(401, 'Email already in use');
        }

        if (password !== confirm_password) {
            throw new ErrorResponses(401, 'Passwords must be same');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new USERDATA({
            user_name: user_name,
            email: email,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        if (!savedUser) {
            throw new ErrorResponses(500, 'Failed to save user data');
        }

        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY);
        res.json({ token: token });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

module.exports = { userLogin,userRegister }

