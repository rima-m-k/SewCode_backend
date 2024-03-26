const business = [
    {
        "_id":"01",
        "business_name": "ABC Tailors",
        "location": "Kalamaserri, Kochi",
        "phone_number": "555-123-4567",
        "email": "info@abctailors.com",
        "category": "Male",
        "service": ['Shirt', 'Pant'],
        "establish_date": "2005-07-12",
        "image": "https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "_id":"02",
        "business_name": "XYZ Sewists",
        "location": "Nadakkavu, Kozhikode",
        "phone_number": "555-987-6543",
        "email": "hello@xyzsew.com",
        "category": "Felmale",
        "service": ['Churidar', 'Blouse', 'Reshaping', 'Top'],
        "establish_date": "2010-03-25",
        "image": "https://plus.unsplash.com/premium_photo-1661757163925-f4a75be1543f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "_id":"03",
        "business_name": "House of RMK",
        "location": "Elathur, Kozhikode",
        "phone_number": "555-456-7890",
        "email": "contact@rmk.com",
        "category": "Both",
        "service": ['Churidar', 'Blouse', 'Reshaping', 'Pant', 'Shirt'],
        "establish_date": "1998-11-30",
        "image": "https://images.unsplash.com/photo-1618587194716-40490bdba417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "_id":"04",
        "business_name": "Sunrise Tailoring",
        "location": "Kalamaserri, Kochi",
        "phone_number": "555-234-5678",
        "email": "info@sunrisetailoring.com",
        "category": "Male",
        "service": ['Pant', 'Shirt'],
        "establish_date": "2015-09-08",
        "image": "https://plus.unsplash.com/premium_photo-1683120859207-394049a3b46c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "_id":"05",
        "business_name": "GreenThumb Tailoring",
        "location": "SM Street, Kozhikode",
        "phone_number": "555-345-6789",
        "email": "contact@greenthumb.com",
        "category": "Female",
        "service": ['Churidar', 'Blouse', 'Reshaping'],
        "establish_date": "2002-06-17",
        "image": "https://plus.unsplash.com/premium_photo-1681823892551-63785b1700f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


async function showBiz(req, res, next) {
    try {
        res.json({ data: business })
        
    } catch (error) {
        next(error)
    }
}

async function getSingleBusiness(req, res, next) {
    try {
        const { _id } = req.params;
        
        // Find the business in the array
        const singleBusiness = business.find(biz => biz._id === _id);

        // Check if the business exists
        if (!singleBusiness) {
            return res.status(404).json({ error: "Business not found" });
        }

        // Send the single business data
        res.json({ data: singleBusiness });
        
    } catch (error) {
        next(error);
    }
}

module.exports = {showBiz,getSingleBusiness}