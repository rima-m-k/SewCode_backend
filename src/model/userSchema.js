const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    
    user_name: {
        type:String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {    
        type:String
    },
    gender:{
        type:String
    },
    address:[{
        address_name:{  
            type:String
        },contact_number:{
            type:String
        },flat:{
            type:String
        },area:{
            type:String
        },landmark:{
            type:String
        },pincode:{
            type:Number
        }
    }],
    profilePhoto:String,
    //orders:
    //favourites:
    
})

const UserData = new mongoose.model("userData", userData)
module.exports = UserData