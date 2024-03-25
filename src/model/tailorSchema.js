const mongoose = require("mongoose");

const tailor = new mongoose.Schema({
    user_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    business: {
        business_name: {
            type: String
        },
        location: {
            type: String
        },
        phone_number: {
            type: String
        },
        email: {
            type: String
        },
        category: {
            type: String
        },
        services: {
            type: String
        }, 
        establish_date: {
            type: String
        },
        image: {
            type: String
        }
    }


})

const TailorData = new mongoose.model("tailorData", tailor)
module.exports = TailorData