const ErrorResponses = require('../../error/errorResponses');
const TAILORDATA = require('../../model/tailorSchema')


const fetchTailors = async (req, res, next) => {
    try {
        const allTailors = await TAILORDATA.find({}, { business })
        res.json(allTailors)
    } catch (error) {
        next(error)
    }
}

module.exports = { fetchTailors }