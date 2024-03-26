const ErrorResponses = require("../error/errorResponses");

const errorHandler = (err, req, res, next) => {
    if (err instanceof ErrorResponses) {
        console.log(err)
        return res.status(err.statusCode).json({ message: err.message })
    }




    // generic error
    console.log("Unexpected Error: ", err);
    return res.status(500).json({ message: "Something went wrong!" });
}
module.exports = errorHandler 