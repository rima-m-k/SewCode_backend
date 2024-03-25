const mongoose = require("mongoose");

const delivery = new mongoose.Schema({

    user_name: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    profilePhoto: String,
    //orders:
    //favourites:

})

const DeliveryData = new mongoose.model("deliveryData", delivery)
module.exports = DeliveryData