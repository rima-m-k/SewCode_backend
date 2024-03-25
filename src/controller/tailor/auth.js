const ErrorResponses = require('../../error/errorResponses');
const TAILORDATA = require('../../model/tailorSchema')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function tailorLogin(req, res, next) {
    try {
        let email = req.body.email
        let password = req.body.password
        if (email && password) {
            const tailor = await TAILORDATA.findOne({ email: email });
            if (tailor) {
                const checkPassword = await bcrypt.compare(password, user.password);
                if (checkPassword) {
                    const token = jwt.sign({ id: tailor._id }, process.env.SECRET_KEY)
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
async function registerBusiness(req, res, next) {
    try {

        //process image ,send otp, dont save as new just update taylordate
        const business_name = req.body.business_name
        const location = req.body.location
        const phone_number = req.body.phone_number
        const email = req.body.email
        const category = req.body.category
        const services = req.body.services
        const establish_date = req.body.establish_date
        const image = req.files.image

        if (!business_name || !location || !phone_number || !email || !category || !services || !establish_date ) {
            throw new ErrorResponses(400, 'Invalid Data');
        }
        /*
                const checkTailor = await TAILORDATA.findOne({
                    $or: [{ email: email }, { phone_number: phone_number }]
                });
                if (checkTailor) {
                    throw new ErrorResponses(401, 'Email or phone number already in use');
                }
        
        */
        //send otp

        const business = new TAILORDATA({
            business_name: business_name,
            location: location,
            phone_number: phone_number,
            email: email,
            category: category,
            services: services,
            establish_date: establish_date,
            image: image,
        })
        const savedBusiness = await business.save();

        if (!savedBusiness) {
            throw new ErrorResponses(500, 'Failed to save business data');
        }
        const token = jwt.sign({ id: savedBusiness._id }, process.env.SECRET_KEY);
        res.json({ token: token });
    }
    catch (error) {
        next(error);
    }

}


async function registerTailor(req, res, next) {
    try {
        let user_name = req.body.user_name;
        let email = req.body.email;
        let password = req.body.password;
        let confirm_password = req.body.cpassword;

        if (!user_name || !email || !password || !confirm_password) {
            throw new ErrorResponses(400, 'Invalid Data');
        }

        let checkUser = await TAILORDATA.findOne({ email: email });
        if (checkUser) {
            throw new ErrorResponses(401, 'Email already in use');
        }

        if (password !== confirm_password) {
            throw new ErrorResponses(401, 'Passwords must be same');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const tailor = new TAILORDATA({
            user_name: user_name,
            email: email,
            password: hashedPassword,
        });
        const newTailor = await tailor.save();
        if (!newTailor) {
            throw new ErrorResponses(500, 'Failed to save data');
        }

        const token = jwt.sign({ id: newTailor._id }, process.env.SECRET_KEY);
        res.json({ token: token });
    }
    catch (error) {
        next(error);
    }

}


module.exports = { tailorLogin, registerBusiness, registerTailor }
